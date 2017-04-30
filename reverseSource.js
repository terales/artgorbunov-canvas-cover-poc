!function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c)
                    return c(s, !0);
                if (o)
                    return o(s, !0);
                var l = new Error("Cannot find module '" + s + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++)
        i(r[s]);
    return i
}({
    1: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = e("imagesLoaded")
          , s = ["images/cover/face/001-e6673a5688.png", "images/cover/face/002-efdea8fec1.png", "images/cover/face/003-f7feca0173.png", "images/cover/face/004-aac5830c6e.png", "images/cover/face/005-60fb83152a.png", "images/cover/face/006-15dc30a41d.png", "images/cover/face/007-f36a30cbe6.png", "images/cover/face/008-142ccdf40c.png", "images/cover/face/009-5521e94702.png", "images/cover/face/010-8dce5b0ec7.png", "images/cover/face/011-5997d75c9f.png", "images/cover/face/012-4ed4fa6a29.png", "images/cover/face/013-769b7b3ff8.png", "images/cover/face/014-f2ea3e06d0.png", "images/cover/face/015-62bced6380.png", "images/cover/face/016-f828b9b02e.png", "images/cover/face/017-5b0f7cd6b4.png", "images/cover/face/018-5c2e449933.png", "images/cover/face/019-65bc7bebe7.png", "images/cover/face/020-2e8462570a.png", "images/cover/face/021-a420d336d0.png", "images/cover/face/022-b6ce0eff93.png", "images/cover/face/023-1530ad602b.png", "images/cover/face/024-0647b83534.png", "images/cover/face/025-08a62c2f50.png", "images/cover/face/026-571a2403f1.png", "images/cover/face/027-940a8a8b85.png", "images/cover/face/028-e6d74596dc.png", "images/cover/face/029-7daf415f2c.png", "images/cover/face/030-4698081479.png", "images/cover/face/031-2c0d2f86b6.png", "images/cover/face/032-1a69cfe438.png", "images/cover/face/033-fb2e5a9c17.png", "images/cover/face/034-983cd12e19.png", "images/cover/face/035-11175d4bd9.png", "images/cover/face/036-d218c44f90.png", "images/cover/face/037-115960d92f.png", "images/cover/face/038-eb7c588111.png", "images/cover/face/039-074c6bb335.png", "images/cover/face/040-1166d44a58.png", "images/cover/face/041-1931620215.png", "images/cover/face/042-4fc17bb3b4.png", "images/cover/face/043-1fed148274.png", "images/cover/face/044-049be78536.png", "images/cover/face/045-bcc56816a4.png", "images/cover/face/046-c7d77c7f1c.png", "images/cover/face/047-c888149cc4.png", "images/cover/face/048-bfd4058484.png", "images/cover/face/049-e3d9049958.png", "images/cover/face/050-5dfd7ec275.png", "images/cover/face/051-528db74688.png", "images/cover/face/052-6ab64f7fb9.png", "images/cover/face/053-618aed8949.png", "images/cover/face/054-37a4fdb6e5.png", "images/cover/face/055-5ae7ee1217.png", "images/cover/face/056-e32129181c.png", "images/cover/face/057-8f7cbed319.png", "images/cover/face/058-cc53027c06.png", "images/cover/face/059-864f383984.png", "images/cover/face/060-3fcd4187f2.png", "images/cover/face/061-e4401a9428.png", "images/cover/face/062-8992bff32f.png", "images/cover/face/063-13ca4d84fc.png", "images/cover/face/064-dcf1734fef.png", "images/cover/face/065-708b4bfecd.png", "images/cover/face/066-a59185e745.png", "images/cover/face/067-55da5fee38.png", "images/cover/face/068-cb6f083b33.png", "images/cover/face/069-6337c6c01f.png", "images/cover/face/070-b21c5cd2d8.png", "images/cover/face/071-dd7b8deab9.png", "images/cover/face/072-58566615bf.png", "images/cover/face/073-5965e0463e.png", "images/cover/face/074-5c6bccd14e.png", "images/cover/face/075-b55eca0e1a.png", "images/cover/face/076-3c3f1839ff.png", "images/cover/face/077-5288be48c2.png", "images/cover/face/078-835a2c4b04.png", "images/cover/face/079-5215a2f28e.png", "images/cover/face/080-366498622c.png", "images/cover/face/081-729075bc2d.png", "images/cover/face/082-f9ad682e88.png", "images/cover/face/083-51f77453e2.png", "images/cover/face/084-007d46110c.png", "images/cover/face/085-0640fb5e8e.png", "images/cover/face/086-9c62da88f8.png", "images/cover/face/087-6e5e3289b8.png", "images/cover/face/088-33649f7353.png", "images/cover/face/089-e0e5014fd8.png", "images/cover/face/090-429c4257c9.png", "images/cover/face/091-d92c3ac1de.png", "images/cover/face/092-a7af522243.png", "images/cover/face/093-2005b6fde9.png", "images/cover/face/094-82f72630cd.png", "images/cover/face/095-2582710eee.png", "images/cover/face/096-41af50e276.png", "images/cover/face/097-b7b796d967.png", "images/cover/face/098-a6897fee99.png", "images/cover/face/099-2c19a5c151.png", "images/cover/face/100-2c19a5c151.png"]
          , a = "is__active"
          , c = .31
          , l = 4
          , u = 3e3
          , d = window.performance || Date
          , h = function() {
            function e(t) {
                r(this, e),
                this.$el = t,
                this.$currentFrame = $(),
                this.frames = s,
                this.resolution = l,
                this.length = this.frames.length / this.resolution,
                this._prepareFrames(),
                this._setListeners()
            }
            return i(e, [{
                key: "_setListeners",
                value: function() {
                    var e = this;
                    $(document).on("coverUpdate", function(t, n) {
                        e._draw(n / c)
                    }),
                    $(document).on("coverImagesReady", function() {
                        var t = d.now() - e.loadingStartTime;
                        e.resolution > 1 && t < u && e._loadMoreFrames()
                    })
                }
            }, {
                key: "_prepareFrames",
                value: function() {
                    this.loadingStartTime = d.now(),
                    this.$frames = this._createFrames(),
                    this.$frames.appendTo(this.$el)
                }
            }, {
                key: "_createFrames",
                value: function() {
                    for (var e = [], t = 0; t < this.length; t++) {
                        var n = t * this.resolution + "";
                        e.push($('\n          <img src="' + this.frames[n] + '" class="frame" />\n        ')[0])
                    }
                    return $(e)
                }
            }, {
                key: "_loadMoreFrames",
                value: function() {
                    var e = this;
                    this.resolution /= 2,
                    this.length *= 2;
                    var t = $("<div></div>")
                      , n = this._createFrames(this.resolution);
                    n.appendTo(t),
                    o(n, function() {
                        e._prepareFrames(),
                        $(document).trigger("coverImagesReady")
                    })
                }
            }, {
                key: "_draw",
                value: function(e) {
                    e < 0 && (e = 0),
                    e > 1 && (e = 1);
                    var t = e * (this.length - 1) | 0;
                    this.currentFrame !== t && (this.currentFrame = t,
                    this.$currentFrame.removeClass(a),
                    this.$currentFrame = this.$frames.eq(this.currentFrame),
                    this.$currentFrame.addClass(a))
                }
            }]),
            e
        }();
        /Bin\/Previews$/.test(navigator.userAgent) || new h($(".js__frames"))
    }
    , {
        imagesLoaded: 108
    }],
    2: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = e("throttle")
          , c = e("_base/base")
          , l = "is__proper"
          , u = "is__hovered"
          , d = 4
          , h = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            s(t, [{
                key: "postInit",
                value: function() {
                    var e = this;
                    this.triggers = [],
                    this.isProper = this.$el.hasClass(l),
                    this.$spread.on("spreadInSight", function() {
                        $(window).on("scroll.linksgap", a(10, e.draw.bind(e)))
                    }),
                    this.$spread.on("spreadOutOfSight", function() {
                        $(window).off("scroll.linksgap")
                    }),
                    this.$spread.on("spreadMoveTriggers", function(t, n) {
                        e.moveTriggersBy(n.diff)
                    })
                }
            }, {
                key: "postRender",
                value: function() {
                    this.triggers = [],
                    this.spreadOffset = this.$spread.offset().top,
                    this.cursorOffset = .31 * this.spread._book.viewHeight;
                    var e = this.$el.offset().top - this.spreadOffset
                      , t = this.$el.height()
                      , n = t / d
                      , r = n / 5;
                    if (this.isProper)
                        this.triggers.push([e, e + t]);
                    else
                        for (var i = 0; i < d; i++) {
                            var o = e + i * n;
                            this.triggers.push([o, o + n - r])
                        }
                    this.draw()
                }
            }, {
                key: "moveTriggersBy",
                value: function(e) {
                    this.triggers.forEach(function(t) {
                        t[0] += e,
                        t[1] += e
                    })
                }
            }, {
                key: "draw",
                value: function() {
                    for (var e = this.spread._book.lastPosition - this.spreadOffset + this.cursorOffset, t = 0; t < this.triggers.length; t++) {
                        var n = this.triggers[t];
                        if (e > n[0] && e < n[1]) {
                            this.isHovered || (this.$el.addClass(u),
                            this.isHovered = !0);
                            break
                        }
                        this.isHovered && (this.$el.removeClass(u),
                        this.isHovered = !1)
                    }
                }
            }]),
            t
        }(c);
        $(".js__linksgap").each(function() {
            new h($(this))
        })
    }
    , {
        "_base/base": 4,
        throttle: 110
    }],
    3: [function(e, t, n) {
        "use strict";
        window.__ = {
            SYMBOLS: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            generateID: function(e) {
                for (var t = "", n = 0; n < e; n++)
                    t += this.SYMBOLS.charAt(Math.floor(Math.random() * this.SYMBOLS.length));
                return t
            }
        }
    }
    , {}],
    4: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = function() {
            function e(t) {
                var n = this;
                r(this, e),
                this.preInit(),
                this.$el = t,
                this.$spread = this.$el.closest(".js__spread"),
                this.subModules = [],
                this.isMother && (this.gatherChildren(),
                this.gatherAsideChildren()),
                this.$spread.on("spreadCreated", function(e, t) {
                    n.spread = t,
                    n.onSpreadCreated(),
                    n.postInit()
                })
            }
            return i(e, [{
                key: "gatherChildren",
                value: function() {
                    var e = this;
                    this.$el.on("moduleInit", function(t, n) {
                        t.stopPropagation(),
                        e.subModules.push(n)
                    })
                }
            }, {
                key: "onSpreadCreated",
                value: function() {
                    this.isAffectingHeight ? this.spread.affectingModules.push(this) : this.isFinal ? this.spread.finalModules.push(this) : this.register()
                }
            }, {
                key: "register",
                value: function() {
                    this.$el.parent().trigger("moduleInit", this)
                }
            }, {
                key: "reset",
                value: function() {
                    this.preReset(),
                    this.subModules.forEach(function(e) {
                        e.reset()
                    }),
                    this.postReset()
                }
            }, {
                key: "calculate",
                value: function() {
                    this.preCalculate(),
                    this.subModules.forEach(function(e) {
                        e.calculate()
                    }),
                    this.postCalculate()
                }
            }, {
                key: "render",
                value: function() {
                    this.preRender(),
                    this.subModules.forEach(function(e) {
                        e.render()
                    }),
                    this.postRender()
                }
            }, {
                key: "preInit",
                value: function() {}
            }, {
                key: "postInit",
                value: function() {}
            }, {
                key: "preReset",
                value: function() {}
            }, {
                key: "postReset",
                value: function() {}
            }, {
                key: "preRender",
                value: function() {}
            }, {
                key: "postRender",
                value: function() {}
            }, {
                key: "preCalculate",
                value: function() {}
            }, {
                key: "postCalculate",
                value: function() {}
            }, {
                key: "gatherAsideChildren",
                value: function() {}
            }]),
            e
        }();
        t.exports = o
    }
    , {}],
    5: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , a = e("_base/base")
          , c = function(e) {
            function t() {
                return r(this, t),
                i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return o(t, e),
            s(t, [{
                key: "preInit",
                value: function() {
                    this.FORCED_ANIMATION_FRAMELENGTH = 30,
                    this.FORCED_ANIMATION_DURATION = 300
                }
            }, {
                key: "postInit",
                value: function() {
                    this.parseAnimation(),
                    this.initAnimation()
                }
            }, {
                key: "register",
                value: function() {
                    this.$el.parent().trigger("animatedModuleInit", this)
                }
            }, {
                key: "initAnimation",
                value: function() {}
            }, {
                key: "parseAnimation",
                value: function() {
                    this.animation = this.$el.animationsObject();
                    for (var e in this.animation)
                        if (e.indexOf("-") > -1) {
                            var t = e.split("-");
                            this.animation[t[0]] = this.animation[t[0]] || {},
                            this.animation[t[0]][t[1]] = this.animation[e]
                        }
                    this.animation.fromAnchorId = +this.animation.fromanchor || 1,
                    this.animation.tillAnchorId = +this.animation.tillanchor
                }
            }, {
                key: "setAnchors",
                value: function(e) {
                    this.animation.fromAnchor = e[this.animation.fromAnchorId - 1],
                    this.animation.tillAnchor = e[this.animation.tillAnchorId - 1]
                }
            }, {
                key: "animate",
                value: function(e, t) {
                    t ? this.forcedAnimate(t) : this.standardAnimate(e)
                }
            }, {
                key: "standardAnimate",
                value: function(e) {
                    this.progress = (e - this.animation.fromAnchor.originalTrigger) / (this.animation.tillAnchor.originalTrigger - this.animation.fromAnchor.originalTrigger),
                    this.progress < 0 && (this.progress = 0),
                    this.progress > 1 && (this.progress = 1),
                    this.draw(this.progress)
                }
            }, {
                key: "forcedAnimate",
                value: function(e) {
                    var t = this;
                    this.oldProgress = this.progress,
                    this.progress = (e - this.animation.fromAnchorId) / (this.animation.tillAnchorId - this.animation.fromAnchorId);
                    var n = this.progress - this.oldProgress
                      , r = Math.abs(n)
                      , i = n > 0 ? 1 : -1;
                    clearInterval(this.autoProgressIntrevalID),
                    n && !function() {
                        var e = 0
                          , n = r / t.FORCED_ANIMATION_FRAMELENGTH;
                        t.autoProgressIntrevalID = setInterval(function() {
                            var o = Math.round(1e3 * (t.oldProgress + e * i)) / 1e3;
                            e += n,
                            t.draw(o),
                            e > r && clearInterval(t.autoProgressIntrevalID)
                        }, t.FORCED_ANIMATION_DURATION / t.FORCED_ANIMATION_FRAMELENGTH)
                    }()
                }
            }, {
                key: "draw",
                value: function() {}
            }]),
            t
        }(a);
        t.exports = c
    }
    , {
        "_base/base": 4
    }],
    6: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_module/animatedModule")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postRender",
                    value: function() {
                        this.frameHeight = this.$el.height();
                        var e = this.frameHeight * (+this.animation.sequence + 1);
                        this.$el.css({
                            "background-size": "auto " + e + "px"
                        })
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        var t = e * this.animation.sequence | 0;
                        this.$el.css({
                            "background-position": "50% -" + t * this.frameHeight + "px"
                        })
                    }
                }]),
                t
            }(t);
            $(".js__animatedSequence").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_module/animatedModule": 5
    }],
    7: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            e("webAnimations");
            var t = e("jogweel")
              , n = e("_module/animatedModule")
              , c = function(e) {
                function n() {
                    return r(this, n),
                    i(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return o(n, e),
                a(n, [{
                    key: "initAnimation",
                    value: function() {
                        this.DEFAULT_EASING_FUNCTION = "linear",
                        this.PROPERTIES_NEEDS_PERSPECTIVE = ["translateZ", "translate3d", "rotateX", "rotateY"],
                        this.setId(),
                        this.collectKeyframes(),
                        this.check3d(),
                        this.setupKeyframes(),
                        this.setupEasing(),
                        this.player = t.create(this.$el[0])
                    }
                }, {
                    key: "setId",
                    value: function() {
                        this.id = this.$el.attr("id"),
                        this.id || (this.id = "animation_" + __.generateID(10),
                        this.$el.attr("id", this.id))
                    }
                }, {
                    key: "collectKeyframes",
                    value: function() {
                        this.keyframesString = "";
                        var e = new RegExp("(%|from|to)$");
                        for (var t in this.animation)
                            if (e.test(t)) {
                                var n = this.animation[t];
                                this.keyframesString += t + "{",
                                "object" === ("undefined" == typeof n ? "undefined" : s(n)) ? (this.keyframesString += n.property,
                                this.keyframesString += ";animation-timing-function: " + n.easing) : this.keyframesString += n,
                                this.keyframesString += "}"
                            }
                    }
                }, {
                    key: "check3d",
                    value: function() {
                        var e = this;
                        this.PROPERTIES_NEEDS_PERSPECTIVE.every(function(t) {
                            return !(e.keyframesString.indexOf(t) > -1) || (e.$el.parent().addClass("is__3dContainer"),
                            !1)
                        })
                    }
                }, {
                    key: "setupKeyframes",
                    value: function() {
                        this.$spread.append("\n        <style>\n          #" + this.id + " { animation-name: " + this.id + "; }\n          @keyframes " + this.id + " { " + this.keyframesString + " }\n        </style>\n      ")
                    }
                }, {
                    key: "setupEasing",
                    value: function() {
                        this.$el.css("animation-timing-function", this.$el.data("animation-easing") || this.DEFAULT_EASING_FUNCTION)
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        1 === e && (e -= .001),
                        this.player.seek(e)
                    }
                }]),
                n
            }(n);
            $(".js__animatedStyles").each(function() {
                new c($(this))
            })
        })
    }
    , {
        "_module/animatedModule": 5,
        jogweel: 109,
        webAnimations: 102
    }],
    8: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.CLASS_ACTIVE = "is__active"
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this
                          , t = e.$el.find(".img, .image, img").filter('[data-src$=".gif"]');
                        t.length && (e.gifs = [],
                        $(document).on("pedantFreeze", function() {
                            e.isFreezed = !0
                        }),
                        t.each(function() {
                            e.gifs.push({
                                $el: $(this),
                                src: $(this).attr("data-src")
                            })
                        })),
                        e.switchOn = e.$el.data("switch-on"),
                        e.isActive = !1,
                        e.randomVersionIndex = 0,
                        e.$spread.on("anchor", function(t, n) {
                            requestAnimationFrame(function() {
                                e.draw(n)
                            })
                        }),
                        e.$spread.on("spreadDevisualized", e.disable.bind(e))
                    }
                }, {
                    key: "disable",
                    value: function() {
                        var e = this;
                        e.isActive && (e.isActive = !1,
                        e.$el.removeClass(e.CLASS_ACTIVE))
                    }
                }, {
                    key: "draw",
                    value: function(e) {
                        var t = this;
                        e.id >= t.switchOn ? t.isActive || (t.isActive = !0,
                        t.$el.addClass(t.CLASS_ACTIVE)) : t.disable(),
                        t.isActive && !t.isFreezed && t.switchOn === +e.id && t.resetGif(e)
                    }
                }, {
                    key: "resetGif",
                    value: function(e) {
                        var t = this;
                        t.gifs && e.direction > -1 && t.gifs.forEach(function(e) {
                            t.spread._book.isMobile ? requestAnimationFrame(t.reloadGif.bind(t, e)) : t.reloadGif(e)
                        })
                    }
                }, {
                    key: "reloadGif",
                    value: function(e) {
                        this.randomVersionIndex++,
                        e.$el.css({
                            "background-image": "url(" + e.src + "?v=" + this.randomVersionIndex + ")"
                        })
                    }
                }]),
                t
            }(t);
            $(".js__fader").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    9: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var t = "is__fitToContent"
              , n = e("_base/base")
              , a = function(e) {
                function n() {
                    return r(this, n),
                    i(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }
                return o(n, e),
                s(n, [{
                    key: "postInit",
                    value: function() {
                        this.givenProportion = this._parseProportion(),
                        this.shouldFitToModule = !this.$el.hasClass(t)
                    }
                }, {
                    key: "_parseProportion",
                    value: function() {
                        var e = this.$el.data("fit-to-proportion");
                        if ("string" == typeof e) {
                            if (e.indexOf("%") > -1)
                                return parseFloat(e) / 100;
                            if (e.indexOf(":") > -1) {
                                var t = e.split(":");
                                return t[0] / t[1]
                            }
                        }
                        return e
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        this.$el.removeClass(t),
                        this.$el.css({
                            flex: 1
                        })
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        this.width = this.$el.width(),
                        this.calculatedHeight = (this.width / this.givenProportion).toFixed(),
                        this.shouldFitToModule && (this.height = this.$el.height(),
                        this.calculatedHeight > this.height && this.height > 0 && (this.calculatedHeight = this.height))
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        this.$el.addClass(t),
                        this.$el.css({
                            flexGrow: 0,
                            flexBasis: this.calculatedHeight + "px"
                        })
                    }
                }]),
                n
            }(n);
            $(".js__fitToProportion").each(function() {
                new a($(this))
            })
        }()
    }
    , {
        "_base/base": 4
    }],
    10: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isMother = !0,
                        this.CLASS_EQUALIZE = "js__equalize"
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.initialFlex = e.$el.css("flex") || 1,
                        e.renderFlex = "initial"
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        var e = this;
                        e.$el.css({
                            flex: e.initialFlex,
                            "max-height": "none"
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this;
                        if (e.$el.hasClass(this.CLASS_EQUALIZE)) {
                            var t = e.subModules[0].calculatedHeight;
                            e.subModules.slice(1).forEach(function(e) {
                                t > e.calculatedHeight && (t = e.calculatedHeight)
                            }),
                            e.subModules.forEach(function(e) {
                                e.setHeight && e.setHeight(t)
                            }),
                            e.renderFlex = t
                        }
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        var e = this;
                        e.$el.css({
                            flex: e.renderFlex,
                            "max-height": e.renderFlex
                        })
                    }
                }]),
                t
            }(t);
            $(".js__foldable").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    11: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.OVERLAP_HEIGHT = 31,
                        this.THRESHOLD = 75,
                        this.isFinal = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this.$el.closest(".js__page");
                        if (this.$neighbor = this.$el.next(),
                        this.$neighbor.length || (this.$neighbor = this.$el.parent()),
                        this.$parent = this.findOffsetParent(this.$el),
                        !e.hasClass("is__sticky")) {
                            var t = e.hasClass("page_left") ? "Left" : "Right";
                            this.overlapClass = "is__overlapped" + t,
                            this.isOverlapping = !1,
                            this.$spread.on("spreadMove", this.checkOverlap.bind(this))
                        }
                    }
                }, {
                    key: "postReset",
                    value: function() {
                        this.$el.css("top", "auto")
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        this.offset = this.$neighbor.offset().top - this.spread.triggers.hold;
                        var e = this.$el[0].getBoundingClientRect().height;
                        this.parentOffset = this.$parent.offset().top - this.spread.triggers.hold,
                        this.triggerIn = this.offset - this.spread._book.cellHeight - this.OVERLAP_HEIGHT,
                        this.speed = this.spread.speed || 1,
                        this.triggerIn < 0 && (this.triggerIn = 0),
                        this.triggerOut = this.triggerIn + e + this.OVERLAP_HEIGHT + this.THRESHOLD
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        this.$el.css("top", this.offset - this.parentOffset)
                    }
                }, {
                    key: "findOffsetParent",
                    value: function(e) {
                        var t = e.parent();
                        return "static" === t.css("position") ? this.findOffsetParent(t) : t
                    }
                }, {
                    key: "checkOverlap",
                    value: function(e, t) {
                        var n = t.originalPosition * this.speed;
                        n > this.triggerIn && n < this.triggerOut ? (this.isOverlapping = !0,
                        this.$spread.addClass(this.overlapClass)) : this.isOverlapping && (this.isOverlapping = !1,
                        this.$spread.removeClass(this.overlapClass))
                    }
                }]),
                t
            }(t);
            $(".js__marginal").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    12: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.EVENT_MOVE = "spreadMove.revertical",
                        this.CLASS_ACTIVE = "is__active",
                        this.CLASS_FINISHED = "is__finished",
                        this.CLASS_SLIM = "is__slim",
                        this.CLASS_HIDDEN = "is__hidden",
                        this.CAPTION_GAP = 10,
                        this.DOUBLES_GAP = 30,
                        this.IMAGE_GAP = 40,
                        this.isAffectingHeight = !0,
                        this.isMother = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.$sticky = e.$el.find(".revertical-sticky"),
                        e.$main = e.$el.find(".revertical-main"),
                        e.$doublesBox = e.$sticky.find(".revertical-captions"),
                        e.$doubles = e.$doublesBox.find(".caption"),
                        e.items = [],
                        e.$main.find(".revertical-item").each(function(t) {
                            e.items.push({
                                $el: $(this),
                                $image: $(this).find(".image"),
                                $caption: $(this).find(".caption-text"),
                                $double: e.$doubles.eq(t)
                            })
                        }),
                        e.items.length && (e.items[0].isActive = !0,
                        e.items[0].$double.addClass("is__active"),
                        e.lastItem = e.items[e.items.length - 1],
                        e.lastItem.$el.addClass("is__last"))
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        var e = this;
                        e.spread.$el.removeClass(e.CLASS_SLIM),
                        e.$sticky.css({
                            "padding-top": 0,
                            "margin-top": 0,
                            top: 0
                        }),
                        e.$main.css({
                            "margin-bottom": 0
                        })
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        var e = this
                          , t = e.spread._book.viewHeight / 12;
                        e.doublesHeight = 0,
                        e.$doubles.each(function() {
                            var t = $(this).height();
                            t > e.doublesHeight && (e.doublesHeight = t)
                        }),
                        e.doublesHeight += e.DOUBLES_GAP,
                        e.stickyHeight = e.$sticky.outerHeight() + e.doublesHeight,
                        e.stickyOffset = e.spread._book.viewHeight - e.stickyHeight,
                        e.mainViewHeight = e.stickyOffset - t,
                        e.mainHeight = e.$main.height(),
                        e.items.forEach(function(t, n) {
                            t.height = t.$el.height(),
                            t.captionHeight = t.$caption.outerHeight();
                            var r = t.height - t.captionHeight - e.CAPTION_GAP;
                            t.triggers = {},
                            t.triggers.start = t.$el.position().top - e.mainViewHeight + e.CAPTION_GAP,
                            t.triggers.stop = t.triggers.start + r,
                            0 === n && (t.triggers.start = -9999),
                            t.triggers.stop < 0 && (t.triggers.stop = t.triggers.start)
                        }),
                        e.items.length ? (e.lastItem.triggers.stop = 1 / 0,
                        e.triggerEnd = e.mainHeight - e.mainViewHeight - e.lastItem.captionHeight) : e.triggerEnd = e.mainHeight - e.mainViewHeight
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this;
                        e.$sticky.css({
                            "padding-top": e.doublesHeight,
                            "margin-top": e.stickyOffset,
                            top: e.stickyOffset
                        }),
                        e.$main.css({
                            "margin-bottom": e.stickyHeight
                        }),
                        e.mainHeight > e.mainViewHeight ? e.spread.$el.removeClass(e.CLASS_SLIM) : e.spread.$el.addClass(e.CLASS_SLIM),
                        e.$spread.unbind(e.EVENT_MOVE).on(e.EVENT_MOVE, function(t, n) {
                            e.animate(n.originalPosition)
                        })
                    }
                }, {
                    key: "animate",
                    value: function(e) {
                        var t = this;
                        t.items.forEach(function(n) {
                            e > n.triggers.start && e < n.triggers.stop ? n.isActive || (n.$double.addClass(t.CLASS_ACTIVE),
                            n.isActive = !0) : n.isActive && (n.$double.removeClass(t.CLASS_ACTIVE),
                            n.isActive = !1)
                        }),
                        e > t.triggerEnd ? t.isFinished || (t.$doublesBox.addClass(t.CLASS_FINISHED),
                        t.isFinished = !0) : t.isFinished && (t.$doublesBox.removeClass(t.CLASS_FINISHED),
                        t.isFinished = !1)
                    }
                }]),
                t
            }(t);
            $(".js__revertical .js__spread-holder").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    13: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = 50
              , t = "is__hidden"
              , n = function(e, t) {
                var n = this;
                n.$el = e,
                n.lines = t.map(function() {
                    return new r($(this),n,0)
                }).get(),
                n.$el.on("spreadCreated", function(e, t) {
                    n.book = t._book,
                    setTimeout(function() {
                        n.repositionLines(0)
                    }, 1)
                }),
                $(document).on("bookResizeDone", n.repositionLines.bind(n, 0)),
                n.$el.on("spreadLoaded", n.repositionLines.bind(n, 0)),
                n.$el.on("spreadUnloaded spreadDevisualized", function() {
                    clearInterval(n.handlePositionInterval)
                }),
                n.$el.on("spreadMove.line", n.onSpreadMove.bind(n))
            };
            n.prototype.onSpreadMove = function(t, n) {
                var r = this;
                clearInterval(r.handlePositionInterval);
                var i = function() {
                    var e = n.originalPosition;
                    e < 0 && (e = 0),
                    e > n.height && (e = n.height),
                    r.repositionLines(e)
                };
                i(),
                window.application.isOnMobile && (r.handlePositionInterval = setInterval(i, e))
            }
            ,
            n.prototype.repositionLines = function(e) {
                var t = e + this.book.viewHeight;
                this.lines.forEach(function(n) {
                    n.calc(e, t)
                }),
                this.lines.forEach(function(e) {
                    e.position()
                })
            }
            ;
            var r = function(e, t) {
                var n = this;
                n.$el = e,
                n._spread = t,
                n.isFixed = n.$el.hasClass("is__fixed"),
                n.background = n.$el.data("color"),
                n.background && n.$el.children().css("background", n.background)
            };
            r.prototype.calc = function(e, t) {
                var n = this;
                n.from = n.calcTarget("from", e),
                n.to = n.calcTarget("to", e),
                n.isFixed || n._hideIfSourceOrTargetIsHidden(e, t),
                n.diffs = {
                    x: n.to.positions.x - n.from.positions.x,
                    y: n.to.positions.y - n.from.positions.y
                },
                n.width = Math.sqrt(Math.pow(n.diffs.x, 2) + Math.pow(n.diffs.y, 2)),
                n.angle = 180 * Math.atan2(n.diffs.y, n.diffs.x) / Math.PI
            }
            ,
            r.prototype.position = function() {
                var e = this
                  , t = "rotate(" + e.angle + "deg)"
                  , n = "translateX(" + e.from.positions.x + "px) translateY(" + e.from.positions.y + "px)";
                e.$el.css({
                    width: e.width,
                    transform: n + " " + t
                })
            }
            ,
            r.prototype.calcTarget = function(e, t) {
                var n = this
                  , r = {
                    positions: {}
                }
                  , i = $(n.$el.data(e + "-target"))
                  , o = n.calcInnerOffset(e);
                return r.positions.x = i.offset().left - n._spread.$el.offset().left + o.x,
                r.positions.y = i.offset().top - n._spread.$el.offset().top + o.y,
                n.isFixed && (r.positions.x = r.positions.x - n._spread.$el.width() / 12,
                r.positions.y = r.positions.y - t - parseInt(document.documentElement.style.fontSize, 10) / 12),
                r
            }
            ,
            r.prototype.calcInnerOffset = function(e) {
                var t = this
                  , n = $(t.$el.data(e + "-target"))
                  , r = parseFloat(t.$el.data(e + "-x"))
                  , i = parseFloat(t.$el.data(e + "-y"));
                if (t.targetElIsBackground(n)) {
                    var o = n.backgroundImageSize()
                      , s = n.backgroundImageOffset();
                    return {
                        x: o.width * r + s.left,
                        y: o.height * i + s.top
                    }
                }
                return {
                    x: n.outerWidth() * r,
                    y: n.outerHeight() * i
                }
            }
            ,
            r.prototype.targetElIsBackground = function(e) {
                return e.not("img") && e.hasClass("image")
            }
            ,
            r.prototype._hideIfSourceOrTargetIsHidden = function(e, n) {
                this.from.positions.y < e || this.to.positions.y < e || this.from.positions.y > n || this.to.positions.y > n ? this.$el.addClass(t) : this.$el.removeClass(t)
            }
            ,
            $(".js__spread").each(function() {
                var e = $(this)
                  , t = e.find(".js__calloutLine");
                t.length && new n(e,t)
            })
        })
    }
    , {}],
    14: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t;
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postInit",
                    value: function() {
                        this.isColumnGrid = this.$el.hasClass("grid__column"),
                        this.$cols = this.$el.children(),
                        this.$image = this.$cols.find(".image"),
                        this.$mainCol = this.$cols.filter(".js__autoCols-main"),
                        this.gutter = this._getGutter(),
                        this.compensator = this.isColumnGrid ? this.gutter : 0,
                        this.initialImageWidth = this.$image.data("width"),
                        this.initialImageHeight = this.$image.data("height"),
                        this.imageRatio = this.initialImageWidth / this.initialImageHeight
                    }
                }, {
                    key: "_getGutter",
                    value: function() {
                        if (this.isColumnGrid)
                            return this.$el.width() - this.$el.outerWidth(!0);
                        var e = 0;
                        return this.$cols.each(function(t, n) {
                            var r = $(n);
                            e += r.outerWidth(!0) - r.width()
                        }),
                        e / (this.$cols.length - 1)
                    }
                }, {
                    key: "postReset",
                    value: function() {
                        this.$mainCol.css({
                            "flex-basis": "none",
                            "max-width": "none",
                            height: "auto"
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        this.imageVerticalMargins = parseFloat(this.$image.css("margin-top")) + parseFloat(this.$image.css("margin-bottom")),
                        this.imageHorizontalMargins = parseFloat(this.$image.css("margin-left")) + parseFloat(this.$image.css("margin-right")),
                        this.blockPaddings = this.$mainCol.outerWidth() - this.$mainCol.width(),
                        this.parentInitialHeight = this.$el.height() - this.imageVerticalMargins,
                        this.parentInitialWidth = this.$el.width() - this.imageHorizontalMargins - this.gutter / 2,
                        this.maxImageWidth = 2 * this.parentInitialWidth / 3,
                        this.calculatedWidth = this.parentInitialHeight * this.imageRatio + this.blockPaddings,
                        this.calculatedWidth > this.maxImageWidth && (this.calculatedWidth = this.maxImageWidth),
                        this.calculatedHeight = (this.calculatedWidth - this.blockPaddings) / this.imageRatio + this.imageVerticalMargins,
                        this.preRender()
                    }
                }, {
                    key: "setHeight",
                    value: function(e) {
                        this.calculatedHeight = e,
                        this.calculatedWidth = (this.calculatedHeight - this.imageVerticalMargins) * this.imageRatio + this.blockPaddings,
                        this.preRender()
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        this.$mainCol.css({
                            "flex-basis": this.calculatedWidth,
                            "max-width": this.calculatedWidth + this.compensator,
                            height: this.calculatedHeight
                        })
                    }
                }]),
                t
            }(t);
            $(".js__autoCols").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    15: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = $(".js__book");
            $(".js__goto").each(function() {
                var t = $(this)
                  , n = t.data("target");
                t.attr("href", window.application.urls.forSpreadNumber(n)),
                t.on("click", function(t) {
                    t.preventDefault(),
                    e.trigger("bookGoto", n)
                })
            })
        })
    }
    , {}],
    16: [function(e, t, n) {
        "use strict";
        $(function() {
            function e(e) {
                return e.closest(".js__spread").attr("data-id")
            }
            function t(e) {
                return '.js__spread[data-id="' + e + '"]'
            }
            function n(t) {
                if (!t.hasClass(c)) {
                    var n = e(t);
                    t.hasClass(a) ? ($(document).trigger("stateRemoveBookmark", n),
                    t.removeClass(a)) : ($(document).trigger("stateAddBookmark", n),
                    t.addClass(a))
                }
            }
            function r(e, n) {
                $(t(n)).find(o).addClass(c)
            }
            function i(e, n) {
                s.removeClass(a);
                var r = window.application.state.getBookmarks()
                  , i = r.map(t).join(", ");
                $(i).find(o).addClass(a),
                n && n.changed && $(t(n.changed)).find(o).removeClass(c)
            }
            var o = ".js__bookmark"
              , s = $(o)
              , a = "is__active"
              , c = "is__failed";
            s.each(function() {
                var e = $(this);
                e.on("click", function(t) {
                    t.preventDefault(),
                    n(e)
                })
            }),
            $(document).on("bookReady bookmarksSync", i),
            $(document).on("bookmarkFailed", r)
        })
    }
    , {}],
    17: [function(e, t, n) {
        "use strict";
        $(function() {
            function e(e) {
                return e.closest(".js__spread").attr("data-id")
            }
            function t(e) {
                return '.js__spread[data-id="' + e + '"]'
            }
            function n(t) {
                if (!t.hasClass(c)) {
                    var n = e(t);
                    t.hasClass(a) ? ($(document).trigger("stateRemoveCheckMark", n),
                    t.removeClass(a)) : ($(document).trigger("stateAddCheckMark", n),
                    t.addClass(a))
                }
            }
            function r(e, n) {
                $(t(n)).find(o).addClass(c)
            }
            function i(e, n) {
                s.removeClass(a);
                var r = window.application.state.getCheckMarks()
                  , i = r.map(t).join(", ");
                $(i).find(o).addClass(a),
                n && n.changed && $(t(n.changed)).find(o).removeClass(c)
            }
            var o = ".js__checkmark"
              , s = $(o)
              , a = "is__active"
              , c = "is__failed";
            return window.application.can("putCheckmarks") ? (s.each(function() {
                var e = $(this);
                e.on("click", function(t) {
                    t.preventDefault(),
                    n(e)
                })
            }),
            $(document).on("bookReady checkMarksSync", i),
            void $(document).on("checkMarkFailed", r)) : void s.hide()
        })
    }
    , {}],
    18: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = "is__loading"
              , t = "is__still-loading"
              , n = ".js__editlink"
              , r = ".js__addspread";
            $(r).each(function() {
                var n = $(this)
                  , r = n.prev().data("id");
                n.on("click", function() {
                    n.addClass(e),
                    setTimeout(function() {
                        n.addClass(t)
                    }, 1e3),
                    $(document).trigger("addSpread", r)
                })
            }),
            $(document).on("click", ".js__nav-toggler", function(e) {
                e.preventDefault(),
                $(document).trigger("openNavigator")
            }),
            window.application.can("editSpreads") && $(n).show(),
            window.application.can("addSpreads") && $(r).show(),
            $(".controls-in").each(function() {
                var e = $(this)
                  , t = e.closest(".spread")
                  , n = t.css("background-color");
                n && e.css("background-color", n)
            })
        })
    }
    , {}],
    19: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = void 0
              , t = [];
            $(".js__spread").each(function() {
                var n = $(this)
                  , r = n.find("h1:not(.sectionTitle-header)").first();
                return r.length && (e = $.trim(r.text())),
                !(!n.hasClass("is__service") && !n.hasClass("is__noHeaderMoveUp")) || void t.push({
                    $header: n.find(".js__searchHeader"),
                    text: e
                })
            }),
            t.forEach(function(e) {
                var t = e.$header
                  , n = e.text;
                return t.text(n)
            })
        })
    }
    , {}],
    20: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("imagesLoaded")
              , n = function() {
                function e(n) {
                    var i = this;
                    r(this, e),
                    this.$box = n,
                    this.$holder = this.$box.find(".coverholder"),
                    this.$this = this.$box.find(".dummy"),
                    this.$zoomer = this.$box.find(".dummy-zoomer"),
                    this.$front = this.$this.find(".dummy-front"),
                    this.$frontFlyleaf = this.$front.find(".dummy-flyleaf"),
                    this.$frontShadow = this.$front.find(".dummy-shadow"),
                    this.$block = this.$this.find(".dummy-book"),
                    this.$blockFront = this.$block.find(".dummy-book-front"),
                    this.$blockFrontFlyleaf = this.$blockFront.find(".dummy-flyleaf"),
                    this.$blockFrontShadow = this.$blockFront.find(".dummy-shadow"),
                    this.$blockBack = this.$block.find(".dummy-book-back"),
                    this.$blockBackShadow = this.$blockBack.find(".dummy-shadow"),
                    this.$spine = this.$this.find(".dummy-spine"),
                    this.$back = this.$this.find(".dummy-back-in"),
                    this.$backShadow = this.$back.find(".dummy-shadow"),
                    this.$flyleafs = this.$this.find(".dummy-flyleaf"),
                    this.out = {},
                    this.out.$body = $("body"),
                    this.out.$book = $(".js__book"),
                    this.out.$firstSpread = this.out.$book.find(".js__spread").first(),
                    this.out.$lastSpread = this.out.$book.find(".js__spread").last(),
                    this.out.$undersite = $(".undersite"),
                    this.initialDistance = -100,
                    this.endAngle = 12,
                    this.endScale = .9,
                    this.endOffsetFactor = (1 - this.endScale) / 2,
                    this.previousScrollTop = -1,
                    window.pageYOffset < 500 && this.out.$body.removeClass(e.CLASS_SKIP_COVER),
                    $(document).on("bookResize", this.calc.bind(this)),
                    this.calc(),
                    $(document).on("bookReady", function() {
                        i.$box.addClass(e.CLASS_READY),
                        0 === window.pageYOffset ? i.$box.addClass(e.CLASS_START) : i.$box.removeClass(e.CLASS_START),
                        window.pageYOffset > 500 && (i.out.$body.addClass(e.CLASS_SKIP),
                        i.animate()),
                        t(i.$box, function() {
                            i.$box.addClass(e.CLASS_LOADED),
                            $(document).trigger("coverImagesReady")
                        }),
                        setAnimationFrameInterval(i.animate.bind(i), 50)
                    }),
                    this.waitForEndpaper()
                }
                return i(e, [{
                    key: "calc",
                    value: function() {
                        var t = this;
                        this.viewWidth = window.application.width,
                        this.thisHeight = this.viewHeight = window.application.height,
                        this.thisWidth = this.thisHeight * e.REM_WIDTH,
                        this.thisSpineWidth = this.$spine.width(),
                        this.scale = this.viewWidth / (2 * this.thisWidth - 1),
                        this.scale < 1 && (this.scale = 1),
                        this.flyleafDistanceFront = e.PERSPECTIVE * (this.scale - 1) / this.scale,
                        this.flyleafDistanceBack = this.flyleafDistanceFront - this.thisSpineWidth,
                        this.endOffsetTop = this.viewHeight * this.endOffsetFactor,
                        this.endOffsetLeft = (this.viewWidth - this.thisSpineWidth * this.endScale) / 2,
                        this.endOffsetLeftCorrection = Math.tan(this.endAngle * Math.PI / 180) * this.thisHeight * this.endScale,
                        this.backgroundSize = (e.TILE_SIZE / this.scale).toFixed(),
                        this.$flyleafs.css({
                            "background-size": this.backgroundSize + "px"
                        }),
                        this.out.$book.css({
                            "background-size": this.backgroundSize / 2 + "px"
                        }),
                        this.animations = [{
                            $el: this.$zoomer,
                            from: 0,
                            till: 500,
                            transforms: [{
                                property: "translateZ",
                                from: this.initialDistance,
                                till: this.flyleafDistanceFront,
                                unit: "px",
                                isDesktopOnly: !0
                            }, {
                                property: "translateX",
                                from: 0,
                                till: this.thisWidth / 2,
                                unit: "px"
                            }]
                        }, {
                            $el: this.$this,
                            from: 0,
                            till: 500,
                            transforms: [{
                                property: "rotateY",
                                from: 0,
                                till: 0,
                                unit: "deg"
                            }, {
                                property: "translateY",
                                from: .1,
                                till: 0,
                                unit: "rem"
                            }]
                        }, {
                            $el: this.$front,
                            from: 0,
                            till: 500,
                            transforms: [{
                                property: "rotateY",
                                from: 180,
                                till: 0,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$frontShadow,
                            from: 0,
                            till: 500,
                            transitions: [{
                                property: "opacity",
                                from: 1,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$blockFrontShadow,
                            from: 0,
                            till: 400,
                            transitions: [{
                                property: "opacity",
                                from: .8,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$blockFrontShadow,
                            from: 0,
                            till: 500,
                            transforms: [{
                                property: "scaleX",
                                from: 1,
                                till: 0,
                                isDesktopOnly: !0
                            }, {
                                property: "translateZ",
                                from: 0,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$this,
                            from: -1,
                            till: 0,
                            isEnd: !0,
                            transforms: [{
                                property: "rotateY",
                                from: 0,
                                till: -180,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$zoomer,
                            from: -1,
                            till: 0,
                            isEnd: !0,
                            transforms: [{
                                property: "translateZ",
                                from: this.flyleafDistanceFront,
                                till: this.flyleafDistanceBack,
                                unit: "px"
                            }, {
                                property: "translateX",
                                from: this.thisWidth / 2,
                                till: -this.thisWidth / 2,
                                unit: "px"
                            }]
                        }, {
                            $el: this.$front,
                            from: -1,
                            till: 0,
                            isEnd: !0,
                            transforms: [{
                                property: "rotateY",
                                from: 0,
                                till: 180,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$back,
                            from: -1,
                            till: 0,
                            isEnd: !0,
                            transforms: [{
                                property: "rotateY",
                                from: 0,
                                till: 180,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$this,
                            isEnd: !0,
                            from: 0,
                            till: 250,
                            transforms: [{
                                property: "rotateY",
                                from: -180,
                                till: -180,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$back,
                            isEnd: !0,
                            from: 0,
                            till: 250,
                            transforms: [{
                                property: "rotateY",
                                from: 180,
                                till: 0,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$block,
                            isEnd: !0,
                            from: 250,
                            till: 251,
                            transitions: [{
                                property: "opacity",
                                from: 1,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$blockFrontFlyleaf,
                            isEnd: !0,
                            from: 250,
                            till: 251,
                            transitions: [{
                                property: "opacity",
                                from: 1,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$backShadow,
                            isEnd: !0,
                            from: 0,
                            till: 250,
                            transitions: [{
                                property: "opacity",
                                from: 0,
                                till: .45,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$backShadow,
                            isEnd: !0,
                            from: 250,
                            till: 251,
                            transforms: [{
                                property: "scale",
                                from: 1,
                                till: 0,
                                isDesktopOnly: !0
                            }]
                        }, {
                            $el: this.$this,
                            isEnd: !0,
                            from: 250,
                            till: 500,
                            transforms: [{
                                property: "rotateY",
                                from: -180,
                                till: -270,
                                unit: "deg"
                            }, {
                                property: "rotateX",
                                from: 0,
                                till: -this.endAngle,
                                unit: "deg"
                            }]
                        }, {
                            $el: this.$zoomer,
                            isEnd: !0,
                            from: 0,
                            till: 250,
                            transforms: [{
                                property: "translateZ",
                                from: this.flyleafDistanceBack,
                                till: -this.thisWidth / 2,
                                unit: "px",
                                isDesktopOnly: !0
                            }, {
                                property: "scale",
                                from: 1,
                                till: this.endScale
                            }, {
                                property: "translateX",
                                from: -this.thisWidth / 2,
                                till: this.thisSpineWidth / 2,
                                unit: "px"
                            }]
                        }, {
                            $el: this.$holder,
                            isEnd: !0,
                            from: 250,
                            till: 500,
                            transforms: [{
                                property: "translateX",
                                from: 0,
                                till: this.endOffsetLeft - this.endOffsetLeftCorrection,
                                unit: "px"
                            }, {
                                property: "translateY",
                                from: 0,
                                till: this.endOffsetTop,
                                unit: "px"
                            }]
                        }, {
                            $el: this.out.$undersite,
                            isEnd: !0,
                            from: 0,
                            till: 1,
                            transitions: [{
                                property: "opacity",
                                from: 0,
                                till: 1
                            }]
                        }],
                        window.application.coverFaceAnimations && (this.animations = this.animations.concat(window.application.coverFaceAnimations)),
                        this.animations.forEach(function(e) {
                            e.length = e.till - e.from,
                            e.transforms && (e.transforms.forEach(function(e) {
                                e.length = e.till - e.from,
                                e.unit = e.unit || ""
                            }),
                            e.transforms = t.trimAnimations(e.transforms)),
                            e.transitions && (e.transitions.forEach(function(e) {
                                e.before = "",
                                e.after = "",
                                e.unit = e.unit || "",
                                e.length = e.till - e.from,
                                "filter" !== e.property || window.application.isOnMobile || (e.before = "blur(",
                                e.after = ")")
                            }),
                            e.transitions = t.trimAnimations(e.transitions))
                        }),
                        $(window).trigger("scroll")
                    }
                }, {
                    key: "animate",
                    value: function() {
                        var t = window.pageYOffset;
                        if (t !== this.previousScrollTop) {
                            this.previousScrollTop = t,
                            $(document).trigger("coverUpdate", t / 500),
                            t >= window.application.book.spreads[0].triggers.hold ? t <= window.application.book.spreads[window.application.book.spreads.length - 1].triggers.release ? (this.out.$body.addClass(e.CLASS_SKIP_COVER),
                            this.$box.removeClass(e.CLASS_END)) : (this.out.$body.removeClass(e.CLASS_SKIP_COVER),
                            this.$box.addClass(e.CLASS_END)) : (this.out.$body.removeClass(e.CLASS_SKIP_COVER),
                            this.$box.removeClass(e.CLASS_END));
                            for (var n = 0, r = this.animations.length; n < r; n++) {
                                var i = this.animations[n]
                                  , o = 0;
                                if (i.isEnd && window.application && (o = window.application.book.spreads[window.application.book.spreads.length - 1].triggers.end),
                                t < i.from + o) {
                                    for (var s = !0, a = n - 1; a > -1; a--)
                                        this.animations[a].$el.attr("class") === i.$el.attr("class") && i.transforms && (s = !1);
                                    s && this.updateAnimation(i, 0)
                                } else
                                    t < i.till + o ? this.updateAnimation(i, (t - i.from - o) / i.length) : this.updateAnimation(i, 1)
                            }
                        }
                    }
                }, {
                    key: "updateAnimation",
                    value: function(e, t) {
                        var n = void 0;
                        if (e.transforms) {
                            for (var r = "", i = 0, o = e.transforms.length; i < o; i++) {
                                var s = e.transforms[i];
                                n = s.easing ? jQuery.easing[s.easing](null, t, s.from, s.length, 1) : t * s.length + s.from,
                                n = n.toFixed(3),
                                r += s.property + "(",
                                r += n,
                                r += s.unit + ") "
                            }
                            e.$el.css({
                                transform: r
                            })
                        }
                        if (e.transitions)
                            for (var a = 0, c = e.transitions.length; a < c; a++) {
                                var l = e.transitions[a];
                                n = l.easing ? jQuery.easing[l.easing](null, t, l.from, l.length, 1) : t * l.length + l.from,
                                n = n.toFixed(3),
                                "filter" === l.property ? e.$el.css({
                                    "-webkit-filter": l.before + n + l.unit + l.after
                                }) : e.$el.css(l.property, l.before + n + l.unit + l.after)
                            }
                    }
                }, {
                    key: "trimAnimations",
                    value: function(e) {
                        var t = [];
                        return e.forEach(function(e) {
                            window.isOnMobile ? e.isDesktopOnly || t.push(e) : e.isMobileOnly || t.push(e)
                        }),
                        t
                    }
                }, {
                    key: "waitForEndpaper",
                    value: function() {
                        var e = this
                          , t = this.$flyleafs.css("background-image").match(/\((.*?)\)/)[1].replace(/('|")/g, "")
                          , n = new Image;
                        this.$flyleafs.css("background-image", "none"),
                        n.onload = function() {
                            e.$flyleafs.css("background-image", "url(" + t + ")")
                        }
                        ,
                        n.src = t
                    }
                }]),
                e
            }();
            n.REM_WIDTH = .71,
            n.PERSPECTIVE = 3500,
            n.TILE_SIZE = 1e3,
            n.CLASS_READY = "is__ready",
            n.CLASS_LOADED = "is__loaded",
            n.CLASS_SKIP = "is__skip",
            n.CLASS_SKIP_COVER = "is__skip-cover",
            n.CLASS_START = "is__start",
            n.CLASS_END = "is__end",
            n.CLASS_ENDPAPER_LOADED = "is__endpaperLoaded",
            $(".coverbox").each(function() {
                new n($(this))
            })
        })
    }
    , {
        imagesLoaded: 108
    }],
    21: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var t = e("_base/base")
              , n = 30
              , a = 1150
              , c = 1.32
              , l = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isAffectingHeight = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        this.isXL = this.$el.hasClass("is__liftOutXL")
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        var e = this.spread._book.viewWidth * this.spread._book.viewHeight;
                        this.fontSize = Math.sqrt(e / a),
                        this.fontSize > n && (this.fontSize = n)
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this.isXL ? this.fontSize * c : this.fontSize;
                        this.$el.css({
                            "font-size": e + "px",
                            opacity: 1
                        })
                    }
                }]),
                t
            }(t);
            $(".example.is__liftOut").each(function() {
                new l($(this))
            })
        }()
    }
    , {
        "_base/base": 4
    }],
    22: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var t = e("_base/base")
              , n = e("./glvrdExerciseErrors")
              , a = e("./glvrdExerciseScore")
              , c = e("./glvrdExerciseProgress")
              , l = 30
              , u = "is__passed"
              , d = "has__changes"
              , h = "is__dirty"
              , f = "is__overflown"
              , p = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postInit",
                    value: function() {
                        this.initialContent = this.$el.find(".glvrdExercise-contents").text().trim(),
                        this.key = this.$el.attr("data-id"),
                        this.scoreKey = this.key + "-score",
                        this.errors = new n(this.$el),
                        this.shouldDisplayScore = this.$el.is(".is__glvrd"),
                        this.shouldDisplayScore || (this.progress = new c(this)),
                        this.$textarea = this._buildTextarea(),
                        this.$controls = this._buildControls(),
                        this.$reset = this._buildResetButton(),
                        this.$score = this.$el.find(".glvrdScore").remove().prependTo(this.$controls),
                        this._bindEvents(),
                        this.$el.addClass("is__active");
                        var e = navigator.userAgent.toLowerCase();
                        e.indexOf("safari") > -1 && e.indexOf("chrome") < 0 && this.$el.addClass("is__safari"),
                        this.shouldDisplayScore && (this.score = new a(this))
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        this.$el.css({
                            "max-height": "none"
                        })
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        var e = this.spread._book.viewWidth * this.spread._book.viewHeight;
                        this.height = this.$el.height(),
                        this.fontSize = 0 | Math.sqrt(e / 1150),
                        this.fontSize > l && (this.fontSize = l),
                        this.lineHeight = 1.125 * this.fontSize | 0,
                        this.lines = this.height / this.lineHeight | 0
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        this.$el.css({
                            "font-size": this.fontSize + "px",
                            "line-height": this.lineHeight + "px"
                        });
                        var e = .275 * this.lineHeight | 0;
                        this.$textarea.css({
                            "line-height": this.lineHeight + "px",
                            "background-size": "100% " + this.lineHeight + "px",
                            "background-position": "0 -" + e + "px"
                        });
                        var t = this.height + e + .3924 * this.fontSize
                          , n = t / this.lineHeight | 0;
                        this.$controls.css({
                            bottom: this.height - this.lineHeight * n + "px"
                        }),
                        this._loadSavedData(),
                        this._checkTextareaOverflow(),
                        this.wasRendered && this._checkErrors(),
                        this.wasRendered = !0
                    }
                }, {
                    key: "_buildTextarea",
                    value: function() {
                        var e = $('\n        <textarea class="glvrdExercise-textarea"\n          autocomplete="off"\n          autocorrect="off"\n          autocapitalize="off"\n          spellcheck="false"></textarea>\n      ');
                        return e.val(this.initialContent).appendTo(this.$el)
                    }
                }, {
                    key: "_buildResetButton",
                    value: function() {
                        var e = $('<button class="glvrdExercise-reset js__glvrdExercise-reset">↻</button>');
                        return e.appendTo(this.$controls)
                    }
                }, {
                    key: "_buildControls",
                    value: function() {
                        var e = $('<div class="glvrdExercise-controls"></div>');
                        return this.progress && e.append(this.progress.$el),
                        e.appendTo(this.$el)
                    }
                }, {
                    key: "_loadSavedData",
                    value: function() {
                        var e = void 0;
                        try {
                            e = localStorage.getItem(this.key)
                        } catch (t) {
                            e = null
                        }
                        e && (this.$textarea.val(e),
                        this._checkErrors(),
                        this._markAsChanged())
                    }
                }, {
                    key: "_saveData",
                    value: function() {
                        var e = this.$textarea.val();
                        e === this.initialContent ? localStorage.setItem(this.key, "") : localStorage.setItem(this.key, e)
                    }
                }, {
                    key: "_bindEvents",
                    value: function() {
                        var e = this;
                        this.$textarea.on("input", function() {
                            e._markAsDirty(),
                            e._checkErrors(),
                            e._markAsChanged(),
                            e._saveData(),
                            e._checkTextareaOverflow()
                        }),
                        this.$textarea.on("blur", function() {
                            "" === e.$textarea.val().trim() && e._restore()
                        }),
                        this.$reset.on("click", function() {
                            e._restore()
                        }),
                        this.$el.on("glvrdExercisePassed", function() {
                            e.$el.addClass(u)
                        }),
                        this.$el.on("glvrdExerciseFailed", function() {
                            e.$el.removeClass(u)
                        }),
                        this.$spread.on("spreadOutOfSight", function() {
                            e.$textarea.blur()
                        })
                    }
                }, {
                    key: "_restore",
                    value: function() {
                        this.$textarea.val(this.initialContent).trigger("input"),
                        this.$el.removeClass(d)
                    }
                }, {
                    key: "_checkErrors",
                    value: function() {
                        var e = this
                          , t = this.$textarea.val();
                        this.errors.check(t, {
                            success: function() {
                                return e.$el.trigger("glvrdExerciseScored", {
                                    score: 100
                                })
                            },
                            error: function(t) {
                                return e.$el.trigger("glvrdExerciseScored", {
                                    score: t
                                })
                            }
                        }),
                        this.shouldDisplayScore && (this.$el.removeClass(u),
                        this.errors.getGlvrdScore(t, {
                            success: function(t) {
                                return e._updateGlvrdScore(t)
                            }
                        }))
                    }
                }, {
                    key: "_updateGlvrdScore",
                    value: function(e) {
                        this.score.update(e)
                    }
                }, {
                    key: "_markAsChanged",
                    value: function() {
                        var e = this.$textarea.val();
                        e === this.initialContent ? this.$el.removeClass(d) : this.$el.addClass(d)
                    }
                }, {
                    key: "_markAsDirty",
                    value: function() {
                        this.$el.addClass(h)
                    }
                }, {
                    key: "_checkTextareaOverflow",
                    value: function() {
                        this.$textarea[0].scrollHeight > this.$textarea.height() ? this.$el.addClass(f) : this.$el.removeClass(f)
                    }
                }, {
                    key: "isDirty",
                    get: function() {
                        return this.$el.hasClass(h)
                    }
                }]),
                t
            }(t);
            $(".js__glvrdExercise").each(function() {
                new p($(this))
            })
        }()
    }
    , {
        "./glvrdExerciseErrors": 23,
        "./glvrdExerciseProgress": 25,
        "./glvrdExerciseScore": 26,
        "_base/base": 4
    }],
    23: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var n = e("snowball")
              , o = e("./glvrdRemoteAPI")
              , s = new RegExp(String.fromCharCode(173),"g")
              , a = function() {
                function e(t) {
                    r(this, e),
                    this.$el = t,
                    this.initialErrorsCount = this._countErrors(),
                    this.errors = this._collectErrors(),
                    this.performsRemoteChecks = 0 === this.errors.length,
                    this.MINIMUM_GLVRD_SCORE = 6,
                    (this.performsRemoteChecks || this.$el.is(".is__glvrd")) && this._initializeGlvrdAPI()
                }
                return i(e, [{
                    key: "highlightIn",
                    value: function(e) {
                        var t = e;
                        return this.errors.forEach(function(e) {
                            t = t.replace(e, "<err>$&</err>")
                        }),
                        t = t.replace(/(<err>)+/gi, "<err>").replace(/(<\/err>)+/gi, "</err>"),
                        t + "<br><br><br>"
                    }
                }, {
                    key: "check",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = $.extend({
                            success: function() {},
                            error: function() {}
                        }, t);
                        this.performsRemoteChecks ? this._checkWithGlvrd(e, n) : this._checkErrorsInText(e, n)
                    }
                }, {
                    key: "getGlvrdScore",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = $.extend({
                            success: function() {},
                            error: function() {}
                        }, t);
                        this.glvrd.getScore(e, {
                            success: n.success,
                            error: n.error
                        })
                    }
                }, {
                    key: "_checkErrorsInText",
                    value: function(e, t) {
                        var n = (this.highlightIn(e).match(/<err>/g) || []).length
                          , r = this.initialErrorsCount - n
                          , i = r / this.initialErrorsCount * 100;
                        return i > 100 && (i = 100),
                        i < 0 && (i = 100),
                        n > 0 ? void t.error(i) : void t.success()
                    }
                }, {
                    key: "_checkWithGlvrd",
                    value: function(e) {
                        var t = this
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = function(e) {
                            e >= t.MINIMUM_GLVRD_SCORE ? (n.success(e),
                            t.$el.trigger("glvrdExercisePassed")) : n.error()
                        };
                        this.glvrd.getScore(e, {
                            success: r,
                            error: n.error
                        })
                    }
                }, {
                    key: "_countErrors",
                    value: function() {
                        return this.$el.find("err").length
                    }
                }, {
                    key: "_collectErrors",
                    value: function() {
                        var e = new n("Russian")
                          , t = [];
                        return this.$el.find("err").each(function() {
                            var n = this.innerText
                              , r = n.replace(s, "");
                            e.setCurrent(r),
                            e.stem();
                            var i = e.getCurrent();
                            t.push(new RegExp(n,"gi")),
                            t.push(new RegExp(r,"gi")),
                            t.push(new RegExp(i + "[а-яА-ЯёЁ]*","gi"))
                        }),
                        t
                    }
                }, {
                    key: "_initializeGlvrdAPI",
                    value: function() {
                        this.glvrd = new o
                    }
                }]),
                e
            }();
            t.exports = a
        }()
    }
    , {
        "./glvrdRemoteAPI": 27,
        snowball: 100
    }],
    24: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = function() {
            function e(t) {
                r(this, e),
                this.exercise = t,
                this.$el = t.$el,
                this.$contents = t.$contents,
                this.$textarea = t.$textarea,
                this.$mirror = this._buildMirror(),
                this._bindEvents()
            }
            return i(e, [{
                key: "update",
                value: function(e) {
                    this.$mirror.html(e)
                }
            }, {
                key: "restore",
                value: function() {
                    this._moveMirror()
                }
            }, {
                key: "hasErrors",
                value: function() {
                    return this.$mirror.find("err").length > 0
                }
            }, {
                key: "_bindEvents",
                value: function() {
                    var e = this._moveMirror.bind(this)
                      , t = function() {
                        setTimeout(e, 1)
                    };
                    this.$textarea.on("keydown click", t)
                }
            }, {
                key: "_buildMirror",
                value: function() {
                    return this.$contents.wrapInner('<div class="glvrdExercise-mirror"></div>'),
                    this.$contents.find(".glvrdExercise-mirror")
                }
            }, {
                key: "_moveMirror",
                value: function() {
                    this.$mirror.css({
                        "margin-top": -this.$textarea.scrollTop()
                    })
                }
            }]),
            e
        }();
        t.exports = o
    }
    , {}],
    25: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = function(e, t, n, r) {
            var i = (r - 90) * Math.PI / 180;
            return {
                x: e + n * Math.cos(i),
                y: t + n * Math.sin(i)
            }
        }
          , s = 16
          , a = .584
          , c = function() {
            function e(t) {
                r(this, e),
                this.exercise = t,
                this.lastPercentage = 0,
                this.$el = this._build(),
                this.$circle = this.$el.find("circle"),
                this.$path = this.$el.find("path"),
                this.$checkmark = this.$el.find(".glvrdExercise-progressCheckmark"),
                this._bindEvents()
            }
            return i(e, [{
                key: "_build",
                value: function() {
                    return $('\n      <div class="glvrdExercise-progress">\n        <div class="glvrdExercise-progressCheckmark">✓</div>\n        <svg><circle></circle><path d=""></path></svg>\n      </div>\n    ')
                }
            }, {
                key: "_bindEvents",
                value: function() {
                    var e = this;
                    this.exercise.$el.on("glvrdExerciseScored", function(t, n) {
                        var r = n.score
                          , i = parseFloat((r / 100).toFixed(2))
                          , o = (i - e.lastPercentage) / s;
                        e.exercise.isDirty || (o = 0),
                        cancelAnimationFrame(e.sliceAnimationFrame),
                        e._animateSlice({
                            currentPercentage: e.lastPercentage,
                            targetPercentage: i,
                            step: o
                        })
                    })
                }
            }, {
                key: "_animateSlice",
                value: function(e) {
                    var t = this
                      , n = e.currentPercentage
                      , r = e.targetPercentage
                      , i = e.step;
                    return 0 === i ? void this._updatePie(r) : void ((i > 0 && n < r || i < 0 && n > r) && !function() {
                        var e = t._calculateNewPercentage({
                            current: n,
                            step: i
                        });
                        t._updatePie(e),
                        t.sliceAnimationFrame = requestAnimationFrame(function() {
                            t._animateSlice({
                                currentPercentage: e,
                                targetPercentage: r,
                                step: i
                            })
                        })
                    }())
                }
            }, {
                key: "_calculateNewPercentage",
                value: function(e) {
                    var t = e.current
                      , n = e.step
                      , r = t + n;
                    return r > 1 && (r = 1),
                    r < 0 && (r = 0),
                    r
                }
            }, {
                key: "_updatePie",
                value: function(e) {
                    this.lastPercentage = e;
                    var t = this.$el.width()
                      , n = Math.floor(t / 2 - 1)
                      , r = n + 1
                      , i = o(r, r, n, 0)
                      , s = o(r, r, n, Math.ceil(360 * e))
                      , a = [];
                    a = 0 === e || s.x === i.x && s.y === i.y ? ["M", r, r, "m", -n, 0, "a", n, n, 0, 1, 0, 2 * n, 0, "a", n, n, 0, 1, 0, 2 * -n, 0, "Z"] : ["M", r, r, "L", i.x, i.y, "A", n, n, 0, e > .5 ? 0 : 1, 0, s.x, s.y, "L", r, r, "Z"],
                    this._updateCircleDimensions(r, n),
                    this._updateCheckmarkPositioning({
                        lineHeight: 2 * r,
                        width: t,
                        center: r
                    }),
                    this._updatePathDescription(a.join(" ")),
                    1 === e ? this._triggerPassed() : this._triggerFailed()
                }
            }, {
                key: "_updateCircleDimensions",
                value: function(e, t) {
                    this.$circle.attr({
                        r: t,
                        cx: e,
                        cy: e
                    })
                }
            }, {
                key: "_updateCheckmarkPositioning",
                value: function(e) {
                    var t = e.lineHeight
                      , n = e.width
                      , r = e.center
                      , i = t * a | 0;
                    this.$checkmark.css({
                        "font-size": i,
                        "line-height": t + "px",
                        width: n + "px",
                        left: r + "px",
                        "margin-left": "calc(-" + n / 2 + "px + 0.0476em)"
                    })
                }
            }, {
                key: "_updatePathDescription",
                value: function(e) {
                    this.$path.attr("d", e)
                }
            }, {
                key: "_triggerPassed",
                value: function() {
                    this.exercise.$el.trigger("glvrdExercisePassed")
                }
            }, {
                key: "_triggerFailed",
                value: function() {
                    this.exercise.$el.trigger("glvrdExerciseFailed")
                }
            }]),
            e
        }();
        t.exports = c
    }
    , {}],
    26: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = function() {
            function e(t) {
                r(this, e),
                this.exercise = t,
                this.$score = this.exercise.$score,
                this.errors = this.exercise.errors,
                this.key = this.exercise.scoreKey,
                this._loadSavedScore()
            }
            return i(e, [{
                key: "update",
                value: function(e) {
                    e && (e = parseFloat(e),
                    this._saveScore(e),
                    this._displayScore(e))
                }
            }, {
                key: "_saveScore",
                value: function(e) {
                    this.lastScore = e,
                    localStorage.setItem(this.key, e)
                }
            }, {
                key: "_displayScore",
                value: function(e) {
                    var t = e >= this.errors.MINIMUM_GLVRD_SCORE ? "is__ok" : "is__low"
                      , n = ('<span class="glvrdScore-result">' + e + "</span> из 10").replace(".", ",");
                    this.$score.removeClass("is__ok is__low").addClass(t).find(".glvrdScore-inner").html(n)
                }
            }, {
                key: "_loadSavedScore",
                value: function() {
                    var e = localStorage.getItem(this.key);
                    this.update(e)
                }
            }]),
            e
        }();
        t.exports = o
    }
    , {}],
    27: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var n = e("throttle")
              , o = "https://api.glvrd.ru/v1/glvrd.js"
              , s = 1e3
              , a = 500
              , c = new RegExp(String.fromCharCode(173),"g")
              , l = new RegExp("[  ]{2,}","g")
              , u = function() {
                function e() {
                    r(this, e),
                    this._loadScript(),
                    this._throttledProofread = n(s, this._proofread.bind(this)),
                    this.scriptLoadAttempts = 0
                }
                return i(e, [{
                    key: "getScore",
                    value: function(e, t) {
                        var n = this._cleanText(e);
                        return window.glvrd ? (this.scriptLoadAttempts = 0,
                        void this._throttledProofread(n, t)) : void this._loadScriptAndRepeatCheck(e, t)
                    }
                }, {
                    key: "_loadScriptAndRepeatCheck",
                    value: function(e, t) {
                        var n = this;
                        clearTimeout(this.lastGetScoreTimeout),
                        clearTimeout(this.lastLoadScriptTimeout),
                        this.scriptLoadAttempts = this.scriptLoadAttempts + 1,
                        this.lastLoadScriptTimeout = setTimeout(this._loadScript.bind(this), a * this.scriptLoadAttempts),
                        this.lastGetScoreTimeout = setTimeout(function() {
                            return n.getScore(e, t)
                        }, a * this.scriptLoadAttempts)
                    }
                }, {
                    key: "_proofread",
                    value: function(e, t) {
                        window.glvrd.proofread(e, function(e) {
                            return "ok" !== e.status ? t.error() : t.success(parseFloat(e.score))
                        })
                    }
                }, {
                    key: "_loadScript",
                    value: function() {
                        var e = {
                            dataType: "script",
                            cache: !0,
                            url: o
                        };
                        return $.ajax(e)
                    }
                }, {
                    key: "_cleanText",
                    value: function(e) {
                        return e.trim().replace(c, "").replace(l, " ").replace(" \n", "\n")
                    }
                }]),
                e
            }();
            t.exports = u
        }()
    }
    , {
        throttle: 110
    }],
    28: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.CLASS_BLEED = "is__bleed",
                        this.OPPOSITES = {
                            top: "bottom",
                            bottom: "top",
                            left: "right",
                            right: "left"
                        }
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        this.$page = this.$el.closest(".js__page"),
                        this.initialMargin = this.$el.css("margin"),
                        this.imageRatio = this.$el.data("width") / this.$el.data("height"),
                        this._initBleeds()
                    }
                }, {
                    key: "postReset",
                    value: function() {
                        var e = this;
                        this.$el.css("margin", this.initialMargin),
                        this.bleeds.forEach(function(t) {
                            e.$el.removeClass(t.className)
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this.$el.offset()
                          , t = this.$page.outerHeight();
                        this.height = this.$el.height(),
                        this.width = this.$el.width(),
                        this.distances = {},
                        this.distances.top = e.top - this.spread.triggers.hold,
                        this.distances.left = e.left,
                        this.distances.bottom = t - this.distances.top - this.height,
                        this.distances.right = this.spread._book.viewWidth - this.distances.left - this.width,
                        this.calculatedWidth = this.height * this.imageRatio,
                        this.calculatedHeight = this.width / this.imageRatio
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this;
                        this.bleeds.forEach(function(t) {
                            (t.hasOpposite || e._testBleed(t.direction)) && (e.$el.css("margin-" + t.direction, -e.distances[t.direction]),
                            e.$el.addClass(t.className))
                        })
                    }
                }, {
                    key: "_constructBleedClass",
                    value: function(e) {
                        return this.CLASS_BLEED + e.charAt(0).toUpperCase() + e.slice(1)
                    }
                }, {
                    key: "_initBleeds",
                    value: function() {
                        var e = this;
                        this.directions = this.$el.data("bleed").split(/[ ,]/).filter(function(e) {
                            return e.length
                        }),
                        this.bleeds = this.directions.map(function(t) {
                            return {
                                direction: t,
                                className: e._constructBleedClass(t),
                                hasOpposite: e.directions.indexOf(e.OPPOSITES[t]) > -1
                            }
                        })
                    }
                }, {
                    key: "_testBleed",
                    value: function(e) {
                        return "left" === e || "right" === e ? this.directions.indexOf("top") > -1 || this.directions.indexOf("bottom") > -1 || this.calculatedWidth > this.width : this.directions.indexOf("left") > -1 || this.directions.indexOf("right") > -1 || this.calculatedHeight > this.height
                    }
                }]),
                t
            }(t);
            $(".js__bleed").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    29: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isMother = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.evenModules = []
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        var e = this;
                        e.findEvenSubModules(e)
                    }
                }, {
                    key: "findEvenSubModules",
                    value: function(e) {
                        var t = this;
                        e.subModules.forEach(function(e) {
                            e.$el.hasClass("is__evenwidth") && t.evenModules.push(e),
                            t.findEvenSubModules(e)
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this
                          , t = e.detectMinimalWidth();
                        e.evenModules.forEach(function(e) {
                            e.calculateWithConstraints && e.calculateWithConstraints({
                                width: t
                            })
                        })
                    }
                }, {
                    key: "detectMinimalWidth",
                    value: function() {
                        var e = this.evenModules.map(function(e) {
                            return e.calculatedWidth
                        });
                        return Math.min.apply(Math, e)
                    }
                }]),
                t
            }(t);
            $(".rows.is__evenwidths").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    30: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.CLASS_ORIGINAL = "is__original",
                        this.CLASS_FITTED = "is__fitted",
                        this.FLEX_DEFAULTS = "0 1 auto"
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        this.initialWidth = this.$el.data("width"),
                        this.initialHeight = this.$el.data("height"),
                        this.initialFlex = this.$el.css("flex") || this.FLEX_DEFAULTS,
                        this.ratio = this.initialWidth / this.initialHeight,
                        this.isBordered = this.$el.hasClass("is__bordered"),
                        this.isCutted = this.$el.hasClass("is__cutOffBelow"),
                        this.border = {
                            width: 0,
                            height: 0
                        },
                        this.isBordered && (this.border.width = parseFloat(this.$el.css("border-right-width")) + parseFloat(this.$el.css("border-left-width")),
                        this.border.height = parseFloat(this.$el.css("border-top-width")) + parseFloat(this.$el.css("border-bottom-width")))
                    }
                }, {
                    key: "postReset",
                    value: function() {
                        this.$el.removeClass(this.CLASS_FITTED),
                        this.$el.addClass(this.CLASS_ORIGINAL),
                        this.$el.css({
                            flex: this.initialFlex,
                            height: "auto",
                            width: "auto"
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this.$el[0].getBoundingClientRect();
                        this.width = e.width - this.border.width,
                        this.height = e.height - this.border.height,
                        this.calculatedHeight = this.width / this.ratio,
                        this.isFitted = this.calculatedHeight < this.height,
                        this.isFitted || (this.calculatedHeight = this.height),
                        this.calculatedWidth = this.height * this.ratio,
                        this.calculatedWidth > this.width && (this.calculatedWidth = this.width),
                        this.calculatedWidth += this.border.width,
                        this.calculatedHeight += this.border.height
                    }
                }, {
                    key: "calculateWithConstraints",
                    value: function(e) {
                        var t = e.width;
                        t && (this.calculatedWidth = t,
                        this.calculatedHeight = t / this.ratio)
                    }
                }, {
                    key: "setHeight",
                    value: function(e) {
                        this.calculatedHeight = e,
                        this.calculatedWidth = e * this.ratio,
                        this.preRender()
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        this.$el.removeClass(this.CLASS_ORIGINAL),
                        this.isFitted && this.$el.addClass(this.CLASS_FITTED),
                        this.$el.css({
                            flex: this.FLEX_DEFAULTS,
                            height: this.calculatedHeight,
                            width: this.isCutted ? "100%" : this.calculatedWidth
                        })
                    }
                }]),
                t
            }(t);
            $(".js__fitToContent").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    31: [function(e, t, n) {
        "use strict";
        I18n.translations.ru.navigator = {
            searchPlaceholder: "Поиск по книге",
            bookmarks: "Закладки",
            bookmarksPlaceholder: "Добавьте закладки",
            nothingFound: "Ничего не нашлось"
        },
        I18n.translations.en.navigator = {
            searchPlaceholder: "Search the book",
            bookmarks: "Bookmarks",
            bookmarksPlaceholder: "Add bookmarks",
            nothingFound: "Nothing's been found"
        }
    }
    , {}],
    32: [function(e, t, n) {
        "use strict";
        $(function() {
            var t = e("throttle")
              , n = e("inobounce")
              , r = "is__test"
              , i = "is__current"
              , o = "is__book-current"
              , s = "is__visible"
              , a = "has__no-bookmarks"
              , c = "is__soon"
              , l = 65
              , u = 50
              , d = 18
              , h = 44
              , f = window.application.isOnMobile ? 60 : 30
              , p = 400
              , g = function(e) {
                var t = this;
                t.toc = window.application.toc,
                t.urls = window.application.urls,
                t.toc && t.toc[0] && t.toc[0].chapters && (t.$el = e,
                t.$box = t.$el.find(".js__nav-box"),
                t.$contentsBox = t.$box.find(".js__nav-contents"),
                t.contentsBox = t.$contentsBox[0],
                t.$previewsBox = t.$box.find(".js__nav-previews"),
                t.$searchBox = t.$box.find(".js__nav-search-results"),
                t.$bookmarksToggler = t.$box.find(".js__nav-bookmarks"),
                t.$body = $("body"),
                t.CLASS_BOOKMARKED = "is__bookmarked",
                t.CLASS_CHECKED = "is__checked",
                t.CLASS_SHOWBOOKMARKS = "is__showbookmarks",
                $(document).on("bookReady", function() {
                    t.book = window.application.book,
                    requestAnimationFrame(t.init.bind(t))
                }))
            };
            g.prototype.init = function() {
                var e = this;
                e.buildContents(),
                e.buildPreviews(),
                e.buildTriggers(),
                $(document).on("openNavigator", e.show.bind(e)),
                $(document).on("bookResizeDone", function() {
                    e.rememberScrollPosition(),
                    e.buildTriggers(),
                    e.updateContentsSelectionFromPreviews()
                }),
                $(window).on("keydown", function(t) {
                    27 === t.keyCode && e.hide()
                }),
                e.$el.on("click", function(t) {
                    t.preventDefault(),
                    e.hide()
                }),
                e.$el.on("wheel", function(t) {
                    t.preventDefault();
                    var n = t.originalEvent
                      , r = e.$searchBox.hasClass("is__active") ? e.$searchBox : e.$previewsBox;
                    r[0].dispatchEvent(new n.constructor(n.type,n))
                }),
                e.$previewsBox.add(e.$searchBox).on("wheel", function(e) {
                    e.stopPropagation()
                }),
                e.$contentsBox.on("wheel", function(t) {
                    e.contentsBox.clientHeight < e.contentsBox.scrollHeight && t.stopPropagation()
                }),
                e.$box.on("click", function(e) {
                    e.stopPropagation()
                }),
                e.$bookmarksToggler.on("click", function(t) {
                    t.preventDefault(),
                    e.bookmarksToggle()
                }),
                e.$previewsBox.preventTouchFromHittingBounds(),
                e.$previewsBox.on("scroll", t(f, e.handlePreviewsScroll.bind(e))),
                e.$el.on("navGoToSpread", function(t, n) {
                    e.goToSpreadNumber(n)
                }),
                e.$el.find("a").on("click", function(e) {
                    e.preventDefault()
                })
            }
            ,
            g.prototype.buildContents = function() {
                var e = this
                  , t = "nav-contents-section";
                e.toc.forEach(function(n) {
                    var r = $("<div>", {
                        "class": t
                    })
                      , s = $("<h2>", {
                        "class": t + "-title"
                    })
                      , a = $("<div>", {
                        "class": t + "-chapters"
                    });
                    s.text(n.title),
                    s.on("click", function() {
                        a.find("a").first().trigger("click")
                    }),
                    n.chapters.forEach(function(n) {
                        var r = $("<div>", {
                            "class": e.getChapterClassName(n, t)
                        })
                          , s = $("<a>", {
                            href: e.urls.forHash("#preview-" + n.slug)
                        });
                        s.text(n.title),
                        r.html(s),
                        r.on("navSetAsCurrentContentsSection", function() {
                            $(this).addClass(i)
                        }),
                        r.on("navSetAsCurrentBookContentsSection", function() {
                            e.$contentsBox.find("." + o).removeClass(o),
                            $(this).addClass(o)
                        }),
                        s.on("click", e.selectChapter.bind(e)),
                        r.appendTo(a)
                    }),
                    r.append(s),
                    r.append(a),
                    r.appendTo(e.$contentsBox)
                })
            }
            ,
            g.prototype.buildPreviews = function() {
                var e = this
                  , t = e.$previewsBox.find("a[data-spread-number]").map(function(e, t) {
                    return $(t).data("spreadNumber")
                }).get();
                e.previewBounds = {
                    min: Math.min.apply(Math, t),
                    max: Math.max.apply(Math, t)
                }
            }
            ,
            g.prototype.buildTriggers = function() {
                var e = this
                  , t = e.$previewsBox.scrollTop();
                e.targets = [],
                e.offsets = [],
                e.triggers = [],
                e.$previewsBox.find(".nav-previews-section-chapter").map(function() {
                    var e = $(this).position().top + t;
                    return [[this.id, e]]
                }).sort(function(e, t) {
                    return e[1] - t[1]
                }).each(function() {
                    e.targets.push(this[0]),
                    e.offsets.push(this[1]),
                    e.triggers.push(0)
                });
                for (var n = e.$previewsBox[0].scrollHeight - e.$previewsBox.outerHeight(), r = e.offsets.length - 1; r > 0; r--)
                    e.offsets[r] > n && (e.offsets[r] = n,
                    n -= l),
                    e.triggers[r] = e.offsets[r] - h
            }
            ,
            g.prototype.show = function() {
                var e = this;
                e.processCurrentBookSpread(),
                e.processCurrentBookmarks(),
                e.processCurrentCheckMarks(),
                e.updateContentsSelectionFromPreviews(),
                e.$el.addClass(s),
                e.$el.trigger("navOpened"),
                e.resetImageLoader(),
                e.disableBodyScrolling()
            }
            ,
            g.prototype.disableBodyScrolling = function() {
                var e = this;
                e.rememberScrollPosition(),
                window.application.isOnMobile ? ($(document).trigger("bookDrawLock"),
                n.enable()) : e.$body.css("overflow", "hidden")
            }
            ,
            g.prototype.rememberScrollPosition = function() {
                var e = this;
                e.previousBodyPosition = e.$body.scrollTop()
            }
            ,
            g.prototype.hide = function() {
                var e = this;
                e.$el.removeClass(s),
                e.$el.trigger("navClosed").trigger("navHidden"),
                e.disableBookmarks(),
                e.resetImageLoader(),
                e.enableBodyScrolling(),
                e.ensureScrollPositionIsTheSame()
            }
            ,
            g.prototype.enableBodyScrolling = function() {
                var e = this;
                window.application.isOnMobile ? ($(document).trigger("bookDrawRelease"),
                n.disable()) : e.$body.css("overflow", "auto")
            }
            ,
            g.prototype.ensureScrollPositionIsTheSame = function() {
                var e = this;
                window.application.isOnMobile && e.$body.scrollTop(e.previousBodyPosition)
            }
            ,
            g.prototype.resetImageLoader = function() {
                setTimeout(function() {
                    $(document).trigger("imageLoadersReset")
                }, p)
            }
            ,
            g.prototype.goToSpreadNumber = function(e) {
                var t = this
                  , n = e.number;
                t.enableBodyScrolling(),
                requestAnimationFrame(function() {
                    var r = window.application.isOnMobile;
                    t.$el.removeClass(s),
                    t.$el.trigger("navClosed"),
                    t.book.goToSpreadNumber(n, r, $.extend({
                        preload: !0,
                        stop: t.resetImageLoader.bind(t)
                    }, e))
                })
            }
            ,
            g.prototype.bookmarksToggle = function() {
                var e = this
                  , t = e.$previewsBox.scrollTop();
                e.$el.trigger("bookmarksToggle"),
                e.$el.toggleClass(e.CLASS_SHOWBOOKMARKS),
                e.scrollPreviewsBoxTo(e.previousPreviewsPosition, !0),
                e.previousPreviewsPosition = t,
                e.updateContentsSelectionFromPreviews()
            }
            ,
            g.prototype.selectChapter = function(e) {
                var t = this;
                e.preventDefault();
                var n = e.target.hash.replace("#", "");
                t.$el.trigger("selectChapter"),
                t.updateContentsSelection(n),
                t.scrollToSection(n)
            }
            ,
            g.prototype.disableBookmarks = function() {
                var e = this;
                e.$el.removeClass(e.CLASS_SHOWBOOKMARKS)
            }
            ,
            g.prototype.isBookmarksEnabled = function() {
                var e = this;
                return e.$el.hasClass(e.CLASS_SHOWBOOKMARKS)
            }
            ,
            g.prototype.processCurrentBookSpread = function() {
                var e = this;
                if (e.previousPreviewsPosition = 0,
                e.$previewsBox.find("[data-spread-number]").removeClass(i),
                !e.book.currentSpread)
                    return void e.scrollPreviewsBoxTo(0, !0);
                var t = e.book.currentSpread.number
                  , n = e.$previewsBox.find('[data-spread-number="' + t + '"]');
                n.addClass(i);
                var r = n.closest(".nav-previews-section-chapter").attr("id");
                r || (r = t > e.previewBounds.max ? e.targets[e.targets.length - 1] : e.targets[0]),
                e.processCurrentBookChapter(r)
            }
            ,
            g.prototype.processCurrentBookChapter = function(e) {
                var t = this;
                t.$contentsBox.find('[href$="' + e + '"]').trigger("navSetAsCurrentBookContentsSection"),
                t.isBookmarksEnabled() ? t.previousPreviewsPosition = t.getSectionScrollTop(e) : t.scrollToSection(e, !0)
            }
            ,
            g.prototype.processCurrentBookmarks = function() {
                var e = this
                  , t = window.application.state.getBookmarks();
                e.$previewsBox.find("." + e.CLASS_BOOKMARKED).removeClass(e.CLASS_BOOKMARKED),
                e.$previewsBox.find(".nav-previews-section-spread").each(function(n, r) {
                    var i = $(r)
                      , o = i.data("spread-id");
                    if (t.indexOf(String(o)) > -1 || t.indexOf(o) > -1) {
                        i.addClass(e.CLASS_BOOKMARKED);
                        var s = i.closest(".nav-previews-section-chapter");
                        s.hasClass(e.CLASS_BOOKMARKED) || s.addClass(e.CLASS_BOOKMARKED)
                    }
                }),
                e.$el.find("." + e.CLASS_BOOKMARKED).length < 1 ? e.$previewsBox.addClass(a) : e.$previewsBox.removeClass(a)
            }
            ,
            g.prototype.processCurrentCheckMarks = function() {
                var e = this
                  , t = window.application.state.getCheckMarks();
                e.$previewsBox.find("." + e.CLASS_CHECKED).removeClass(e.CLASS_CHECKED),
                e.$previewsBox.find(".nav-previews-section-spread").each(function(n, r) {
                    var i = $(r)
                      , o = i.data("spread-id");
                    (t.indexOf(String(o)) > -1 || t.indexOf(o) > -1) && i.addClass(e.CLASS_CHECKED)
                })
            }
            ,
            g.prototype.clearContentsSelection = function() {
                var e = this;
                e.$contentsBox.find("." + i).removeClass(i),
                e.previousChapter = null
            }
            ,
            g.prototype.updateContentsSelection = function(e) {
                var t = this;
                t.disableBookmarks(),
                t.clearContentsSelection();
                var n = t.$contentsBox.find('[href$="#' + e + '"]');
                n.trigger("navSetAsCurrentContentsSection"),
                t.previousChapter = e,
                n.parent().ensureIsVisibleIn(t.$contentsBox, {
                    scrollSafeZone: u
                })
            }
            ,
            g.prototype.getSectionScrollTop = function(e) {
                for (var t = this, n = 0, r = t.targets.length; n < r; n++)
                    if (t.targets[n] === e)
                        return t.offsets[n] - d
            }
            ,
            g.prototype.scrollToSection = function(e, t) {
                var n = this
                  , r = n.getSectionScrollTop(e);
                void 0 !== r && n.scrollPreviewsBoxTo(r, t)
            }
            ,
            g.prototype.scrollPreviewsBoxTo = function(e, t) {
                var n = this;
                n.scrollIsLocked = !0,
                t ? (n.$previewsBox.scrollTop(e),
                n.scrollIsLocked = !1) : n.$previewsBox.animate({
                    scrollTop: e
                }, function() {
                    n.scrollIsLocked = !1
                })
            }
            ,
            g.prototype.handlePreviewsScroll = function() {
                var e = this;
                e.isBookmarksEnabled() || e.scrollIsLocked || e.updateContentsSelectionFromPreviews()
            }
            ,
            g.prototype.updateContentsSelectionFromPreviews = function() {
                var e = this;
                if (e.isBookmarksEnabled())
                    e.clearContentsSelection();
                else {
                    var t = e.getCurrentChapterIdByTriggers();
                    e.previousChapter !== t && e.updateContentsSelection(t)
                }
            }
            ,
            g.prototype.getCurrentChapterIdByTriggers = function() {
                var e = this
                  , t = e.$previewsBox.scrollTop();
                t = t < 0 ? 0 : t;
                var n, r = e.triggers;
                for (n = r.length; n--; )
                    if (t >= r[n] - d && (void 0 === r[n + 1] || t < r[n + 1]))
                        return e.targets[n]
            }
            ,
            g.prototype.getChapterClassName = function(e, t) {
                var n = t + "-chapter ";
                return e.isTest && (n += r),
                e.isSoon && (n += c),
                n
            }
            ,
            $(".js__nav").each(function() {
                new g($(this))
            })
        })
    }
    , {
        inobounce: 97,
        throttle: 110
    }],
    33: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = function(e) {
                this.$nav = e,
                this.$box = e.find(".js__nav-box"),
                window.application.isOnMobile && this.bindEvents()
            };
            e.CLASS_VISIBLE = "is__visible",
            e.INITIAL_FIXED_TOP_POSITION = 50,
            e.TRACK_INTERVAL = 200,
            e.prototype.bindEvents = function() {
                var e = this;
                e.$box.on("transitionend", e.handleOpenedNav.bind(e)),
                e.$nav.on("navClosed", e.handleClosedNav.bind(e))
            }
            ,
            e.prototype.handleOpenedNav = function() {
                var t = this;
                requestAnimationFrame(function() {
                    t.$nav.hasClass(e.CLASS_VISIBLE) && (t.$box.css({
                        position: "absolute",
                        top: window.pageYOffset + e.INITIAL_FIXED_TOP_POSITION
                    }),
                    t.stopTracking(),
                    t.startTracking())
                })
            }
            ,
            e.prototype.handleClosedNav = function() {
                var t = this;
                t.$box.css({
                    position: "fixed",
                    top: e.INITIAL_FIXED_TOP_POSITION
                }),
                t.stopTracking()
            }
            ,
            e.prototype.startTracking = function() {
                var t = this;
                t.trackInterval = setAnimationFrameInterval(function() {
                    var n = t.$box[0].getBoundingClientRect().top;
                    if (Math.abs(n) > e.INITIAL_FIXED_TOP_POSITION) {
                        var r = n - e.INITIAL_FIXED_TOP_POSITION;
                        t.$box.css({
                            top: t.$box.offset().top - r
                        })
                    }
                }, e.TRACK_INTERVAL)
            }
            ,
            e.prototype.stopTracking = function() {
                var e = this;
                clearAnimationFrameInterval(e.trackInterval)
            }
            ,
            $(".js__nav").each(function() {
                new e($(this))
            })
        })
    }
    , {}],
    34: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = "nav-previews-section"
              , t = function(e) {
                this.$el = e,
                this.toc = window.application.toc,
                this.urls = window.application.urls,
                this.toc && this.toc[0] && this.toc[0].chapters && (this.build(),
                this.fixateDimensions(),
                $(document).on("bookResize", this.fixateDimensions.bind(this)))
            };
            t.prototype.build = function() {
                var t = this;
                t.toc.forEach(function(n) {
                    var r = $("<div>", {
                        "class": e
                    })
                      , i = $("<div>", {
                        "class": e + "-chapters"
                    });
                    i.appendTo(r),
                    n.chapters.forEach(function(n) {
                        var r = $("<div>", {
                            "class": e + "-chapter",
                            id: "preview-" + n.slug
                        })
                          , o = $("<h2>", {
                            "class": e + "-chapter-title"
                        })
                          , s = $("<div>", {
                            "class": e + "-chapter-spreads"
                        });
                        o.text(n.title).appendTo(r),
                        s.appendTo(r),
                        n.spreads.forEach(function(n) {
                            var r = $("<div>", {
                                "class": e + "-spread",
                                "data-spread-number": n.number,
                                "data-spread-id": n.id
                            })
                              , i = $("<a>")
                              , o = $("<span>");
                            o.addClass(e + "-spread-preview-number").text(n.number + 1).appendTo(i),
                            i.addClass(e + "-spread-preview").attr("href", t.urls.forSpreadNumber(n.number)).attr("data-background-src", "previews/" + n.id + ".png").attr("data-spread-number", n.number).appendTo(r),
                            i.on("click", function(e) {
                                e.preventDefault(),
                                $(this).trigger("navGoToSpread", {
                                    number: n.number
                                })
                            }),
                            r.appendTo(s)
                        }),
                        r.appendTo(i)
                    }),
                    r.appendTo(t.$el)
                })
            }
            ,
            t.prototype.fixateDimensions = function() {
                var e = this;
                e.$el.css({
                    height: "auto",
                    width: "auto"
                });
                var t = {
                    height: e.$el.outerHeight(),
                    width: e.$el.outerWidth()
                };
                e.$el.css(t)
            }
            ,
            $(".js__nav-previews").each(function() {
                new t($(this))
            })
        })
    }
    , {}],
    35: [function(e, t, n) {
        "use strict";
        $(function() {
            var t = e("debounce")
              , n = function(e) {
                this.$nav = e,
                this.$search = e.find(".js__nav-search"),
                this.$searchField = this.$search.find("input"),
                this.$results = e.find(".js__nav-search-results"),
                this.$resultsContainer = e.find(".js__nav-search-results-wrap"),
                this.apiRoot = $("#api-root").attr("content"),
                this.searchApiUrl = $("#search-api-url").attr("content");
                var t = this.toc = window.application.toc;
                t && t[0] && t[0].chapters && (this.parseToc(),
                this.bindEvents(),
                this.$results.preventTouchFromHittingBounds())
            };
            n.CLASS_SHOW_SEARCH_RESULTS = "has__shown-search-results",
            n.CLASS_ACTIVE = "is__active",
            n.CLASS_CURRENT = "is__current",
            n.CLASS_LOADING = "is__loading",
            n.CLASS_STILL_LOADING = "is__still-loading",
            n.CLASS_LOADED = "is__loaded",
            n.CLASS_SOURCE_PREVIEW = "nav-previews-section-spread",
            n.CLASS_CAN_CLEAR_SEARCH = "can__clear-search",
            n.CLASS_HAS_BLANK_SEARCH_RESULTS = "has__blank-search-results",
            n.INPUT_CHANGE_THRESHOLD = window.application.isOnMobile ? 500 : 100,
            n.BEST_MATCH_TITLE = '<span class="best-match">Лучший результат</span>',
            n.prototype.parseToc = function() {
                var e = this;
                e.spreadsToChapterTitles = {},
                e.toc.forEach(function(t) {
                    t.chapters.forEach(function(t) {
                        t.spreads.forEach(function(n) {
                            e.spreadsToChapterTitles[n.number] = t.title
                        })
                    })
                })
            }
            ,
            n.prototype.bindEvents = function() {
                var e = this;
                e.$nav.on("bookmarksToggle selectChapter navHidden", e.clear.bind(e)),
                e.$nav.on("navOpened", e.handleOpenedNav.bind(e)),
                e.$search.on("click", ".js__nav-search-field-clear", e.clearSearchInput.bind(e)),
                e.$nav.on("navClosed", e.hideIosKeyboard.bind(e)),
                e.$search.on("keyup", "input", e.handleInput.bind(e)),
                e.$results.on("click", "a", e.goToSpread.bind(e)),
                e.$search.on("keyup change", "input", t(n.INPUT_CHANGE_THRESHOLD, e.runSearch.bind(e)))
            }
            ,
            n.prototype.runSearch = function(e) {
                var t = this
                  , n = $.trim($(e.target).val());
                n.length > 1 && t.query !== n && (t.query = n,
                t.getSearchResults(n))
            }
            ,
            n.prototype.clear = function() {
                var e = this;
                e.$search.find("input").val(""),
                e.hideIosKeyboard(),
                e.$search.removeClass(n.CLASS_CAN_CLEAR_SEARCH),
                e.hideSearchResults()
            }
            ,
            n.prototype.clearSearchInput = function() {
                var e = this;
                e.$search.find("input").val("").select(),
                e.$search.removeClass(n.CLASS_CAN_CLEAR_SEARCH),
                e.hideSearchResults()
            }
            ,
            n.prototype.handleOpenedNav = function() {
                var e = this;
                window.application.isOnMobile || e.$searchField.select(),
                e.updateCurrentSpread()
            }
            ,
            n.prototype.updateCurrentSpread = function() {
                var e = this
                  , t = window.application.book.currentSpread;
                e.$results.find("." + n.CLASS_CURRENT).removeClass(n.CLASS_CURRENT),
                t && e.$results.find('[data-spread-number="' + t.number + '"]').addClass(n.CLASS_CURRENT)
            }
            ,
            n.prototype.handleInput = function(e) {
                var t = this
                  , r = $.trim($(e.target).val());
                r.length > 0 ? (t.prepareSearchResults(),
                t.$search.addClass(n.CLASS_CAN_CLEAR_SEARCH)) : (t.hideSearchResults(),
                t.$search.removeClass(n.CLASS_CAN_CLEAR_SEARCH))
            }
            ,
            n.prototype.prepareSearchResults = function() {
                var e = this;
                e.$nav.hasClass(n.CLASS_SHOW_SEARCH_RESULTS) || (e.$results.addClass(n.CLASS_ACTIVE),
                e.$resultsContainer.empty(),
                e.$nav.addClass(n.CLASS_SHOW_SEARCH_RESULTS))
            }
            ,
            n.prototype.hideSearchResults = function() {
                var e = this;
                e.query = "",
                e.$nav.removeClass(n.CLASS_SHOW_SEARCH_RESULTS),
                e.$results.removeClass(n.CLASS_ACTIVE),
                e.$resultsContainer.empty(),
                e.hideSearchResultsPlaceholder(),
                e.resetImageLoader()
            }
            ,
            n.prototype.getSearchResults = function(e) {
                var t = this;
                $.ajax({
                    type: "GET",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    xhrFields: {
                        withCredentials: !0
                    },
                    data: {
                        query: e
                    },
                    url: t.searchUrl(),
                    beforeSend: t.handleBeforeSend.bind(t),
                    success: function(n) {
                        t.query = e,
                        t.displaySearchResults(n)
                    }
                })
            }
            ,
            n.prototype.handleBeforeSend = function(e) {
                var t = this;
                return t.currentXhr && t.currentXhr.abort(),
                t.currentXhr = e,
                clearTimeout(t.loadingTimeout),
                clearTimeout(t.loadedTimeout),
                t.$nav.removeClass(n.CLASS_LOADED).addClass(n.CLASS_LOADING),
                t.loadingTimeout = setTimeout(function() {
                    t.$nav.addClass(n.CLASS_STILL_LOADING)
                }, 1e3),
                !0
            }
            ,
            n.prototype.displaySearchResults = function(e) {
                var t = this;
                t.$results.scrollTop(0),
                t.$resultsContainer.empty(),
                e.length ? (t.hideSearchResultsPlaceholder(),
                t.buildAndAppendSearchResults(e)) : t.displaySearchResultsPlaceholder(),
                clearTimeout(t.loadingTimeout),
                t.$nav.removeClass(n.CLASS_LOADING).removeClass(n.CLASS_STILL_LOADING).addClass(n.CLASS_LOADED),
                t.loadedTimeout = setTimeout(function() {
                    t.$nav.removeClass(n.CLASS_LOADED)
                }, 1e3),
                t.resetImageLoader()
            }
            ,
            n.prototype.displaySearchResultsPlaceholder = function() {
                this.$results.addClass(n.CLASS_HAS_BLANK_SEARCH_RESULTS)
            }
            ,
            n.prototype.hideSearchResultsPlaceholder = function() {
                this.$results.removeClass(n.CLASS_HAS_BLANK_SEARCH_RESULTS)
            }
            ,
            n.prototype.buildAndAppendSearchResults = function(e) {
                var t = this
                  , r = "." + n.CLASS_SOURCE_PREVIEW;
                e.forEach(function(e) {
                    var n = t.buildExcerpt(e)
                      , i = {
                        "class": "search-result search-result-" + e.number,
                        data: {
                            matches: e.matches
                        }
                    };
                    t.$nav.find(r + '[data-spread-number="' + e.number + '"]').clone().wrap($("<div>", i)).parent().append($("<div>", {
                        "class": "search-result-excerpts",
                        html: n
                    })).appendTo(t.$resultsContainer)
                })
            }
            ,
            n.prototype.buildExcerpt = function(e) {
                var t = this
                  , r = [e.number + 1, t.spreadsToChapterTitles[e.number]];
                e.bestMatch && r.push(n.BEST_MATCH_TITLE);
                var i = '<h2 class="search-result-header">' + r.join(" · ") + "</h2>"
                  , o = e.quotes.map(function(e) {
                    return "<p>" + e + "</p>"
                });
                return o.concat([i])
            }
            ,
            n.prototype.goToSpread = function(e) {
                e.preventDefault();
                var t = this
                  , n = $(e.target).attr("data-spread-number");
                t.highlightResults(n),
                t.$results.trigger("navGoToSpread", {
                    number: n,
                    toFirstMatch: !0
                })
            }
            ,
            n.prototype.highlightResults = function(e) {
                var t = this
                  , n = t.getKeywordsToHighlight(e);
                $(document).trigger("spreadHighlightKeywords", {
                    spreadNumber: e,
                    keywords: n
                })
            }
            ,
            n.prototype.getKeywordsToHighlight = function(e) {
                var t = this;
                return t.$results.find(".search-result-" + e).data("matches")
            }
            ,
            n.prototype.hideIosKeyboard = function() {
                var e = this;
                window.application.isOnMobile && (document.activeElement.blur(),
                e.$search.blur())
            }
            ,
            n.prototype.searchUrl = function() {
                return this.searchApiUrl ? this.searchApiUrl : this.apiRoot + "search"
            }
            ,
            n.prototype.resetImageLoader = function() {
                $(document).trigger("imageLoadersReset")
            }
            ,
            $(".js__nav").each(function() {
                new n($(this))
            })
        })
    }
    , {
        debounce: 106
    }],
    36: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isAffectingHeight = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.$pageIn = e.$el.children(".page-in"),
                        e.$pageInChildren = e.$pageIn.children()
                    }
                }, {
                    key: "preCalculate",
                    value: function() {
                        var e = this
                          , t = e.$pageIn.outerHeight()
                          , n = 0;
                        e.$pageInChildren.each(function() {
                            n += $(this).outerHeight()
                        }),
                        e.diffHeight = n - t - 18,
                        e.diffHeight < 0 && (e.diffHeight = 0)
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this;
                        e.$el.css({
                            "margin-bottom": e.diffHeight + "px"
                        })
                    }
                }]),
                t
            }(t);
            $(".js__page.is__halfsticky").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    37: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            e("stickyfill");
            var t = e("_base/base")
              , n = "is__slow"
              , a = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "onSpreadCreated",
                    value: function() {
                        this.spread.reactiveModules.push(this),
                        this.spread.dependentModules.push(this)
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        this.$spread = this.$el.closest(".js__spread"),
                        this.$pageBox = this.$el.find(".js__page-in"),
                        this.subModules = [],
                        this.isOnMobile = window.application.isOnMobile,
                        this.isLastPage = this.$spread.find(".js__page").last().is(this.$el),
                        this.$spread.on("spreadDevisualized", function() {
                            e.isPageSlow() && e.releaseTransform()
                        }),
                        this.$spread.on("spreadUnloaded", function() {
                            e.usesSticky() && Stickyfill.remove(e.$el[0])
                        }),
                        this.$spread.on("spreadLoaded", function() {
                            e.usesSticky() && Stickyfill.add(e.$el[0])
                        })
                    }
                }, {
                    key: "isPageSlow",
                    value: function() {
                        return this.$el.hasClass(n)
                    }
                }, {
                    key: "supportsSticky",
                    value: function() {
                        return this.spread._book.supportsSticky
                    }
                }, {
                    key: "usesSticky",
                    value: function() {
                        return this.spread.needsSlowdown && !this.supportsSticky()
                    }
                }, {
                    key: "releaseTransform",
                    value: function() {
                        this.$pageBox.css("transform", "translate(0, 0)"),
                        this.spread.slowPagePosition = 0
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        this.isPageSlow() && (this.$el.removeClass(n),
                        this.$el.find(".page-transformation .js__page-in").unwrap(),
                        this.supportsSticky() || Stickyfill.remove(this.$el[0]),
                        this.releaseTransform())
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        this.spread.needsSlowdown && (this.$el.addClass(n),
                        this.$pageBox = this.$el.find(".js__page-in").wrap($('<div class="page-transformation"></div>')).parent())
                    }
                }, {
                    key: "reactTo",
                    value: function(e) {
                        var t = this;
                        this.isPageSlow() && requestAnimationFrame(function() {
                            var n = e - t.spread.triggers.hold;
                            n < 0 && (n = 0),
                            n > t.spread.length && (n = t.spread.length),
                            t.spread.slowPagePosition = n,
                            t.$pageBox.css({
                                transform: t.getTranslateValue(n)
                            })
                        })
                    }
                }, {
                    key: "getTranslateValue",
                    value: function(e) {
                        var t = Math.round(e * this.spread.speed);
                        return this.isOnMobile ? "translate(0px, -" + t + "px)" : "translate3d(0, -" + t + "px, 0)"
                    }
                }]),
                t
            }(t);
            $(".js__page").not(".is__sticky").each(function() {
                new a($(this))
            })
        })
    }
    , {
        "_base/base": 4,
        stickyfill: 101
    }],
    38: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.RATIO = 1.2,
                        this.CLASS_INVERTED = "is__inverted"
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        this.$pageIn = this.$el.find(".page-in"),
                        this.$children = this.$pageIn.children(".module"),
                        this.$pageHeader = this.$el.find("h1, h2, h3").first().closest(".module")
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        this.$pageHeader.css("flex", "initial"),
                        this.$el.removeClass(this.CLASS_INVERTED)
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this;
                        this.childrenTotalHeight = 0,
                        this.$children.each(function(t, n) {
                            e.childrenTotalHeight += $(n).height()
                        }),
                        this.height = this.$el.height()
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        this.childrenTotalHeight * this.RATIO < this.height ? this.$el.addClass(this.CLASS_INVERTED) : (this.$pageHeader.css("flex", 1),
                        this.$el.removeClass(this.CLASS_INVERTED))
                    }
                }]),
                t
            }(t);
            $(".js__page.is__smartSinkage").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    39: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isAffectingHeight = !0
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.$pageIn = e.$el.children(".page-in");
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        var e = this;
                        e.$pageIn.css({
                            width: "auto"
                        })
                    }
                }, {
                    key: "preRender",
                    value: function() {
                        var e = this;
                        e.$pageIn.width(e.$el.width())
                    }
                }]),
                t
            }(t);
            $(".js__page.is__sticky").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    40: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postInit",
                    value: function() {
                        var e = this;
                        e.$pageIn = e.$el.find(".js__page-in")
                    }
                }, {
                    key: "reset",
                    value: function() {
                        this.$pageIn.css({
                            flex: 1
                        })
                    }
                }, {
                    key: "calculate",
                    value: function() {
                        window.innerHeight > window.innerWidth ? (this.$pageIn.css({
                            flex: "initial"
                        }),
                        this.$pageIn.height() > this.$pageIn.height() / 2 && this.reset()) : this.reset()
                    }
                }]),
                t
            }(t);
            $(".js__page.is__unstretchable").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    41: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "preInit",
                    value: function() {
                        this.isMother = !0,
                        this.animatedSubModules = []
                    }
                }, {
                    key: "onSpreadCreated",
                    value: function() {
                        this.spread.dependentModules.push(this),
                        this.spread.reactiveModules.push(this)
                    }
                }, {
                    key: "gatherAsideChildren",
                    value: function() {
                        var e = this;
                        this.$el.on("animatedModuleInit", function(t, n) {
                            t.stopPropagation(),
                            e.animatedSubModules.push(n)
                        })
                    }
                }, {
                    key: "postInit",
                    value: function() {
                        var e = this;
                        this.isAnimationLocked = !1,
                        this.eventForceSwitch = "anchor.animation_" + this.id,
                        this.$spread.on("beforeTakingScreenshot", function() {
                            return e.animate(0)
                        }),
                        this.$spread.on("spreadInitAnchors", function(t, n) {
                            e.setAnchors(n.anchors),
                            e.setForceSwitchListener()
                        }),
                        this.$spread.on("anchorRestore", this.releaseAnimation.bind(this))
                    }
                }, {
                    key: "postCalc",
                    value: function() {
                        this.animationSpreadDistance = window.application.height / 2
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        this.animatedSubModules.forEach(function(e) {
                            return e.render()
                        })
                    }
                }, {
                    key: "lockAnimation",
                    value: function() {
                        this.isAnimationLocked = !0
                    }
                }, {
                    key: "releaseAnimation",
                    value: function() {
                        this.isAnimationLocked = !1
                    }
                }, {
                    key: "reactTo",
                    value: function(e) {
                        var t = e - this.spread.triggers.hold
                          , n = t < -this.animationSpreadDistance || t > this.spread.height + this.animationSpreadDistance;
                        n || this.isAnimationLocked || this.animate(t)
                    }
                }, {
                    key: "setAnchors",
                    value: function(e) {
                        this.animatedSubModules.forEach(function(t) {
                            t.setAnchors(e)
                        })
                    }
                }, {
                    key: "setForceSwitchListener",
                    value: function() {
                        var e = this;
                        this.$spread.unbind(this.eventForceSwitch).on(this.eventForceSwitch, function(t, n) {
                            (n.onClick || n.onKeypress) && (e.lockAnimation(),
                            e.forcedAnchorId = n.anchor.id,
                            e.animate(n.anchor.trigger, e.forcedAnchorId))
                        })
                    }
                }, {
                    key: "animate",
                    value: function(e, t) {
                        e < 0 && (e = 0),
                        this.animatedSubModules.forEach(function(n) {
                            n.animate(e, t)
                        })
                    }
                }]),
                t
            }(t);
            $(".js__spread.is__animated .spread-holder").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    42: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        $(function() {
            var t = e("_base/base")
              , n = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postInit",
                    value: function() {
                        this.$children = this.$el.children(),
                        this.preReset()
                    }
                }, {
                    key: "preReset",
                    value: function() {
                        this.$children.css({
                            bottom: "auto"
                        })
                    }
                }, {
                    key: "postCalculate",
                    value: function() {
                        var e = this;
                        this.maxHeight = 0,
                        this.$children.each(function(t, n) {
                            var r = $(n).height();
                            e.maxHeight < r && (e.maxHeight = r)
                        })
                    }
                }, {
                    key: "postRender",
                    value: function() {
                        this.$el.css({
                            "flex-basis": this.maxHeight,
                            "max-height": this.maxHeight
                        }),
                        this.$children.css({
                            bottom: 0
                        })
                    }
                }]),
                t
            }(t);
            $(".switcher.is__fitToContent").each(function() {
                new n($(this))
            })
        })
    }
    , {
        "_base/base": 4
    }],
    43: [function(e, t, n) {
        "use strict";
        I18n.translations.ru.test = {
            resultIntro: "Ответьте на все вопросы теста, <br>чтобы узнать результат.",
            result: "Результат",
            rerun: "↺ Пересдать",
            passed: "Вы ответили правильно на все вопросы",
            failed: "Вы ответили неправильно на все вопросы",
            resulted: {
                one: "Вы ответили правильно на %{count} вопрос из %{total}",
                few: "Вы ответили правильно на %{count} вопроса из %{total}",
                many: "Вы ответили правильно на %{count} вопросов из %{total}",
                other: "Вы ответили правильно на %{count} вопросов из %{total}"
            }
        },
        I18n.translations.en.test = {
            resultIntro: "Answer all questions of the test<br>to know the result.",
            result: "Result",
            rerun: "↺ Retake",
            passed: "You've answered all the questions correctly",
            failed: "You've answered all the questions incorrectly",
            resulted: {
                one: "You've correctly answered %{count} question out of %{total}",
                other: "You've correctly answered %{count} questions out of %{total}"
            }
        }
    }
    , {}],
    44: [function(e, t, n) {
        "use strict";
        $(function() {
            var e = "is__checked"
              , t = "is__revealed"
              , n = "is__done"
              , r = "testRevealed"
              , i = 150
              , o = function(e) {
                var t = this;
                t.$el = e,
                t.$spread = t.$el.closest(".js__spread"),
                t.$book = t.$spread.closest(".js__book"),
                t.$resultValue = t.$el.find(".js__test-result-value"),
                t.$resultText = t.$el.find(".js__test-result-text"),
                t.$reset = t.$el.find(".js__test-reset"),
                t.id = t.$el.data("id"),
                t.revealId = t.id + "." + r,
                t.isCompleted = !1,
                t.correctCounter = 0,
                t.questions = [],
                t.addQuestions(),
                t.$spread.on("spreadCreated", function(e, n) {
                    t.spread = n,
                    t.init()
                })
            };
            o.prototype.init = function() {
                var e = this;
                e.questions.forEach(function(e) {
                    e.init()
                }),
                e.isDone() && e.wasRevealed() && e.reveal(),
                e.$reset.on("click", function(t) {
                    t.preventDefault(),
                    e.reset()
                }),
                $(document).on("bookDrawPause bookDrawLock", function() {
                    e.removeScrollIntoResultWatcher()
                }),
                $(document).on("bookDrawResume bookDrawRelease", function() {
                    e.isDone() && e.setScrollIntoResultWatcher()
                }),
                $(document).on("bookDrawResume", function() {
                    var t = window.pageYOffset;
                    e.isDone() && t > e.getResultsTrigger() && t < e.spread.triggers.end && e.reveal()
                })
            }
            ,
            o.prototype.addQuestions = function() {
                var e = this;
                e.$el.find(".js__question").each(function() {
                    e.questions.push(new s($(this),e))
                })
            }
            ,
            o.prototype.getResult = function() {
                var e = this
                  , t = e.counters.checked.correct - e.counters.checked.wrong;
                t < 0 && (t = 0),
                e.result = t / e.counters.all.correct
            }
            ,
            o.prototype.isDone = function() {
                var e = !0;
                return this.questions.forEach(function(t) {
                    t.isDone || (e = !1)
                }),
                e
            }
            ,
            o.prototype.wasRevealed = function() {
                return window.application.state.getAnswers().indexOf(this.revealId) > -1
            }
            ,
            o.prototype.check = function() {
                var e = this;
                e.correctCounter = 0,
                e.questions.forEach(function(t) {
                    t.isCorrect && e.correctCounter++
                }),
                e.isDone() ? (e.$el.addClass(n),
                e.$resultValue.text((e.correctCounter / e.questions.length * 100).toFixed() + "%"),
                e.correctCounter === e.questions.length ? e.$resultText.text(I18n.t("test.passed")) : 0 === e.correctCounter ? e.$resultText.text(I18n.t("test.failed")) : e.$resultText.text(I18n.t("test.resulted", {
                    count: e.correctCounter,
                    total: e.questions.length
                })),
                e.setScrollIntoResultWatcher(),
                this.isCompleted || (this.spread.resize(),
                this.isCompleted = !0)) : (e.$el.removeClass(n),
                e.removeScrollIntoResultWatcher(),
                this.isCompleted && (this.spread.resize(),
                this.isCompleted = !1))
            }
            ,
            o.prototype.removeScrollIntoResultWatcher = function() {
                $(window).off("scroll.test")
            }
            ,
            o.prototype.getResultsTrigger = function() {
                return this.$resultValue.offset().top - window.innerHeight
            }
            ,
            o.prototype.setScrollIntoResultWatcher = function() {
                var e = this;
                $(window).on("scroll.test", function() {
                    var t = e.getResultsTrigger()
                      , n = $(document).scrollTop()
                      , r = e.previousScrollTop ? Math.abs(e.previousScrollTop - n) : i;
                    n > t && r < i && r > 0 && e.reveal(),
                    e.previousScrollTop = n
                })
            }
            ,
            o.prototype.reveal = function() {
                var e = this;
                e.removeScrollIntoResultWatcher(),
                e.$el.addClass(t),
                e.questions.forEach(function(e) {
                    e.lock()
                }),
                window.application.state.addAnswer(e.revealId)
            }
            ,
            o.prototype.reset = function() {
                var e = this;
                e.questions.forEach(function(e) {
                    e.reset()
                }),
                e.correctCounter = 0,
                e.isCompleted = !1,
                e.$el.removeClass(n),
                e.$el.removeClass(t),
                window.application.state.removeAnswer(e.revealId),
                $("html, body").animate({
                    scrollTop: e.spread.triggers.hold
                }, 300).promise().done(e.spread.resize.bind(e.spread))
            }
            ;
            var s = function(e, t) {
                var n = this;
                n.$el = e,
                n._test = t,
                n.id = n._test.id + "." + n.$el.data("id"),
                n.counter = 0,
                n.answers = [],
                n.counters = {
                    totalCorrect: 0,
                    checked: {
                        total: 0,
                        correct: 0,
                        wrong: 0
                    }
                },
                n.isCorrect = !1,
                n.addAnswers()
            };
            s.prototype.init = function() {
                var e = this;
                e.answers.forEach(function(e) {
                    e.init()
                })
            }
            ,
            s.prototype.addAnswers = function() {
                var e = this;
                e.$el.find(".js__answer").each(function() {
                    e.answers.push(new a($(this),e))
                })
            }
            ,
            s.prototype.lock = function() {
                var e = this;
                e.answers.forEach(function(e) {
                    e.lock()
                })
            }
            ,
            s.prototype.reset = function() {
                var e = this;
                e.counters.checked = {
                    total: 0,
                    correct: 0,
                    wrong: 0
                },
                e.isDone = !1,
                e.answers.forEach(function(e) {
                    e.reset()
                })
            }
            ,
            s.prototype.check = function(e, t) {
                var n = this;
                e ? n.counters.checked.total++ : n.counters.checked.total--,
                t ? e ? n.counters.checked.correct++ : n.counters.checked.correct-- : e ? n.counters.checked.wrong++ : n.counters.checked.wrong--,
                0 === n.counters.checked.wrong && n.counters.checked.correct === n.counters.totalCorrect ? n.isCorrect = !0 : n.isCorrect = !1,
                n.counters.checked.total > 0 ? n.isDone = !0 : n.isDone = !1,
                n._test.check()
            }
            ;
            var a = function(e, t) {
                var n = this;
                n.$el = e,
                n._question = t,
                n._test = n._question._test,
                n.id = n._question.id + "." + n.$el.data("id"),
                n.isCorrect = parseInt(n.$el.data("correct")),
                n.isCorrect && n._question.counters.totalCorrect++,
                n.$el.on("click", function(e) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    n.toggle()
                })
            };
            a.prototype.init = function() {
                var e = this;
                window.application.state.getAnswers().indexOf(e.id) > -1 && e.toggle()
            }
            ,
            a.prototype.toggle = function() {
                var t = this;
                t.isChecked ? (t.isChecked = 0,
                t.$el.removeClass(e)) : (t.isChecked = 1,
                t.$el.addClass(e)),
                t.record(),
                t._question.check(t.isChecked, t.isCorrect)
            }
            ,
            a.prototype.lock = function() {
                var e = this;
                e.$el.off("click")
            }
            ,
            a.prototype.reset = function() {
                var t = this;
                t.isChecked = 0,
                t.$el.removeClass(e),
                t.record(),
                t.$el.on("click", function(e) {
                    e.preventDefault(),
                    t.toggle()
                })
            }
            ,
            a.prototype.record = function() {
                this.isChecked ? window.application.state.addAnswer(this.id) : window.application.state.removeAnswer(this.id)
            }
            ,
            $(".js__test").each(function() {
                new o($(this))
            })
        })
    }
    , {}],
    45: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function o(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        !function() {
            var t = e("_base/base")
              , n = "is__played"
              , a = "is__coverLoaded"
              , c = function(e) {
                function t() {
                    return r(this, t),
                    i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                }
                return o(t, e),
                s(t, [{
                    key: "postInit",
                    value: function() {
                        this.$video = this.$el.find("video")[0],
                        this.$cover = this.$el.find(".image"),
                        this.isAutoplayed = this.$video.hasAttribute("autoplay"),
                        this.noControls = this.$el.hasClass("is__noControls"),
                        this._setEventListeners()
                    }
                }, {
                    key: "_setEventListeners",
                    value: function() {
                        var e = this;
                        this.$el.on("click", function() {
                            return e.$video.paused ? e._play() : e._pause()
                        }),
                        this.$spread.on("spreadOutOfSight", this._stop.bind(this)),
                        this.$cover.on("imageLoaded", function() {
                            return e.$el.addClass(a)
                        }),
                        this.spread._book.$el.on("videoPlay", function(t, n) {
                            e.$video !== n && e._pause()
                        }),
                        this.isAutoplayed && this._setAutoplayEventListeners()
                    }
                }, {
                    key: "_setAutoplayEventListeners",
                    value: function() {
                        this.$spread.on("spreadInSight.autoplay", this._play.bind(this)),
                        this.$spread.on("spreadOutOfSight.autoplay", this._stop.bind(this))
                    }
                }, {
                    key: "_play",
                    value: function() {
                        this.noControls || this.$video.setAttribute("controls", "controls"),
                        this.$video.play(),
                        this.$el.addClass(n),
                        this.spread._book.$el.trigger("videoPlay", this.$video)
                    }
                }, {
                    key: "_pause",
                    value: function() {
                        this.$video.pause()
                    }
                }, {
                    key: "_stop",
                    value: function() {
                        this.$video.removeAttribute("controls"),
                        this.$video.pause(),
                        this.$video.currentTime = 0,
                        this.$el.removeClass(n)
                    }
                }]),
                t
            }(t);
            $(".js__video").each(function() {
                new c($(this))
            })
        }()
    }
    , {
        "_base/base": 4
    }],
    46: [function(e, t, n) {
        !function(e, n) {
            "function" == typeof define && define.amd ? define("i18n", function() {
                return n(e)
            }) : "object" == typeof t && t.exports ? t.exports = n(e) : e.I18n = n(e)
        }(this, function(e) {
            "use strict";
            var t = e && e.I18n || {}
              , n = Array.prototype.slice
              , r = function(e) {
                return ("0" + e.toString()).substr(-2)
            }
              , i = function(e, t) {
                return u("round", e, -t).toFixed(t)
            }
              , o = function(e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            }
              , s = function(e) {
                return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e)
            }
              , a = function(e) {
                return "string" == typeof value || "[object String]" === Object.prototype.toString.call(e)
            }
              , c = function(e) {
                return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
            }
              , l = function(e) {
                return e === !0 || e === !1
            }
              , u = function(e, t, n) {
                return "undefined" == typeof n || 0 === +n ? Math[e](t) : (t = +t,
                n = +n,
                isNaN(t) || "number" != typeof n || n % 1 !== 0 ? NaN : (t = t.toString().split("e"),
                t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - n : -n))),
                t = t.toString().split("e"),
                +(t[0] + "e" + (t[1] ? +t[1] + n : n))))
            }
              , d = function(e, t) {
                var n, r;
                for (n in t)
                    t.hasOwnProperty(n) && (r = t[n],
                    a(r) || c(r) || l(r) ? e[n] = r : (null == e[n] && (e[n] = {}),
                    d(e[n], r)));
                return e
            }
              , h = {
                day_names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                abbr_day_names: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                month_names: [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                abbr_month_names: [null, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridian: ["AM", "PM"]
            }
              , f = {
                precision: 3,
                separator: ".",
                delimiter: ",",
                strip_insignificant_zeros: !1
            }
              , p = {
                unit: "$",
                precision: 2,
                format: "%u%n",
                sign_first: !0,
                delimiter: ",",
                separator: "."
            }
              , g = {
                unit: "%",
                precision: 3,
                format: "%n%u",
                separator: ".",
                delimiter: ""
            }
              , m = [null, "kb", "mb", "gb", "tb"]
              , v = {
                defaultLocale: "en",
                locale: "en",
                defaultSeparator: ".",
                placeholder: /(?:\{\{|%\{)(.*?)(?:\}\}?)/gm,
                fallbacks: !1,
                translations: {},
                missingBehaviour: "message",
                missingTranslationPrefix: ""
            };
            return t.reset = function() {
                this.defaultLocale = v.defaultLocale,
                this.locale = v.locale,
                this.defaultSeparator = v.defaultSeparator,
                this.placeholder = v.placeholder,
                this.fallbacks = v.fallbacks,
                this.translations = v.translations,
                this.missingBehaviour = v.missingBehaviour,
                this.missingTranslationPrefix = v.missingTranslationPrefix
            }
            ,
            t.initializeOptions = function() {
                "undefined" == typeof this.defaultLocale && null !== this.defaultLocale && (this.defaultLocale = v.defaultLocale),
                "undefined" == typeof this.locale && null !== this.locale && (this.locale = v.locale),
                "undefined" == typeof this.defaultSeparator && null !== this.defaultSeparator && (this.defaultSeparator = v.defaultSeparator),
                "undefined" == typeof this.placeholder && null !== this.placeholder && (this.placeholder = v.placeholder),
                "undefined" == typeof this.fallbacks && null !== this.fallbacks && (this.fallbacks = v.fallbacks),
                "undefined" == typeof this.translations && null !== this.translations && (this.translations = v.translations),
                "undefined" == typeof this.missingBehaviour && null !== this.missingBehaviour && (this.missingBehaviour = v.missingBehaviour),
                "undefined" == typeof this.missingTranslationPrefix && null !== this.missingTranslationPrefix && (this.missingTranslationPrefix = v.missingTranslationPrefix)
            }
            ,
            t.initializeOptions(),
            t.locales = {},
            t.locales.get = function(e) {
                var n = this[e] || this[t.locale] || this["default"];
                return "function" == typeof n && (n = n(e)),
                s(n) === !1 && (n = [n]),
                n
            }
            ,
            t.locales["default"] = function(e) {
                var n, r = [], i = [];
                return e && r.push(e),
                !e && t.locale && r.push(t.locale),
                t.fallbacks && t.defaultLocale && r.push(t.defaultLocale),
                r.forEach(function(e) {
                    n = e.split("-")[0],
                    ~i.indexOf(e) || i.push(e),
                    t.fallbacks && n && n !== e && !~i.indexOf(n) && i.push(n)
                }),
                r.length || r.push("en"),
                i
            }
            ,
            t.pluralization = {},
            t.pluralization.get = function(e) {
                return this[e] || this[t.locale] || this["default"]
            }
            ,
            t.pluralization["default"] = function(e) {
                switch (e) {
                case 0:
                    return ["zero", "other"];
                case 1:
                    return ["one"];
                default:
                    return ["other"]
                }
            }
            ,
            t.currentLocale = function() {
                return this.locale || this.defaultLocale
            }
            ,
            t.isSet = function(e) {
                return void 0 !== e && null !== e
            }
            ,
            t.lookup = function(e, t) {
                t = this.prepareOptions(t);
                var n, r, i, o = this.locales.get(t.locale).slice();
                o[0];
                for (e = this.getFullScope(e, t); o.length; )
                    if (n = o.shift(),
                    r = e.split(this.defaultSeparator),
                    i = this.translations[n]) {
                        for (; r.length && (i = i[r.shift()],
                        void 0 !== i && null !== i); )
                            ;
                        if (void 0 !== i && null !== i)
                            return i
                    }
                if (this.isSet(t.defaultValue))
                    return t.defaultValue
            }
            ,
            t.pluralizationLookupWithoutFallback = function(e, t, n) {
                var r, i, s = this.pluralization.get(t), a = s(e);
                if (o(n))
                    for (; a.length; )
                        if (r = a.shift(),
                        this.isSet(n[r])) {
                            i = n[r];
                            break
                        }
                return i
            }
            ,
            t.pluralizationLookup = function(e, t, n) {
                n = this.prepareOptions(n);
                var r, i, s, a, c = this.locales.get(n.locale).slice();
                c[0];
                for (t = this.getFullScope(t, n); c.length; )
                    if (r = c.shift(),
                    i = t.split(this.defaultSeparator),
                    s = this.translations[r]) {
                        for (; i.length && (s = s[i.shift()],
                        o(s)); )
                            0 == i.length && (a = this.pluralizationLookupWithoutFallback(e, r, s));
                        if (null != a && void 0 != a)
                            break
                    }
                return null != a && void 0 != a || this.isSet(n.defaultValue) && (a = o(n.defaultValue) ? this.pluralizationLookupWithoutFallback(e, n.locale, n.defaultValue) : n.defaultValue,
                s = n.defaultValue),
                {
                    message: a,
                    translations: s
                }
            }
            ,
            t.meridian = function() {
                var e = this.lookup("time")
                  , t = this.lookup("date");
                return e && e.am && e.pm ? [e.am, e.pm] : t && t.meridian ? t.meridian : h.meridian
            }
            ,
            t.prepareOptions = function() {
                for (var e, t = n.call(arguments), r = {}; t.length; )
                    if (e = t.shift(),
                    "object" == typeof e)
                        for (var i in e)
                            e.hasOwnProperty(i) && (this.isSet(r[i]) || (r[i] = e[i]));
                return r
            }
            ,
            t.createTranslationOptions = function(e, t) {
                var n = [{
                    scope: e
                }];
                return this.isSet(t.defaults) && (n = n.concat(t.defaults)),
                this.isSet(t.defaultValue) && (n.push({
                    message: t.defaultValue
                }),
                delete t.defaultValue),
                n
            }
            ,
            t.translate = function(e, t) {
                t = this.prepareOptions(t);
                var n, r = this.prepareOptions(t), i = this.createTranslationOptions(e, t), s = i.some(function(e) {
                    if (this.isSet(e.scope) ? n = this.lookup(e.scope, t) : this.isSet(e.message) && (n = e.message),
                    void 0 !== n && null !== n)
                        return !0
                }, this);
                return s ? ("string" == typeof n ? n = this.interpolate(n, t) : o(n) && this.isSet(t.count) && (n = this.pluralize(t.count, e, r)),
                n) : this.missingTranslation(e, t)
            }
            ,
            t.interpolate = function(e, t) {
                t = this.prepareOptions(t);
                var n, r, i, o, s = e.match(this.placeholder);
                if (!s)
                    return e;
                for (var r; s.length; )
                    n = s.shift(),
                    i = n.replace(this.placeholder, "$1"),
                    r = this.isSet(t[i]) ? t[i].toString().replace(/\$/gm, "_#$#_") : i in t ? this.nullPlaceholder(n, e, t) : this.missingPlaceholder(n, e, t),
                    o = new RegExp(n.replace(/\{/gm, "\\{").replace(/\}/gm, "\\}")),
                    e = e.replace(o, r);
                return e.replace(/_#\$#_/g, "$")
            }
            ,
            t.pluralize = function(e, t, n) {
                n = this.prepareOptions(n);
                var r, i;
                return i = this.pluralizationLookup(e, t, n),
                void 0 == i.translations || null == i.translations ? this.missingTranslation(t, n) : (n.count = String(e),
                void 0 != i.message && null != i.message ? this.interpolate(i.message, n) : (r = this.pluralization.get(n.locale),
                this.missingTranslation(t + "." + r(e)[0], n)))
            }
            ,
            t.missingTranslation = function(e, t) {
                if ("guess" == this.missingBehaviour) {
                    var n = e.split(".").slice(-1)[0];
                    return (this.missingTranslationPrefix.length > 0 ? this.missingTranslationPrefix : "") + n.replace("_", " ").replace(/([a-z])([A-Z])/g, function(e, t, n) {
                        return t + " " + n.toLowerCase()
                    })
                }
                var r = null != t && null != t.locale ? t.locale : this.currentLocale()
                  , i = this.getFullScope(e, t)
                  , o = [r, i].join(this.defaultSeparator);
                return '[missing "' + o + '" translation]'
            }
            ,
            t.missingPlaceholder = function(e, t, n) {
                return "[missing " + e + " value]"
            }
            ,
            t.nullPlaceholder = function() {
                return t.missingPlaceholder.apply(t, arguments)
            }
            ,
            t.toNumber = function(e, t) {
                t = this.prepareOptions(t, this.lookup("number.format"), f);
                var n, r, o = e < 0, s = i(Math.abs(e), t.precision).toString(), a = s.split("."), c = [], l = t.format || "%n", u = o ? "-" : "";
                for (e = a[0],
                n = a[1]; e.length > 0; )
                    c.unshift(e.substr(Math.max(0, e.length - 3), 3)),
                    e = e.substr(0, e.length - 3);
                return r = c.join(t.delimiter),
                t.strip_insignificant_zeros && n && (n = n.replace(/0+$/, "")),
                t.precision > 0 && n && (r += t.separator + n),
                l = t.sign_first ? "%s" + l : l.replace("%n", "%s%n"),
                r = l.replace("%u", t.unit).replace("%n", r).replace("%s", u)
            }
            ,
            t.toCurrency = function(e, t) {
                return t = this.prepareOptions(t, this.lookup("number.currency.format"), this.lookup("number.format"), p),
                this.toNumber(e, t)
            }
            ,
            t.localize = function(e, t, n) {
                switch (n || (n = {}),
                e) {
                case "currency":
                    return this.toCurrency(t);
                case "number":
                    return e = this.lookup("number.format"),
                    this.toNumber(t, e);
                case "percentage":
                    return this.toPercentage(t);
                default:
                    var r;
                    return r = e.match(/^(date|time)/) ? this.toTime(e, t) : t.toString(),
                    this.interpolate(r, n)
                }
            }
            ,
            t.parseDate = function(e) {
                var t, n, r;
                if ("object" == typeof e)
                    return e;
                if (t = e.toString().match(/(\d{4})-(\d{2})-(\d{2})(?:[ T](\d{2}):(\d{2}):(\d{2})([\.,]\d{1,3})?)?(Z|\+00:?00)?/)) {
                    for (var i = 1; i <= 6; i++)
                        t[i] = parseInt(t[i], 10) || 0;
                    t[2] -= 1,
                    r = t[7] ? 1e3 * ("0" + t[7]) : null,
                    n = t[8] ? new Date(Date.UTC(t[1], t[2], t[3], t[4], t[5], t[6], r)) : new Date(t[1],t[2],t[3],t[4],t[5],t[6],r)
                } else
                    "number" == typeof e ? (n = new Date,
                    n.setTime(e)) : e.match(/([A-Z][a-z]{2}) ([A-Z][a-z]{2}) (\d+) (\d+:\d+:\d+) ([+-]\d+) (\d+)/) ? (n = new Date,
                    n.setTime(Date.parse([RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$6, RegExp.$4, RegExp.$5].join(" ")))) : e.match(/\d+ \d+:\d+:\d+ [+-]\d+ \d+/) ? (n = new Date,
                    n.setTime(Date.parse(e))) : (n = new Date,
                    n.setTime(Date.parse(e)));
                return n
            }
            ,
            t.strftime = function(e, n) {
                var i = this.lookup("date")
                  , o = t.meridian();
                if (i || (i = {}),
                i = this.prepareOptions(i, h),
                isNaN(e.getTime()))
                    throw new Error("I18n.strftime() requires a valid date object, but received an invalid date.");
                var s = e.getDay()
                  , a = e.getDate()
                  , c = e.getFullYear()
                  , l = e.getMonth() + 1
                  , u = e.getHours()
                  , d = u
                  , f = u > 11 ? 1 : 0
                  , p = e.getSeconds()
                  , g = e.getMinutes()
                  , m = e.getTimezoneOffset()
                  , v = Math.floor(Math.abs(m / 60))
                  , y = Math.abs(m) - 60 * v
                  , b = (m > 0 ? "-" : "+") + (v.toString().length < 2 ? "0" + v : v) + (y.toString().length < 2 ? "0" + y : y);
                return d > 12 ? d -= 12 : 0 === d && (d = 12),
                n = n.replace("%a", i.abbr_day_names[s]),
                n = n.replace("%A", i.day_names[s]),
                n = n.replace("%b", i.abbr_month_names[l]),
                n = n.replace("%B", i.month_names[l]),
                n = n.replace("%d", r(a)),
                n = n.replace("%e", a),
                n = n.replace("%-d", a),
                n = n.replace("%H", r(u)),
                n = n.replace("%-H", u),
                n = n.replace("%I", r(d)),
                n = n.replace("%-I", d),
                n = n.replace("%m", r(l)),
                n = n.replace("%-m", l),
                n = n.replace("%M", r(g)),
                n = n.replace("%-M", g),
                n = n.replace("%p", o[f]),
                n = n.replace("%S", r(p)),
                n = n.replace("%-S", p),
                n = n.replace("%w", s),
                n = n.replace("%y", r(c)),
                n = n.replace("%-y", r(c).replace(/^0+/, "")),
                n = n.replace("%Y", c),
                n = n.replace("%z", b)
            }
            ,
            t.toTime = function(e, t) {
                var n = this.parseDate(t)
                  , r = this.lookup(e);
                return n.toString().match(/invalid/i) ? n.toString() : r ? this.strftime(n, r) : n.toString()
            }
            ,
            t.toPercentage = function(e, t) {
                return t = this.prepareOptions(t, this.lookup("number.percentage.format"), this.lookup("number.format"), g),
                this.toNumber(e, t)
            }
            ,
            t.toHumanSize = function(e, t) {
                for (var n, r, i = 1024, o = e, s = 0; o >= i && s < 4; )
                    o /= i,
                    s += 1;
                return 0 === s ? (n = this.t("number.human.storage_units.units.byte", {
                    count: o
                }),
                r = 0) : (n = this.t("number.human.storage_units.units." + m[s]),
                r = o - Math.floor(o) === 0 ? 0 : 1),
                t = this.prepareOptions(t, {
                    unit: n,
                    precision: r,
                    format: "%n%u",
                    delimiter: ""
                }),
                this.toNumber(o, t)
            }
            ,
            t.getFullScope = function(e, t) {
                return t = this.prepareOptions(t),
                e.constructor === Array && (e = e.join(this.defaultSeparator)),
                t.scope && (e = [t.scope, e].join(this.defaultSeparator)),
                e
            }
            ,
            t.extend = function(e, t) {
                return "undefined" == typeof e && "undefined" == typeof t ? {} : d(e, t)
            }
            ,
            t.t = t.translate,
            t.l = t.localize,
            t.p = t.pluralize,
            t
        })
    }
    , {}],
    47: [function(e, t, n) {
        !function(e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return n(e)
            }
            : n(e)
        }("undefined" != typeof window ? window : this, function(e, t) {
            function n(e) {
                var t = !!e && "length"in e && e.length
                  , n = fe.type(e);
                return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }
            function r(e, t, n) {
                if (fe.isFunction(t))
                    return fe.grep(e, function(e, r) {
                        return !!t.call(e, r, e) !== n
                    });
                if (t.nodeType)
                    return fe.grep(e, function(e) {
                        return e === t !== n
                    });
                if ("string" == typeof t) {
                    if (ke.test(t))
                        return fe.filter(t, e, n);
                    t = fe.filter(t, e)
                }
                return fe.grep(e, function(e) {
                    return fe.inArray(e, t) > -1 !== n
                })
            }
            function i(e, t) {
                do
                    e = e[t];
                while (e && 1 !== e.nodeType);return e
            }
            function o(e) {
                var t = {};
                return fe.each(e.match($e) || [], function(e, n) {
                    t[n] = !0
                }),
                t
            }
            function s() {
                re.addEventListener ? (re.removeEventListener("DOMContentLoaded", a),
                e.removeEventListener("load", a)) : (re.detachEvent("onreadystatechange", a),
                e.detachEvent("onload", a))
            }
            function a() {
                (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (s(),
                fe.ready())
            }
            function c(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(Re, "-$1").toLowerCase();
                    if (n = e.getAttribute(r),
                    "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? fe.parseJSON(n) : n)
                        } catch (i) {}
                        fe.data(e, t, n)
                    } else
                        n = void 0
                }
                return n
            }
            function l(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)
                        return !1;
                return !0
            }
            function u(e, t, n, r) {
                if (Ie(e)) {
                    var i, o, s = fe.expando, a = e.nodeType, c = a ? fe.cache : e, l = a ? e[s] : e[s] && s;
                    if (l && c[l] && (r || c[l].data) || void 0 !== n || "string" != typeof t)
                        return l || (l = a ? e[s] = ne.pop() || fe.guid++ : s),
                        c[l] || (c[l] = a ? {} : {
                            toJSON: fe.noop
                        }),
                        "object" != typeof t && "function" != typeof t || (r ? c[l] = fe.extend(c[l], t) : c[l].data = fe.extend(c[l].data, t)),
                        o = c[l],
                        r || (o.data || (o.data = {}),
                        o = o.data),
                        void 0 !== n && (o[fe.camelCase(t)] = n),
                        "string" == typeof t ? (i = o[t],
                        null == i && (i = o[fe.camelCase(t)])) : i = o,
                        i
                }
            }
            function d(e, t, n) {
                if (Ie(e)) {
                    var r, i, o = e.nodeType, s = o ? fe.cache : e, a = o ? e[fe.expando] : fe.expando;
                    if (s[a]) {
                        if (t && (r = n ? s[a] : s[a].data)) {
                            fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t),
                            t = t in r ? [t] : t.split(" ")),
                            i = t.length;
                            for (; i--; )
                                delete r[t[i]];
                            if (n ? !l(r) : !fe.isEmptyObject(r))
                                return
                        }
                        (n || (delete s[a].data,
                        l(s[a]))) && (o ? fe.cleanData([e], !0) : de.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                    }
                }
            }
            function h(e, t, n, r) {
                var i, o = 1, s = 20, a = r ? function() {
                    return r.cur()
                }
                : function() {
                    return fe.css(e, t, "")
                }
                , c = a(), l = n && n[3] || (fe.cssNumber[t] ? "" : "px"), u = (fe.cssNumber[t] || "px" !== l && +c) && Ne.exec(fe.css(e, t));
                if (u && u[3] !== l) {
                    l = l || u[3],
                    n = n || [],
                    u = +c || 1;
                    do
                        o = o || ".5",
                        u /= o,
                        fe.style(e, t, u + l);
                    while (o !== (o = a() / c) && 1 !== o && --s)
                }
                return n && (u = +u || +c || 0,
                i = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                r && (r.unit = l,
                r.start = u,
                r.end = i)),
                i
            }
            function f(e) {
                var t = We.split("|")
                  , n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length; )
                        n.createElement(t.pop());
                return n
            }
            function p(e, t) {
                var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!o)
                    for (o = [],
                    n = e.childNodes || e; null != (r = n[i]); i++)
                        !t || fe.nodeName(r, t) ? o.push(r) : fe.merge(o, p(r, t));
                return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
            }
            function g(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++)
                    fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
            }
            function m(e) {
                Fe.test(e.type) && (e.defaultChecked = e.checked)
            }
            function v(e, t, n, r, i) {
                for (var o, s, a, c, l, u, d, h = e.length, v = f(t), y = [], b = 0; b < h; b++)
                    if (s = e[b],
                    s || 0 === s)
                        if ("object" === fe.type(s))
                            fe.merge(y, s.nodeType ? [s] : s);
                        else if (Ge.test(s)) {
                            for (c = c || v.appendChild(t.createElement("div")),
                            l = (Be.exec(s) || ["", ""])[1].toLowerCase(),
                            d = Ve[l] || Ve._default,
                            c.innerHTML = d[1] + fe.htmlPrefilter(s) + d[2],
                            o = d[0]; o--; )
                                c = c.lastChild;
                            if (!de.leadingWhitespace && ze.test(s) && y.push(t.createTextNode(ze.exec(s)[0])),
                            !de.tbody)
                                for (s = "table" !== l || Ue.test(s) ? "<table>" !== d[1] || Ue.test(s) ? 0 : c : c.firstChild,
                                o = s && s.childNodes.length; o--; )
                                    fe.nodeName(u = s.childNodes[o], "tbody") && !u.childNodes.length && s.removeChild(u);
                            for (fe.merge(y, c.childNodes),
                            c.textContent = ""; c.firstChild; )
                                c.removeChild(c.firstChild);
                            c = v.lastChild
                        } else
                            y.push(t.createTextNode(s));
                for (c && v.removeChild(c),
                de.appendChecked || fe.grep(p(y, "input"), m),
                b = 0; s = y[b++]; )
                    if (r && fe.inArray(s, r) > -1)
                        i && i.push(s);
                    else if (a = fe.contains(s.ownerDocument, s),
                    c = p(v.appendChild(s), "script"),
                    a && g(c),
                    n)
                        for (o = 0; s = c[o++]; )
                            qe.test(s.type || "") && n.push(s);
                return c = null,
                v
            }
            function y() {
                return !0
            }
            function b() {
                return !1
            }
            function _() {
                try {
                    return re.activeElement
                } catch (e) {}
            }
            function w(e, t, n, r, i, o) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n,
                    n = void 0);
                    for (a in t)
                        w(e, a, n, r, t[a], o);
                    return e
                }
                if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
                i === !1)
                    i = b;
                else if (!i)
                    return e;
                return 1 === o && (s = i,
                i = function(e) {
                    return fe().off(e),
                    s.apply(this, arguments)
                }
                ,
                i.guid = s.guid || (s.guid = fe.guid++)),
                e.each(function() {
                    fe.event.add(this, t, i, r, n)
                })
            }
            function S(e, t) {
                return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }
            function k(e) {
                return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type,
                e
            }
            function x(e) {
                var t = it.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"),
                e
            }
            function E(e, t) {
                if (1 === t.nodeType && fe.hasData(e)) {
                    var n, r, i, o = fe._data(e), s = fe._data(t, o), a = o.events;
                    if (a) {
                        delete s.handle,
                        s.events = {};
                        for (n in a)
                            for (r = 0,
                            i = a[n].length; r < i; r++)
                                fe.event.add(t, n, a[n][r])
                    }
                    s.data && (s.data = fe.extend({}, s.data))
                }
            }
            function T(e, t) {
                var n, r, i;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(),
                    !de.noCloneEvent && t[fe.expando]) {
                        i = fe._data(t);
                        for (r in i.events)
                            fe.removeEvent(t, r, i.handle);
                        t.removeAttribute(fe.expando)
                    }
                    "script" === n && t.text !== e.text ? (k(t).text = e.text,
                    x(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
                    de.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Fe.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
                    t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }
            }
            function C(e, t, n, r) {
                t = oe.apply([], t);
                var i, o, s, a, c, l, u = 0, d = e.length, h = d - 1, f = t[0], g = fe.isFunction(f);
                if (g || d > 1 && "string" == typeof f && !de.checkClone && rt.test(f))
                    return e.each(function(i) {
                        var o = e.eq(i);
                        g && (t[0] = f.call(this, i, o.html())),
                        C(o, t, n, r)
                    });
                if (d && (l = v(t, e[0].ownerDocument, !1, e, r),
                i = l.firstChild,
                1 === l.childNodes.length && (l = i),
                i || r)) {
                    for (a = fe.map(p(l, "script"), k),
                    s = a.length; u < d; u++)
                        o = l,
                        u !== h && (o = fe.clone(o, !0, !0),
                        s && fe.merge(a, p(o, "script"))),
                        n.call(e[u], o, u);
                    if (s)
                        for (c = a[a.length - 1].ownerDocument,
                        fe.map(a, x),
                        u = 0; u < s; u++)
                            o = a[u],
                            qe.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(c, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
                    l = i = null
                }
                return e
            }
            function A(e, t, n) {
                for (var r, i = t ? fe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                    n || 1 !== r.nodeType || fe.cleanData(p(r)),
                    r.parentNode && (n && fe.contains(r.ownerDocument, r) && g(p(r, "script")),
                    r.parentNode.removeChild(r));
                return e
            }
            function $(e, t) {
                var n = fe(t.createElement(e)).appendTo(t.body)
                  , r = fe.css(n[0], "display");
                return n.detach(),
                r
            }
            function L(e) {
                var t = re
                  , n = lt[e];
                return n || (n = $(e, t),
                "none" !== n && n || (ct = (ct || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
                t = (ct[0].contentWindow || ct[0].contentDocument).document,
                t.write(),
                t.close(),
                n = $(e, t),
                ct.detach()),
                lt[e] = n),
                n
            }
            function j(e, t) {
                return {
                    get: function() {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }
            function I(e) {
                if (e in xt)
                    return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--; )
                    if (e = kt[n] + t,
                    e in xt)
                        return e
            }
            function O(e, t) {
                for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
                    r = e[s],
                    r.style && (o[s] = fe._data(r, "olddisplay"),
                    n = r.style.display,
                    t ? (o[s] || "none" !== n || (r.style.display = ""),
                    "" === r.style.display && He(r) && (o[s] = fe._data(r, "olddisplay", L(r.nodeName)))) : (i = He(r),
                    (n && "none" !== n || !i) && fe._data(r, "olddisplay", i ? n : fe.css(r, "display"))));
                for (s = 0; s < a; s++)
                    r = e[s],
                    r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
                return e
            }
            function R(e, t, n) {
                var r = _t.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }
            function P(e, t, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
                    "margin" === n && (s += fe.css(e, n + Me[o], !0, i)),
                    r ? ("content" === n && (s -= fe.css(e, "padding" + Me[o], !0, i)),
                    "margin" !== n && (s -= fe.css(e, "border" + Me[o] + "Width", !0, i))) : (s += fe.css(e, "padding" + Me[o], !0, i),
                    "padding" !== n && (s += fe.css(e, "border" + Me[o] + "Width", !0, i)));
                return s
            }
            function N(e, t, n) {
                var r = !0
                  , i = "width" === t ? e.offsetWidth : e.offsetHeight
                  , o = pt(e)
                  , s = de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (i = gt(e, t, o),
                    (i < 0 || null == i) && (i = e.style[t]),
                    dt.test(i))
                        return i;
                    r = s && (de.boxSizingReliable() || i === e.style[t]),
                    i = parseFloat(i) || 0
                }
                return i + P(e, t, n || (s ? "border" : "content"), r, o) + "px"
            }
            function M(e, t, n, r, i) {
                return new M.prototype.init(e,t,n,r,i)
            }
            function H() {
                return e.setTimeout(function() {
                    Et = void 0
                }),
                Et = fe.now()
            }
            function D(e, t) {
                var n, r = {
                    height: e
                }, i = 0;
                for (t = t ? 1 : 0; i < 4; i += 2 - t)
                    n = Me[i],
                    r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e),
                r
            }
            function F(e, t, n) {
                for (var r, i = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                    if (r = i[o].call(n, t, e))
                        return r
            }
            function B(e, t, n) {
                var r, i, o, s, a, c, l, u, d = this, h = {}, f = e.style, p = e.nodeType && He(e), g = fe._data(e, "fxshow");
                n.queue || (a = fe._queueHooks(e, "fx"),
                null == a.unqueued && (a.unqueued = 0,
                c = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || c()
                }
                ),
                a.unqueued++,
                d.always(function() {
                    d.always(function() {
                        a.unqueued--,
                        fe.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
                l = fe.css(e, "display"),
                u = "none" === l ? fe._data(e, "olddisplay") || L(e.nodeName) : l,
                "inline" === u && "none" === fe.css(e, "float") && (de.inlineBlockNeedsLayout && "inline" !== L(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
                n.overflow && (f.overflow = "hidden",
                de.shrinkWrapBlocks() || d.always(function() {
                    f.overflow = n.overflow[0],
                    f.overflowX = n.overflow[1],
                    f.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (i = t[r],
                    Ct.exec(i)) {
                        if (delete t[r],
                        o = o || "toggle" === i,
                        i === (p ? "hide" : "show")) {
                            if ("show" !== i || !g || void 0 === g[r])
                                continue;
                            p = !0
                        }
                        h[r] = g && g[r] || fe.style(e, r)
                    } else
                        l = void 0;
                if (fe.isEmptyObject(h))
                    "inline" === ("none" === l ? L(e.nodeName) : l) && (f.display = l);
                else {
                    g ? "hidden"in g && (p = g.hidden) : g = fe._data(e, "fxshow", {}),
                    o && (g.hidden = !p),
                    p ? fe(e).show() : d.done(function() {
                        fe(e).hide()
                    }),
                    d.done(function() {
                        var t;
                        fe._removeData(e, "fxshow");
                        for (t in h)
                            fe.style(e, t, h[t])
                    });
                    for (r in h)
                        s = F(p ? g[r] : 0, r, d),
                        r in g || (g[r] = s.start,
                        p && (s.end = s.start,
                        s.start = "width" === r || "height" === r ? 1 : 0))
                }
            }
            function q(e, t) {
                var n, r, i, o, s;
                for (n in e)
                    if (r = fe.camelCase(n),
                    i = t[r],
                    o = e[n],
                    fe.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                    delete e[n]),
                    s = fe.cssHooks[r],
                    s && "expand"in s) {
                        o = s.expand(o),
                        delete e[r];
                        for (n in o)
                            n in e || (e[n] = o[n],
                            t[n] = i)
                    } else
                        t[r] = i
            }
            function z(e, t, n) {
                var r, i, o = 0, s = z.prefilters.length, a = fe.Deferred().always(function() {
                    delete c.elem
                }), c = function() {
                    if (i)
                        return !1;
                    for (var t = Et || H(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, c = l.tweens.length; s < c; s++)
                        l.tweens[s].run(o);
                    return a.notifyWith(e, [l, o, n]),
                    o < 1 && c ? n : (a.resolveWith(e, [l]),
                    !1)
                }, l = a.promise({
                    elem: e,
                    props: fe.extend({}, t),
                    opts: fe.extend(!0, {
                        specialEasing: {},
                        easing: fe.easing._default
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Et || H(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = fe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r),
                        r
                    },
                    stop: function(t) {
                        var n = 0
                          , r = t ? l.tweens.length : 0;
                        if (i)
                            return this;
                        for (i = !0; n < r; n++)
                            l.tweens[n].run(1);
                        return t ? (a.notifyWith(e, [l, 1, 0]),
                        a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                        this
                    }
                }), u = l.props;
                for (q(u, l.opts.specialEasing); o < s; o++)
                    if (r = z.prefilters[o].call(l, e, u, l.opts))
                        return fe.isFunction(r.stop) && (fe._queueHooks(l.elem, l.opts.queue).stop = fe.proxy(r.stop, r)),
                        r;
                return fe.map(u, F, l),
                fe.isFunction(l.opts.start) && l.opts.start.call(e, l),
                fe.fx.timer(fe.extend(c, {
                    elem: e,
                    anim: l,
                    queue: l.opts.queue
                })),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }
            function W(e) {
                return fe.attr(e, "class") || ""
            }
            function V(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t,
                    t = "*");
                    var r, i = 0, o = t.toLowerCase().match($e) || [];
                    if (fe.isFunction(n))
                        for (; r = o[i++]; )
                            "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                            (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
            function G(e, t, n, r) {
                function i(a) {
                    var c;
                    return o[a] = !0,
                    fe.each(e[a] || [], function(e, a) {
                        var l = a(t, n, r);
                        return "string" != typeof l || s || o[l] ? s ? !(c = l) : void 0 : (t.dataTypes.unshift(l),
                        i(l),
                        !1)
                    }),
                    c
                }
                var o = {}
                  , s = e === Qt;
                return i(t.dataTypes[0]) || !o["*"] && i("*")
            }
            function U(e, t) {
                var n, r, i = fe.ajaxSettings.flatOptions || {};
                for (r in t)
                    void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && fe.extend(!0, e, n),
                e
            }
            function X(e, t, n) {
                for (var r, i, o, s, a = e.contents, c = e.dataTypes; "*" === c[0]; )
                    c.shift(),
                    void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (s in a)
                        if (a[s] && a[s].test(i)) {
                            c.unshift(s);
                            break
                        }
                if (c[0]in n)
                    o = c[0];
                else {
                    for (s in n) {
                        if (!c[0] || e.converters[s + " " + c[0]]) {
                            o = s;
                            break
                        }
                        r || (r = s)
                    }
                    o = o || r
                }
                if (o)
                    return o !== c[0] && c.unshift(o),
                    n[o]
            }
            function Y(e, t, n, r) {
                var i, o, s, a, c, l = {}, u = e.dataTypes.slice();
                if (u[1])
                    for (s in e.converters)
                        l[s.toLowerCase()] = e.converters[s];
                for (o = u.shift(); o; )
                    if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    c = o,
                    o = u.shift())
                        if ("*" === o)
                            o = c;
                        else if ("*" !== c && c !== o) {
                            if (s = l[c + " " + o] || l["* " + o],
                            !s)
                                for (i in l)
                                    if (a = i.split(" "),
                                    a[1] === o && (s = l[c + " " + a[0]] || l["* " + a[0]])) {
                                        s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                        u.unshift(a[1]));
                                        break
                                    }
                            if (s !== !0)
                                if (s && e["throws"])
                                    t = s(t);
                                else
                                    try {
                                        t = s(t)
                                    } catch (d) {
                                        return {
                                            state: "parsererror",
                                            error: s ? d : "No conversion from " + c + " to " + o
                                        }
                                    }
                        }
                return {
                    state: "success",
                    data: t
                }
            }
            function K(e) {
                return e.style && e.style.display || fe.css(e, "display")
            }
            function J(e) {
                if (!fe.contains(e.ownerDocument || re, e))
                    return !0;
                for (; e && 1 === e.nodeType; ) {
                    if ("none" === K(e) || "hidden" === e.type)
                        return !0;
                    e = e.parentNode
                }
                return !1
            }
            function Q(e, t, n, r) {
                var i;
                if (fe.isArray(t))
                    fe.each(t, function(t, i) {
                        n || rn.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                    });
                else if (n || "object" !== fe.type(t))
                    r(e, t);
                else
                    for (i in t)
                        Q(e + "[" + i + "]", t[i], n, r)
            }
            function Z() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }
            function ee() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }
            function te(e) {
                return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            var ne = []
              , re = e.document
              , ie = ne.slice
              , oe = ne.concat
              , se = ne.push
              , ae = ne.indexOf
              , ce = {}
              , le = ce.toString
              , ue = ce.hasOwnProperty
              , de = {}
              , he = "1.12.4"
              , fe = function(e, t) {
                return new fe.fn.init(e,t)
            }
              , pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
              , ge = /^-ms-/
              , me = /-([\da-z])/gi
              , ve = function(e, t) {
                return t.toUpperCase()
            };
            fe.fn = fe.prototype = {
                jquery: he,
                constructor: fe,
                selector: "",
                length: 0,
                toArray: function() {
                    return ie.call(this)
                },
                get: function(e) {
                    return null != e ? e < 0 ? this[e + this.length] : this[e] : ie.call(this)
                },
                pushStack: function(e) {
                    var t = fe.merge(this.constructor(), e);
                    return t.prevObject = this,
                    t.context = this.context,
                    t
                },
                each: function(e) {
                    return fe.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(fe.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(ie.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: se,
                sort: ne.sort,
                splice: ne.splice
            },
            fe.extend = fe.fn.extend = function() {
                var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, c = arguments.length, l = !1;
                for ("boolean" == typeof s && (l = s,
                s = arguments[a] || {},
                a++),
                "object" == typeof s || fe.isFunction(s) || (s = {}),
                a === c && (s = this,
                a--); a < c; a++)
                    if (null != (i = arguments[a]))
                        for (r in i)
                            e = s[r],
                            n = i[r],
                            s !== n && (l && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1,
                            o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {},
                            s[r] = fe.extend(l, o, n)) : void 0 !== n && (s[r] = n));
                return s
            }
            ,
            fe.extend({
                expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return "function" === fe.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === fe.type(e)
                }
                ,
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e)
                        return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))
                        return !1;
                    try {
                        if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf"))
                            return !1
                    } catch (n) {
                        return !1
                    }
                    if (!de.ownFirst)
                        for (t in e)
                            return ue.call(e, t);
                    for (t in e)
                        ;
                    return void 0 === t || ue.call(e, t)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ce[le.call(e)] || "object" : typeof e
                },
                globalEval: function(t) {
                    t && fe.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    }
                    )(t)
                },
                camelCase: function(e) {
                    return e.replace(ge, "ms-").replace(me, ve)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var r, i = 0;
                    if (n(e))
                        for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++)
                            ;
                    else
                        for (i in e)
                            if (t.call(e[i], i, e[i]) === !1)
                                break;
                    return e
                },
                trim: function(e) {
                    return null == e ? "" : (e + "").replace(pe, "")
                },
                makeArray: function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? fe.merge(r, "string" == typeof e ? [e] : e) : se.call(r, e)),
                    r
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (ae)
                            return ae.call(t, e, n);
                        for (r = t.length,
                        n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                            if (n in t && t[n] === e)
                                return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; )
                        e[i++] = t[r++];
                    if (n !== n)
                        for (; void 0 !== t[r]; )
                            e[i++] = t[r++];
                    return e.length = i,
                    e
                },
                grep: function(e, t, n) {
                    for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
                        r = !t(e[o], o),
                        r !== a && i.push(e[o]);
                    return i
                },
                map: function(e, t, r) {
                    var i, o, s = 0, a = [];
                    if (n(e))
                        for (i = e.length; s < i; s++)
                            o = t(e[s], s, r),
                            null != o && a.push(o);
                    else
                        for (s in e)
                            o = t(e[s], s, r),
                            null != o && a.push(o);
                    return oe.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, i;
                    if ("string" == typeof t && (i = e[t],
                    t = e,
                    e = i),
                    fe.isFunction(e))
                        return n = ie.call(arguments, 2),
                        r = function() {
                            return e.apply(t || this, n.concat(ie.call(arguments)))
                        }
                        ,
                        r.guid = e.guid = e.guid || fe.guid++,
                        r
                },
                now: function() {
                    return +new Date
                },
                support: de
            }),
            "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]),
            fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                ce["[object " + t + "]"] = t.toLowerCase()
            });
            var ye = function(e) {
                function t(e, t, n, r) {
                    var i, o, s, a, c, l, d, f, p = t && t.ownerDocument, g = t ? t.nodeType : 9;
                    if (n = n || [],
                    "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                        return n;
                    if (!r && ((t ? t.ownerDocument || t : F) !== I && j(t),
                    t = t || I,
                    R)) {
                        if (11 !== g && (l = ve.exec(e)))
                            if (i = l[1]) {
                                if (9 === g) {
                                    if (!(s = t.getElementById(i)))
                                        return n;
                                    if (s.id === i)
                                        return n.push(s),
                                        n
                                } else if (p && (s = p.getElementById(i)) && H(t, s) && s.id === i)
                                    return n.push(s),
                                    n
                            } else {
                                if (l[2])
                                    return Q.apply(n, t.getElementsByTagName(e)),
                                    n;
                                if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                    return Q.apply(n, t.getElementsByClassName(i)),
                                    n
                            }
                        if (w.qsa && !V[e + " "] && (!P || !P.test(e))) {
                            if (1 !== g)
                                p = t,
                                f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = D),
                                d = E(e),
                                o = d.length,
                                c = he.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                                    d[o] = c + " " + h(d[o]);
                                f = d.join(","),
                                p = ye.test(e) && u(t.parentNode) || t
                            }
                            if (f)
                                try {
                                    return Q.apply(n, p.querySelectorAll(f)),
                                    n
                                } catch (m) {} finally {
                                    a === D && t.removeAttribute("id")
                                }
                        }
                    }
                    return C(e.replace(ae, "$1"), t, n, r)
                }
                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > S.cacheLength && delete e[t.shift()],
                        e[n + " "] = r
                    }
                    var t = [];
                    return e
                }
                function r(e) {
                    return e[D] = !0,
                    e
                }
                function i(e) {
                    var t = I.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null
                    }
                }
                function o(e, t) {
                    for (var n = e.split("|"), r = n.length; r--; )
                        S.attrHandle[n[r]] = t
                }
                function s(e, t) {
                    var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
                    if (r)
                        return r;
                    if (n)
                        for (; n = n.nextSibling; )
                            if (n === t)
                                return -1;
                    return e ? 1 : -1
                }
                function a(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }
                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }
                function l(e) {
                    return r(function(t) {
                        return t = +t,
                        r(function(n, r) {
                            for (var i, o = e([], n.length, t), s = o.length; s--; )
                                n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }
                function u(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }
                function d() {}
                function h(e) {
                    for (var t = 0, n = e.length, r = ""; t < n; t++)
                        r += e[t].value;
                    return r
                }
                function f(e, t, n) {
                    var r = t.dir
                      , i = n && "parentNode" === r
                      , o = q++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i)
                                return e(t, n, o)
                    }
                    : function(t, n, s) {
                        var a, c, l, u = [B, o];
                        if (s) {
                            for (; t = t[r]; )
                                if ((1 === t.nodeType || i) && e(t, n, s))
                                    return !0
                        } else
                            for (; t = t[r]; )
                                if (1 === t.nodeType || i) {
                                    if (l = t[D] || (t[D] = {}),
                                    c = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                    (a = c[r]) && a[0] === B && a[1] === o)
                                        return u[2] = a[2];
                                    if (c[r] = u,
                                    u[2] = e(t, n, s))
                                        return !0
                                }
                    }
                }
                function p(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--; )
                            if (!e[i](t, n, r))
                                return !1;
                        return !0
                    }
                    : e[0]
                }
                function g(e, n, r) {
                    for (var i = 0, o = n.length; i < o; i++)
                        t(e, n[i], r);
                    return r
                }
                function m(e, t, n, r, i) {
                    for (var o, s = [], a = 0, c = e.length, l = null != t; a < c; a++)
                        (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                        l && t.push(a)));
                    return s
                }
                function v(e, t, n, i, o, s) {
                    return i && !i[D] && (i = v(i)),
                    o && !o[D] && (o = v(o, s)),
                    r(function(r, s, a, c) {
                        var l, u, d, h = [], f = [], p = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, h, e, a, c), b = n ? o || (r ? e : p || i) ? [] : s : y;
                        if (n && n(y, b, a, c),
                        i)
                            for (l = m(b, f),
                            i(l, [], a, c),
                            u = l.length; u--; )
                                (d = l[u]) && (b[f[u]] = !(y[f[u]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (l = [],
                                    u = b.length; u--; )
                                        (d = b[u]) && l.push(y[u] = d);
                                    o(null, b = [], l, c)
                                }
                                for (u = b.length; u--; )
                                    (d = b[u]) && (l = o ? ee(r, d) : h[u]) > -1 && (r[l] = !(s[l] = d))
                            }
                        } else
                            b = m(b === s ? b.splice(p, b.length) : b),
                            o ? o(null, s, b, c) : Q.apply(s, b)
                    })
                }
                function y(e) {
                    for (var t, n, r, i = e.length, o = S.relative[e[0].type], s = o || S.relative[" "], a = o ? 1 : 0, c = f(function(e) {
                        return e === t
                    }, s, !0), l = f(function(e) {
                        return ee(t, e) > -1
                    }, s, !0), u = [function(e, n, r) {
                        var i = !o && (r || n !== A) || ((t = n).nodeType ? c(e, n, r) : l(e, n, r));
                        return t = null,
                        i
                    }
                    ]; a < i; a++)
                        if (n = S.relative[e[a].type])
                            u = [f(p(u), n)];
                        else {
                            if (n = S.filter[e[a].type].apply(null, e[a].matches),
                            n[D]) {
                                for (r = ++a; r < i && !S.relative[e[r].type]; r++)
                                    ;
                                return v(a > 1 && p(u), a > 1 && h(e.slice(0, a - 1).concat({
                                    value: " " === e[a - 2].type ? "*" : ""
                                })).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && h(e))
                            }
                            u.push(n)
                        }
                    return p(u)
                }
                function b(e, n) {
                    var i = n.length > 0
                      , o = e.length > 0
                      , s = function(r, s, a, c, l) {
                        var u, d, h, f = 0, p = "0", g = r && [], v = [], y = A, b = r || o && S.find.TAG("*", l), _ = B += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (l && (A = s === I || s || l); p !== w && null != (u = b[p]); p++) {
                            if (o && u) {
                                for (d = 0,
                                s || u.ownerDocument === I || (j(u),
                                a = !R); h = e[d++]; )
                                    if (h(u, s || I, a)) {
                                        c.push(u);
                                        break
                                    }
                                l && (B = _)
                            }
                            i && ((u = !h && u) && f--,
                            r && g.push(u))
                        }
                        if (f += p,
                        i && p !== f) {
                            for (d = 0; h = n[d++]; )
                                h(g, v, s, a);
                            if (r) {
                                if (f > 0)
                                    for (; p--; )
                                        g[p] || v[p] || (v[p] = K.call(c));
                                v = m(v)
                            }
                            Q.apply(c, v),
                            l && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(c)
                        }
                        return l && (B = _,
                        A = y),
                        g
                    };
                    return i ? r(s) : s
                }
                var _, w, S, k, x, E, T, C, A, $, L, j, I, O, R, P, N, M, H, D = "sizzle" + 1 * new Date, F = e.document, B = 0, q = 0, z = n(), W = n(), V = n(), G = function(e, t) {
                    return e === t && (L = !0),
                    0
                }, U = 1 << 31, X = {}.hasOwnProperty, Y = [], K = Y.pop, J = Y.push, Q = Y.push, Z = Y.slice, ee = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), de = new RegExp(oe), he = new RegExp("^" + re + "$"), fe = {
                    ID: new RegExp("^#(" + re + ")"),
                    CLASS: new RegExp("^\\.(" + re + ")"),
                    TAG: new RegExp("^(" + re + "|[*])"),
                    ATTR: new RegExp("^" + ie),
                    PSEUDO: new RegExp("^" + oe),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + te + ")$","i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
                }, pe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, Se = function() {
                    j()
                };
                try {
                    Q.apply(Y = Z.call(F.childNodes), F.childNodes),
                    Y[F.childNodes.length].nodeType
                } catch (ke) {
                    Q = {
                        apply: Y.length ? function(e, t) {
                            J.apply(e, Z.call(t))
                        }
                        : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++]; )
                                ;
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {},
                x = t.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }
                ,
                j = t.setDocument = function(e) {
                    var t, n, r = e ? e.ownerDocument || e : F;
                    return r !== I && 9 === r.nodeType && r.documentElement ? (I = r,
                    O = I.documentElement,
                    R = !x(I),
                    (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)),
                    w.attributes = i(function(e) {
                        return e.className = "i",
                        !e.getAttribute("className")
                    }),
                    w.getElementsByTagName = i(function(e) {
                        return e.appendChild(I.createComment("")),
                        !e.getElementsByTagName("*").length
                    }),
                    w.getElementsByClassName = me.test(I.getElementsByClassName),
                    w.getById = i(function(e) {
                        return O.appendChild(e).id = D,
                        !I.getElementsByName || !I.getElementsByName(D).length
                    }),
                    w.getById ? (S.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && R) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }
                    ,
                    S.filter.ID = function(e) {
                        var t = e.replace(_e, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }
                    ) : (delete S.find.ID,
                    S.filter.ID = function(e) {
                        var t = e.replace(_e, we);
                        return function(e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }
                    ),
                    S.find.TAG = w.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    }
                    : function(e, t) {
                        var n, r = [], i = 0, o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[i++]; )
                                1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }
                    ,
                    S.find.CLASS = w.getElementsByClassName && function(e, t) {
                        if ("undefined" != typeof t.getElementsByClassName && R)
                            return t.getElementsByClassName(e)
                    }
                    ,
                    N = [],
                    P = [],
                    (w.qsa = me.test(I.querySelectorAll)) && (i(function(e) {
                        O.appendChild(e).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"),
                        e.querySelectorAll("[id~=" + D + "-]").length || P.push("~="),
                        e.querySelectorAll(":checked").length || P.push(":checked"),
                        e.querySelectorAll("a#" + D + "+*").length || P.push(".#.+[+~]")
                    }),
                    i(function(e) {
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        P.push(",.*:")
                    })),
                    (w.matchesSelector = me.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                        w.disconnectedMatch = M.call(e, "div"),
                        M.call(e, "[s!='']:x"),
                        N.push("!=", oe)
                    }),
                    P = P.length && new RegExp(P.join("|")),
                    N = N.length && new RegExp(N.join("|")),
                    t = me.test(O.compareDocumentPosition),
                    H = t || me.test(O.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                          , r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    }
                    : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    G = t ? function(e, t) {
                        if (e === t)
                            return L = !0,
                            0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                        1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === F && H(F, e) ? -1 : t === I || t.ownerDocument === F && H(F, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & n ? -1 : 1)
                    }
                    : function(e, t) {
                        if (e === t)
                            return L = !0,
                            0;
                        var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], c = [t];
                        if (!i || !o)
                            return e === I ? -1 : t === I ? 1 : i ? -1 : o ? 1 : $ ? ee($, e) - ee($, t) : 0;
                        if (i === o)
                            return s(e, t);
                        for (n = e; n = n.parentNode; )
                            a.unshift(n);
                        for (n = t; n = n.parentNode; )
                            c.unshift(n);
                        for (; a[r] === c[r]; )
                            r++;
                        return r ? s(a[r], c[r]) : a[r] === F ? -1 : c[r] === F ? 1 : 0
                    }
                    ,
                    I) : I
                }
                ,
                t.matches = function(e, n) {
                    return t(e, null, null, n)
                }
                ,
                t.matchesSelector = function(e, n) {
                    if ((e.ownerDocument || e) !== I && j(e),
                    n = n.replace(ue, "='$1']"),
                    w.matchesSelector && R && !V[n + " "] && (!N || !N.test(n)) && (!P || !P.test(n)))
                        try {
                            var r = M.call(e, n);
                            if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return r
                        } catch (i) {}
                    return t(n, I, null, [e]).length > 0
                }
                ,
                t.contains = function(e, t) {
                    return (e.ownerDocument || e) !== I && j(e),
                    H(e, t)
                }
                ,
                t.attr = function(e, t) {
                    (e.ownerDocument || e) !== I && j(e);
                    var n = S.attrHandle[t.toLowerCase()]
                      , r = n && X.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !R) : void 0;
                    return void 0 !== r ? r : w.attributes || !R ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }
                ,
                t.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                t.uniqueSort = function(e) {
                    var t, n = [], r = 0, i = 0;
                    if (L = !w.detectDuplicates,
                    $ = !w.sortStable && e.slice(0),
                    e.sort(G),
                    L) {
                        for (; t = e[i++]; )
                            t === e[i] && (r = n.push(i));
                        for (; r--; )
                            e.splice(n[r], 1)
                    }
                    return $ = null,
                    e
                }
                ,
                k = t.getText = function(e) {
                    var t, n = "", r = 0, i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                n += k(e)
                        } else if (3 === i || 4 === i)
                            return e.nodeValue
                    } else
                        for (; t = e[r++]; )
                            n += k(t);
                    return n
                }
                ,
                S = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(_e, we),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(_e, we),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                            e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                            e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(_e, we).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, n, r) {
                            return function(i) {
                                var o = t.attr(i, e);
                                return null == o ? "!=" === n : !n || (o += "",
                                "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3)
                              , s = "last" !== e.slice(-4)
                              , a = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            }
                            : function(t, n, c) {
                                var l, u, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !c && !a, b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g; ) {
                                            for (h = t; h = h[g]; )
                                                if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                    return !1;
                                            p = g = "only" === e && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? m.firstChild : m.lastChild],
                                    s && y) {
                                        for (h = m,
                                        d = h[D] || (h[D] = {}),
                                        u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                        l = u[e] || [],
                                        f = l[0] === B && l[1],
                                        b = f && l[2],
                                        h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop(); )
                                            if (1 === h.nodeType && ++b && h === t) {
                                                u[e] = [B, f, b];
                                                break
                                            }
                                    } else if (y && (h = t,
                                    d = h[D] || (h[D] = {}),
                                    u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                    l = u[e] || [],
                                    f = l[0] === B && l[1],
                                    b = f),
                                    b === !1)
                                        for (; (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (d = h[D] || (h[D] = {}),
                                        u = d[h.uniqueID] || (d[h.uniqueID] = {}),
                                        u[e] = [B, b]),
                                        h !== t)); )
                                            ;
                                    return b -= i,
                                    b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, n) {
                            var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return o[D] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                            S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                                for (var r, i = o(e, n), s = i.length; s--; )
                                    r = ee(e, i[s]),
                                    e[r] = !(t[r] = i[s])
                            }) : function(e) {
                                return o(e, 0, i)
                            }
                            ) : o
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = []
                              , n = []
                              , i = T(e.replace(ae, "$1"));
                            return i[D] ? r(function(e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--; )
                                    (o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, r, o) {
                                return t[0] = e,
                                i(t, null, o, n),
                                t[0] = null,
                                !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return e = e.replace(_e, we),
                            function(t) {
                                return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function(e) {
                            return he.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(_e, we).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === O
                        },
                        focus: function(e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !S.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ge.test(e.nodeName)
                        },
                        input: function(e) {
                            return pe.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; n < t; n += 2)
                                e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; --r >= 0; )
                                e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                            return e
                        })
                    }
                },
                S.pseudos.nth = S.pseudos.eq;
                for (_ in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                    S.pseudos[_] = a(_);
                for (_ in {
                    submit: !0,
                    reset: !0
                })
                    S.pseudos[_] = c(_);
                return d.prototype = S.filters = S.pseudos,
                S.setFilters = new d,
                E = t.tokenize = function(e, n) {
                    var r, i, o, s, a, c, l, u = W[e + " "];
                    if (u)
                        return n ? 0 : u.slice(0);
                    for (a = e,
                    c = [],
                    l = S.preFilter; a; ) {
                        r && !(i = ce.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                        c.push(o = [])),
                        r = !1,
                        (i = le.exec(a)) && (r = i.shift(),
                        o.push({
                            value: r,
                            type: i[0].replace(ae, " ")
                        }),
                        a = a.slice(r.length));
                        for (s in S.filter)
                            !(i = fe[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                            o.push({
                                value: r,
                                type: s,
                                matches: i
                            }),
                            a = a.slice(r.length));
                        if (!r)
                            break
                    }
                    return n ? a.length : a ? t.error(e) : W(e, c).slice(0)
                }
                ,
                T = t.compile = function(e, t) {
                    var n, r = [], i = [], o = V[e + " "];
                    if (!o) {
                        for (t || (t = E(e)),
                        n = t.length; n--; )
                            o = y(t[n]),
                            o[D] ? r.push(o) : i.push(o);
                        o = V(e, b(i, r)),
                        o.selector = e
                    }
                    return o
                }
                ,
                C = t.select = function(e, t, n, r) {
                    var i, o, s, a, c, l = "function" == typeof e && e, d = !r && E(e = l.selector || e);
                    if (n = n || [],
                    1 === d.length) {
                        if (o = d[0] = d[0].slice(0),
                        o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && R && S.relative[o[1].type]) {
                            if (t = (S.find.ID(s.matches[0].replace(_e, we), t) || [])[0],
                            !t)
                                return n;
                            l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                        !S.relative[a = s.type]); )
                            if ((c = S.find[a]) && (r = c(s.matches[0].replace(_e, we), ye.test(o[0].type) && u(t.parentNode) || t))) {
                                if (o.splice(i, 1),
                                e = r.length && h(o),
                                !e)
                                    return Q.apply(n, r),
                                    n;
                                break
                            }
                    }
                    return (l || T(e, d))(r, t, !R, n, !t || ye.test(e) && u(t.parentNode) || t),
                    n
                }
                ,
                w.sortStable = D.split("").sort(G).join("") === D,
                w.detectDuplicates = !!L,
                j(),
                w.sortDetached = i(function(e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"))
                }),
                i(function(e) {
                    return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(e, t, n) {
                    if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }),
                w.attributes && i(function(e) {
                    return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                }) || o("value", function(e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                }),
                i(function(e) {
                    return null == e.getAttribute("disabled")
                }) || o(te, function(e, t, n) {
                    var r;
                    if (!n)
                        return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }),
                t
            }(e);
            fe.find = ye,
            fe.expr = ye.selectors,
            fe.expr[":"] = fe.expr.pseudos,
            fe.uniqueSort = fe.unique = ye.uniqueSort,
            fe.text = ye.getText,
            fe.isXMLDoc = ye.isXML,
            fe.contains = ye.contains;
            var be = function(e, t, n) {
                for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                    if (1 === e.nodeType) {
                        if (i && fe(e).is(n))
                            break;
                        r.push(e)
                    }
                return r
            }
              , _e = function(e, t) {
                for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                return n
            }
              , we = fe.expr.match.needsContext
              , Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
              , ke = /^.[^:#\[\.,]*$/;
            fe.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            }
            ,
            fe.fn.extend({
                find: function(e) {
                    var t, n = [], r = this, i = r.length;
                    if ("string" != typeof e)
                        return this.pushStack(fe(e).filter(function() {
                            for (t = 0; t < i; t++)
                                if (fe.contains(r[t], this))
                                    return !0
                        }));
                    for (t = 0; t < i; t++)
                        fe.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? fe.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + e : e,
                    n
                },
                filter: function(e) {
                    return this.pushStack(r(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(r(this, e || [], !0))
                },
                is: function(e) {
                    return !!r(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
                }
            });
            var xe, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = fe.fn.init = function(e, t, n) {
                var r, i;
                if (!e)
                    return this;
                if (n = n || xe,
                "string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ee.exec(e),
                    !r || !r[1] && t)
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (r[1]) {
                        if (t = t instanceof fe ? t[0] : t,
                        fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)),
                        Se.test(r[1]) && fe.isPlainObject(t))
                            for (r in t)
                                fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                        return this
                    }
                    if (i = re.getElementById(r[2]),
                    i && i.parentNode) {
                        if (i.id !== r[2])
                            return xe.find(e);
                        this.length = 1,
                        this[0] = i
                    }
                    return this.context = re,
                    this.selector = e,
                    this
                }
                return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                fe.makeArray(e, this))
            }
            ;
            Te.prototype = fe.fn,
            xe = fe(re);
            var Ce = /^(?:parents|prev(?:Until|All))/
              , Ae = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            fe.fn.extend({
                has: function(e) {
                    var t, n = fe(e, this), r = n.length;
                    return this.filter(function() {
                        for (t = 0; t < r; t++)
                            if (fe.contains(this, n[t]))
                                return !0
                    })
                },
                closest: function(e, t) {
                    for (var n, r = 0, i = this.length, o = [], s = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                    return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
                },
                index: function(e) {
                    return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
                },
                addBack: function(e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }),
            fe.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                    return be(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return be(e, "parentNode", n)
                },
                next: function(e) {
                    return i(e, "nextSibling")
                },
                prev: function(e) {
                    return i(e, "previousSibling")
                },
                nextAll: function(e) {
                    return be(e, "nextSibling")
                },
                prevAll: function(e) {
                    return be(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return be(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return be(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return _e((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return _e(e.firstChild)
                },
                contents: function(e) {
                    return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
                }
            }, function(e, t) {
                fe.fn[e] = function(n, r) {
                    var i = fe.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (i = fe.filter(r, i)),
                    this.length > 1 && (Ae[e] || (i = fe.uniqueSort(i)),
                    Ce.test(e) && (i = i.reverse())),
                    this.pushStack(i)
                }
            });
            var $e = /\S+/g;
            fe.Callbacks = function(e) {
                e = "string" == typeof e ? o(e) : fe.extend({}, e);
                var t, n, r, i, s = [], a = [], c = -1, l = function() {
                    for (i = e.once,
                    r = t = !0; a.length; c = -1)
                        for (n = a.shift(); ++c < s.length; )
                            s[c].apply(n[0], n[1]) === !1 && e.stopOnFalse && (c = s.length,
                            n = !1);
                    e.memory || (n = !1),
                    t = !1,
                    i && (s = n ? [] : "")
                }, u = {
                    add: function() {
                        return s && (n && !t && (c = s.length - 1,
                        a.push(n)),
                        function r(t) {
                            fe.each(t, function(t, n) {
                                fe.isFunction(n) ? e.unique && u.has(n) || s.push(n) : n && n.length && "string" !== fe.type(n) && r(n)
                            })
                        }(arguments),
                        n && !t && l()),
                        this
                    },
                    remove: function() {
                        return fe.each(arguments, function(e, t) {
                            for (var n; (n = fe.inArray(t, s, n)) > -1; )
                                s.splice(n, 1),
                                n <= c && c--
                        }),
                        this
                    },
                    has: function(e) {
                        return e ? fe.inArray(e, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []),
                        this
                    },
                    disable: function() {
                        return i = a = [],
                        s = n = "",
                        this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return i = !0,
                        n || u.disable(),
                        this
                    },
                    locked: function() {
                        return !!i
                    },
                    fireWith: function(e, n) {
                        return i || (n = n || [],
                        n = [e, n.slice ? n.slice() : n],
                        a.push(n),
                        t || l()),
                        this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments),
                        this
                    },
                    fired: function() {
                        return !!r
                    }
                };
                return u
            }
            ,
            fe.extend({
                Deferred: function(e) {
                    var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]]
                      , n = "pending"
                      , r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(arguments),
                            this
                        },
                        then: function() {
                            var e = arguments;
                            return fe.Deferred(function(n) {
                                fe.each(t, function(t, o) {
                                    var s = fe.isFunction(e[t]) && e[t];
                                    i[o[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }),
                                e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? fe.extend(e, r) : r
                        }
                    }
                      , i = {};
                    return r.pipe = r.then,
                    fe.each(t, function(e, o) {
                        var s = o[2]
                          , a = o[3];
                        r[o[1]] = s.add,
                        a && s.add(function() {
                            n = a
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                        i[o[0]] = function() {
                            return i[o[0] + "With"](this === i ? r : this, arguments),
                            this
                        }
                        ,
                        i[o[0] + "With"] = s.fireWith
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                },
                when: function(e) {
                    var t, n, r, i = 0, o = ie.call(arguments), s = o.length, a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0, c = 1 === a ? e : fe.Deferred(), l = function(e, n, r) {
                        return function(i) {
                            n[e] = this,
                            r[e] = arguments.length > 1 ? ie.call(arguments) : i,
                            r === t ? c.notifyWith(n, r) : --a || c.resolveWith(n, r)
                        }
                    };
                    if (s > 1)
                        for (t = new Array(s),
                        n = new Array(s),
                        r = new Array(s); i < s; i++)
                            o[i] && fe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(c.reject) : --a;
                    return a || c.resolveWith(r, o),
                    c.promise()
                }
            });
            var Le;
            fe.fn.ready = function(e) {
                return fe.ready.promise().done(e),
                this
            }
            ,
            fe.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? fe.readyWait++ : fe.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0,
                    e !== !0 && --fe.readyWait > 0 || (Le.resolveWith(re, [fe]),
                    fe.fn.triggerHandler && (fe(re).triggerHandler("ready"),
                    fe(re).off("ready"))))
                }
            }),
            fe.ready.promise = function(t) {
                if (!Le)
                    if (Le = fe.Deferred(),
                    "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll)
                        e.setTimeout(fe.ready);
                    else if (re.addEventListener)
                        re.addEventListener("DOMContentLoaded", a),
                        e.addEventListener("load", a);
                    else {
                        re.attachEvent("onreadystatechange", a),
                        e.attachEvent("onload", a);
                        var n = !1;
                        try {
                            n = null == e.frameElement && re.documentElement
                        } catch (r) {}
                        n && n.doScroll && !function i() {
                            if (!fe.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (t) {
                                    return e.setTimeout(i, 50)
                                }
                                s(),
                                fe.ready()
                            }
                        }()
                    }
                return Le.promise(t)
            }
            ,
            fe.ready.promise();
            var je;
            for (je in fe(de))
                break;
            de.ownFirst = "0" === je,
            de.inlineBlockNeedsLayout = !1,
            fe(function() {
                var e, t, n, r;
                n = re.getElementsByTagName("body")[0],
                n && n.style && (t = re.createElement("div"),
                r = re.createElement("div"),
                r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(r).appendChild(t),
                "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
                e && (n.style.zoom = 1)),
                n.removeChild(r))
            }),
            function() {
                var e = re.createElement("div");
                de.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    de.deleteExpando = !1
                }
                e = null
            }();
            var Ie = function(e) {
                var t = fe.noData[(e.nodeName + " ").toLowerCase()]
                  , n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
            }
              , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , Re = /([A-Z])/g;
            fe.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando],
                    !!e && !l(e)
                },
                data: function(e, t, n) {
                    return u(e, t, n)
                },
                removeData: function(e, t) {
                    return d(e, t)
                },
                _data: function(e, t, n) {
                    return u(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return d(e, t, !0)
                }
            }),
            fe.fn.extend({
                data: function(e, t) {
                    var n, r, i, o = this[0], s = o && o.attributes;
                    if (void 0 === e) {
                        if (this.length && (i = fe.data(o),
                        1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                            for (n = s.length; n--; )
                                s[n] && (r = s[n].name,
                                0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)),
                                c(o, r, i[r])));
                            fe._data(o, "parsedAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof e ? this.each(function() {
                        fe.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        fe.data(this, e, t)
                    }) : o ? c(o, e, fe.data(o, e)) : void 0
                },
                removeData: function(e) {
                    return this.each(function() {
                        fe.removeData(this, e)
                    })
                }
            }),
            fe.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e)
                        return t = (t || "fx") + "queue",
                        r = fe._data(e, t),
                        n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)),
                        r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = fe.queue(e, t)
                      , r = n.length
                      , i = n.shift()
                      , o = fe._queueHooks(e, t)
                      , s = function() {
                        fe.dequeue(e, t)
                    };
                    "inprogress" === i && (i = n.shift(),
                    r--),
                    i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, s, o)),
                    !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return fe._data(e, n) || fe._data(e, n, {
                        empty: fe.Callbacks("once memory").add(function() {
                            fe._removeData(e, t + "queue"),
                            fe._removeData(e, n)
                        })
                    })
                }
            }),
            fe.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = fe.queue(this, e, t);
                        fe._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        fe.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1, i = fe.Deferred(), o = this, s = this.length, a = function() {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; s--; )
                        n = fe._data(o[s], e + "queueHooks"),
                        n && n.empty && (r++,
                        n.empty.add(a));
                    return a(),
                    i.promise(t)
                }
            }),
            function() {
                var e;
                de.shrinkWrapBlocks = function() {
                    if (null != e)
                        return e;
                    e = !1;
                    var t, n, r;
                    return n = re.getElementsByTagName("body")[0],
                    n && n.style ? (t = re.createElement("div"),
                    r = re.createElement("div"),
                    r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(r).appendChild(t),
                    "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    t.appendChild(re.createElement("div")).style.width = "5px",
                    e = 3 !== t.offsetWidth),
                    n.removeChild(r),
                    e) : void 0
                }
            }();
            var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , Ne = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$","i")
              , Me = ["Top", "Right", "Bottom", "Left"]
              , He = function(e, t) {
                return e = t || e,
                "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
            }
              , De = function(e, t, n, r, i, o, s) {
                var a = 0
                  , c = e.length
                  , l = null == n;
                if ("object" === fe.type(n)) {
                    i = !0;
                    for (a in n)
                        De(e, t, a, n[a], !0, o, s)
                } else if (void 0 !== r && (i = !0,
                fe.isFunction(r) || (s = !0),
                l && (s ? (t.call(e, r),
                t = null) : (l = t,
                t = function(e, t, n) {
                    return l.call(fe(e), n)
                }
                )),
                t))
                    for (; a < c; a++)
                        t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                return i ? e : l ? t.call(e) : c ? t(e[0], n) : o
            }
              , Fe = /^(?:checkbox|radio)$/i
              , Be = /<([\w:-]+)/
              , qe = /^$|\/(?:java|ecma)script/i
              , ze = /^\s+/
              , We = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            !function() {
                var e = re.createElement("div")
                  , t = re.createDocumentFragment()
                  , n = re.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                de.leadingWhitespace = 3 === e.firstChild.nodeType,
                de.tbody = !e.getElementsByTagName("tbody").length,
                de.htmlSerialize = !!e.getElementsByTagName("link").length,
                de.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML,
                n.type = "checkbox",
                n.checked = !0,
                t.appendChild(n),
                de.appendChecked = n.checked,
                e.innerHTML = "<textarea>x</textarea>",
                de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
                t.appendChild(e),
                n = re.createElement("input"),
                n.setAttribute("type", "radio"),
                n.setAttribute("checked", "checked"),
                n.setAttribute("name", "t"),
                e.appendChild(n),
                de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
                de.noCloneEvent = !!e.addEventListener,
                e[fe.expando] = 1,
                de.attributes = !e.getAttribute(fe.expando)
            }();
            var Ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            Ve.optgroup = Ve.option,
            Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead,
            Ve.th = Ve.td;
            var Ge = /<|&#?\w+;/
              , Ue = /<tbody/i;
            !function() {
                var t, n, r = re.createElement("div");
                for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                    n = "on" + t,
                    (de[t] = n in e) || (r.setAttribute(n, "t"),
                    de[t] = r.attributes[n].expando === !1);
                r = null
            }();
            var Xe = /^(?:input|select|textarea)$/i
              , Ye = /^key/
              , Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Je = /^(?:focusinfocus|focusoutblur)$/
              , Qe = /^([^.]*)(?:\.(.+)|)/;
            fe.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var o, s, a, c, l, u, d, h, f, p, g, m = fe._data(e);
                    if (m) {
                        for (n.handler && (c = n,
                        n = c.handler,
                        i = c.selector),
                        n.guid || (n.guid = fe.guid++),
                        (s = m.events) || (s = m.events = {}),
                        (u = m.handle) || (u = m.handle = function(e) {
                            return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(u.elem, arguments)
                        }
                        ,
                        u.elem = e),
                        t = (t || "").match($e) || [""],
                        a = t.length; a--; )
                            o = Qe.exec(t[a]) || [],
                            f = g = o[1],
                            p = (o[2] || "").split(".").sort(),
                            f && (l = fe.event.special[f] || {},
                            f = (i ? l.delegateType : l.bindType) || f,
                            l = fe.event.special[f] || {},
                            d = fe.extend({
                                type: f,
                                origType: g,
                                data: r,
                                handler: n,
                                guid: n.guid,
                                selector: i,
                                needsContext: i && fe.expr.match.needsContext.test(i),
                                namespace: p.join(".")
                            }, c),
                            (h = s[f]) || (h = s[f] = [],
                            h.delegateCount = 0,
                            l.setup && l.setup.call(e, r, p, u) !== !1 || (e.addEventListener ? e.addEventListener(f, u, !1) : e.attachEvent && e.attachEvent("on" + f, u))),
                            l.add && (l.add.call(e, d),
                            d.handler.guid || (d.handler.guid = n.guid)),
                            i ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            fe.event.global[f] = !0);
                        e = null
                    }
                },
                remove: function(e, t, n, r, i) {
                    var o, s, a, c, l, u, d, h, f, p, g, m = fe.hasData(e) && fe._data(e);
                    if (m && (u = m.events)) {
                        for (t = (t || "").match($e) || [""],
                        l = t.length; l--; )
                            if (a = Qe.exec(t[l]) || [],
                            f = g = a[1],
                            p = (a[2] || "").split(".").sort(),
                            f) {
                                for (d = fe.event.special[f] || {},
                                f = (r ? d.delegateType : d.bindType) || f,
                                h = u[f] || [],
                                a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                c = o = h.length; o--; )
                                    s = h[o],
                                    !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (h.splice(o, 1),
                                    s.selector && h.delegateCount--,
                                    d.remove && d.remove.call(e, s));
                                c && !h.length && (d.teardown && d.teardown.call(e, p, m.handle) !== !1 || fe.removeEvent(e, f, m.handle),
                                delete u[f])
                            } else
                                for (f in u)
                                    fe.event.remove(e, f + t[l], n, r, !0);
                        fe.isEmptyObject(u) && (delete m.handle,
                        fe._removeData(e, "events"))
                    }
                },
                trigger: function(t, n, r, i) {
                    var o, s, a, c, l, u, d, h = [r || re], f = ue.call(t, "type") ? t.type : t, p = ue.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = u = r = r || re,
                    3 !== r.nodeType && 8 !== r.nodeType && !Je.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."),
                    f = p.shift(),
                    p.sort()),
                    s = f.indexOf(":") < 0 && "on" + f,
                    t = t[fe.expando] ? t : new fe.Event(f,"object" == typeof t && t),
                    t.isTrigger = i ? 2 : 3,
                    t.namespace = p.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = r),
                    n = null == n ? [t] : fe.makeArray(n, [t]),
                    l = fe.event.special[f] || {},
                    i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                        if (!i && !l.noBubble && !fe.isWindow(r)) {
                            for (c = l.delegateType || f,
                            Je.test(c + f) || (a = a.parentNode); a; a = a.parentNode)
                                h.push(a),
                                u = a;
                            u === (r.ownerDocument || re) && h.push(u.defaultView || u.parentWindow || e)
                        }
                        for (d = 0; (a = h[d++]) && !t.isPropagationStopped(); )
                            t.type = d > 1 ? c : l.bindType || f,
                            o = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"),
                            o && o.apply(a, n),
                            o = s && a[s],
                            o && o.apply && Ie(a) && (t.result = o.apply(a, n),
                            t.result === !1 && t.preventDefault());
                        if (t.type = f,
                        !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(h.pop(), n) === !1) && Ie(r) && s && r[f] && !fe.isWindow(r)) {
                            u = r[s],
                            u && (r[s] = null),
                            fe.event.triggered = f;
                            try {
                                r[f]()
                            } catch (g) {}
                            fe.event.triggered = void 0,
                            u && (r[s] = u)
                        }
                        return t.result
                    }
                },
                dispatch: function(e) {
                    e = fe.event.fix(e);
                    var t, n, r, i, o, s = [], a = ie.call(arguments), c = (fe._data(this, "events") || {})[e.type] || [], l = fe.event.special[e.type] || {};
                    if (a[0] = e,
                    e.delegateTarget = this,
                    !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                        for (s = fe.event.handlers.call(this, e, c),
                        t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                            for (e.currentTarget = i.elem,
                            n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                                e.data = o.data,
                                r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                                void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                                e.stopPropagation()));
                        return l.postDispatch && l.postDispatch.call(this, e),
                        e.result
                    }
                },
                handlers: function(e, t) {
                    var n, r, i, o, s = [], a = t.delegateCount, c = e.target;
                    if (a && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; c != this; c = c.parentNode || this)
                            if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                                for (r = [],
                                n = 0; n < a; n++)
                                    o = t[n],
                                    i = o.selector + " ",
                                    void 0 === r[i] && (r[i] = o.needsContext ? fe(i, this).index(c) > -1 : fe.find(i, this, null, [c]).length),
                                    r[i] && r.push(o);
                                r.length && s.push({
                                    elem: c,
                                    handlers: r
                                })
                            }
                    return a < t.length && s.push({
                        elem: this,
                        handlers: t.slice(a)
                    }),
                    s
                },
                fix: function(e) {
                    if (e[fe.expando])
                        return e;
                    var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                    for (s || (this.fixHooks[i] = s = Ke.test(i) ? this.mouseHooks : Ye.test(i) ? this.keyHooks : {}),
                    r = s.props ? this.props.concat(s.props) : this.props,
                    e = new fe.Event(o),
                    t = r.length; t--; )
                        n = r[t],
                        e[n] = o[n];
                    return e.target || (e.target = o.srcElement || re),
                    3 === e.target.nodeType && (e.target = e.target.parentNode),
                    e.metaKey = !!e.metaKey,
                    s.filter ? s.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                        e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, o = t.button, s = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re,
                        i = r.documentElement,
                        n = r.body,
                        e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                        e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                        !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
                        e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                        e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== _() && this.focus)
                                try {
                                    return this.focus(),
                                    !1
                                } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === _() && this.blur)
                                return this.blur(),
                                !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click)
                                return this.click(),
                                !1
                        },
                        _default: function(e) {
                            return fe.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n) {
                    var r = fe.extend(new fe.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    fe.event.trigger(r, null, t),
                    r.isDefaultPrevented() && n.preventDefault()
                }
            },
            fe.removeEvent = re.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            }
            : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null),
                e.detachEvent(r, n))
            }
            ,
            fe.Event = function(e, t) {
                return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e,
                t && fe.extend(this, t),
                this.timeStamp = e && e.timeStamp || fe.now(),
                void (this[fe.expando] = !0)) : new fe.Event(e,t)
            }
            ,
            fe.Event.prototype = {
                constructor: fe.Event,
                isDefaultPrevented: b,
                isPropagationStopped: b,
                isImmediatePropagationStopped: b,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = y,
                    e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = y,
                    e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = y,
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
                }
            },
            fe.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                fe.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || fe.contains(r, i)) || (e.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        e.type = t),
                        n
                    }
                }
            }),
            de.submit || (fe.event.special.submit = {
                setup: function() {
                    return !fe.nodeName(this, "form") && void fe.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target
                          , n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                        n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                            e._submitBubble = !0
                        }),
                        fe._data(n, "submit", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submitBubble && (delete e._submitBubble,
                    this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
                },
                teardown: function() {
                    return !fe.nodeName(this, "form") && void fe.event.remove(this, "._submit")
                }
            }),
            de.change || (fe.event.special.change = {
                setup: function() {
                    return Xe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }),
                    fe.event.add(this, "click._change", function(e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1),
                        fe.event.simulate("change", this, e)
                    })),
                    !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        Xe.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                        }),
                        fe._data(t, "change", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                        return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return fe.event.remove(this, "._change"),
                    !Xe.test(this.nodeName)
                }
            }),
            de.focusin || fe.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    fe.event.simulate(t, e.target, fe.event.fix(e))
                };
                fe.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this
                          , i = fe._data(r, t);
                        i || r.addEventListener(e, n, !0),
                        fe._data(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this
                          , i = fe._data(r, t) - 1;
                        i ? fe._data(r, t, i) : (r.removeEventListener(e, n, !0),
                        fe._removeData(r, t))
                    }
                }
            }),
            fe.fn.extend({
                on: function(e, t, n, r) {
                    return w(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return w(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)
                        return r = e.handleObj,
                        fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                    if ("object" == typeof e) {
                        for (i in e)
                            this.off(i, t, e[i]);
                        return this
                    }
                    return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                    n === !1 && (n = b),
                    this.each(function() {
                        fe.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        fe.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n)
                        return fe.event.trigger(e, t, n, !0)
                }
            });
            var Ze = / jQuery\d+="(?:null|\d+)"/g
              , et = new RegExp("<(?:" + We + ")[\\s/>]","i")
              , tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
              , nt = /<script|<style|<link/i
              , rt = /checked\s*(?:[^=]|=\s*.checked.)/i
              , it = /^true\/(.*)/
              , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
              , st = f(re)
              , at = st.appendChild(re.createElement("div"));
            fe.extend({
                htmlPrefilter: function(e) {
                    return e.replace(tt, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, o, s, a, c = fe.contains(e.ownerDocument, e);
                    if (de.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML,
                    at.removeChild(o = at.firstChild)),
                    !(de.noCloneEvent && de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                        for (r = p(o),
                        a = p(e),
                        s = 0; null != (i = a[s]); ++s)
                            r[s] && T(i, r[s]);
                    if (t)
                        if (n)
                            for (a = a || p(e),
                            r = r || p(o),
                            s = 0; null != (i = a[s]); s++)
                                E(i, r[s]);
                        else
                            E(e, o);
                    return r = p(o, "script"),
                    r.length > 0 && g(r, !c && p(e, "script")),
                    r = a = i = null,
                    o
                },
                cleanData: function(e, t) {
                    for (var n, r, i, o, s = 0, a = fe.expando, c = fe.cache, l = de.attributes, u = fe.event.special; null != (n = e[s]); s++)
                        if ((t || Ie(n)) && (i = n[a],
                        o = i && c[i])) {
                            if (o.events)
                                for (r in o.events)
                                    u[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, o.handle);
                            c[i] && (delete c[i],
                            l || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a),
                            ne.push(i))
                        }
                }
            }),
            fe.fn.extend({
                domManip: C,
                detach: function(e) {
                    return A(this, e, !0)
                },
                remove: function(e) {
                    return A(this, e)
                },
                text: function(e) {
                    return De(this, function(e) {
                        return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return C(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = S(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return C(this, arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = S(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return C(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return C(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && fe.cleanData(p(e, !1)); e.firstChild; )
                            e.removeChild(e.firstChild);
                        e.options && fe.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return fe.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return De(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , r = this.length;
                        if (void 0 === e)
                            return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                        if ("string" == typeof e && !nt.test(e) && (de.htmlSerialize || !et.test(e)) && (de.leadingWhitespace || !ze.test(e)) && !Ve[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = fe.htmlPrefilter(e);
                            try {
                                for (; n < r; n++)
                                    t = this[n] || {},
                                    1 === t.nodeType && (fe.cleanData(p(t, !1)),
                                    t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return C(this, arguments, function(t) {
                        var n = this.parentNode;
                        fe.inArray(this, e) < 0 && (fe.cleanData(p(this)),
                        n && n.replaceChild(t, this))
                    }, e)
                }
            }),
            fe.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                fe.fn[e] = function(e) {
                    for (var n, r = 0, i = [], o = fe(e), s = o.length - 1; r <= s; r++)
                        n = r === s ? this : this.clone(!0),
                        fe(o[r])[t](n),
                        se.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var ct, lt = {
                HTML: "block",
                BODY: "block"
            }, ut = /^margin/, dt = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$","i"), ht = function(e, t, n, r) {
                var i, o, s = {};
                for (o in t)
                    s[o] = e.style[o],
                    e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t)
                    e.style[o] = s[o];
                return i
            }, ft = re.documentElement;
            !function() {
                function t() {
                    var t, u, d = re.documentElement;
                    d.appendChild(c),
                    l.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                    n = i = a = !1,
                    r = s = !0,
                    e.getComputedStyle && (u = e.getComputedStyle(l),
                    n = "1%" !== (u || {}).top,
                    a = "2px" === (u || {}).marginLeft,
                    i = "4px" === (u || {
                        width: "4px"
                    }).width,
                    l.style.marginRight = "50%",
                    r = "4px" === (u || {
                        marginRight: "4px"
                    }).marginRight,
                    t = l.appendChild(re.createElement("div")),
                    t.style.cssText = l.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    t.style.marginRight = t.style.width = "0",
                    l.style.width = "1px",
                    s = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
                    l.removeChild(t)),
                    l.style.display = "none",
                    o = 0 === l.getClientRects().length,
                    o && (l.style.display = "",
                    l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    l.childNodes[0].style.borderCollapse = "separate",
                    t = l.getElementsByTagName("td"),
                    t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    o = 0 === t[0].offsetHeight,
                    o && (t[0].style.display = "",
                    t[1].style.display = "none",
                    o = 0 === t[0].offsetHeight)),
                    d.removeChild(c)
                }
                var n, r, i, o, s, a, c = re.createElement("div"), l = re.createElement("div");
                l.style && (l.style.cssText = "float:left;opacity:.5",
                de.opacity = "0.5" === l.style.opacity,
                de.cssFloat = !!l.style.cssFloat,
                l.style.backgroundClip = "content-box",
                l.cloneNode(!0).style.backgroundClip = "",
                de.clearCloneStyle = "content-box" === l.style.backgroundClip,
                c = re.createElement("div"),
                c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
                l.innerHTML = "",
                c.appendChild(l),
                de.boxSizing = "" === l.style.boxSizing || "" === l.style.MozBoxSizing || "" === l.style.WebkitBoxSizing,
                fe.extend(de, {
                    reliableHiddenOffsets: function() {
                        return null == n && t(),
                        o
                    },
                    boxSizingReliable: function() {
                        return null == n && t(),
                        i
                    },
                    pixelMarginRight: function() {
                        return null == n && t(),
                        r
                    },
                    pixelPosition: function() {
                        return null == n && t(),
                        n
                    },
                    reliableMarginRight: function() {
                        return null == n && t(),
                        s
                    },
                    reliableMarginLeft: function() {
                        return null == n && t(),
                        a
                    }
                }))
            }();
            var pt, gt, mt = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (pt = function(t) {
                var n = t.ownerDocument.defaultView;
                return n && n.opener || (n = e),
                n.getComputedStyle(t)
            }
            ,
            gt = function(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || pt(e),
                s = n ? n.getPropertyValue(t) || n[t] : void 0,
                "" !== s && void 0 !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)),
                n && !de.pixelMarginRight() && dt.test(s) && ut.test(t) && (r = a.width,
                i = a.minWidth,
                o = a.maxWidth,
                a.minWidth = a.maxWidth = a.width = s,
                s = n.width,
                a.width = r,
                a.minWidth = i,
                a.maxWidth = o),
                void 0 === s ? s : s + ""
            }
            ) : ft.currentStyle && (pt = function(e) {
                return e.currentStyle
            }
            ,
            gt = function(e, t, n) {
                var r, i, o, s, a = e.style;
                return n = n || pt(e),
                s = n ? n[t] : void 0,
                null == s && a && a[t] && (s = a[t]),
                dt.test(s) && !mt.test(t) && (r = a.left,
                i = e.runtimeStyle,
                o = i && i.left,
                o && (i.left = e.currentStyle.left),
                a.left = "fontSize" === t ? "1em" : s,
                s = a.pixelLeft + "px",
                a.left = r,
                o && (i.left = o)),
                void 0 === s ? s : s + "" || "auto"
            }
            );
            var vt = /alpha\([^)]*\)/i
              , yt = /opacity\s*=\s*([^)]*)/i
              , bt = /^(none|table(?!-c[ea]).+)/
              , _t = new RegExp("^(" + Pe + ")(.*)$","i")
              , wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , St = {
                letterSpacing: "0",
                fontWeight: "400"
            }
              , kt = ["Webkit", "O", "Moz", "ms"]
              , xt = re.createElement("div").style;
            fe.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = gt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": de.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i, o, s, a = fe.camelCase(t), c = e.style;
                        if (t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a),
                        s = fe.cssHooks[t] || fe.cssHooks[a],
                        void 0 === n)
                            return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : c[t];
                        if (o = typeof n,
                        "string" === o && (i = Ne.exec(n)) && i[1] && (n = h(e, t, i),
                        o = "number"),
                        null != n && n === n && ("number" === o && (n += i && i[3] || (fe.cssNumber[a] ? "" : "px")),
                        de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        !(s && "set"in s && void 0 === (n = s.set(e, n, r)))))
                            try {
                                c[t] = n
                            } catch (l) {}
                    }
                },
                css: function(e, t, n, r) {
                    var i, o, s, a = fe.camelCase(t);
                    return t = fe.cssProps[a] || (fe.cssProps[a] = I(a) || a),
                    s = fe.cssHooks[t] || fe.cssHooks[a],
                    s && "get"in s && (o = s.get(e, !0, n)),
                    void 0 === o && (o = gt(e, t, r)),
                    "normal" === o && t in St && (o = St[t]),
                    "" === n || n ? (i = parseFloat(o),
                    n === !0 || isFinite(i) ? i || 0 : o) : o
                }
            }),
            fe.each(["height", "width"], function(e, t) {
                fe.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n)
                            return bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? ht(e, wt, function() {
                                return N(e, t, r)
                            }) : N(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i = r && pt(e);
                        return R(e, n, r ? P(e, t, r, de.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
                    }
                }
            }),
            de.opacity || (fe.cssHooks.opacity = {
                get: function(e, t) {
                    return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style
                      , r = e.currentStyle
                      , i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                      , o = r && r.filter || n.filter || "";
                    n.zoom = 1,
                    (t >= 1 || "" === t) && "" === fe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
                    "" === t || r && !r.filter) || (n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i)
                }
            }),
            fe.cssHooks.marginRight = j(de.reliableMarginRight, function(e, t) {
                if (t)
                    return ht(e, {
                        display: "inline-block"
                    }, gt, [e, "marginRight"])
            }),
            fe.cssHooks.marginLeft = j(de.reliableMarginLeft, function(e, t) {
                if (t)
                    return (parseFloat(gt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    }) : 0)) + "px"
            }),
            fe.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                fe.cssHooks[e + t] = {
                    expand: function(n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                            i[e + Me[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                },
                ut.test(e) || (fe.cssHooks[e + t].set = R)
            }),
            fe.fn.extend({
                css: function(e, t) {
                    return De(this, function(e, t, n) {
                        var r, i, o = {}, s = 0;
                        if (fe.isArray(t)) {
                            for (r = pt(e),
                            i = t.length; s < i; s++)
                                o[t[s]] = fe.css(e, t[s], !1, r);
                            return o
                        }
                        return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return O(this, !0)
                },
                hide: function() {
                    return O(this)
                },
                toggle: function(e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                        He(this) ? fe(this).show() : fe(this).hide()
                    })
                }
            }),
            fe.Tween = M,
            M.prototype = {
                constructor: M,
                init: function(e, t, n, r, i, o) {
                    this.elem = e,
                    this.prop = n,
                    this.easing = i || fe.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (fe.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = M.propHooks[this.prop];
                    return e && e.get ? e.get(this) : M.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = M.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : M.propHooks._default.set(this),
                    this
                }
            },
            M.prototype.init.prototype = M.prototype,
            M.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                    },
                    set: function(e) {
                        fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            },
            M.propHooks.scrollTop = M.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            },
            fe.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            },
            fe.fx = M.prototype.init,
            fe.fx.step = {};
            var Et, Tt, Ct = /^(?:toggle|show|hide)$/, At = /queueHooks$/;
            fe.Animation = fe.extend(z, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        return h(n.elem, e, Ne.exec(t), n),
                        n
                    }
                    ]
                },
                tweener: function(e, t) {
                    fe.isFunction(e) ? (t = e,
                    e = ["*"]) : e = e.match($e);
                    for (var n, r = 0, i = e.length; r < i; r++)
                        n = e[r],
                        z.tweeners[n] = z.tweeners[n] || [],
                        z.tweeners[n].unshift(t)
                },
                prefilters: [B],
                prefilter: function(e, t) {
                    t ? z.prefilters.unshift(e) : z.prefilters.push(e)
                }
            }),
            fe.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? fe.extend({}, e) : {
                    complete: n || !n && t || fe.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !fe.isFunction(t) && t
                };
                return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default,
                null != r.queue && r.queue !== !0 || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    fe.isFunction(r.old) && r.old.call(this),
                    r.queue && fe.dequeue(this, r.queue)
                }
                ,
                r
            }
            ,
            fe.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(He).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = fe.isEmptyObject(e)
                      , o = fe.speed(t, n, r)
                      , s = function() {
                        var t = z(this, fe.extend({}, e), o);
                        (i || fe._data(this, "finish")) && t.stop(!0)
                    };
                    return s.finish = s,
                    i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, t, n) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop,
                        t(n)
                    };
                    return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                          , i = null != e && e + "queueHooks"
                          , o = fe.timers
                          , s = fe._data(this);
                        if (i)
                            s[i] && s[i].stop && r(s[i]);
                        else
                            for (i in s)
                                s[i] && s[i].stop && At.test(i) && r(s[i]);
                        for (i = o.length; i--; )
                            o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                            t = !1,
                            o.splice(i, 1));
                        !t && n || fe.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = fe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, s = r ? r.length : 0;
                        for (n.finish = !0,
                        fe.queue(this, e, []),
                        i && i.stop && i.stop.call(this, !0),
                        t = o.length; t--; )
                            o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                            o.splice(t, 1));
                        for (t = 0; t < s; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }),
            fe.each(["toggle", "show", "hide"], function(e, t) {
                var n = fe.fn[t];
                fe.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, r, i)
                }
            }),
            fe.each({
                slideDown: D("show"),
                slideUp: D("hide"),
                slideToggle: D("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                fe.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }),
            fe.timers = [],
            fe.fx.tick = function() {
                var e, t = fe.timers, n = 0;
                for (Et = fe.now(); n < t.length; n++)
                    e = t[n],
                    e() || t[n] !== e || t.splice(n--, 1);
                t.length || fe.fx.stop(),
                Et = void 0
            }
            ,
            fe.fx.timer = function(e) {
                fe.timers.push(e),
                e() ? fe.fx.start() : fe.timers.pop()
            }
            ,
            fe.fx.interval = 13,
            fe.fx.start = function() {
                Tt || (Tt = e.setInterval(fe.fx.tick, fe.fx.interval))
            }
            ,
            fe.fx.stop = function() {
                e.clearInterval(Tt),
                Tt = null
            }
            ,
            fe.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            },
            fe.fn.delay = function(t, n) {
                return t = fe.fx ? fe.fx.speeds[t] || t : t,
                n = n || "fx",
                this.queue(n, function(n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function() {
                        e.clearTimeout(i)
                    }
                })
            }
            ,
            function() {
                var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
                n = re.createElement("div"),
                n.setAttribute("className", "t"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                e = n.getElementsByTagName("a")[0],
                t.setAttribute("type", "checkbox"),
                n.appendChild(t),
                e = n.getElementsByTagName("a")[0],
                e.style.cssText = "top:1px",
                de.getSetAttribute = "t" !== n.className,
                de.style = /top/.test(e.getAttribute("style")),
                de.hrefNormalized = "/a" === e.getAttribute("href"),
                de.checkOn = !!t.value,
                de.optSelected = i.selected,
                de.enctype = !!re.createElement("form").enctype,
                r.disabled = !0,
                de.optDisabled = !i.disabled,
                t = re.createElement("input"),
                t.setAttribute("value", ""),
                de.input = "" === t.getAttribute("value"),
                t.value = "t",
                t.setAttribute("type", "radio"),
                de.radioValue = "t" === t.value
            }();
            var $t = /\r/g
              , Lt = /[\x20\t\r\n\f]+/g;
            fe.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    {
                        if (arguments.length)
                            return r = fe.isFunction(e),
                            this.each(function(n) {
                                var i;
                                1 === this.nodeType && (i = r ? e.call(this, n, fe(this).val()) : e,
                                null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()],
                                t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                            });
                        if (i)
                            return t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()],
                            t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                            "string" == typeof n ? n.replace($t, "") : null == n ? "" : n)
                    }
                }
            }),
            fe.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = fe.find.attr(e, "value");
                            return null != t ? t : fe.trim(fe.text(e)).replace(Lt, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, c = i < 0 ? a : o ? i : 0; c < a; c++)
                                if (n = r[c],
                                (n.selected || c === i) && (de.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = fe(n).val(),
                                    o)
                                        return t;
                                    s.push(t)
                                }
                            return s
                        },
                        set: function(e, t) {
                            for (var n, r, i = e.options, o = fe.makeArray(t), s = i.length; s--; )
                                if (r = i[s],
                                fe.inArray(fe.valHooks.option.get(r), o) > -1)
                                    try {
                                        r.selected = n = !0
                                    } catch (a) {
                                        r.scrollHeight
                                    }
                                else
                                    r.selected = !1;
                            return n || (e.selectedIndex = -1),
                            i
                        }
                    }
                }
            }),
            fe.each(["radio", "checkbox"], function() {
                fe.valHooks[this] = {
                    set: function(e, t) {
                        if (fe.isArray(t))
                            return e.checked = fe.inArray(fe(e).val(), t) > -1
                    }
                },
                de.checkOn || (fe.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
            });
            var jt, It, Ot = fe.expr.attrHandle, Rt = /^(?:checked|selected)$/i, Pt = de.getSetAttribute, Nt = de.input;
            fe.fn.extend({
                attr: function(e, t) {
                    return De(this, fe.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        fe.removeAttr(this, e)
                    })
                }
            }),
            fe.extend({
                attr: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(),
                        i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? It : jt)),
                        void 0 !== n ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                        n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = fe.find.attr(e, t),
                        null == r ? void 0 : r))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!de.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t),
                                n && (e.value = n),
                                t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0, o = t && t.match($e);
                    if (o && 1 === e.nodeType)
                        for (; n = o[i++]; )
                            r = fe.propFix[n] || n,
                            fe.expr.match.bool.test(n) ? Nt && Pt || !Rt.test(n) ? e[r] = !1 : e[fe.camelCase("default-" + n)] = e[r] = !1 : fe.attr(e, n, ""),
                            e.removeAttribute(Pt ? n : r)
                }
            }),
            It = {
                set: function(e, t, n) {
                    return t === !1 ? fe.removeAttr(e, n) : Nt && Pt || !Rt.test(n) ? e.setAttribute(!Pt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0,
                    n
                }
            },
            fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Ot[t] || fe.find.attr;
                Nt && Pt || !Rt.test(t) ? Ot[t] = function(e, t, r) {
                    var i, o;
                    return r || (o = Ot[t],
                    Ot[t] = i,
                    i = null != n(e, t, r) ? t.toLowerCase() : null,
                    Ot[t] = o),
                    i
                }
                : Ot[t] = function(e, t, n) {
                    if (!n)
                        return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }),
            Nt && Pt || (fe.attrHooks.value = {
                set: function(e, t, n) {
                    return fe.nodeName(e, "input") ? void (e.defaultValue = t) : jt && jt.set(e, t, n)
                }
            }),
            Pt || (jt = {
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
                    r.value = t += "",
                    "value" === n || t === e.getAttribute(n))
                        return t
                }
            },
            Ot.id = Ot.name = Ot.coords = function(e, t, n) {
                var r;
                if (!n)
                    return (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
            }
            ,
            fe.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified)
                        return n.value
                },
                set: jt.set
            },
            fe.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    jt.set(e, "" !== t && t, n)
                }
            },
            fe.each(["width", "height"], function(e, t) {
                fe.attrHooks[t] = {
                    set: function(e, n) {
                        if ("" === n)
                            return e.setAttribute(t, "auto"),
                            n
                    }
                }
            })),
            de.style || (fe.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || void 0
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Mt = /^(?:input|select|textarea|button|object)$/i
              , Ht = /^(?:a|area)$/i;
            fe.fn.extend({
                prop: function(e, t) {
                    return De(this, fe.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = fe.propFix[e] || e,
                    this.each(function() {
                        try {
                            this[e] = void 0,
                            delete this[e]
                        } catch (t) {}
                    })
                }
            }),
            fe.extend({
                prop: function(e, t, n) {
                    var r, i, o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                        return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t,
                        i = fe.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = fe.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ht.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }),
            de.hrefNormalized || fe.each(["href", "src"], function(e, t) {
                fe.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }),
            de.optSelected || (fe.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex),
                    null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
                }
            }),
            fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                fe.propFix[this.toLowerCase()] = this
            }),
            de.enctype || (fe.propFix.enctype = "encoding");
            var Dt = /[\t\r\n\f]/g;
            fe.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, o, s, a, c = 0;
                    if (fe.isFunction(e))
                        return this.each(function(t) {
                            fe(this).addClass(e.call(this, t, W(this)))
                        });
                    if ("string" == typeof e && e)
                        for (t = e.match($e) || []; n = this[c++]; )
                            if (i = W(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                                for (s = 0; o = t[s++]; )
                                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                a = fe.trim(r),
                                i !== a && fe.attr(n, "class", a)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, o, s, a, c = 0;
                    if (fe.isFunction(e))
                        return this.each(function(t) {
                            fe(this).removeClass(e.call(this, t, W(this)))
                        });
                    if (!arguments.length)
                        return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match($e) || []; n = this[c++]; )
                            if (i = W(n),
                            r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                                for (s = 0; o = t[s++]; )
                                    for (; r.indexOf(" " + o + " ") > -1; )
                                        r = r.replace(" " + o + " ", " ");
                                a = fe.trim(r),
                                i !== a && fe.attr(n, "class", a)
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                        fe(this).toggleClass(e.call(this, n, W(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0,
                            i = fe(this),
                            o = e.match($e) || []; t = o[r++]; )
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            void 0 !== e && "boolean" !== n || (t = W(this),
                            t && fe._data(this, "__className__", t),
                            fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++]; )
                        if (1 === n.nodeType && (" " + W(n) + " ").replace(Dt, " ").indexOf(t) > -1)
                            return !0;
                    return !1
                }
            }),
            fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                fe.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }),
            fe.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Ft = e.location
              , Bt = fe.now()
              , qt = /\?/
              , zt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            fe.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse)
                    return e.JSON.parse(t + "");
                var n, r = null, i = fe.trim(t + "");
                return i && !fe.trim(i.replace(zt, function(e, t, i, o) {
                    return n && t && (r = 0),
                    0 === r ? e : (n = i || t,
                    r += !o - !i,
                    "")
                })) ? Function("return " + i)() : fe.error("Invalid JSON: " + t)
            }
            ,
            fe.parseXML = function(t) {
                var n, r;
                if (!t || "string" != typeof t)
                    return null;
                try {
                    e.DOMParser ? (r = new e.DOMParser,
                    n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
                    n.async = "false",
                    n.loadXML(t))
                } catch (i) {
                    n = void 0
                }
                return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t),
                n
            }
            ;
            var Wt = /#.*$/
              , Vt = /([?&])_=[^&]*/
              , Gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
              , Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Xt = /^(?:GET|HEAD)$/
              , Yt = /^\/\//
              , Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
              , Jt = {}
              , Qt = {}
              , Zt = "*/".concat("*")
              , en = Ft.href
              , tn = Kt.exec(en.toLowerCase()) || [];
            fe.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: en,
                    type: "GET",
                    isLocal: Ut.test(tn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Zt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": fe.parseJSON,
                        "text xml": fe.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? U(U(e, fe.ajaxSettings), t) : U(fe.ajaxSettings, e)
                },
                ajaxPrefilter: V(Jt),
                ajaxTransport: V(Qt),
                ajax: function(t, n) {
                    function r(t, n, r, i) {
                        var o, d, y, b, w, k = n;
                        2 !== _ && (_ = 2,
                        c && e.clearTimeout(c),
                        u = void 0,
                        a = i || "",
                        S.readyState = t > 0 ? 4 : 0,
                        o = t >= 200 && t < 300 || 304 === t,
                        r && (b = X(h, S, r)),
                        b = Y(h, b, S, o),
                        o ? (h.ifModified && (w = S.getResponseHeader("Last-Modified"),
                        w && (fe.lastModified[s] = w),
                        w = S.getResponseHeader("etag"),
                        w && (fe.etag[s] = w)),
                        204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state,
                        d = b.data,
                        y = b.error,
                        o = !y)) : (y = k,
                        !t && k || (k = "error",
                        t < 0 && (t = 0))),
                        S.status = t,
                        S.statusText = (n || k) + "",
                        o ? g.resolveWith(f, [d, k, S]) : g.rejectWith(f, [S, k, y]),
                        S.statusCode(v),
                        v = void 0,
                        l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [S, h, o ? d : y]),
                        m.fireWith(f, [S, k]),
                        l && (p.trigger("ajaxComplete", [S, h]),
                        --fe.active || fe.event.trigger("ajaxStop")))
                    }
                    "object" == typeof t && (n = t,
                    t = void 0),
                    n = n || {};
                    var i, o, s, a, c, l, u, d, h = fe.ajaxSetup({}, n), f = h.context || h, p = h.context && (f.nodeType || f.jquery) ? fe(f) : fe.event, g = fe.Deferred(), m = fe.Callbacks("once memory"), v = h.statusCode || {}, y = {}, b = {}, _ = 0, w = "canceled", S = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === _) {
                                if (!d)
                                    for (d = {}; t = Gt.exec(a); )
                                        d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === _ ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return _ || (e = b[n] = b[n] || e,
                            y[e] = t),
                            this
                        },
                        overrideMimeType: function(e) {
                            return _ || (h.mimeType = e),
                            this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (_ < 2)
                                    for (t in e)
                                        v[t] = [v[t], e[t]];
                                else
                                    S.always(e[S.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return u && u.abort(t),
                            r(0, t),
                            this
                        }
                    };
                    if (g.promise(S).complete = m.add,
                    S.success = S.done,
                    S.error = S.fail,
                    h.url = ((t || h.url || en) + "").replace(Wt, "").replace(Yt, tn[1] + "//"),
                    h.type = n.method || n.type || h.method || h.type,
                    h.dataTypes = fe.trim(h.dataType || "*").toLowerCase().match($e) || [""],
                    null == h.crossDomain && (i = Kt.exec(h.url.toLowerCase()),
                    h.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))),
                    h.data && h.processData && "string" != typeof h.data && (h.data = fe.param(h.data, h.traditional)),
                    G(Jt, h, n, S),
                    2 === _)
                        return S;
                    l = fe.event && h.global,
                    l && 0 === fe.active++ && fe.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Xt.test(h.type),
                    s = h.url,
                    h.hasContent || (h.data && (s = h.url += (qt.test(s) ? "&" : "?") + h.data,
                    delete h.data),
                    h.cache === !1 && (h.url = Vt.test(s) ? s.replace(Vt, "$1_=" + Bt++) : s + (qt.test(s) ? "&" : "?") + "_=" + Bt++)),
                    h.ifModified && (fe.lastModified[s] && S.setRequestHeader("If-Modified-Since", fe.lastModified[s]),
                    fe.etag[s] && S.setRequestHeader("If-None-Match", fe.etag[s])),
                    (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType),
                    S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : h.accepts["*"]);
                    for (o in h.headers)
                        S.setRequestHeader(o, h.headers[o]);
                    if (h.beforeSend && (h.beforeSend.call(f, S, h) === !1 || 2 === _))
                        return S.abort();
                    w = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                        S[o](h[o]);
                    if (u = G(Qt, h, n, S)) {
                        if (S.readyState = 1,
                        l && p.trigger("ajaxSend", [S, h]),
                        2 === _)
                            return S;
                        h.async && h.timeout > 0 && (c = e.setTimeout(function() {
                            S.abort("timeout")
                        }, h.timeout));
                        try {
                            _ = 1,
                            u.send(y, r)
                        } catch (k) {
                            if (!(_ < 2))
                                throw k;
                            r(-1, k)
                        }
                    } else
                        r(-1, "No Transport");
                    return S
                },
                getJSON: function(e, t, n) {
                    return fe.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return fe.get(e, void 0, t, "script")
                }
            }),
            fe.each(["get", "post"], function(e, t) {
                fe[t] = function(e, n, r, i) {
                    return fe.isFunction(n) && (i = i || r,
                    r = n,
                    n = void 0),
                    fe.ajax(fe.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, fe.isPlainObject(e) && e))
                }
            }),
            fe._evalUrl = function(e) {
                return fe.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
            ,
            fe.fn.extend({
                wrapAll: function(e) {
                    if (fe.isFunction(e))
                        return this.each(function(t) {
                            fe(this).wrapAll(e.call(this, t))
                        });
                    if (this[0]) {
                        var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return fe.isFunction(e) ? this.each(function(t) {
                        fe(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = fe(this)
                          , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = fe.isFunction(e);
                    return this.each(function(n) {
                        fe(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
                    }).end()
                }
            }),
            fe.expr.filters.hidden = function(e) {
                return de.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
            }
            ,
            fe.expr.filters.visible = function(e) {
                return !fe.expr.filters.hidden(e)
            }
            ;
            var nn = /%20/g
              , rn = /\[\]$/
              , on = /\r?\n/g
              , sn = /^(?:submit|button|image|reset|file)$/i
              , an = /^(?:input|select|textarea|keygen)/i;
            fe.param = function(e, t) {
                var n, r = [], i = function(e, t) {
                    t = fe.isFunction(t) ? t() : null == t ? "" : t,
                    r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
                if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional),
                fe.isArray(e) || e.jquery && !fe.isPlainObject(e))
                    fe.each(e, function() {
                        i(this.name, this.value)
                    });
                else
                    for (n in e)
                        Q(n, e[n], t, i);
                return r.join("&").replace(nn, "+")
            }
            ,
            fe.fn.extend({
                serialize: function() {
                    return fe.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = fe.prop(this, "elements");
                        return e ? fe.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !sn.test(e) && (this.checked || !Fe.test(e))
                    }).map(function(e, t) {
                        var n = fe(this).val();
                        return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(on, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(on, "\r\n")
                        }
                    }).get()
                }
            }),
            fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
                return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
            }
            : Z;
            var cn = 0
              , ln = {}
              , un = fe.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in ln)
                    ln[e](void 0, !0)
            }),
            de.cors = !!un && "withCredentials"in un,
            un = de.ajax = !!un,
            un && fe.ajaxTransport(function(t) {
                if (!t.crossDomain || de.cors) {
                    var n;
                    return {
                        send: function(r, i) {
                            var o, s = t.xhr(), a = ++cn;
                            if (s.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                                for (o in t.xhrFields)
                                    s[o] = t.xhrFields[o];
                            t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                            t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                            for (o in r)
                                void 0 !== r[o] && s.setRequestHeader(o, r[o] + "");
                            s.send(t.hasContent && t.data || null),
                            n = function(e, r) {
                                var o, c, l;
                                if (n && (r || 4 === s.readyState))
                                    if (delete ln[a],
                                    n = void 0,
                                    s.onreadystatechange = fe.noop,
                                    r)
                                        4 !== s.readyState && s.abort();
                                    else {
                                        l = {},
                                        o = s.status,
                                        "string" == typeof s.responseText && (l.text = s.responseText);
                                        try {
                                            c = s.statusText
                                        } catch (u) {
                                            c = ""
                                        }
                                        o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404
                                    }
                                l && i(o, c, l, s.getAllResponseHeaders())
                            }
                            ,
                            t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
                        },
                        abort: function() {
                            n && n(void 0, !0)
                        }
                    }
                }
            }),
            fe.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return fe.globalEval(e),
                        e
                    }
                }
            }),
            fe.ajaxPrefilter("script", function(e) {
                void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET",
                e.global = !1)
            }),
            fe.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = re.head || fe("head")[0] || re.documentElement;
                    return {
                        send: function(r, i) {
                            t = re.createElement("script"),
                            t.async = !0,
                            e.scriptCharset && (t.charset = e.scriptCharset),
                            t.src = e.url,
                            t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                                t.parentNode && t.parentNode.removeChild(t),
                                t = null,
                                n || i(200, "success"))
                            }
                            ,
                            n.insertBefore(t, n.firstChild)
                        },
                        abort: function() {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            });
            var dn = []
              , hn = /(=)\?(?=&|$)|\?\?/;
            fe.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = dn.pop() || fe.expando + "_" + Bt++;
                    return this[e] = !0,
                    e
                }
            }),
            fe.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, o, s, a = t.jsonp !== !1 && (hn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0])
                    return i = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                    a ? t[a] = t[a].replace(hn, "$1" + i) : t.jsonp !== !1 && (t.url += (qt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    t.converters["script json"] = function() {
                        return s || fe.error(i + " was not called"),
                        s[0]
                    }
                    ,
                    t.dataTypes[0] = "json",
                    o = e[i],
                    e[i] = function() {
                        s = arguments
                    }
                    ,
                    r.always(function() {
                        void 0 === o ? fe(e).removeProp(i) : e[i] = o,
                        t[i] && (t.jsonpCallback = n.jsonpCallback,
                        dn.push(i)),
                        s && fe.isFunction(o) && o(s[0]),
                        s = o = void 0
                    }),
                    "script"
            }),
            fe.parseHTML = function(e, t, n) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (n = t,
                t = !1),
                t = t || re;
                var r = Se.exec(e)
                  , i = !n && [];
                return r ? [t.createElement(r[1])] : (r = v([e], t, i),
                i && i.length && fe(i).remove(),
                fe.merge([], r.childNodes))
            }
            ;
            var fn = fe.fn.load;
            fe.fn.load = function(e, t, n) {
                if ("string" != typeof e && fn)
                    return fn.apply(this, arguments);
                var r, i, o, s = this, a = e.indexOf(" ");
                return a > -1 && (r = fe.trim(e.slice(a, e.length)),
                e = e.slice(0, a)),
                fe.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (i = "POST"),
                s.length > 0 && fe.ajax({
                    url: e,
                    type: i || "GET",
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    o = arguments,
                    s.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
                }).always(n && function(e, t) {
                    s.each(function() {
                        n.apply(this, o || [e.responseText, t, e])
                    })
                }
                ),
                this
            }
            ,
            fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                fe.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }),
            fe.expr.filters.animated = function(e) {
                return fe.grep(fe.timers, function(t) {
                    return e === t.elem
                }).length
            }
            ,
            fe.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, s, a, c, l, u = fe.css(e, "position"), d = fe(e), h = {};
                    "static" === u && (e.style.position = "relative"),
                    a = d.offset(),
                    o = fe.css(e, "top"),
                    c = fe.css(e, "left"),
                    l = ("absolute" === u || "fixed" === u) && fe.inArray("auto", [o, c]) > -1,
                    l ? (r = d.position(),
                    s = r.top,
                    i = r.left) : (s = parseFloat(o) || 0,
                    i = parseFloat(c) || 0),
                    fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))),
                    null != t.top && (h.top = t.top - a.top + s),
                    null != t.left && (h.left = t.left - a.left + i),
                    "using"in t ? t.using.call(e, h) : d.css(h)
                }
            },
            fe.fn.extend({
                offset: function(e) {
                    if (arguments.length)
                        return void 0 === e ? this : this.each(function(t) {
                            fe.offset.setOffset(this, e, t)
                        });
                    var t, n, r = {
                        top: 0,
                        left: 0
                    }, i = this[0], o = i && i.ownerDocument;
                    if (o)
                        return t = o.documentElement,
                        fe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                        n = te(o),
                        {
                            top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : r
                },
                position: function() {
                    if (this[0]) {
                        var e, t, n = {
                            top: 0,
                            left: 0
                        }, r = this[0];
                        return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                        fe.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += fe.css(e[0], "borderTopWidth", !0),
                        n.left += fe.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - n.top - fe.css(r, "marginTop", !0),
                            left: t.left - n.left - fe.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position"); )
                            e = e.offsetParent;
                        return e || ft
                    })
                }
            }),
            fe.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = /Y/.test(t);
                fe.fn[e] = function(r) {
                    return De(this, function(e, r, i) {
                        var o = te(e);
                        return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? fe(o).scrollLeft() : i, n ? i : fe(o).scrollTop()) : e[r] = i)
                    }, e, r, arguments.length, null)
                }
            }),
            fe.each(["top", "left"], function(e, t) {
                fe.cssHooks[t] = j(de.pixelPosition, function(e, n) {
                    if (n)
                        return n = gt(e, t),
                        dt.test(n) ? fe(e).position()[t] + "px" : n
                })
            }),
            fe.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                fe.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    fe.fn[r] = function(r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r)
                          , s = n || (r === !0 || i === !0 ? "margin" : "border");
                        return De(this, function(t, n, r) {
                            var i;
                            return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                            Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? fe.css(t, n, s) : fe.style(t, n, r, s)
                        }, t, o ? r : void 0, o, null)
                    }
                })
            }),
            fe.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }),
            fe.fn.size = function() {
                return this.length
            }
            ,
            fe.fn.andSelf = fe.fn.addBack,
            "function" == typeof define && define.amd && define("jquery", [], function() {
                return fe
            });
            var pn = e.jQuery
              , gn = e.$;
            return fe.noConflict = function(t) {
                return e.$ === fe && (e.$ = gn),
                t && e.jQuery === fe && (e.jQuery = pn),
                fe
            }
            ,
            t || (e.jQuery = e.$ = fe),
            fe
        })
    }
    , {}],
    48: [function(e, t, n) {
        var r = function(e) {
            for (var t, n, r = [], i = 0, o = e.length; i < o; )
                t = e.charCodeAt(i++),
                t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++),
                56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t),
                i--)) : r.push(t);
            return r
        }
          , i = function(t, n) {
            var i, o, s = {};
            n = n || "?",
            t = r(t),
            strNew = "";
            for (u in t)
                if (i = t[u],
                i > 65535)
                    strNew += n;
                else {
                    var a = i >> 8;
                    if ("undefined" == typeof s[a]) {
                        var c = "../data/x" + a.toString(16) + ".js";
                        try {
                            s[a] = e(c)
                        } catch (l) {
                            s[a] = [];
                            for (var u = 0; u < 256; u++)
                                s[a].push(n)
                        }
                    }
                    i = 255 & i,
                    o = s[a][i],
                    null === o && (o = n),
                    strNew += o
                }
            return strNew.replace(/\s+$/, "")
        };
        i.transliterate = i,
        i.slugify = function(e, t) {
            var n = {
                lowercase: !0,
                separator: "-"
            };
            t = t || {};
            for (prop in n)
                "undefined" == typeof t[prop] && (t[prop] = n[prop]);
            var r = i.transliterate(e).replace(/[^a-zA-Z0-9]+/g, t.separator);
            t.lowercase && (r = r.toLowerCase());
            var o = t.separator.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            return r = r.replace(new RegExp("^(" + o + ")+|(" + o + ")+$","g"), "")
        }
        ,
        t.exports = i
    }
    , {}],
    49: [function(e, t, n) {
        "use strict";
        $(function() {
            var t = e("./app/book.js")
              , n = e("./app/lookThroughDispatcher")
              , r = e("./app/imageLoader")
              , i = e("./app/imageGC")
              , o = e("./app/readingHistory")
              , s = e("./app/features")
              , a = e("./app/ability")
              , c = e("./app/discreetScroll")
              , l = e("./app/book/hotkeys")
              , u = e("./app/editor");
            window.application.features = new s(window.application.features),
            window.application.ability = new a(window.application.ability),
            window.application.can = window.application.ability.can.bind(window.application.ability),
            window.application.toc = e("./app/book/toc")();
            var d = e("./app/utils/fontsReady")
              , h = (new n,
            window.application.readingHistory = new o)
              , f = new c;
            window.application.state = e("./app/state"),
            window.application.urls = e("./app/urls"),
            window.application.supports = {
                sticky: e("./app/supports/sticky"),
                halfPixel: e("./app/supports/halfPixel")(),
                negativeZIndexOnCover: e("./app/supports/negativeZIndexOnCover"),
                opacityBasedSwitchers: e("./app/supports/opacityBasedSwitchers")
            };
            for (var p in window.application.supports)
                window.application.supports[p] || $("body").addClass("no__" + p);
            window.chrome && $("body").addClass("is__chrome");
            var g = function(e) {
                setTimeout(function() {
                    window.application.book = new t($(".js__book"))
                }, e || 10)
            };
            d(g),
            $(document).on("bookReady", function() {
                var t = new r;
                if (t.displayEmbedded(),
                t.loadAll(),
                h.watch(),
                new i,
                new u,
                window.application.isOnRetinaDevice) {
                    var n = e("./app/retinaImageLoader")
                      , o = new n;
                    o.watch()
                }
                navigator.platform.toLowerCase().indexOf("win") > -1 && $(document).on("wheel", function(e) {
                    var t = e.originalEvent;
                    f.isDetected(t) && f.cannotBePerformed(t) && (e.preventDefault(),
                    f.scrollProgrammatically(t))
                }),
                l.bindWith(window.application.book)
            }),
            {
                "..": {
                    "..": {
                        modules: {
                            modules: {
                                _base: {
                                    __: e("../../modules/modules/_base/__.js"),
                                    base: e("../../modules/modules/_base/base.js")
                                },
                                _module: {
                                    animatedModule: e("../../modules/modules/_module/animatedModule.js"),
                                    animatedSequenceModule: e("../../modules/modules/_module/animatedSequenceModule.js"),
                                    animatedStylesModule: e("../../modules/modules/_module/animatedStylesModule.js"),
                                    fader: e("../../modules/modules/_module/fader.js"),
                                    fitToProportionModule: e("../../modules/modules/_module/fitToProportionModule.js"),
                                    foldableModule: e("../../modules/modules/_module/foldableModule.js"),
                                    marginalModule: e("../../modules/modules/_module/marginalModule.js"),
                                    reverticalModule: e("../../modules/modules/_module/reverticalModule.js")
                                },
                                calloutLine: {
                                    calloutLine: e("../../modules/modules/calloutLine/calloutLine.js")
                                },
                                cols: {
                                    autoCols: e("../../modules/modules/cols/autoCols.js")
                                },
                                contentslink: {
                                    contentslink: e("../../modules/modules/contentslink/contentslink.js")
                                },
                                controls: {
                                    bookmarks: e("../../modules/modules/controls/bookmarks.js"),
                                    checkMarks: e("../../modules/modules/controls/checkMarks.js"),
                                    controls: e("../../modules/modules/controls/controls.js"),
                                    searchHeader: e("../../modules/modules/controls/searchHeader.js")
                                },
                                cover: {
                                    cover: e("../../modules/modules/cover/cover.js")
                                },
                                example: {
                                    example: e("../../modules/modules/example/example.js")
                                },
                                glvrdExercise: {
                                    glvrdExercise: e("../../modules/modules/glvrdExercise/glvrdExercise.js"),
                                    glvrdExerciseErrors: e("../../modules/modules/glvrdExercise/glvrdExerciseErrors.js"),
                                    glvrdExerciseMirror: e("../../modules/modules/glvrdExercise/glvrdExerciseMirror.js"),
                                    glvrdExerciseProgress: e("../../modules/modules/glvrdExercise/glvrdExerciseProgress.js"),
                                    glvrdExerciseScore: e("../../modules/modules/glvrdExercise/glvrdExerciseScore.js"),
                                    glvrdRemoteAPI: e("../../modules/modules/glvrdExercise/glvrdRemoteAPI.js")
                                },
                                image: {
                                    bleedImage: e("../../modules/modules/image/bleedImage.js"),
                                    evenwidthImages: e("../../modules/modules/image/evenwidthImages.js"),
                                    fitToContentModule: e("../../modules/modules/image/fitToContentModule.js")
                                },
                                navigator: {
                                    locale: e("../../modules/modules/navigator/locale.js"),
                                    navigator: e("../../modules/modules/navigator/navigator.js"),
                                    navigatorBoxPosition: e("../../modules/modules/navigator/navigatorBoxPosition.js"),
                                    navigatorPreviews: e("../../modules/modules/navigator/navigatorPreviews.js"),
                                    navigatorSearch: e("../../modules/modules/navigator/navigatorSearch.js")
                                },
                                page: {
                                    halfStickyPage: e("../../modules/modules/page/halfStickyPage.js"),
                                    slowPage: e("../../modules/modules/page/slowPage.js"),
                                    smartSinkagePage: e("../../modules/modules/page/smartSinkagePage.js"),
                                    stickyPage: e("../../modules/modules/page/stickyPage.js"),
                                    unstretchablePage: e("../../modules/modules/page/unstretchablePage.js")
                                },
                                spread: {
                                    animatedSpread: e("../../modules/modules/spread/animatedSpread.js")
                                },
                                switcher: {
                                    fitToContentSwitcher: e("../../modules/modules/switcher/fitToContentSwitcher.js")
                                },
                                test: {
                                    locale: e("../../modules/modules/test/locale.js"),
                                    test: e("../../modules/modules/test/test.js")
                                },
                                video: {
                                    video: e("../../modules/modules/video/video.js")
                                }
                            }
                        },
                        content: {
                            modules: {
                                cfc: {
                                    cfc: e("../../content/modules/cfc/cfc.js")
                                },
                                linksgap: {
                                    linksgap: e("../../content/modules/linksgap/linksgap.js")
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    , {
        "../../content/modules/cfc/cfc.js": 1,
        "../../content/modules/linksgap/linksgap.js": 2,
        "../../modules/modules/_base/__.js": 3,
        "../../modules/modules/_base/base.js": 4,
        "../../modules/modules/_module/animatedModule.js": 5,
        "../../modules/modules/_module/animatedSequenceModule.js": 6,
        "../../modules/modules/_module/animatedStylesModule.js": 7,
        "../../modules/modules/_module/fader.js": 8,
        "../../modules/modules/_module/fitToProportionModule.js": 9,
        "../../modules/modules/_module/foldableModule.js": 10,
        "../../modules/modules/_module/marginalModule.js": 11,
        "../../modules/modules/_module/reverticalModule.js": 12,
        "../../modules/modules/calloutLine/calloutLine.js": 13,
        "../../modules/modules/cols/autoCols.js": 14,
        "../../modules/modules/contentslink/contentslink.js": 15,
        "../../modules/modules/controls/bookmarks.js": 16,
        "../../modules/modules/controls/checkMarks.js": 17,
        "../../modules/modules/controls/controls.js": 18,
        "../../modules/modules/controls/searchHeader.js": 19,
        "../../modules/modules/cover/cover.js": 20,
        "../../modules/modules/example/example.js": 21,
        "../../modules/modules/glvrdExercise/glvrdExercise.js": 22,
        "../../modules/modules/glvrdExercise/glvrdExerciseErrors.js": 23,
        "../../modules/modules/glvrdExercise/glvrdExerciseMirror.js": 24,
        "../../modules/modules/glvrdExercise/glvrdExerciseProgress.js": 25,
        "../../modules/modules/glvrdExercise/glvrdExerciseScore.js": 26,
        "../../modules/modules/glvrdExercise/glvrdRemoteAPI.js": 27,
        "../../modules/modules/image/bleedImage.js": 28,
        "../../modules/modules/image/evenwidthImages.js": 29,
        "../../modules/modules/image/fitToContentModule.js": 30,
        "../../modules/modules/navigator/locale.js": 31,
        "../../modules/modules/navigator/navigator.js": 32,
        "../../modules/modules/navigator/navigatorBoxPosition.js": 33,
        "../../modules/modules/navigator/navigatorPreviews.js": 34,
        "../../modules/modules/navigator/navigatorSearch.js": 35,
        "../../modules/modules/page/halfStickyPage.js": 36,
        "../../modules/modules/page/slowPage.js": 37,
        "../../modules/modules/page/smartSinkagePage.js": 38,
        "../../modules/modules/page/stickyPage.js": 39,
        "../../modules/modules/page/unstretchablePage.js": 40,
        "../../modules/modules/spread/animatedSpread.js": 41,
        "../../modules/modules/switcher/fitToContentSwitcher.js": 42,
        "../../modules/modules/test/locale.js": 43,
        "../../modules/modules/test/test.js": 44,
        "../../modules/modules/video/video.js": 45,
        "./app/ability": 50,
        "./app/book.js": 52,
        "./app/book/hotkeys": 54,
        "./app/book/toc": 56,
        "./app/discreetScroll": 59,
        "./app/editor": 60,
        "./app/features": 61,
        "./app/imageGC": 62,
        "./app/imageLoader": 64,
        "./app/lookThroughDispatcher": 68,
        "./app/readingHistory": 69,
        "./app/retinaImageLoader": 71,
        "./app/state": 77,
        "./app/supports/halfPixel": 78,
        "./app/supports/negativeZIndexOnCover": 79,
        "./app/supports/opacityBasedSwitchers": 80,
        "./app/supports/sticky": 81,
        "./app/urls": 82,
        "./app/utils/fontsReady": 84
    }],
    50: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = function() {
            function e(t) {
                var n = this;
                r(this, e),
                this.$body = $("body"),
                this.abilities = t || {},
                Object.keys(this.abilities).forEach(function(e) {
                    n.can(e) && n.$body.addClass("can__" + e)
                })
            }
            return i(e, [{
                key: "can",
                value: function(e) {
                    return !!window.application.features.isEnabled("godlike") || this.abilities[e]
                }
            }]),
            e
        }();
        t.exports = o
    }
    , {}],
    51: [function(e, t, n) {
        "use strict";
        var r = "is__active"
          , i = 50
          , o = function(e, t) {
            var n = this;
            n._spread = t,
            n._book = t._book,
            n.clickSafeZone = 2 * t.MIN_SCROLL_HEIGHT,
            n.$el = e,
            n._spread = t,
            n.id = n.$el.attr("data-id"),
            n.height = n.$el.height(),
            n.page = {},
            n.page.$el = n.$el.closest(".js__page"),
            n.page.offset = n.page.$el.offset().top - n._spread.triggers.hold,
            n.page.height = n._book.viewHeight.toFixed(2) - n.page.offset,
            n.$el.unbind("click.anchor").on("click.anchor", function() {
                n._spread.anchor !== n && (n._spread.anchor && n._spread.anchor.setInactive(),
                n.setActive(0, !0))
            })
        };
        o.prototype.setInactive = function() {
            var e = this;
            e.$el.removeClass(r),
            e.restoreOriginalTriggers()
        }
        ,
        o.prototype.setActive = function(e, t) {
            var n = this;
            if (n.$el.addClass(r),
            n.originalTrigger = n.trigger,
            t) {
                var o = n._spread.anchors.indexOf(n)
                  , s = $(document).scrollTop() - n._spread.triggers.hold
                  , a = s + n._spread.MIN_SCROLL_HEIGHT
                  , c = s - n._spread.MIN_SCROLL_HEIGHT;
                n.isForced = !0,
                n.trigger > s - n.clickSafeZone && (n.trigger = s - n.clickSafeZone),
                n.trigger > n._spread.length && (n.trigger = n._spread.length),
                n.disabledSiblings = [],
                n._spread.anchors.forEach(function(e, t) {
                    t < o ? e.trigger > c && (e.originalTrigger = e.trigger,
                    e.trigger = c,
                    n.disabledSiblings.push(e)) : t > o && e.trigger < a && (e.originalTrigger = e.trigger,
                    e.trigger = a,
                    n.disabledSiblings.push(e))
                })
            } else
                n.trigger -= i,
                n.trigger < 5 && (n.trigger = 5),
                n._spread.$el.trigger("anchorRestore");
            n._spread.anchor = n,
            n.notifyOthers(e, t)
        }
        ,
        o.prototype.notifyOthers = function(e, t) {
            var n = this
              , r = function() {
                n._spread.$el.trigger("anchor", {
                    id: n.id,
                    direction: e,
                    anchor: n,
                    onClick: t
                })
            };
            n._book.isMobile && n._book.touchIsInProcess ? (clearTimeout(n._spread.anchorNotifyTimeout),
            n._spread.anchorNotifyTimeout = setTimeout(function() {
                n.notifyOthers(e)
            }, 300)) : (clearTimeout(n._spread.anchorNotifyTimeout),
            r())
        }
        ,
        o.prototype.restoreOriginalTriggers = function() {
            var e = this;
            e.trigger = e.originalTrigger,
            e.disabledSiblings && ($.each(e.disabledSiblings, function(e, t) {
                t.trigger = t.originalTrigger
            }),
            delete e.disabledSiblings)
        }
        ,
        t.exports = o
    }
    , {}],
    52: [function(e, t, n) {
        "use strict";
        var r = e("./spread.js")
          , i = e("./bookGuide.js")
          , o = e("./bookComputationsCache.js")
          , s = e("./location.js")
          , a = e("./book/highlight.js")
          , c = e("./book/scrollPosition.js")
          , l = 50
          , u = 10
          , d = window.application.isOnMobile ? 3 : 5
          , h = window.application.isOnMobile ? 7 : 9;
        window.application.isInPreviewsMode && (h = 999,
        d = 999);
        var f = Math.ceil((h - 1) / 2)
          , p = function(e) {
            var t = this;
            window.scroll(0, 0),
            t.$el = e,
            t.$body = $("body"),
            t.$document = $(document),
            t.$vp = $(".js__vp"),
            t.location = new s(t),
            t.highlight = new a(t),
            t.scrollPosition = new c(t),
            t.isMobile = window.application.isOnMobile,
            t.isOnIOS = window.application.isOnIOS,
            t.isInPreviewsMode = window.application.isInPreviewsMode,
            t.supportsSticky = window.application.supports.sticky,
            t.state = window.application.state,
            t.computationsCache = new o(t,window.application.cachedComputationsData),
            t.lastPosition = t.lastImmediatePosition = null,
            t.drawIsLocked = !0,
            t.guide = new i(t),
            t.isMobile && t.$body.removeClass("is__desk").addClass("is__mobile"),
            t.$el.on("bookGoto", function(e, n) {
                t.goToSpreadNumber(n, !1, {
                    preload: !0
                })
            }),
            t.setSizes(),
            t.setSpreads(),
            t.reflow(),
            t.setScrollPosition(),
            t.setResizeListeners(),
            setTimeout(function() {
                t.$document.trigger("bookReady")
            }),
            t.releaseDraw(),
            t.resumeDraw({
                silent: !0
            }),
            t.$document.on("bookDrawLock beforeTakingScreenshot", t.lockDraw.bind(t)),
            t.$document.on("bookDrawRelease", t.releaseDraw.bind(t)),
            t.$document.on("touchstart", function() {
                t.touchIsInProcess = !0
            }),
            t.$document.on("touchend touchcancel click", function() {
                t.touchIsInProcess = !1
            }),
            $(window).on("popstate", t.location.onPopState.bind(t.location))
        };
        Object.defineProperty(p, "MIN_HEIGHT", {
            value: 600
        }),
        Object.defineProperty(p, "MIN_WIDTH", {
            value: 992
        }),
        Object.defineProperty(p, "CELLS_NUMBER_VERTICAL", {
            value: 12
        }),
        Object.defineProperty(p, "CELLS_NUMBER_HORIZONTAL", {
            value: 24
        }),
        Object.defineProperty(p, "CLASS_READY", {
            value: "is__ready"
        }),
        Object.defineProperty(p, "CLASS_HALFHOLD", {
            value: "is__halfhold"
        }),
        Object.defineProperty(p, "CLASS_DEBUG", {
            value: "is__debug"
        }),
        Object.defineProperty(p, "CLASS_SKIP", {
            value: "is__skip"
        }),
        Object.defineProperty(p, "CLASS_RESIZING", {
            value: "is__resizing"
        }),
        Object.defineProperty(p, "COVER_ANIMATION_HEIGHT", {
            value: 500
        }),
        Object.defineProperty(p, "SPREADS_SPACING", {
            value: 20
        }),
        p.prototype.setResizeListeners = function() {
            var e, t = this, n = function() {
                t.$document.trigger("bookResize")
            }, r = function s(e) {
                e = e || 0,
                t.viewHeight !== t.getViewHeight() || e > 15 ? requestAnimationFrame(n) : setTimeout(s.bind(this, e + 1), 100)
            }, i = function() {
                t.isInPreviewsMode || (t.pauseDraw(),
                t.rememberCurrentSpread(),
                t.unloadAllSpreads(),
                t.$body.addClass(p.CLASS_RESIZING),
                clearTimeout(e),
                e = setTimeout(n, 500))
            }, o = function() {
                t.pauseDraw(),
                t.rememberCurrentSpread(),
                t.unloadAllSpreads(),
                r()
            };
            t.isMobile ? $(window).on("orientationchange", o) : $(window).on("resize", i),
            t.$document.on("bookResize", t.resize.bind(t))
        }
        ,
        p.prototype.resize = function() {
            var e = this
              , t = e.rememberedCurrentSpread
              , n = e.rememberedCurrentSpreadPosition;
            if (t && window.scroll(0, 0),
            e.setSizes(),
            e.initSpreads(),
            e.reflow(),
            t) {
                var r = e.spreads[t.number];
                e.preloadSpread(r);
                var i = r.triggers.hold
                  , o = i - r.height * n;
                e.scrollTo(o, !0)
            }
            e.clearRememberedSpread(),
            e.resumeDraw(),
            e.$document.trigger("bookResizeDone"),
            e.$body.removeClass(p.CLASS_RESIZING)
        }
        ,
        p.prototype.getViewHeight = function() {
            return parseInt(document.documentElement.style.fontSize, 10)
        }
        ,
        p.prototype.setSizes = function() {
            var e = this
              , t = window.innerHeight < p.MIN_HEIGHT;
            e.viewHeight = window.application.height,
            e.actualViewHeight = t ? window.innerHeight : e.viewHeight,
            e.viewWidth = window.application.width,
            e.coverHeight = p.COVER_ANIMATION_HEIGHT,
            e.spreadsSpacing = p.SPREADS_SPACING,
            e.cellHeight = e.viewHeight / p.CELLS_NUMBER_VERTICAL,
            e.cellWidth = e.viewWidth / p.CELLS_NUMBER_HORIZONTAL
        }
        ,
        p.prototype.setSpreads = function() {
            var e = this;
            e.$spreads = e.$el.find(".js__spread"),
            e.spreads = [],
            e.spreadsById = {},
            e.size = 0,
            e.$spreads.each(function() {
                var t = new r($(this),e);
                e.size++,
                e.spreads.push(t),
                e.spreadsById[t.id] = t
            }),
            e.initSpreads(),
            e.postInitSpreads(),
            e.$el.addClass(p.CLASS_READY),
            e.$body.addClass(p.CLASS_READY)
        }
        ,
        p.prototype.setScrollPosition = function() {
            this.scrollPosition.set()
        }
        ,
        p.prototype.reflow = function() {
            var e = this;
            window.pageYOffset > e.coverHeight && e.$body.addClass(p.CLASS_SKIP)
        }
        ,
        p.prototype.initSpreads = function() {
            var e = this;
            e.wasRendered && e.resetSpreads(),
            e.calculateSpreads(),
            e.preloadImportantSpreads(),
            e.wasRendered = !0
        }
        ,
        p.prototype.resetSpreads = function() {
            this.spreads.forEach(function(e) {
                e.reset()
            })
        }
        ,
        p.prototype.calculateSpreads = function() {
            this.spreads.forEach(function(e) {
                e.calculateRoughly()
            })
        }
        ,
        p.prototype.preloadImportantSpreads = function() {
            this.spreads.forEach(function(e) {
                e.isPreloadable() && e.load()
            })
        }
        ,
        p.prototype.postInitSpreads = function() {
            var e = this
              , t = $("<style />");
            e.spreads.forEach(function(e) {
                e.initOnce(),
                t.append(e.styles.get())
            }),
            t.appendTo(e.$body)
        }
        ,
        p.prototype.draw = function() {
            if (!this.drawIsLocked) {
                var e = this
                  , t = window.pageYOffset
                  , n = 0;
                if (e.scrollAdjustment)
                    return void e.adjustScrollPosition();
                var r = e.getDrawBounds();
                if (e.loadAndVisualizeSpreadsInBounds(r),
                t !== e.lastPosition) {
                    t > e.lastPosition ? n = 1 : t < e.lastPosition && (n = -1),
                    e.lastPosition = t,
                    e.currentSpread = r.visualizableSpreads[0],
                    e.currentSpreadNumber = e.currentSpread.number,
                    e.currentSpreadId = e.currentSpread.id,
                    e.currentSpread.isInViewport(t) || (e.currentSpread = null,
                    e.currentSpreadNumber = null,
                    e.currentSpreadId = null);
                    for (var i = 99999, o = 0; o < e.size; o++) {
                        var s = e.spreads[o];
                        r.visualizableSpreadNumbers.indexOf(s.number) < 0 && s.isVisualized() && requestAnimationFrame(s.devisualize.bind(s)),
                        r.loadableSpreadNumbers.indexOf(s.number) < 0 && s.isLoaded() && requestAnimationFrame(s.unload.bind(s));
                        var a = t > s.triggers.start && t < s.triggers.end;
                        if (s.length && a) {
                            var c = t - s.triggers.hold;
                            t > s.triggers.hold ? (t - s.triggers.hold > 30 ? s.$el.addClass(p.CLASS_HALFHOLD) : s.$el.removeClass(p.CLASS_HALFHOLD),
                            s.move(c, n)) : (s.isVisualized() && s.move(c, n),
                            s.$el.removeClass(p.CLASS_HALFHOLD))
                        }
                        s.inSight && !a && (s.inSight = !1,
                        s.$el.trigger("spreadOutOfSight")),
                        !s.inSight && a && (s.inSight = !0,
                        s.$el.trigger("spreadInSight"));
                        var l = t - s.triggers.hold;
                        l > 0 && l < i && (i = l,
                        t < s.triggers.end && s.$el.trigger("spreadScrollout", (t - s.triggers.hold) / (s.triggers.end - s.triggers.hold)))
                    }
                    e.currentSpread ? (e.currentSpreadPosition = e.currentSpread.percentsFromTop(t),
                    e.location.updateWithCurrentSpread()) : e.location.updateWithCover(),
                    e.state.savePosition(e),
                    e.prevSpread = e.currentSpread
                }
            }
        }
        ,
        p.prototype.loadAndVisualizeSpreadsInBounds = function(e) {
            var t = this
              , n = t.currentSpread
              , r = n ? t.spreads[n.number + 1] : null
              , i = e.loadableSpreads.filter(function(e) {
                return !e.isLoaded()
            })
              , o = e.topSpread.isLoaded() && e.bottomSpread.isLoaded()
              , s = r && !r.isLoaded();
            e.loadableSpreads.forEach(function(e) {
                (e.isFirst() || e.isLast()) && (o = !0)
            }),
            i.length > 0 && (i.length >= f || o || s) && (cancelAnimationFrame(t.spreadsLoadingFrame),
            t.spreadsLoadingFrame = requestAnimationFrame(function() {
                i.forEach(function(e) {
                    requestAnimationFrame(e.load.bind(e))
                })
            })),
            e.visualizableSpreads.forEach(function(e) {
                !e.isVisualized() && e.isLoaded() && requestAnimationFrame(e.visualize.bind(e))
            })
        }
        ,
        p.prototype.preloadSpread = function(e) {
            this.currentSpread = e,
            e.withNeighbours(h).filter(function(t) {
                return t.number < e.number
            }).forEach(function(e) {
                e.load()
            }),
            e.load(),
            e.visualize()
        }
        ,
        p.prototype.drawImmediately = function() {
            if (!this.drawIsLocked) {
                var e = this
                  , t = window.pageYOffset;
                if (t !== e.lastImmediatePosition) {
                    e.currentSpread && e.currentSpread.isVisualized() && (e.lastImmediatePosition = t);
                    for (var n = 0; n < e.size; n++)
                        e.spreads[n].isVisualized() && e.spreads[n].drawImmediately(t)
                }
            }
        }
        ,
        p.prototype.pauseDraw = function() {
            var e = this;
            e.drawIsLocked || (window.clearAnimationFrameInterval(e.drawInterval),
            e.isMobile && window.clearAnimationFrameInterval(e.drawImmediatelyInterval),
            $(document).trigger("bookDrawPause"))
        }
        ,
        p.prototype.lockDraw = function() {
            this.drawIsLocked = !0
        }
        ,
        p.prototype.resumeDraw = function(e) {
            var t = this;
            e = e || {},
            t.drawIsLocked || (window.clearAnimationFrameInterval(t.drawInterval),
            t.drawInterval = window.setAnimationFrameInterval(t.draw.bind(t), l),
            (void 0 === t.drawImmediatelyInterval || t.isMobile) && (window.clearAnimationFrameInterval(t.drawImmediatelyInterval),
            t.drawImmediatelyInterval = window.setAnimationFrameInterval(t.drawImmediately.bind(t), u)),
            void 0 !== e.silent && e.silent || $(document).trigger("bookDrawResume"))
        }
        ,
        p.prototype.releaseDraw = function() {
            this.drawIsLocked = !1
        }
        ,
        p.prototype.rememberCurrentSpread = function() {
            this.rememberedCurrentSpread || (this.rememberedCurrentSpread = this.currentSpread,
            this.currentSpread && (this.rememberedCurrentSpreadPosition = this.currentSpreadPosition || this.currentSpread.percentsFromTop(window.pageYOffset)))
        }
        ,
        p.prototype.clearRememberedSpread = function() {
            this.rememberedCurrentSpread = null,
            this.rememberedCurrentSpreadPosition = null
        }
        ,
        p.prototype.goToSpreadNumber = function(e, t, n) {
            this.currentSpread && this.location.pushSpread(this.currentSpread),
            this.scrollToSpreadNumber(e, t, n)
        }
        ,
        p.prototype.scrollToSpreadNumber = function(e, t, n) {
            var r = this.spreads[e];
            this.scrollToSpread(r, t, n)
        }
        ,
        p.prototype.scrollToBackCover = function(e, t) {
            var n = this;
            n.preloadSpread(n.spreads[n.size - 1]),
            n.scrollTo(document.body.scrollHeight, e, t)
        }
        ,
        p.prototype.scrollToSpread = function(e, t, n) {
            n = n || {},
            n.toFirstMatch ? this.scrollPosition.moveToSpreadFirstMatch(e, t, n) : this.scrollPosition.moveToSpread(e, t, n)
        }
        ,
        p.prototype.scrollTo = function(e, t, n) {
            var r = n || {}
              , i = r.start
              , o = r.stop
              , s = r.duration || 300
              , a = this;
            if (a.pauseDraw(),
            i && i(),
            t)
                $("html, body").scrollTop(e),
                o && o(),
                a.resumeDraw();
            else {
                var c = function() {
                    o && o(),
                    a.resumeDraw()
                };
                $("html, body").animate({
                    scrollTop: e
                }, {
                    duration: s
                }).promise().done(c)
            }
        }
        ,
        p.prototype.turn = function(e, t) {
            this.guide.turn(e, t)
        }
        ,
        p.prototype.getDrawBounds = function() {
            var e = function(e) {
                return e.number
            }
              , t = this.currentVisibleSpreadWithNeighbours(h)
              , n = t.slice(0, d)
              , r = n[0]
              , i = n[0];
            return t.forEach(function(e) {
                e.number < r.number && (r = e),
                e.number > i.number && (i = e)
            }),
            {
                visualizableSpreads: n,
                visualizableSpreadNumbers: n.map(e),
                loadableSpreads: t,
                loadableSpreadNumbers: t.map(e),
                topSpread: r,
                bottomSpread: i
            }
        }
        ,
        p.prototype.unloadAllSpreads = function() {
            this.spreads.forEach(function(e) {
                e.isLoaded() && e.unload()
            })
        }
        ,
        p.prototype.devisualizeAllSpreads = function() {
            this.spreads.forEach(function(e) {
                e.isVisualized() && e.devisualize()
            })
        }
        ,
        p.prototype.currentVisibleSpread = function() {
            for (var e, t, n = this, r = window.pageYOffset, i = n.spreads[0], o = i.distanceFromViewport(r), s = {
                min: r - 10 * n.viewHeight,
                max: r + 10 * n.viewHeight
            }, a = 1; a < n.size; a++)
                e = n.spreads[a],
                e.triggers.end < s.min || e.triggers.hold > s.max || (t = e.distanceFromViewport(r),
                t < o && (i = e,
                o = t));
            return i
        }
        ,
        p.prototype.currentVisibleSpreadWithNeighbours = function(e) {
            return e = e || 3,
            this.currentVisibleSpread().withNeighbours(e)
        }
        ,
        p.prototype.adjustScrollPosition = function() {
            var e = this;
            return window.pageYOffset <= e.lastPopStateAt ? void (e.scrollAdjustment = null) : (document.documentElement.scrollTop += e.scrollAdjustment,
            document.body.scrollTop += e.scrollAdjustment,
            void (e.scrollAdjustment = null))
        }
        ,
        p.prototype.nonServiceSpreads = function() {
            return this.spreads.filter(function(e) {
                return !e.$el.hasClass("is__service")
            })
        }
        ,
        t.exports = p
    }
    , {
        "./book/highlight.js": 53,
        "./book/scrollPosition.js": 55,
        "./bookComputationsCache.js": 57,
        "./bookGuide.js": 58,
        "./location.js": 67,
        "./spread.js": 72
    }],
    53: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.book = e,
            this.bindEvents()
        };
        r.EVENT_NAME = "spreadHighlightKeywords",
        r.prototype.bindEvents = function() {
            var e = this;
            e.book.$document.on(r.EVENT_NAME, e.applyToSpread.bind(e))
        }
        ,
        r.prototype.applyToSpread = function(e, t) {
            var n = this
              , r = t.spreadNumber
              , i = t.keywords;
            n.book.spreads[r].highlight(i)
        }
        ,
        t.exports = r
    }
    , {}],
    54: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.book = e,
            this.can = window.application.can
        };
        r.UP_ARROW_KEYCODE = 38,
        r.DOWN_ARROW_KEYCODE = 40,
        r.SPACE_KEYCODE = 32,
        r.PAGE_UP_KEYCODE = 33,
        r.PAGE_DOWN_KEYCODE = 34,
        r.G_KEYCODE = 71,
        r.H_KEYCODE = 72,
        r.N_KEYCODE = 78,
        r.E_KEYCODE = 69,
        r.MODAL = "[data-modal]",
        r.CLASS_VISIBLE = "is__visible",
        r.CLASS_DEBUG = "is__debug",
        r.CLASS_SPREAD_IDS_VISIBLE = "is__spreadIdsVisible",
        r.FORBIDDEN_EVENT_SOURCES = ["input", "textarea"],
        r.prototype.bind = function() {
            var e = this;
            $(document).on("keydown", function(t) {
                if (!e.isEventNotApplicable(t) && !e.isModalOpen())
                    return t.keyCode === r.SPACE_KEYCODE && e.turnBookOnSpace(t),
                    t.keyCode !== r.DOWN_ARROW_KEYCODE && t.keyCode !== r.PAGE_DOWN_KEYCODE || e.turnForward(t),
                    t.keyCode !== r.UP_ARROW_KEYCODE && t.keyCode !== r.PAGE_UP_KEYCODE || e.turnBackward(t),
                    t.keyCode === r.G_KEYCODE && t.ctrlKey && e.toggleDebugMode(),
                    t.keyCode === r.H_KEYCODE && t.ctrlKey && e.toggleSpreadIds(),
                    t.keyCode === r.N_KEYCODE && t.ctrlKey && e.goToSpreadNumber(),
                    t.keyCode === r.E_KEYCODE && t.altKey ? (e.editCurrentSpread(),
                    !1) : void 0
            })
        }
        ,
        r.prototype.turnBookOnSpace = function(e) {
            var t = e.shiftKey || e.altKey;
            e.preventDefault(),
            this.book.turn(!t)
        }
        ,
        r.prototype.turnForward = function(e) {
            var t = this.book;
            e.preventDefault(),
            e.shiftKey || e.altKey ? t.turn(!0, !0) : t.turn(!0)
        }
        ,
        r.prototype.turnBackward = function(e) {
            var t = this.book;
            e.preventDefault(),
            e.shiftKey || e.altKey ? t.turn(!1, !0) : t.turn(!1)
        }
        ,
        r.prototype.toggleDebugMode = function() {
            $("body").toggleClass(r.CLASS_DEBUG)
        }
        ,
        r.prototype.toggleSpreadIds = function() {
            $("body").toggleClass(r.CLASS_SPREAD_IDS_VISIBLE),
            this.spreadIdsAppended || (this.book.spreads.forEach(function(e) {
                e.$el.append('\n        <div class="spreadId">\n          ' + e.$el.data("id") + "\n        </div>\n      ")
            }),
            this.spreadIdsAppended = !0)
        }
        ,
        r.prototype.goToSpreadNumber = function() {
            var e = prompt("Enter spread number") - 1;
            this.book.goToSpreadNumber(e, !0, {
                preload: !0
            })
        }
        ,
        r.prototype.editCurrentSpread = function() {
            var e = window.application.book.currentSpread;
            e && this.can("editSpreads") && window.open(e.$editlink.attr("href"))
        }
        ,
        r.prototype.isEventNotApplicable = function(e) {
            var t = e.target.tagName.toLowerCase();
            return r.FORBIDDEN_EVENT_SOURCES.indexOf(t) > -1
        }
        ,
        r.prototype.isModalOpen = function() {
            return $(r.MODAL).hasClass(r.CLASS_VISIBLE)
        }
        ,
        r.bindWith = function(e) {
            var t = new r(e);
            return t.bind(),
            t
        }
        ,
        t.exports = r
    }
    , {}],
    55: [function(e, t, n) {
        "use strict";
        var r = e("../utils/scrollGuardian.js")
          , i = function(e) {
            this.book = e
        };
        i.SLOW_PAGE = ".page.is__slow",
        i.prototype.set = function() {
            var e = this.book
              , t = window.application.urls
              , n = r.build
              , i = t.getRequestedSpreadNumber()
              , o = e.state.getPosition(e);
            return i && e.spreads[i - 1] ? void e.scrollToSpreadNumber(i - 1, !0, {
                stop: n,
                preload: !0
            }) : t.isEnd() ? void e.scrollToBackCover(!0, {
                stop: n
            }) : null != o ? void this.scrollToRememberedPosition(o, n) : void 0
        }
        ,
        i.prototype.scrollToRememberedPosition = function(e, t) {
            var n = this.book
              , r = n.state.getRawPosition().spreadId;
            +r === -1 ? n.scrollToBackCover(!0, {
                stop: t
            }) : (n.preloadSpread(n.spreadsById[r]),
            n.scrollTo(e, !0, {
                stop: t
            }))
        }
        ,
        i.prototype.moveToSpread = function(e, t, n) {
            var r = this.book
              , i = n || {}
              , o = i.$targetEl;
            if (e) {
                var s = n.start;
                if (s ? i.start = function() {
                    r.devisualizeAllSpreads(),
                    s()
                }
                : i.start = r.devisualizeAllSpreads.bind(r),
                o && o.length && e.$holder.find(o).length) {
                    var a = this;
                    r.lockDraw(),
                    r.preloadSpread(e);
                    var c = a.detectElScrollTarget(e, o);
                    r.scrollTo(c, t, $.extend({}, n, {
                        stop: r.releaseDraw.bind(r)
                    }))
                } else
                    i.preload && r.preloadSpread(e),
                    r.scrollTo(e.$el.offset().top, t, n)
            }
        }
        ,
        i.prototype.detectElScrollTarget = function(e, t) {
            var n = this.book
              , r = e.triggers.hold
              , o = n.viewHeight / 2 + n.cellHeight
              , s = e.speed || 1
              , a = 0;
            e.needsSlowdown && (a = e.slowPagePosition || 0);
            var c = t.offset().top + a / s;
            if (e.needsSlowdown) {
                var l = e.$holder.find(i.SLOW_PAGE);
                if (l.length) {
                    var u = l.offset().top - e.triggers.hold;
                    0 === a && u === e.length && (c -= e.length)
                }
            }
            var d = c + t.height()
              , h = d - e.triggers.hold - o;
            return d >= e.triggers.hold + n.viewHeight - n.cellHeight && (r = e.triggers.hold + h / s),
            r
        }
        ,
        i.prototype.moveToSpreadFirstMatch = function(e, t, n) {
            var r = e.findFirstMatch();
            this.moveToSpread(e, t, $.extend({}, n, {
                $targetEl: r
            }))
        }
        ,
        t.exports = i
    }
    , {
        "../utils/scrollGuardian.js": 85
    }],
    56: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = a(e);
            return l.indexOf(n) > -1 && (n = n + "-" + (t + 1)),
            l.push(n),
            n
        }
        function i(e) {
            var t = e.clone().find(".sectionTitle-number").remove().end().find("br").replaceWith(" ").end().text().trim();
            return {
                title: t,
                chapters: []
            }
        }
        function o(e, t) {
            var n = e.text().trim()
              , i = e.closest(".spread").hasClass("is__test")
              , o = r(n, t);
            return i && (n = c),
            {
                title: n,
                spreadNumber: t,
                isTest: i,
                slug: o,
                spreads: []
            }
        }
        function s() {
            var e = []
              , t = void 0
              , n = void 0
              , r = [];
            return $(".spread").each(function(s, a) {
                var c = $(a)
                  , l = c.find("h1");
                return !!c.hasClass("is__service") || (r.push({
                    number: s,
                    id: c.data("id")
                }),
                l.length && l.each(function(r, a) {
                    var c = $(a);
                    c.closest(".module.sectionTitle").length ? (t && (e.push(t),
                    n = null),
                    t = i(c)) : t && (n = o(c, s),
                    t.chapters.push(n))
                }),
                void (n && (n.spreads = n.spreads.concat(r),
                r = [])))
            }),
            e.push(t),
            e
        }
        I18n.translations.ru.toc = {
            test: "Тест"
        },
        I18n.translations.en.toc = {
            test: "Test"
        };
        var a = e("transliteration").slugify
          , c = I18n.t("toc.test")
          , l = [];
        t.exports = s
    }
    , {
        transliteration: 48
    }],
    57: [function(e, t, n) {
        "use strict";
        var r = $("#api-root").attr("content")
          , i = r + "cached_computations"
          , o = function(e, t) {
            this.book = e,
            this.cache = this.parseData(t),
            this.isIpad = navigator.userAgent.match(/iPad/) && navigator.userAgent.match(/AppleWebKit/),
            this.deviceCacheKeyBase = this.isIpad ? "ipad" : "other"
        };
        o.prototype.parseData = function(e) {
            var t = {};
            return e && e.length && e.forEach(function(e) {
                t[e.device_key] || (t[e.device_key] = {}),
                t[e.device_key][e.metric] = e.value
            }),
            t
        }
        ,
        o.prototype.deviceCacheKey = function() {
            return this.deviceCacheKeyBase + "-" + this.book.viewHeight
        }
        ,
        o.prototype.get = function(e) {
            var t = this.cache[this.deviceCacheKey()];
            if (t)
                return t[e]
        }
        ,
        o.prototype.set = function(e, t) {
            var n = this.cache[this.deviceCacheKey()];
            n || (n = {}),
            n[e] = t,
            this.syncChanges(e, t)
        }
        ,
        o.prototype.syncChanges = function(e, t) {
            r && $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: !0
                },
                data: JSON.stringify({
                    device_key: this.deviceCacheKey(),
                    metric: e,
                    value: t
                }),
                url: i
            })
        }
        ,
        t.exports = o
    }
    , {}],
    58: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            var t = this;
            t.book = e,
            t.book.$document.on("bookReady", t.calculateConstraints.bind(t)),
            t.book.$document.on("bookResizeDone", t.calculateConstraints.bind(t))
        };
        r.MAX_SPREAD_TRIGGER_ERROR = window.application.MAX_SPREAD_TRIGGER_ERROR,
        r.DURATION_LONG = 600,
        r.MAX_THRESHOLD = 75,
        r.prototype.calculateConstraints = function() {
            this.length = this.book.spreads.length,
            this.maxScrollStep = 9 * this.book.viewHeight / 12 | 0,
            this.threshold = 1 * this.book.viewHeight / 12 | 0,
            this.threshold > r.MAX_THRESHOLD && (this.threshold = r.MAX_THRESHOLD)
        }
        ,
        r.prototype.turn = function(e, t, n) {
            var r = this;
            r.direction = e,
            r.isFastMode = t,
            r.realScrollTop = $(window).scrollTop(),
            r.scrollTop = n || r.realScrollTop,
            r.callbacks = {},
            r.scrollIsLocked || (r.reset(),
            r.calculateTarget(),
            r.scrollBook())
        }
        ,
        r.prototype.reset = function() {
            var e = this;
            e.currentSpreadIndex = -1,
            delete e.duration,
            delete e.currentSpread,
            delete e.currentAnchor,
            delete e.anchors,
            delete e.currentAnchorIndex,
            e.setCurrentSpread(),
            e.setCurrentAnchor()
        }
        ,
        r.prototype.setCurrentSpread = function() {
            var e = this;
            e.currentSpreadIndex = -1,
            e.book.spreads[e.length - 1].triggers.end < e.scrollTop ? e.currentSpreadIndex = e.length : (e.book.spreads.forEach(function(t, n) {
                t.triggers.hold <= e.scrollTop && (e.currentSpread = t,
                e.currentSpreadIndex = n,
                e.anchors = e.currentSpread.anchors)
            }),
            e.anchors = e.currentSpread && e.currentSpread.anchors)
        }
        ,
        r.prototype.setCurrentAnchor = function() {
            var e = this;
            e.anchors && (e.currentAnchorIndex = 0,
            e.anchors.forEach(function(t, n) {
                t.trigger + e.currentSpread.triggers.hold < e.scrollTop && (e.currentAnchorIndex = n)
            }),
            e.currentAnchor = e.anchors[e.currentAnchorIndex],
            e.currentAnchor.height = e.currentAnchor.height || 0)
        }
        ,
        r.prototype.calculateTarget = function() {
            this.currentSpreadIndex < 0 ? this.turnFromFrontCover() : this.currentSpreadIndex > this.length - 1 ? this.turnFromBackCover() : this.isFastMode ? this.direction ? this.turnFastToNextPage() : this.turnFastToPrevPage() : this.direction ? this.turnForward() : this.turnBackward()
        }
        ,
        r.prototype.turnFastToNextPage = function() {
            var e = this
              , t = e.book.spreads[e.currentSpreadIndex + 1];
            t ? e.target = t.triggers.hold : (e.target = e.getEnd(),
            e.duration = r.DURATION_LONG)
        }
        ,
        r.prototype.turnFastToPrevPage = function() {
            var e = this
              , t = e.book.spreads[e.currentSpreadIndex - 1];
            t && !t.wasLoaded || (t ? e.target = t.triggers.hold : e.target = 0)
        }
        ,
        r.prototype.turnToPrevPage = function() {
            var e = this
              , t = e.book.spreads[e.currentSpreadIndex - 1];
            if (!t || t.wasLoaded)
                if (t)
                    if (t.anchors) {
                        var n = t.anchors[t.anchors.length - 1]
                          , r = n.originalTrigger || n.trigger;
                        e.target = t.triggers.hold + r
                    } else
                        e.target = t.triggers.release;
                else
                    e.target = 0
        }
        ,
        r.prototype.turnToNextAnchor = function() {
            var e = this.currentAnchor.originalTrigger + this.currentSpread.triggers.hold;
            this.isAnchorNext(e) ? this.targetAnchor = this.currentAnchor : this.targetAnchor = this.anchors[this.currentAnchorIndex + 1],
            this.turnToAnchor()
        }
        ,
        r.prototype.turnToPrevAnchor = function() {
            var e = this.currentAnchor.originalTrigger + this.currentSpread.triggers.hold;
            this.isAnchorPrev(e) ? this.targetAnchor = this.currentAnchor : this.targetAnchor = this.anchors[this.currentAnchorIndex - 1],
            this.turnToAnchor()
        }
        ,
        r.prototype.turnToAnchor = function() {
            var e = this;
            if (e.prepareBookAnchorTarget(),
            (e.target - e.scrollTop) * e.direction > e.maxScrollStep)
                e.target = e.scrollTop + e.maxScrollStep * e.direction;
            else {
                var t = function() {
                    e.currentSpread.anchor && e.currentSpread.anchor.setInactive(),
                    e.targetAnchor.setActive(0)
                };
                e.callbacks.start = t
            }
        }
        ,
        r.prototype.prepareBookAnchorTarget = function() {
            var e = this
              , t = e.currentAnchor;
            t && t.restoreOriginalTriggers(),
            e.target = e.currentSpread.triggers.hold + e.targetAnchor.originalTrigger,
            +e.targetAnchor.id === e.anchors.length && e.direction && (e.target += 20)
        }
        ,
        r.prototype.hasCurrentAnchor = function() {
            return void 0 !== this.currentAnchorIndex
        }
        ,
        r.prototype.hasAnchorInFront = function() {
            return this.currentAnchorIndex !== this.anchors.length - 1
        }
        ,
        r.prototype.hasAnchorBehind = function() {
            return this.currentAnchorIndex > 0
        }
        ,
        r.prototype.isAnchorNext = function(e) {
            var t = e + this.currentAnchor.height
              , n = this.scrollTop - this.maxScrollStep;
            return t > n && e > this.scrollTop
        }
        ,
        r.prototype.isAnchorPrev = function(e) {
            var t = e + this.currentAnchor.height
              , n = this.scrollTop + this.maxScrollStep;
            return t < this.scrollTop && e < n
        }
        ,
        r.prototype.turnForward = function() {
            var e = this;
            e.hasCurrentAnchor() && e.hasAnchorInFront() ? e.turnToNextAnchor() : e.turnStepForwad()
        }
        ,
        r.prototype.turnBackward = function() {
            var e = this;
            e.hasCurrentAnchor() && e.hasAnchorBehind() ? e.turnToPrevAnchor() : e.turnStepBackward()
        }
        ,
        r.prototype.turnStepForwad = function() {
            this.scrollTop >= this.currentSpread.triggers.release ? this.turnFastToNextPage() : this.turnToSpreadEnd()
        }
        ,
        r.prototype.turnStepBackward = function() {
            this.scrollTop > this.currentSpread.triggers.hold + r.MAX_SPREAD_TRIGGER_ERROR ? this.turnToSpreadStart() : this.turnToPrevPage()
        }
        ,
        r.prototype.turnToSpreadEnd = function() {
            this.target = this.scrollTop + this.maxScrollStep,
            this.target > this.currentSpread.triggers.release && (this.target = this.currentSpread.triggers.release),
            this.target < this.scrollTop && this.turnFastToNextPage()
        }
        ,
        r.prototype.turnToSpreadStart = function() {
            this.scrollTop > this.currentSpread.triggers.release ? this.target = this.currentSpread.triggers.release : (this.target = this.scrollTop - this.maxScrollStep,
            this.target < this.currentSpread.triggers.hold && (this.target = this.currentSpread.triggers.hold),
            this.scrollTop < this.target && this.turnToPrevPage())
        }
        ,
        r.prototype.getEnd = function() {
            var e = this;
            return e.book.$el.height() + 2 * e.book.coverHeight + e.book.viewHeight
        }
        ,
        r.prototype.scrollBook = function() {
            var e = this;
            if (void 0 !== e.target && e.target !== e.realScrollTop) {
                try {
                    if (Math.abs(e.target - e.realScrollTop) < e.threshold)
                        return e.target += e.direction ? 1 : -1,
                        void e.turn(e.direction, e.isFastMode, e.target)
                } catch (t) {
                    var n = ["Maximum call stack size exceeded", "direction: " + (e.direction ? "forward" : "backward"), "target: " + e.target, "realScrollTop: " + e.realScrollTop, "scrollTop: " + e.scrollTop];
                    throw new Error(n.join("\n"))
                }
                var r = function() {
                    $(document).trigger("turn")
                }
                  , i = {};
                i.start = function() {
                    e.callbacks.start && e.callbacks.start(),
                    e.lockScroll(),
                    r()
                }
                ,
                i.stop = function() {
                    e.releaseScroll(),
                    r()
                }
                ,
                e.duration && (i.duration = e.duration),
                e.book.scrollTo(e.target, !1, i)
            }
        }
        ,
        r.prototype.turnFromFrontCover = function() {
            this.target = 0,
            this.direction && (this.target = this.book.spreads[0].triggers.hold)
        }
        ,
        r.prototype.turnFromBackCover = function() {
            this.duration = r.DURATION_LONG,
            this.target = this.book.spreads[this.length - 1].triggers.hold,
            this.direction && (this.target = this.getEnd())
        }
        ,
        r.prototype.releaseScroll = function() {
            this.scrollIsLocked = !1
        }
        ,
        r.prototype.lockScroll = function() {
            this.scrollIsLocked = !0
        }
        ,
        t.exports = r
    }
    , {}],
    59: [function(e, t, n) {
        "use strict";
        var r = 3
          , i = 75
          , o = 38
          , s = function() {
            this.probes = [],
            this.probesIterator = 0
        };
        s.prototype.isDetected = function(e) {
            return this.populateProbes(e),
            !(this.probes.length < r) && this.getProbesPattern() > i
        }
        ,
        s.prototype.cannotBePerformed = function(e) {
            var t = this.getTargetAnchor(e);
            return t && 0 !== t.id
        }
        ,
        s.prototype.scrollProgrammatically = function(e) {
            var t = this.getTargetAnchor(e)
              , n = t._spread.anchor;
            n && n.restoreOriginalTriggers();
            var r = t._spread.triggers.hold + t.trigger + 1;
            window.scrollTo(0, r)
        }
        ,
        s.prototype.getTargetAnchor = function(e) {
            var t = window.application.book
              , n = t.currentSpread
              , r = $("[data-modal]").hasClass("is__visible")
              , i = this.getProbesPattern()
              , o = window.pageYOffset;
            if (n && n.anchors && n.anchor && !r && !(n.triggers.hold + n.anchors[0].trigger > o + i || n.triggers.end < o + t.viewHeight - i)) {
                var s = n.anchor
                  , a = n.anchors.indexOf(s)
                  , c = e.deltaY > 0 ? 1 : -1;
                c > 0 && 1 === a && n.triggers.hold + s.trigger > o && (c = 0);
                var l = a + c
                  , u = n.anchors[l];
                if (!(u && Math.abs(o - n.triggers.hold - u.trigger) > i))
                    return u
            }
        }
        ,
        s.prototype.populateProbes = function(e) {
            var t = 1 === e.deltaMode ? e.deltaY * o : e.deltaY;
            this.probes[this.probesIterator % r] = Math.abs(t.toFixed(0)),
            this.probesIterator++
        }
        ,
        s.prototype.getProbesPattern = function() {
            for (var e = this.probes[0], t = 1; t < r; t++) {
                for (var n = this.probes[t]; e && n; )
                    e > n ? e %= n : n %= e;
                e += n
            }
            return e
        }
        ,
        t.exports = s
    }
    , {}],
    60: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }()
          , o = e("./urls")
          , s = function() {
            function t() {
                var e = this;
                r(this, t),
                this.apiRoot = $("#api-root").attr("content") || "http://localhost:3000/books/fff/api/",
                this.$body = $("body"),
                window.application.can("editSpreads") && $(document).on("addSpread", function(t, n) {
                    e.addSpreadAfter(n)
                }),
                this.CLASS_WORKING = "is__working"
            }
            return i(t, [{
                key: "addSpreadAfter",
                value: function(t) {
                    var n = this
                      , r = +$('[data-id="' + t + '"]').data("number") + 1;
                    this.$body.addClass(this.CLASS_WORKING),
                    $.ajax($.extend(e("./utils/ajaxSettings"), {
                        type: "POST",
                        url: this.apiRoot + "spreads",
                        dataType: "text",
                        data: JSON.stringify({
                            id: t
                        })
                    })).done(function() {
                        setTimeout(function() {
                            window.location.href = o.forSpreadNumber(r)
                        }, 1e3)
                    }).fail(function() {
                        n.$body.removeClass(n.CLASS_WORKING)
                    })
                }
            }]),
            t
        }();
        t.exports = s
    }
    , {
        "./urls": 82,
        "./utils/ajaxSettings": 83
    }],
    61: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.featureKeys = e,
            this.featureKeys.forEach(function(e) {
                document.body.classList.add("has__" + e + "Enabled")
            })
        };
        r.prototype.isEnabled = function(e) {
            return this.featureKeys.indexOf(e) > -1 && window.location.hash !== "#disable-" + e
        }
        ,
        r.prototype.isDisabled = function(e) {
            return !this.isEnabled(e)
        }
        ,
        t.exports = r
    }
    , {}],
    62: [function(e, t, n) {
        "use strict";
        var r = e("./imageManifest")
          , i = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
          , o = function() {
            var e = this;
            this.shouldUnloadNonRetina = r.cannotHandleAllImagesAtOnce(),
            $(document).on("readingHistoryCut", function(t, n) {
                e.unloadImagesIn(n.tail)
            })
        };
        o.prototype.unloadImagesIn = function(e) {
            var t = this;
            e.forEach(function(e) {
                var n = e.$el;
                t.shouldUnloadNonRetina ? t.unloadNonRetinaVersionsIn(n) : t.unloadRetinaVersionsIn(n)
            })
        }
        ,
        o.prototype.unloadRetinaVersionsIn = function(e) {
            var t = r.CLASS_RETINA_READY + " " + r.CLASS_CAN_UNLOAD;
            e.find("." + r.CLASS_RETINA_READY + "." + r.CLASS_CAN_UNLOAD).each(function() {
                var e = $(this);
                e.displayImage(e.nonRetinaDataSrc()).removeClass(t)
            })
        }
        ,
        o.prototype.unloadNonRetinaVersionsIn = function(e) {
            var t = [r.CLASS_READY, r.CLASS_CAN_UNLOAD, r.CLASS_RETINA_READY].join(" ");
            e.find("." + r.CLASS_READY + "." + r.CLASS_CAN_UNLOAD).each(function() {
                var e = $(this);
                e.displayImage(i).removeClass(t)
            })
        }
        ,
        t.exports = o
    }
    , {
        "./imageManifest": 65
    }],
    63: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.images = this.buildList(e.slice(0))
        };
        r.prototype.buildList = function(e) {
            var t = window.pageYOffset;
            return e.map(function(e) {
                return [e, $(e).distanceFromViewportTop(t)]
            })
        }
        ,
        r.prototype.prioritized = function() {
            var e = this.getDistanceBase()
              , t = function(e) {
                return e[0]
            }
              , n = function(t, n) {
                var r = t[1]
                  , i = n[1]
                  , o = r + e
                  , s = i + e;
                return Math.abs(o) - Math.abs(s)
            }
              , r = this.$currentModule()
              , i = function(e, t) {
                return r.find(t[0]).length - r.find(e[0]).length
            };
            return r && r.length ? this.images.sort(n).sort(i).map(t) : this.images.sort(n).map(t)
        }
        ,
        r.prototype.$currentVisibleSpread = function() {
            if (window.application.book) {
                var e = window.application.book.currentVisibleSpread();
                if (e)
                    return e.$el
            }
        }
        ,
        r.prototype.$currentModule = function() {
            var e = this.$currentVisibleSpread();
            if (e)
                return e.find(".module.is__active")
        }
        ,
        r.prototype.getDistanceBase = function() {
            var e = $("[data-modal]");
            if (e.hasClass("is__visible")) {
                var t = e.find("[data-modal-main]");
                return -t[0].getBoundingClientRect().top
            }
            return 0
        }
        ,
        t.exports = r
    }
    , {}],
    64: [function(e, t, n) {
        "use strict";
        var r = e("createjs")
          , i = e("debounce")
          , o = window.application.isOnMobile ? 2 : 4
          , s = 100
          , a = e("./imageManifest")
          , c = function() {
            var e = this;
            this.queue = new r.LoadQueue((!1)),
            this.queue.setMaxConnections(o),
            this.queue.addEventListener("fileload", function(t) {
                e.handleLoadedImage(t)
            });
            var t = i(s, e.reset.bind(e));
            $(document).on("imageLoadersResume imageLoadersReset currentSpreadChanged bookResizeDone", t),
            $(document).on("imageLoadersPause", e.pause.bind(e))
        };
        c.prototype.handleLoadedImage = function(e) {
            var t = e.item.data.image;
            this.displayLoadedImage(t, e.result.src)
        }
        ,
        c.prototype.displayLoadedImage = function(e, t) {
            return e.hasClass(a.CLASS_RETINA_READY) ? void e.addClass(a.CLASS_READY) : (e.displayImage(t).addClass(a.CLASS_READY + " " + a.CLASS_CAN_UNLOAD),
            void (e.nonRetinaDataSrc() === e.retinaDataSrc() && e.addClass(a.CLASS_RETINA_READY)))
        }
        ,
        c.prototype.loadAll = function() {
            var e = this.buildPrioritizedManifest();
            this.loadManifest(e)
        }
        ,
        c.prototype.loadManifest = function(e) {
            e && e.length && this.queue.loadManifest(e)
        }
        ,
        c.prototype.displayEmbedded = function() {
            var e = this.embeddedImages()
              , t = [a.CLASS_READY, a.CLASS_RETINA_READY].join(" ");
            e.forEach(function(e) {
                var n = $(e);
                n.displayImage(n.dataSrc()).addClass(t)
            })
        }
        ,
        c.prototype.pause = function() {
            this.queue.setPaused(!0)
        }
        ,
        c.prototype.reset = function() {
            this.queue.remove();
            var e = this.buildPrioritizedManifest();
            this.loadManifest(e)
        }
        ,
        c.prototype.buildPrioritizedManifest = function() {
            return a.buildNonRetina()
        }
        ,
        c.prototype.embeddedImages = function() {
            return a.nonRetinaImages().filter(function(e) {
                return $(e).dataSrc().match("data:image")
            })
        }
        ,
        t.exports = c;
        var l = r.TagRequest.prototype._hideTag;
        r.TagRequest.prototype._hideTag = function() {
            l.apply(this),
            this._tag.style.position = "fixed",
            this._tag.style.left = "-99999px"
        }
    }
    , {
        "./imageManifest": 65,
        createjs: 105,
        debounce: 106
    }],
    65: [function(e, t, n) {
        "use strict";
        var r = e("createjs")
          , i = e("./imageList")
          , o = function() {};
        Object.defineProperty(o, "CLASS_READY", {
            value: "is__ready"
        }),
        Object.defineProperty(o, "CLASS_RETINA_READY", {
            value: "is__retinafied"
        }),
        Object.defineProperty(o, "CLASS_CAN_UNLOAD", {
            value: "can__unload"
        }),
        Object.defineProperty(o, "IMAGES", {
            value: "[data-src], [data-background-src]"
        }),
        Object.defineProperty(o, "MODAL", {
            value: "[data-modal]"
        }),
        Object.defineProperty(o, "CLASS_MODAL_VISIBLE", {
            value: "is__visible"
        });
        var s = 3;
        o.buildNonRetina = function() {
            return this.cannotHandleAllImagesAtOnce() ? this.buildLimitedNonRetina() : this.buildFrom(this.nonRetinaImages(), {
                srcFunction: "nonRetinaDataSrc"
            })
        }
        ,
        o.buildLimitedNonRetina = function() {
            var e = this.nonRetinaImagesWithLimits();
            return this.buildFrom(e, {
                srcFunction: "nonRetinaDataSrc"
            })
        }
        ,
        o.buildFrom = function(e, t) {
            var n = new i(e).prioritized();
            return n.map(function(e) {
                var n = $(e);
                return r.LoadItem.create({
                    src: n[t.srcFunction](),
                    maintainOrder: !0,
                    data: {
                        image: n
                    }
                })
            })
        }
        ,
        o.nonRetinaImages = function(e) {
            return e = e || $("body"),
            e.find(this.IMAGES).not("." + this.CLASS_READY).filter(function() {
                if (window.application.isInPreviewsMode) {
                    var e = $(this).dataSrc();
                    return e && !/\.mp4$/.test(e)
                }
                return $(this).dataSrc()
            }).get()
        }
        ,
        o.nonRetinaImagesWithLimits = function() {
            var e = $(this.MODAL);
            if (e.hasClass(this.CLASS_MODAL_VISIBLE))
                return this.nonRetinaImages(e);
            var t = this.currentVisibleSpreadLimits()
              , n = $(t.map(function(e) {
                return e.$el[0]
            }));
            return this.nonRetinaImages(n)
        }
        ,
        o.currentVisibleSpreadLimits = function() {
            var e = window.application.book.currentSpread || window.application.book.currentVisibleSpread()
              , t = e.withNeighbours(3);
            return window.application.readingHistory.isConsecutive() && (t = t.concat(e.next(s))),
            t
        }
        ,
        o.cannotHandleAllImagesAtOnce = function() {
            return window.application.isOnMobile && !window.application.isOnRetinaDevice
        }
        ,
        t.exports = o
    }
    , {
        "./imageList": 63,
        createjs: 105
    }],
    66: [function(e, t, n) {
        "use strict";
        var r = e("cookies")
          , i = "bookmark"
          , o = "answer"
          , s = "checkmark"
          , a = function() {
            var e = this;
            $(document).on("stateAddBookmark", function(t, n) {
                e.addBookmark(n)
            }),
            $(document).on("stateRemoveBookmark", function(t, n) {
                e.removeBookmark(n)
            }),
            window.application.can("putCheckmarks") && ($(document).on("stateAddCheckMark", function(t, n) {
                e.addCheckMark(n)
            }),
            $(document).on("stateRemoveCheckMark", function(t, n) {
                e.removeCheckMark(n)
            }))
        };
        a.prototype.addBookmark = function(e) {
            r.set([i, e].join("."), !0)
        }
        ,
        a.prototype.removeBookmark = function(e) {
            r.remove([i, e].join("."))
        }
        ,
        a.prototype.getBookmarks = function() {
            return this.filterCookiesByKey(i).map(function(e) {
                return e.split(".").pop()
            })
        }
        ,
        a.prototype.addCheckMark = function(e) {
            r.set([s, e].join("."), !0)
        }
        ,
        a.prototype.removeCheckMark = function(e) {
            r.remove([s, e].join("."))
        }
        ,
        a.prototype.getCheckMarks = function() {
            return this.filterCookiesByKey(s).map(function(e) {
                return e.split(".").pop()
            })
        }
        ,
        a.prototype.getPosition = function(e) {
            var t = r.get("book.offset")
              , n = r.get("book.spread_id");
            if (+n === -1)
                return document.body.scrollHeight;
            if (null != t && null != n) {
                var i = e.spreadsById[n];
                if (i && i.triggers)
                    return i.triggers.hold - i.height * t
            }
        }
        ,
        a.prototype.getRawPosition = function() {
            return {
                spreadId: r.get("book.spread_id"),
                offset: r.get("book.offset")
            }
        }
        ,
        a.prototype.savePosition = function(e) {
            var t = e.currentSpreadId
              , n = e.currentSpreadPosition;
            null == t && e.lastPosition > e.spreads[0].triggers.end && (t = -1,
            n = 0),
            this.setPosition(t, n)
        }
        ,
        a.prototype.setPosition = function(e, t) {
            null != e ? (r.set("book.offset", t, {
                expires: 31
            }),
            r.set("book.spread_id", e, {
                expires: 31
            })) : (r.remove("book.offset"),
            r.remove("book.spread_id"))
        }
        ,
        a.prototype.addAnswer = function(e) {
            r.set([o, e].join("."), !0)
        }
        ,
        a.prototype.removeAnswer = function(e) {
            r.remove([o, e].join("."))
        }
        ,
        a.prototype.getAnswers = function() {
            return this.filterCookiesByKey(o).map(function(e) {
                return e.split(".").slice(1).join(".")
            })
        }
        ,
        a.prototype.filterCookiesByKey = function(e) {
            var t = new RegExp("^" + e + ".");
            return Object.keys(r.get()).filter(function(e) {
                return t.test(e)
            })
        }
        ,
        t.exports = a
    }
    , {
        cookies: 104
    }],
    67: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.book = e
        };
        r.prototype.push = function(e, t) {
            this.canUpdateHistory() && (this.lastScrollHeight = document.body.scrollHeight,
            history.pushState(this.stateData(), e, t))
        }
        ,
        r.prototype.update = function(e, t) {
            if (this.canUpdateHistory())
                try {
                    history.replaceState(this.stateData(), e, t)
                } catch (n) {
                    console.log(n)
                }
        }
        ,
        r.prototype.onPopState = function(e) {
            var t = e.originalEvent;
            if (t && t.state && this.lastScrollHeight && (this.book.lastPopStateAt = this.book.lastPosition,
            document.body.scrollHeight > 0 && (this.book.scrollAdjustment = document.body.scrollHeight - this.lastScrollHeight)),
            !this.book.isMobile && t && t.state) {
                var n = t.state.viewWidth
                  , r = t.state.viewHeight;
                n === window.application.width && r === window.application.height || $(window).trigger("resize")
            }
        }
        ,
        r.prototype.updateWithCurrentSpread = function() {
            var e = this.book;
            e.prevSpread != e.currentSpread && (this.triggerSpreadChange(e.currentSpread.number),
            this.updateWithSpread(e.currentSpread))
        }
        ,
        r.prototype.updateWithSpread = function(e) {
            var t = e.number;
            this.update(t + 1, window.application.urls.forSpreadNumber(t))
        }
        ,
        r.prototype.updateWithCover = function() {
            var e = this.book
              , t = e.lastPosition;
            t > e.spreads[0].triggers.end ? window.application.urls.end() !== window.location.href && (this.triggerSpreadChange(null),
            this.updateWithBackCover()) : window.application.urls.root() !== window.location.href && (this.triggerSpreadChange(null),
            this.updateWithFrontCover())
        }
        ,
        r.prototype.updateWithFrontCover = function() {
            this.update("", window.application.urls.root())
        }
        ,
        r.prototype.updateWithBackCover = function() {
            this.update("end", window.application.urls.end())
        }
        ,
        r.prototype.pushSpread = function(e) {
            var t = e.number;
            this.push(t + 1, window.application.urls.forSpreadNumber(t))
        }
        ,
        r.prototype.canUpdateHistory = function() {
            return !window.application.isInPreviewsMode
        }
        ,
        r.prototype.triggerSpreadChange = function(e) {
            this.book.$document.trigger("currentSpreadChanged", {
                currentSpreadNumber: e
            })
        }
        ,
        r.prototype.stateData = function() {
            return {
                viewWidth: this.book.viewWidth,
                viewHeight: this.book.viewHeight
            }
        }
        ,
        t.exports = r
    }
    , {}],
    68: [function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this;
            this.turnIsStarted = !1,
            $(document).on("turnstart", function() {
                e.turnIsStarted = !0,
                e.triggerStart()
            }),
            $(document).on("scrollstart", function() {
                e.turnIsStarted || e.triggerStart()
            }),
            $(document).on("turnstop", function() {
                e.turnIsStarted = !1,
                e.triggerStop()
            }),
            $(document).on("scrollstop", function() {
                e.turnIsStarted || e.triggerStop()
            })
        };
        r.prototype.triggerStart = function() {
            $(document).trigger("lookthroughStart")
        }
        ,
        r.prototype.triggerStop = function() {
            $(document).trigger("lookthroughStop")
        }
        ,
        t.exports = r
    }
    , {}],
    69: [function(e, t, n) {
        "use strict";
        var r = 4
          , i = "currentSpreadChanged.history"
          , o = function() {
            this.spreads = []
        };
        o.prototype.watch = function() {
            var e = this;
            $(document).off(i).on(i, function(t, n) {
                if (null !== n.currentSpreadNumber) {
                    var r = window.application.book.spreads[n.currentSpreadNumber];
                    e.recordSpread(r),
                    e.cutOutdatedSpreads()
                }
            })
        }
        ,
        o.prototype.recordSpread = function(e) {
            var t = this.spreads.indexOf(e);
            t > -1 && this.spreads.splice(t, 1),
            this.spreads.unshift(e)
        }
        ,
        o.prototype.isConsecutive = function() {
            var e = this.spreads[0]
              , t = this.spreads[1];
            return e && t && e.number === t.number + 1
        }
        ,
        o.prototype.cutOutdatedSpreads = function() {
            if (!(this.spreads.length <= r)) {
                var e = this.spreads.splice(r, this.spreads.length - r);
                $(document).trigger("readingHistoryCut", {
                    tail: e
                })
            }
        }
        ,
        t.exports = o
    }
    , {}],
    70: [function(e, t, n) {
        "use strict";
        var r = (e("debounce"),
        e("./utils/ajaxSettings"))
          , i = window.application.isOnMobile ? 1e3 : 300
          , o = 3e4
          , s = 1.5
          , a = $("#api-root").attr("content")
          , c = a + "bookmarks"
          , l = a + "check_marks"
          , u = a + "progress"
          , d = function(e) {
            var t = this;
            this.data = e,
            this.initialData = $.extend(!0, {}, e),
            this.data.bookmarks = this.data.bookmarked_spreads,
            this.data.checkMarks = [],
            this.lastSavedOffset = this.data.offset,
            this.lastSavedSpreadId = this.data.spread_id,
            this.lastSavedTestAnswers = this.data.test_answers.slice(0),
            this.activeSendInterval = i,
            $(document).on("lookthroughStart bookDrawPause", t.pauseSend.bind(t)),
            $(document).on("bookReady lookthroughStop bookDrawResume", t.restartSend.bind(t)),
            $(document).on("stateAddBookmark", function(e, n) {
                t.addBookmark(n)
            }),
            $(document).on("stateRemoveBookmark", function(e, n) {
                t.removeBookmark(n)
            }),
            window.application.can("putCheckmarks") && ($(document).on("stateAddCheckMark", function(e, n) {
                t.addCheckMark(n)
            }),
            $(document).on("stateRemoveCheckMark", function(e, n) {
                t.removeCheckMark(n)
            }),
            this.loadCheckMarks())
        };
        d.prototype.addBookmark = function(e) {
            var t = this;
            $.ajax($.extend({}, r, {
                type: "POST",
                url: c,
                data: JSON.stringify({
                    id: e
                }),
                success: function(n) {
                    t.syncBookmarks(n, {
                        changed: e
                    })
                },
                error: function() {
                    t.handleFailedBookmark(e),
                    setTimeout(function() {
                        t.addBookmark(e)
                    }, t.getSendInterval())
                }
            }))
        }
        ,
        d.prototype.removeBookmark = function(e) {
            var t = this;
            $.ajax($.extend({}, r, {
                type: "DELETE",
                url: c + "/" + e,
                success: function(n) {
                    t.syncBookmarks(n, {
                        changed: e
                    })
                },
                error: function() {
                    t.handleFailedBookmark(e),
                    setTimeout(function() {
                        t.removeBookmark(e)
                    }, t.getSendInterval())
                }
            }))
        }
        ,
        d.prototype.syncBookmarks = function(e, t) {
            this.handleSuccessfulRequest(),
            this.data.bookmarks = e.bookmarked_spreads,
            $(document).trigger("bookmarksSync", t)
        }
        ,
        d.prototype.handleFailedBookmark = function(e) {
            this.handleFailedRequest(),
            $(document).trigger("bookmarkFailed", e)
        }
        ,
        d.prototype.getBookmarks = function() {
            return this.data.bookmarks
        }
        ,
        d.prototype.addCheckMark = function(e) {
            var t = this;
            $.ajax($.extend({}, r, {
                type: "POST",
                url: l,
                data: JSON.stringify({
                    id: e
                }),
                success: function(n) {
                    t.syncCheckMarks(n, {
                        changed: e
                    })
                },
                error: function() {
                    t.handleFailedCheckMark(e),
                    setTimeout(function() {
                        t.addCheckMark(e)
                    }, t.getSendInterval())
                }
            }))
        }
        ,
        d.prototype.removeCheckMark = function(e) {
            var t = this;
            $.ajax($.extend({}, r, {
                type: "DELETE",
                url: l + "/" + e,
                success: function(n) {
                    t.syncCheckMarks(n, {
                        changed: e
                    })
                },
                error: function() {
                    t.handleFailedCheckMark(e),
                    setTimeout(function() {
                        t.removeCheckMark(e)
                    }, t.getSendInterval())
                }
            }))
        }
        ,
        d.prototype.syncCheckMarks = function(e, t) {
            this.handleSuccessfulRequest(),
            this.data.checkMarks = e.check_marks.map(function(e) {
                return e.spread_id
            }),
            $(document).trigger("checkMarksSync", t)
        }
        ,
        d.prototype.handleFailedCheckMark = function(e) {
            this.handleFailedRequest(),
            $(document).trigger("checkMarkFailed", e)
        }
        ,
        d.prototype.loadCheckMarks = function() {
            $.ajax($.extend({}, r, {
                url: l,
                success: this.syncCheckMarks.bind(this)
            }))
        }
        ,
        d.prototype.getCheckMarks = function() {
            return this.data.checkMarks
        }
        ,
        d.prototype.getPosition = function(e) {
            if (+this.data.spread_id === -1)
                return document.body.scrollHeight;
            if (null != this.data.offset && null != this.data.spread_id) {
                var t = e.spreadsById[this.data.spread_id];
                if (t)
                    return t.triggers.hold - t.height * this.data.offset
            }
        }
        ,
        d.prototype.getRawPosition = function() {
            return {
                spreadId: this.data.spread_id,
                offset: this.data.offset
            }
        }
        ,
        d.prototype.savePosition = function(e) {
            var t = e.currentSpreadId
              , n = e.currentSpreadPosition;
            null == t && e.lastPosition > e.spreads[0].triggers.end && (t = -1,
            n = 0),
            this.setPosition(t, n)
        }
        ,
        d.prototype.setPosition = function(e, t) {
            null != e ? (this.data.offset = t,
            this.data.spread_id = e) : (this.data.offset = null,
            this.data.spread_id = null)
        }
        ,
        d.prototype.addAnswer = function(e) {
            var t = this.data.test_answers.indexOf(e);
            t < 0 && this.data.test_answers.push(e)
        }
        ,
        d.prototype.removeAnswer = function(e) {
            var t = this.data.test_answers.indexOf(e);
            t > -1 && this.data.test_answers.splice(t, 1)
        }
        ,
        d.prototype.getAnswers = function() {
            return this.data.test_answers
        }
        ,
        d.prototype.sendProgressIfChanged = function() {
            var e = {};
            this.lastSavedOffset == this.data.offset && this.lastSavedSpreadId == this.data.spread_id || (e.offset = this.data.offset,
            e.spread_id = this.data.spread_id),
            this.hasChangedAnswers() && (e.test_answers = this.getAnswers()),
            Object.keys(e).length && this.sendProgress(e),
            this.sendIntervalId = setTimeout(this.sendProgressIfChanged.bind(this), this.getSendInterval())
        }
        ,
        d.prototype.hasChangedAnswers = function() {
            var e = this.getAnswers();
            return 0 !== $(this.lastSavedTestAnswers).not(e).length || 0 !== $(e).not(this.lastSavedTestAnswers).length
        }
        ,
        d.prototype.sendProgress = function(e) {
            var t = this;
            $.ajax($.extend({}, r, {
                type: "PUT",
                url: u,
                data: JSON.stringify(e),
                error: t.handleFailedRequest.bind(t),
                success: function() {
                    void 0 !== e.offset && (t.lastSavedOffset = e.offset,
                    t.lastSavedSpreadId = e.spread_id),
                    e.test_answers && (t.lastSavedTestAnswers = e.test_answers.slice(0)),
                    t.handleSuccessfulRequest()
                }
            }))
        }
        ,
        d.prototype.restartSend = function() {
            clearTimeout(this.sendIntervalId),
            this.sendIntervalId = setTimeout(this.sendProgressIfChanged.bind(this), this.getSendInterval())
        }
        ,
        d.prototype.pauseSend = function() {
            clearTimeout(this.sendIntervalId)
        }
        ,
        d.prototype.handleFailedRequest = function() {
            this.activeSendInterval = this.activeSendInterval * s
        }
        ,
        d.prototype.handleSuccessfulRequest = function() {
            this.activeSendInterval = i
        }
        ,
        d.prototype.getSendInterval = function() {
            return this.activeSendInterval > o ? o : this.activeSendInterval
        }
        ,
        t.exports = d
    }
    , {
        "./utils/ajaxSettings": 83,
        debounce: 106
    }],
    71: [function(e, t, n) {
        "use strict";
        var r = e("createjs")
          , i = 2
          , o = 400
          , s = 3
          , a = e("./imageManifest")
          , c = function() {
            var e = this;
            this.imagesCache = {},
            this.isFreezed = !1,
            this.isLoading = !1,
            this.queue = new r.LoadQueue((!1)),
            this.queue.setMaxConnections(i),
            this.queue.addEventListener("fileload", function(t) {
                e.handleLoadedImage(t)
            }),
            this.queue.addEventListener("complete", function() {
                e.resumeAllOtherLoaders()
            }),
            $(document).on("lookthroughStart", function() {
                e.freeze()
            }),
            $(document).on("lookthroughStop", function() {
                e.reset()
            })
        };
        c.prototype.handleLoadedImage = function(e) {
            var t = e.item.data.image
              , n = new Image;
            n.src = t.nonRetinaDataSrc(),
            this.imagesCache[n.src] = n,
            t.displayImage(e.result.src).addClass(a.CLASS_RETINA_READY + " " + a.CLASS_CAN_UNLOAD)
        }
        ,
        c.prototype.resumeAllOtherLoaders = function() {
            this.isLoading = !1,
            $(document).trigger("imageLoadersResume")
        }
        ,
        c.prototype.watch = function() {
            var e = this;
            this.loadIfNecessary(),
            setTimeout(function() {
                e.watch()
            }, o)
        }
        ,
        c.prototype.freeze = function() {
            this.isFreezed = !0,
            this.isLoading = !1,
            this.queue.setPaused(!0)
        }
        ,
        c.prototype.reset = function() {
            this.isFreezed = !1,
            this.queue.remove()
        }
        ,
        c.prototype.loadIfNecessary = function() {
            !window.application.book || this.isFreezed || this.isLoading || this.cannotStartLoading() || this.load()
        }
        ,
        c.prototype.cannotStartLoading = function() {
            return this.loadableVisibleImages().length !== this.availableVisibleImages().length
        }
        ,
        c.prototype.loadableVisibleImages = function() {
            return this.availableVisibleImages().filter("." + a.CLASS_READY).get()
        }
        ,
        c.prototype.availableVisibleImages = function() {
            var e = window.application.book.currentVisibleSpread();
            return this.availableImagesIn(e)
        }
        ,
        c.prototype.availableImagesIn = function(e) {
            return e.$el.find(a.IMAGES).not("." + a.CLASS_RETINA_READY)
        }
        ,
        c.prototype.preloadableImages = function() {
            var e, t = this;
            e = window.application.readingHistory.isConsecutive() ? window.application.book.currentVisibleSpread().next(s) : window.application.book.currentVisibleSpread().neighbours();
            var n = e.map(function(e) {
                return t.availableImagesIn(e).get()
            });
            return Array.prototype.concat.apply([], n)
        }
        ,
        c.prototype.loadManifest = function(e) {
            e && e.length && ($(document).trigger("imageLoadersPause"),
            this.isLoading = !0,
            this.queue.loadManifest(e))
        }
        ,
        c.prototype.buildPrioritizedManifest = function(e) {
            return a.buildFrom(e, {
                srcFunction: "retinaDataSrc"
            })
        }
        ,
        c.prototype.load = function() {
            var e = []
              , t = this.loadableVisibleImages();
            e = t.length ? t : this.preloadableImages(),
            e.length && this.loadManifest(this.buildPrioritizedManifest(e))
        }
        ,
        t.exports = c
    }
    , {
        "./imageManifest": 65,
        createjs: 105
    }],
    72: [function(e, t, n) {
        "use strict";
        e("stickyfill");
        var r = e("./urls")
          , i = function(e, t) {
            return e += "",
            e.length >= t ? e : new Array(t - e.length + 1).join(0) + e
        }
          , o = e("./anchor")
          , s = e("./spread/neighbours")
          , a = e("./spread/visualization")
          , c = e("./spread/styles")
          , l = e("./spreads/cache")
          , u = 0
          , d = "is__loaded"
          , h = "is__sticky"
          , f = "js__vertical"
          , p = "js__sightable"
          , g = "is__inSight"
          , m = function(e, t) {
            var n = this;
            n._book = t,
            n.number = t.size,
            n.spreads = t.spreads,
            n.$el = e,
            n.$holder = n.$el.find(".js__spread-holder"),
            n.$number = n.$el.find(".js__pageNumber"),
            n.$anchors = n.$el.find(".js__anchor"),
            n.$editlink = n.$el.find(".js__editlink"),
            n.isVertical = n.$el.hasClass(f),
            n.isSightable = n.$el.hasClass(p),
            n.$el.attr("id", "spread" + i(n.number, 3)),
            n.$el.attr("data-number", n.number),
            n.$number.text(t.size + 1),
            n.id = n.$el.data("id"),
            n.$editlink.attr("href", r.forPath(n.number + 1 + "-" + n.id + "/edit")),
            n.$el.on("anchor", function(e, t) {
                n.$el.attr("data-state", t.id)
            }),
            n.stickies = n.$el.find("." + h),
            n.isVertical && (n.vertical = {
                els: {
                    $tv: n.$el.find(".js__vertical-tv"),
                    $main: n.$el.find(".js__vertical-main"),
                    $half: n.$el.find(".js__vertical-half")
                },
                heights: {
                    init: n.$el.data("vertical-init"),
                    max: n.$el.data("vertical-max"),
                    min: n.$el.data("vertical-min"),
                    ratio: n.$el.data("vertical-ratio")
                }
            },
            n.vertical.isInverted = !n.vertical.els.$tv.hasClass("page_top")),
            n.affectingModules = [],
            n.dependentModules = [],
            n.reactiveModules = [],
            n.finalModules = [],
            n.spreadNeighbours = new s(n),
            n.visualization = new a(n),
            n.styles = new c(n.$el),
            n.$el.on("moduleInit", function(e, t) {
                t.isAffectingHeight ? n.affectingModules.push(t) : t.isFinal ? n.finalModules.push(t) : n.dependentModules.push(t)
            }),
            n.isSightable && (n.$el.on("spreadInSight", function() {
                n.$el.addClass(g)
            }),
            n.$el.on("spreadOutOfSight", function() {
                n.$el.removeClass(g)
            })),
            n.$el.trigger("spreadCreated", n)
        };
        m.prototype.MIN_SCROLL_HEIGHT = 75,
        m.prototype.reset = function() {
            var e = this;
            e.$el.removeClass(d),
            m.resetModules(e.affectingModules),
            m.resetModules(e.dependentModules),
            m.resetModules(e.finalModules),
            e.detachStickies(),
            e.speed = 1,
            e.needsSlowdown = !1,
            e.wasLoaded = !1,
            e.$el.css("height", "auto")
        }
        ,
        m.prototype.calculateRoughly = function() {
            var e, t = this, n = t.spreads[t.number - 1];
            e = n ? n.triggers.end + t._book.spreadsSpacing : t._book.coverHeight + t._book.actualViewHeight,
            t.triggers = {},
            t.triggers.hold = e,
            t.triggers.start = t.triggers.hold - t._book.viewHeight,
            t.height = l.getRoughHeight(t),
            t.triggers.release = t.triggers.hold + (t.height - t._book.viewHeight),
            t.triggers.end = t.triggers.release + t._book.viewHeight,
            t.length = t.triggers.release - t.triggers.hold,
            t.$el.height(t.height)
        }
        ,
        m.prototype.calculate = function() {
            var e = this
              , t = e.height;
            e.$el.height("auto"),
            e.isVertical && e.setVerticals(),
            m.calculateModules(e.affectingModules),
            m.renderModules(e.affectingModules),
            e.height = e.getHeight(),
            e.triggers.release = e.triggers.hold + (e.height - e._book.viewHeight),
            e.triggers.end = e.triggers.release + e._book.viewHeight,
            e.length = e.triggers.release - e.triggers.hold,
            e.$anchors.length && e.addAnchors(e.$anchors),
            e.$el.height(e.height),
            m.calculateModules(e.dependentModules),
            void 0 !== t && e.resizeSubsequentSpreads(e.height - t)
        }
        ,
        m.prototype.render = function() {
            var e = this;
            e.attachStickies(),
            m.renderModules(e.dependentModules),
            m.calculateModules(e.finalModules),
            m.renderModules(e.finalModules)
        }
        ,
        m.resetModules = function(e) {
            e.forEach(function(e) {
                e.reset()
            })
        }
        ,
        m.calculateModules = function(e) {
            e.forEach(function(e) {
                e.calculate()
            })
        }
        ,
        m.renderModules = function(e) {
            e.forEach(function(e) {
                e.render()
            })
        }
        ,
        m.prototype.getHeight = function() {
            return +this.$holder.outerHeight().toFixed(2)
        }
        ,
        m.prototype.initOnce = function() {}
        ,
        m.prototype.detachStickies = function() {
            if (!this._book.supportsSticky)
                for (var e = this.stickies.length - 1; e >= 0; e--)
                    Stickyfill.remove(this.stickies[e])
        }
        ,
        m.prototype.attachStickies = function() {
            if (!this._book.supportsSticky)
                for (var e = this.stickies.length - 1; e >= 0; e--)
                    Stickyfill.add(this.stickies[e])
        }
        ,
        m.prototype.resize = function() {
            var e = this;
            e.$el.height("auto"),
            window.chrome && e.$holder.forceRedraw();
            var t = e.getHeight() - e.height;
            e.height += t,
            e.$el.height(e.height),
            e.triggers && (e.triggers.release += t,
            e.triggers.end += t,
            e.length += t,
            e.resizeSubsequentSpreads(t))
        }
        ,
        m.prototype.resizeSubsequentSpreads = function(e) {
            var t = this;
            if (!(Math.abs(e) < 1)) {
                for (var n = t.number + 1; n < t._book.spreads.length; n++) {
                    var r = t._book.spreads[n];
                    r.triggers.start += e,
                    r.triggers.hold += e,
                    r.triggers.release += e,
                    r.triggers.end += e,
                    r.$el.trigger("spreadMoveTriggers", {
                        diff: e
                    })
                }
                $(document).trigger("bookMoveEnd", {
                    diff: e
                })
            }
        }
        ,
        m.prototype.setVerticals = function() {
            var e, t = this, n = 0, r = t._book.cellHeight;
            t.vertical.isInverted && (r = 2 * t._book.cellHeight),
            t.vertical.heights.init ? n = t.vertical.heights.init * (9 * t._book.cellHeight) | 0 : t.vertical.heights.ratio && (n = t.vertical.heights.ratio * (20 * t._book.cellWidth) | 0),
            n < t.vertical.heights.min && (n = t.vertical.heights.min),
            n > t.vertical.heights.max && (n = t.vertical.heights.max);
            var i = n + r;
            e = t._book.viewHeight - i,
            t.vertical.isInverted ? (t.vertical.els.$tv.css({
                height: i + "px",
                top: e + "px",
                "margin-top": e + "px"
            }),
            t.vertical.els.$main.css({
                "border-bottom-width": i + "px"
            }),
            t.vertical.els.$half.css({
                "padding-bottom": i + "px"
            })) : (t.vertical.els.$tv.css({
                height: i + "px",
                "margin-bottom": e + "px"
            }),
            t.vertical.els.$main.css({
                "border-top-width": i + "px"
            }),
            t.vertical.els.$half.css({
                "padding-top": i + "px"
            }))
        }
        ,
        m.prototype.move = function(e, t) {
            this.$el.trigger("spreadMove", {
                originalPosition: e,
                position: e * this.speed,
                height: this.length,
                speed: this.speed
            }),
            this.anchors && this.updateAnchors(e, t)
        }
        ,
        m.prototype.drawImmediately = function(e) {
            this.reactiveModules.forEach(function(t) {
                t.reactTo(e)
            })
        }
        ,
        m.prototype.updateAnchors = function(e, t) {
            var n = 0;
            this.anchors.forEach(function(t) {
                e >= t.trigger && (n = t.id)
            }),
            n || (n = 1),
            this.setActiveAnchor(n, t)
        }
        ,
        m.prototype.setActiveAnchor = function(e, t) {
            var n = this
              , r = $.grep(this.anchors, function(t) {
                return t.id == e
            })[0];
            n.anchor && n.anchor.id === r.id || (n.anchor && n.anchor.setInactive(),
            r.setActive(t))
        }
        ,
        m.prototype.addAnchors = function(e) {
            var t = this;
            t.anchors = [],
            e.each(function() {
                t.anchors.push(new o($(this),t))
            }),
            t.squashAnchors(),
            t.$el.trigger("spreadInitAnchors", {
                anchors: t.anchors
            })
        }
        ,
        m.prototype.squashAnchors = function() {
            var e = this;
            e.setAnchorsLimits(),
            e.fixAnchorsHeights(),
            e.fixAnchorsTriggers(),
            e.fixAnchorsEnd(),
            e.fixAnchorsStart(),
            e.setSpeed(),
            e.setAnchorsOriginalTriggers()
        }
        ,
        m.prototype.setAnchorsLimits = function() {
            var e = this;
            e.anchors.forEach(function(t) {
                t.height = t.$el.height(),
                t.page.height = e._book.viewHeight.toFixed(2) - t.page.offset,
                t.origin = t.$el.position().top.toFixed(2),
                t.limits = {},
                t.limits.till = t.origin - 75,
                t.limits.from = t.origin - t.page.height + t.height,
                t.trigger = t.origin - e.MIN_SCROLL_HEIGHT,
                t.trigger < u && (t.trigger = u)
            })
        }
        ,
        m.prototype.fixAnchorsHeights = function() {
            var e = this;
            e.anchors.forEach(function(t, n) {
                var r = e.anchors[n + 1];
                if (r && (t.height = r.trigger - t.trigger),
                t.height < e.MIN_SCROLL_HEIGHT) {
                    var i = e.MIN_SCROLL_HEIGHT - t.height;
                    t.height = e.MIN_SCROLL_HEIGHT;
                    for (var o = n + 1; o < e.anchors.length; o++)
                        e.anchors[o].trigger += i
                }
            })
        }
        ,
        m.prototype.fixAnchorsTriggers = function() {
            var e = this;
            e.anchors.forEach(function(t, n) {
                if (t.limits.till > u && t.trigger > t.limits.till) {
                    var r = t.trigger - t.limits.till;
                    t.trigger -= r,
                    t.height += r;
                    for (var i = n - 1; i > 0 && (e.anchors[i].height -= r,
                    !(e.anchors[i].height >= e.MIN_SCROLL_HEIGHT)); i--)
                        r = e.MIN_SCROLL_HEIGHT - e.anchors[i].height,
                        e.anchors[i].height = e.MIN_SCROLL_HEIGHT,
                        e.anchors[i].trigger -= r
                }
            })
        }
        ,
        m.prototype.fixAnchorsEnd = function() {
            var e = this
              , t = e.triggers.release - e.triggers.hold;
            e.anchors.reverse(),
            e.anchors.forEach(function(n) {
                n.trigger > t ? (n.trigger = t,
                t -= e.MIN_SCROLL_HEIGHT) : t = n.trigger - e.MIN_SCROLL_HEIGHT
            }),
            e.anchors.reverse()
        }
        ,
        m.prototype.fixAnchorsStart = function() {
            for (var e = this, t = 0; t < e.anchors.length; t++) {
                var n = e.anchors[t]
                  , r = u + e.MIN_SCROLL_HEIGHT * t;
                if (!(n.trigger < r))
                    break;
                n.trigger = r
            }
        }
        ,
        m.prototype.setSpeed = function() {
            var e = this
              , t = e.triggers.release - e.triggers.hold
              , n = e.MIN_SCROLL_HEIGHT * (e.anchors.length - 1) + 2;
            if (e.speed = t / n,
            e.speed >= 1)
                e.speed = 1;
            else {
                var r = n - t;
                e.triggers.release += r,
                e.triggers.end += r,
                e.length += r,
                e.height = e.length + e._book.viewHeight,
                e.needsSlowdown = !0
            }
        }
        ,
        m.prototype.setAnchorsOriginalTriggers = function() {
            var e = this;
            e.anchors.forEach(function(e) {
                e.originalTrigger = e.trigger,
                e.originalTrigger < 5 && (e.originalTrigger = 5)
            })
        }
        ,
        m.prototype.isPreloadable = function() {
            return this.visualization.isPreloadable()
        }
        ,
        m.prototype.isVisualized = function() {
            return this.visualization.isVisualized()
        }
        ,
        m.prototype.isLoaded = function() {
            return this.visualization.isLoaded()
        }
        ,
        m.prototype.visualize = function() {
            return this.visualization.visualize()
        }
        ,
        m.prototype.load = function() {
            return this.visualization.load()
        }
        ,
        m.prototype.devisualize = function() {
            return this.visualization.devisualize()
        }
        ,
        m.prototype.unload = function() {
            return this.visualization.unload()
        }
        ,
        m.prototype.highlight = function(e) {
            return this.visualization.highlight(e)
        }
        ,
        m.prototype.findFirstMatch = function() {
            return this.visualization.findFirstMatch()
        }
        ,
        m.prototype.neighbours = function() {
            return this.spreadNeighbours.closest()
        }
        ,
        m.prototype.withNeighbours = function(e) {
            return this.spreadNeighbours.withCurrentSpread(e)
        }
        ,
        m.prototype.previous = function(e) {
            return this.spreadNeighbours.previous(e)
        }
        ,
        m.prototype.next = function(e) {
            return this.spreadNeighbours.next(e)
        }
        ,
        m.prototype.isFirst = function() {
            return 0 === this.number
        }
        ,
        m.prototype.isLast = function() {
            return this.number === this._book.size - 1
        }
        ,
        m.prototype.distanceFromViewport = function(e) {
            var t = Math.abs(this.triggers.hold - e)
              , n = Math.abs(this._book.viewHeight - (this.triggers.end - e));
            return Math.min(t, n)
        }
        ,
        m.prototype.isInViewport = function(e) {
            return e = null == e ? window.pageYOffset : e,
            this.triggers.end > e && this.triggers.hold < e + this._book.viewHeight
        }
        ,
        m.prototype.percentsFromTop = function(e) {
            return e = null == e ? window.pageYOffset : e,
            (this.triggers.hold - e) / this.height
        }
        ,
        t.exports = m
    }
    , {
        "./anchor": 51,
        "./spread/neighbours": 73,
        "./spread/styles": 74,
        "./spread/visualization": 75,
        "./spreads/cache": 76,
        "./urls": 82,
        stickyfill: 101
    }],
    73: [function(e, t, n) {
        "use strict";
        var r = function(e) {
            this.spread = e
        };
        r.prototype.closest = function() {
            var e = this.spread;
            return e.spreads.filter(function(t) {
                return t.number === e.number - 1 || t.number === e.number + 1
            })
        }
        ,
        r.prototype.withCurrentSpread = function(e) {
            var t = this.spread;
            e = e || 1,
            e = e > t._book.size ? t._book.size : e;
            for (var n = 1, r = [t]; r.length < e; ) {
                var i = t.spreads[t.number - n]
                  , o = t.spreads[t.number + n];
                if (i && r.push(i),
                r.length >= e)
                    break;
                o && r.push(o),
                n++
            }
            return r
        }
        ,
        r.prototype.previous = function(e) {
            var t = this.spread
              , n = t.number - e;
            return t.spreads.filter(function(e) {
                return e.number < t.number && e.number >= n
            }).sort(function(e, t) {
                return t.number - e.number
            })
        }
        ,
        r.prototype.next = function(e) {
            var t = this.spread
              , n = t.number + e;
            return t.spreads.filter(function(e) {
                return e.number > t.number && e.number <= n
            }).sort(function(e, t) {
                return e.number - t.number
            })
        }
        ,
        t.exports = r
    }
    , {}],
    74: [function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n),
                r && e(t, r),
                t
            }
        }();
        t.exports = function() {
            function e(t) {
                r(this, e),
                this.$spread = t,
                this.anchorIds = t.find(".js__anchor").map(function(e, t) {
                    return $(t).attr("data-id")
                }).get(),
                this.anchorIds.unshift(0),
                this.DISCREET_ANIMATION_EL_CLASS = "has__discreetAnimation",
                this.KEYPOINT = new RegExp("([0-9]+%|start|end)")
            }
            return i(e, [{
                key: "get",
                value: function() {
                    var e = this
                      , t = ""
                      , n = this.getAnimatedChildren();
                    return n.each(function(n, r) {
                        var i = $(r)
                          , o = e.getElAnimationStates(i);
                        $.each(o, function(n, r) {
                            if (Object.keys(r.rules).length <= 0)
                                return !0;
                            var o = ["" + e.$spread.cssSelector() + e.getStateSelector(r), i.cssSelector() + " {", e.getStateCss(r), "}"].join(" ");
                            t += o + "\n"
                        })
                    }),
                    t
                }
            }, {
                key: "getElAnimationStates",
                value: function(e) {
                    var t = this
                      , n = [];
                    return $.each(this.anchorIds, function(r, i) {
                        var o = e.animationsObject()
                          , s = t.detectAnchorStylesAndDuration(o, i)
                          , a = s.styles
                          , c = s.duration
                          , l = {
                            id: i,
                            rules: {},
                            duration: c
                        };
                        if (n[r - 1] && (l.rules = $.extend(l.rules, n[r - 1].rules)),
                        a) {
                            var u = a.split(";");
                            u[u.length] || u.pop(),
                            $.each(u, function(e, t) {
                                t = t.split(":"),
                                " " === t[0][0] && (t[0] = t[0].slice(1)),
                                " " === t[1][0] && (t[1] = t[1].slice(1)),
                                l.rules[t[0]] = t[1]
                            })
                        }
                        n.push(l)
                    }),
                    n
                }
            }, {
                key: "detectAnchorStylesAndDuration",
                value: function(e, t) {
                    var n = Array.isArray(e) ? e : [e]
                      , r = n.filter(function(e) {
                        return e.onanchor === String(t)
                    })[0];
                    return this.extractStylesAndDurationFromAnimation(r);
                }
            }, {
                key: "extractStylesAndDurationFromAnimation",
                value: function(e) {
                    var t = this;
                    if (!e)
                        return {};
                    var n = Object.keys(e).filter(function(e) {
                        return e.match(t.KEYPOINT)
                    }).reverse()[0];
                    return {
                        styles: e[n],
                        duration: e.duration
                    }
                }
            }, {
                key: "getStateCss",
                value: function(e) {
                    var t = ""
                      , n = [];
                    return $.each(e.rules, function(e, r) {
                        t += e + ": " + r + ";",
                        n.push(e)
                    }),
                    t += "transition-property: " + n.join(", ") + ";",
                    e.duration && (t += "transition-duration: " + e.duration + ";"),
                    t
                }
            }, {
                key: "getStateSelector",
                value: function(e) {
                    return 1 === +e.id ? "" : '[data-state="' + e.id + '"]'
                }
            }, {
                key: "getAnimatedChildren",
                value: function() {
                    return this.$spread.find("." + this.DISCREET_ANIMATION_EL_CLASS)
                }
            }]),
            e
        }()
    }
    , {}],
    75: [function(e, t, n) {
        "use strict";
        var r = e("../spreads/cache.js")
          , i = function(e) {
            this.spread = e,
            e.wasLoaded = !1,
            e.$el.on("spreadUnloaded", this.unhighlight.bind(this))
        };
        i.SCROLL_ADJUST_SAFEZONE = window.application.MAX_SPREAD_TRIGGER_ERROR || 0,
        i.CLASS_VISIBLE = "is__visible",
        i.CLASS_LOADED = "is__loaded",
        i.CLASS_HIGHLIGHT = "has__active-highlight",
        i.CLASS_HIGHLIGHTMARK = "highlightmark",
        i.HIGHLIGHT_TOGGLE_EVENTS = "wheel.highlight touchmove.highlight",
        i.HIGHLIGHT_DOCUMENT_TOGGLE_EVENTS = "turn.highlight",
        i.HIGHLIGHT_ANIMATION_DURATION = 7e3,
        i.HIGHLIGHT_TIMEOUT = i.HIGHLIGHT_ANIMATION_DURATION + 1e3,
        i.HIGHLIGHT_OPTIONS = {
            className: i.CLASS_HIGHLIGHTMARK,
            caseSensitive: !0
        },
        i.prototype.isPreloadable = function() {
            var e = this.spread;
            return e.$el.hasClass("is__preloadable")
        }
        ,
        i.prototype.isVisualized = function() {
            var e = this.spread;
            return e.$el[0].classList.contains(i.CLASS_VISIBLE)
        }
        ,
        i.prototype.visualize = function() {
            var e = this.spread;
            this.isLoaded() && (this.rearrange(),
            e.$el[0].classList.add(i.CLASS_VISIBLE),
            e.$el.trigger("spreadVisualized"))
        }
        ,
        i.prototype.rearrange = function() {
            var e = this.spread
              , t = e._book.currentSpread;
            if (t && e.anchors && e.anchors.length > 0) {
                var n = e.number >= t.number ? 0 : e.length;
                this.arrangeAt(n)
            }
        }
        ,
        i.prototype.devisualize = function() {
            var e = this.spread;
            e.$el[0].classList.remove(i.CLASS_VISIBLE),
            e.$el.trigger("spreadDevisualized")
        }
        ,
        i.prototype.isLoaded = function() {
            var e = this.spread;
            return e.$el[0].classList.contains(i.CLASS_LOADED)
        }
        ,
        i.prototype.load = function() {
            var e = this.spread
              , t = e._book.$body[0].scrollHeight;
            e.$el[0].classList.add(i.CLASS_LOADED),
            e.wasLoaded || (e.calculate(),
            e.render(),
            e.wasLoaded = !0,
            r.setHeight(e)),
            e.attachStickies();
            var n = e._book.$body[0].scrollHeight
              , o = n - t;
            Math.abs(o) > 0 && window.pageYOffset > e.triggers.hold + i.SCROLL_ADJUST_SAFEZONE && (document.documentElement.scrollTop += o,
            document.body.scrollTop += o,
            $(document).trigger("scrollTopAdjust", o)),
            e.$el.trigger("spreadLoaded")
        }
        ,
        i.prototype.unload = function() {
            var e = this.spread;
            e.$el[0].classList.remove(i.CLASS_LOADED),
            e.detachStickies(),
            e.$el.trigger("spreadUnloaded")
        }
        ,
        i.prototype.arrangeAt = function(e) {
            var t = this.spread;
            t.move(e, 0)
        }
        ,
        i.prototype.highlight = function(e) {
            var t = this.spread;
            this.unhighlight(),
            t.$holder.highlight(e, i.HIGHLIGHT_OPTIONS),
            t.$el.one(i.HIGHLIGHT_TOGGLE_EVENTS, this.toggleHighlightOff.bind(this)),
            $(document).one(i.HIGHLIGHT_DOCUMENT_TOGGLE_EVENTS, this.toggleHighlightOff.bind(this))
        }
        ,
        i.prototype.findFirstMatch = function() {
            return this.spread.$holder.find("." + i.CLASS_HIGHLIGHTMARK)
        }
        ,
        i.prototype.toggleHighlightOff = function() {
            var e = this.spread;
            e.$holder.addClass(i.CLASS_HIGHLIGHT),
            e.highlightTimeout = setTimeout(this.unhighlight.bind(this), i.HIGHLIGHT_TIMEOUT)
        }
        ,
        i.prototype.unhighlight = function() {
            var e = this.spread;
            e.$el.off(i.HIGHLIGHT_TOGGLE_EVENTS),
            clearTimeout(e.highlightTimeout),
            e.$holder.removeClass(i.CLASS_HIGHLIGHT).unhighlight(i.HIGHLIGHT_OPTIONS)
        }
        ,
        t.exports = i
    }
    , {
        "../spreads/cache.js": 76
    }],
    76: [function(e, t, n) {
        "use strict";
        var r = function() {};
        r.isIpad = navigator.userAgent.match(/iPad/) && navigator.userAgent.match(/AppleWebKit/),
        r.getRoughHeight = function(e) {
            if (!this.isIpad)
                return e._book.viewHeight;
            var t = e._book.computationsCache.get("spread-" + e.number);
            return t || e._book.viewHeight
        }
        ,
        r.setHeight = function(e) {
            if (this.isIpad && !e.isPreloadable()) {
                var t = e._book.computationsCache.get("spread-" + e.number);
                (!t || Math.abs(t - e.height) > 1) && e._book.computationsCache.set("spread-" + e.number, e.height)
            }
        }
        ,
        t.exports = r
    }
    , {}],
    77: [function(e, t, n) {
        "use strict";
        var r = e("./localState")
          , i = e("./remoteState");
        window.application.remoteStateData ? t.exports = new i(window.application.remoteStateData.progress) : t.exports = new r
    }
    , {
        "./localState": 66,
        "./remoteState": 70
    }],
    78: [function(e, t, n) {
        "use strict";
        var r = $(".js__halfpixel-checker");
        t.exports = function() {
            var e = 1 === r[0].offsetHeight;
            return r.hide(),
            e
        }
    }
    , {}],
    79: [function(e, t, n) {
        "use strict";
        var r = navigator.userAgent.toLowerCase();
        t.exports = r.indexOf("safari") < 0 || r.indexOf("chrome") > -1
    }
    , {}],
    80: [function(e, t, n) {
        "use strict";
        var r = navigator.userAgent.toLowerCase();
        t.exports = r.indexOf("safari") < 0 || r.indexOf("chrome") > -1
    }
    , {}],
    81: [function(e, t, n) {
        "use strict";
        var r = navigator.userAgent.toLowerCase();
        t.exports = r.indexOf("safari") > -1 && r.indexOf("chrome") < 0
    }
    , {}],
    82: [function(e, t, n) {
        "use strict";
        var r = function() {};
        r.detectHistoryBase = function(e) {
            e = e || window.location;
            var t = e.origin + e.pathname + "/";
            return t.replace(/\/\/$/, "/").replace(/\/[0-9]+\/?$/, "/").replace(/end\/$/, "")
        }
        ,
        r.base = r.detectHistoryBase(),
        r.forSpreadNumber = function(e) {
            var t = parseInt(e, 10) + 1;
            return this.base + t
        }
        ,
        r.forPath = function(e) {
            return this.base + e
        }
        ,
        r.forHash = function(e) {
            return this.base + e
        }
        ,
        r.getRequestedSpreadNumber = function(e) {
            e = e || window.location.href;
            var t = e.replace(this.base, "");
            return parseInt(t, 10)
        }
        ,
        r.root = function() {
            return this.base
        }
        ,
        r.end = function() {
            return this.base + "end"
        }
        ,
        r.isEnd = function(e) {
            return e = e || window.location.href,
            e === this.end()
        }
        ,
        t.exports = r
    }
    , {}],
    83: [function(e, t, n) {
        "use strict";
        t.exports = {
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            xhrFields: {
                withCredentials: !0
            }
        }
    }
    , {}],
    84: [function(e, t, n) {
        "use strict";
        var r = void 0
          , i = 100
          , o = "fonts"in document;
        t.exports = function(e) {
            var t = navigator.userAgent.toLowerCase()
              , n = $(".js__font-checker")
              , s = $.makeArray(n.map(function(e, t) {
                return {
                    $el: $(t),
                    minWidth: +$(t).attr("data-min-width"),
                    maxWidth: +$(t).attr("data-max-width"),
                    name: $(t).attr("class")
                }
            }))
              , a = function(e) {
                return e.minWidth && e.maxWidth ? e.$el.width() >= e.minWidth && e.$el.width() <= e.maxWidth : e.minWidth ? e.$el.width() >= e.minWidth : !e.maxWidth || e.$el.width() <= e.maxWidth
            };
            t.indexOf("safari") > -1 ? r = setInterval(function() {
                var t = !0;
                s.forEach(function(e) {
                    a(e) || (t = !1,
                    e.old = e.$el.width())
                }),
                t && (clearInterval(r),
                n.hide(),
                o ? document.fonts.ready.then(function() {
                    setTimeout(e, i)
                }) : e())
            }, i) : (n.hide(),
            e())
        }
    }
    , {}],
    85: [function(e, t, n) {
        "use strict";
        var r = 5
          , i = 200
          , o = "wheel.scrollguardian keydown.scrollguardian mousedown.scrollguardian touchstart.scrollguardian"
          , s = function(e) {
            this.maintainedScrollPosition = e,
            this.maintainScrollPosition(),
            $(document).on(o, this.releaseScroll.bind(this)),
            $(document).on("scrollTopAdjust.scrollguardian", this.adjustMaintainedPosition.bind(this)),
            $(window).on("orientationchange.scrollguardian resize.scrollguardian", this.releaseScroll.bind(this))
        };
        s.build = function() {
            return new s(window.pageYOffset)
        }
        ,
        s.prototype.maintainScrollPosition = function() {
            this.isScrollPositionDifferent() && window.scrollTo(0, this.maintainedScrollPosition),
            this.checkTimeout = setTimeout(this.maintainScrollPosition.bind(this), i)
        }
        ,
        s.prototype.releaseScroll = function() {
            clearTimeout(this.checkTimeout),
            $(document).off(o),
            $(window).off("orientationchange.scrollguardian"),
            $(document).off("scrollTopAdjust.scrollguardian")
        }
        ,
        s.prototype.isScrollPositionDifferent = function() {
            return Math.abs(this.maintainedScrollPosition - window.pageYOffset) > r
        }
        ,
        s.prototype.adjustMaintainedPosition = function(e, t) {
            this.maintainedScrollPosition += t
        }
        ,
        t.exports = s
    }
    , {}],
    86: [function(e, t, n) {
        "use strict";
        var r = "data-animation-"
          , i = new RegExp("^([a-z0-9]+)-")
          , o = function(e) {
            var t = {};
            return $.each(e, function(e, n) {
                if (n.name.indexOf(r) >= 0) {
                    var i = n.name.replace(r, "");
                    t[i] = n.value
                }
            }),
            t
        }
          , s = function(e, t) {
            var n = {};
            for (var r in e)
                if (0 === r.indexOf(t)) {
                    var o = r.replace(i, "");
                    n[o] = e[r]
                }
            return n
        };
        t.exports = function(e) {
            e.fn.animationsObject = function() {
                var e = o(this[0].attributes)
                  , t = []
                  , n = [];
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var a = r.match(i) || []
                          , c = a[1];
                        if (!c)
                            return e;
                        if (!(n.indexOf(c) >= 0)) {
                            var l = s(e, c);
                            t.push(l),
                            n.push(c)
                        }
                    }
                return t
            }
        }
    }
    , {}],
    87: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e.fn.backgroundImageOffset = function() {
                var t = e(this)
                  , n = t.backgroundImageSize()
                  , r = n.width
                  , i = n.height
                  , o = t.css("background-position").split(" ")
                  , s = parseInt(o[0], 10) / 100
                  , a = parseInt(o[1], 10) / 100
                  , c = t.outerWidth() - r
                  , l = t.outerHeight() - i;
                return {
                    top: l * a,
                    left: c * s
                }
            }
        }
    }
    , {}],
    88: [function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e.data("width")
              , n = e.data("height")
              , r = e.outerWidth()
              , i = e.outerHeight()
              , o = t / n
              , s = r / i
              , a = e.css("background-size")
              , c = o < s
              , l = c && "contain" === a;
            if (l) {
                var u = t * (i / n);
                return {
                    width: u,
                    height: i
                }
            }
            var d = n * (r / t);
            return {
                width: r,
                height: d
            }
        }
        t.exports = function(e) {
            e.fn.backgroundImageSize = function() {
                var t = e(this);
                return r(t)
            }
        }
    }
    , {}],
    89: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e.fn.cssSelector = function() {
                var t = e(this)
                  , n = t.attr("id");
                return n ? "#" + n : "." + t.attr("class").split(" ").join(".")
            }
        }
    }
    , {}],
    90: [function(e, t, n) {
        "use strict";
        function r(e) {
            return e.replace(/\.jpg$/, "@.5x.jpg").replace(/\.png$/, "@.5x.png")
        }
        function i(e) {
            return window.application.nonRetinaImages[e]
        }
        t.exports = function(e) {
            e.fn.dataSrc = function() {
                return this.data("src") || this.data("backgroundSrc")
            }
            ,
            e.fn.retinaDataSrc = e.fn.dataSrc,
            e.fn.nonRetinaDataSrc = function() {
                var e = r(this.dataSrc());
                return i(e) ? e : this.dataSrc()
            }
        }
    }
    , {}],
    91: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e.fn.displayImage = function(t) {
                var n = e(this);
                return n.is("img") ? n.attr("src", t) : n.css("background-image", "url(" + t + ")"),
                n.trigger("imageLoaded"),
                n
            }
        }
    }
    , {}],
    92: [function(e, t, n) {
        "use strict";
        var r = 999999;
        t.exports = function(e) {
            e.fn.distanceFromViewportTop = function(e) {
                var t = this[0].getBoundingClientRect()
                  , n = t.top;
                if (0 === t.top && 0 === t.bottom) {
                    n = r;
                    var i = this.closest(".js__spread").data("number");
                    if (i && window.application.book.spreads) {
                        var o = window.application.book.spreads[i];
                        o && (n = e - (o.triggers.hold + 1))
                    }
                }
                return n
            }
        }
    }
    , {}],
    93: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e.fn.ensureIsVisibleIn = function(t, n) {
                var r = e(this)
                  , i = n.scrollSafeZone || 50;
                if (0 !== r.length) {
                    var o = r.position().top
                      , s = o + r.height()
                      , a = t.height();
                    if (o - i < 0 || s + i > a) {
                        var c = t.scrollTop() + (o - a / 2);
                        t.stop(!0, !0).animate({
                            scrollTop: c
                        })
                    }
                }
            }
        }
    }
    , {}],
    94: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            e.fn.forceRedraw = function() {
                var t = e("<span>");
                this.append(t);
                this.height();
                t.remove()
            }
        }
    }
    , {}],
    95: [function(e, t, n) {
        "use strict";
        var r = "touchstart.preventTouchFromHittingBounds";
        t.exports = function(e) {
            e.fn.preventScrollFromHittingBounds = function() {
                var e = this[0]
                  , t = e.scrollTop
                  , n = e.offsetHeight
                  , r = e.scrollHeight;
                t <= 0 && (e.scrollTop = 1),
                t + n >= r && (e.scrollTop = r - n - 1)
            }
            ,
            e.fn.preventTouchFromHittingBounds = function() {
                var e = this;
                e.off(r).on(r, e.preventScrollFromHittingBounds.bind(e))
            }
        }
    }
    , {}],
    96: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            var t = e.event.dispatch
              , n = e.event.special
              , r = "D" + +new Date
              , i = "D" + (+new Date + 1);
            n.turnstart = {
                setup: function(i) {
                    var o, s = e.extend({
                        latency: n.turnstop.latency
                    }, i), a = function(e) {
                        var n = this
                          , r = arguments;
                        o ? clearTimeout(o) : (e.type = "turnstart",
                        t.apply(n, r)),
                        o = setTimeout(function() {
                            o = null
                        }, s.latency)
                    };
                    e(this).bind("turn", a).data(r, a)
                },
                teardown: function() {
                    e(this).unbind("turn", e(this).data(r))
                }
            },
            n.turnstop = {
                latency: 400,
                setup: function(r) {
                    var o, s = e.extend({
                        latency: n.turnstop.latency
                    }, r), a = function(e) {
                        var n = this
                          , r = arguments;
                        o && clearTimeout(o),
                        o = setTimeout(function() {
                            o = null,
                            e.type = "turnstop",
                            t.apply(n, r)
                        }, s.latency)
                    };
                    e(this).bind("turn", a).data(i, a)
                },
                teardown: function() {
                    e(this).unbind("turn", e(this).data(i))
                }
            }
        }
    }
    , {}],
    97: [function(e, t, n) {
        "use strict";
        !function(e) {
            var n = 0
              , r = !1
              , i = function(e) {
                for (var t = e.target; t !== document.body; ) {
                    var r = window.getComputedStyle(t);
                    if (!r)
                        break;
                    var i = r.getPropertyValue("-webkit-overflow-scrolling")
                      , o = r.getPropertyValue("overflow-y")
                      , s = parseInt(r.getPropertyValue("height"), 10)
                      , a = "touch" === i && ("auto" === o || "scroll" === o)
                      , c = t.scrollHeight > t.offsetHeight;
                    if (a && c) {
                        var l = e.touches ? e.touches[0].screenY : e.screenY
                          , u = n <= l && 0 === t.scrollTop
                          , d = n >= l && t.scrollHeight - t.scrollTop === s;
                        return void ((u || d) && e.preventDefault())
                    }
                    t = t.parentNode
                }
                e.preventDefault()
            }
              , o = function(e) {
                n = e.touches ? e.touches[0].screenY : e.screenY
            }
              , s = function() {
                window.addEventListener("touchstart", o, !1),
                window.addEventListener("touchmove", i, !1),
                r = !0
            }
              , a = function() {
                window.removeEventListener("touchstart", o, !1),
                window.removeEventListener("touchmove", i, !1),
                r = !1
            }
              , c = function() {
                return r
            }
              , l = document.createElement("div");
            document.documentElement.appendChild(l),
            l.style.WebkitOverflowScrolling = "touch";
            var u = "getComputedStyle"in window && "touch" === window.getComputedStyle(l)["-webkit-overflow-scrolling"];
            document.documentElement.removeChild(l),
            u && s();
            var d = {
                enable: s,
                disable: a,
                isEnabled: c
            };
            "undefined" != typeof t && t.exports && (t.exports = d),
            "function" == typeof e.define ? !function(e) {
                e(function() {
                    return d
                })
            }(e.define) : e.iNoBounce = d
        }("undefined" != typeof window ? window : void 0)
    }
    , {}],
    98: [function(e, t, n) {
        "use strict";
        jQuery.extend({
            highlight: function r(e, t, n, i) {
                if (3 === e.nodeType) {
                    var o = e.data.match(t);
                    if (o) {
                        var r = document.createElement(n || "span");
                        r.className = i || "highlight";
                        var s = e.splitText(o.index + o[1].length);
                        s.splitText(o[2].length);
                        var a = s.cloneNode(!0);
                        return r.appendChild(a),
                        s.parentNode.replaceChild(r, s),
                        1
                    }
                } else if (1 === e.nodeType && /is__a-single-word/.test(e.className)) {
                    if (e.innerText.match(t)) {
                        var r = document.createElement(n || "span");
                        return r.className = i || "highlight",
                        r.appendChild(e.cloneNode(!0)),
                        e.parentNode.replaceChild(r, e),
                        1
                    }
                } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== n.toUpperCase() || e.className !== i))
                    for (var c = 0; c < e.childNodes.length; c++)
                        c += jQuery.highlight(e.childNodes[c], t, n, i);
                return 0
            }
        }),
        jQuery.fn.unhighlight = function(e) {
            var t = {
                className: "highlight",
                element: "span"
            };
            return jQuery.extend(t, e),
            this.find(t.element + "." + t.className).each(function() {
                var e = this.parentNode;
                e.replaceChild(this.firstChild, this),
                e.normalize()
            }).end()
        }
        ,
        jQuery.fn.highlight = function(e, t) {
            var n = {
                className: "highlight",
                element: "span",
                caseSensitive: !1
            };
            if (jQuery.extend(n, t),
            e.constructor === String && (e = [e]),
            e = jQuery.grep(e, function(e, t) {
                return "" != e
            }),
            e = jQuery.map(e, function(e, t) {
                return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            }),
            0 == e.length)
                return this;
            var r = n.caseSensitive ? "" : "i"
              , i = "(" + e.join("|") + ")";
            i = "([^а-яА-Я-ёЁ]|^)" + i + "(?:[^а-яА-Я-ёЁ]|$)";
            var o = new RegExp(i,r);
            return this.each(function() {
                jQuery.highlight(this, o, n.element, n.className)
            })
        }
    }
    , {}],
    99: [function(e, t, n) {
        "use strict";
        !function() {
            var e = window.performance || Date;
            window.setAnimationFrameInterval = function(t, n) {
                function r() {
                    var s = e.now()
                      , a = s - i;
                    a >= n && (t.call(),
                    i = e.now()),
                    o.value = requestAnimationFrame(r)
                }
                var i = e.now()
                  , o = new Object;
                return o.value = requestAnimationFrame(r),
                o
            }
            ,
            window.clearAnimationFrameInterval = function(e) {
                e && cancelAnimationFrame(e.value)
            }
        }()
    }
    , {}],
    100: [function(e, t, n) {
        "use strict";
        function r(e) {
            function t(e, t, n, r) {
                this.s_size = e.length,
                this.s = this.toCharArray(e),
                this.substring_i = t,
                this.result = n,
                this.method = r
            }
            function n() {
                var e;
                return {
                    b: 0,
                    k: 0,
                    l: 0,
                    c: 0,
                    lb: 0,
                    s_c: function(t) {
                        e = t,
                        this.c = 0,
                        this.l = t.length,
                        this.lb = 0,
                        this.b = this.c,
                        this.k = this.l
                    },
                    g_c: function() {
                        var t = e;
                        return e = null,
                        t
                    },
                    i_g: function(t, n, r) {
                        if (this.c < this.l) {
                            var i = e.charCodeAt(this.c);
                            if (i <= r && i >= n && (i -= n,
                            t[i >> 3] & 1 << (7 & i)))
                                return this.c++,
                                !0
                        }
                        return !1
                    },
                    i_g_b: function(t, n, r) {
                        if (this.c > this.lb) {
                            var i = e.charCodeAt(this.c - 1);
                            if (i <= r && i >= n && (i -= n,
                            t[i >> 3] & 1 << (7 & i)))
                                return this.c--,
                                !0
                        }
                        return !1
                    },
                    o_g: function(t, n, r) {
                        if (this.c < this.l) {
                            var i = e.charCodeAt(this.c);
                            if (i > r || i < n)
                                return this.c++,
                                !0;
                            if (i -= n,
                            !(t[i >> 3] & 1 << (7 & i)))
                                return this.c++,
                                !0
                        }
                        return !1
                    },
                    o_g_b: function(t, n, r) {
                        if (this.c > this.lb) {
                            var i = e.charCodeAt(this.c - 1);
                            if (i > r || i < n)
                                return this.c--,
                                !0;
                            if (i -= n,
                            !(t[i >> 3] & 1 << (7 & i)))
                                return this.c--,
                                !0
                        }
                        return !1
                    },
                    e_s: function(t, n) {
                        if (this.l - this.c < t)
                            return !1;
                        for (var r = 0; r < t; r++)
                            if (e.charCodeAt(this.c + r) != n.charCodeAt(r))
                                return !1;
                        return this.c += t,
                        !0
                    },
                    e_s_b: function(t, n) {
                        if (this.c - this.lb < t)
                            return !1;
                        for (var r = 0; r < t; r++)
                            if (e.charCodeAt(this.c - t + r) != n.charCodeAt(r))
                                return !1;
                        return this.c -= t,
                        !0
                    },
                    f_a: function(t, n) {
                        for (var r = 0, i = n, o = this.c, s = this.l, a = 0, c = 0, l = !1; ; ) {
                            for (var u = r + (i - r >> 1), d = 0, h = a < c ? a : c, f = t[u], p = h; p < f.s_size; p++) {
                                if (o + h == s) {
                                    d = -1;
                                    break
                                }
                                if (d = e.charCodeAt(o + h) - f.s[p])
                                    break;
                                h++
                            }
                            if (d < 0 ? (i = u,
                            c = h) : (r = u,
                            a = h),
                            i - r <= 1) {
                                if (r > 0 || i == r || l)
                                    break;
                                l = !0
                            }
                        }
                        for (; ; ) {
                            var f = t[r];
                            if (a >= f.s_size) {
                                if (this.c = o + f.s_size,
                                !f.method)
                                    return f.result;
                                var g = f.method();
                                if (this.c = o + f.s_size,
                                g)
                                    return f.result
                            }
                            if (r = f.substring_i,
                            r < 0)
                                return 0
                        }
                    },
                    f_a_b: function(t, n) {
                        for (var r = 0, i = n, o = this.c, s = this.lb, a = 0, c = 0, l = !1; ; ) {
                            for (var u = r + (i - r >> 1), d = 0, h = a < c ? a : c, f = t[u], p = f.s_size - 1 - h; p >= 0; p--) {
                                if (o - h == s) {
                                    d = -1;
                                    break
                                }
                                if (d = e.charCodeAt(o - 1 - h) - f.s[p])
                                    break;
                                h++
                            }
                            if (d < 0 ? (i = u,
                            c = h) : (r = u,
                            a = h),
                            i - r <= 1) {
                                if (r > 0 || i == r || l)
                                    break;
                                l = !0
                            }
                        }
                        for (; ; ) {
                            var f = t[r];
                            if (a >= f.s_size) {
                                if (this.c = o - f.s_size,
                                !f.method)
                                    return f.result;
                                var g = f.method();
                                if (this.c = o - f.s_size,
                                g)
                                    return f.result
                            }
                            if (r = f.substring_i,
                            r < 0)
                                return 0
                        }
                    },
                    r_s: function(t, n, r) {
                        var i = r.length - (n - t)
                          , o = e.substring(0, t)
                          , s = e.substring(n);
                        return e = o + r + s,
                        this.l += i,
                        this.c >= n ? this.c += i : this.c > t && (this.c = t),
                        i
                    },
                    s_ch: function() {
                        if (this.b < 0 || this.b > this.k || this.k > this.l || this.l > e.length)
                            throw "faulty slice operation"
                    },
                    s_f: function(e) {
                        this.s_ch(),
                        this.r_s(this.b, this.k, e)
                    },
                    s_d: function() {
                        this.s_f("")
                    },
                    i_: function(e, t, n) {
                        var r = this.r_s(e, t, n);
                        e <= this.b && (this.b += r),
                        e <= this.k && (this.k += r)
                    },
                    s_t: function() {
                        return this.s_ch(),
                        e.substring(this.b, this.k)
                    },
                    e_v_b: function(e) {
                        return this.e_s_b(e.length, e)
                    }
                }
            }
            t.prototype.toCharArray = function(e) {
                for (var t = e.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = e.charCodeAt(r);
                return n
            }
            ;
            var r = {
                EnglishStemmer: function() {
                    function e() {
                        var e, t = N.c;
                        for (y = !1,
                        N.b = N.c,
                        N.e_s(1, "'") && (N.k = N.c,
                        N.s_d()),
                        N.c = t,
                        N.b = t,
                        N.e_s(1, "y") && (N.k = N.c,
                        N.s_f("Y"),
                        y = !0),
                        N.c = t; ; )
                            if (e = N.c,
                            N.i_g(I, 97, 121) && (N.b = N.c,
                            N.e_s(1, "y")))
                                N.k = N.c,
                                N.c = e,
                                N.s_f("Y"),
                                y = !0;
                            else {
                                if (e >= N.l)
                                    return void (N.c = t);
                                N.c = e + 1
                            }
                    }
                    function r() {
                        var e = N.c;
                        return _ = N.l,
                        b = _,
                        !N.f_a(w, 3) && (N.c = e,
                        i()) ? void (N.c = e) : (_ = N.c,
                        void (i() || (b = N.c)))
                    }
                    function i() {
                        for (; !N.i_g(I, 97, 121); ) {
                            if (N.c >= N.l)
                                return !0;
                            N.c++
                        }
                        for (; !N.o_g(I, 97, 121); ) {
                            if (N.c >= N.l)
                                return !0;
                            N.c++
                        }
                        return !1
                    }
                    function o() {
                        var e = N.l - N.c;
                        return !(!(N.o_g_b(O, 89, 121) && N.i_g_b(I, 97, 121) && N.o_g_b(I, 97, 121)) && (N.c = N.l - e,
                        !N.o_g_b(I, 97, 121) || !N.i_g_b(I, 97, 121) || N.c > N.lb))
                    }
                    function s() {
                        return _ <= N.c
                    }
                    function a() {
                        return b <= N.c
                    }
                    function c() {
                        var e, t = N.l - N.c;
                        if (N.k = N.c,
                        e = N.f_a_b(S, 3),
                        e ? (N.b = N.c,
                        1 == e && N.s_d()) : N.c = N.l - t,
                        N.k = N.c,
                        e = N.f_a_b(k, 6))
                            switch (N.b = N.c,
                            e) {
                            case 1:
                                N.s_f("ss");
                                break;
                            case 2:
                                var n = N.c - 2;
                                if (N.lb > n || n > N.l) {
                                    N.s_f("ie");
                                    break
                                }
                                N.c = n,
                                N.s_f("i");
                                break;
                            case 3:
                                do {
                                    if (N.c <= N.lb)
                                        return;
                                    N.c--
                                } while (!N.i_g_b(I, 97, 121));N.s_d()
                            }
                    }
                    function l() {
                        var e, t, n, r;
                        if (N.k = N.c,
                        e = N.f_a_b(E, 6))
                            switch (N.b = N.c,
                            e) {
                            case 1:
                                s() && N.s_f("ee");
                                break;
                            case 2:
                                for (t = N.l - N.c; !N.i_g_b(I, 97, 121); ) {
                                    if (N.c <= N.lb)
                                        return;
                                    N.c--
                                }
                                if (N.c = N.l - t,
                                N.s_d(),
                                n = N.l - N.c,
                                e = N.f_a_b(x, 13))
                                    switch (N.c = N.l - n,
                                    e) {
                                    case 1:
                                        var i = N.c;
                                        N.i_(N.c, N.c, "e"),
                                        N.c = i;
                                        break;
                                    case 2:
                                        N.k = N.c,
                                        N.c > N.lb && (N.c--,
                                        N.b = N.c,
                                        N.s_d());
                                        break;
                                    case 3:
                                        if (N.c == _ && (r = N.l - N.c,
                                        o())) {
                                            N.c = N.l - r;
                                            var i = N.c;
                                            N.i_(N.c, N.c, "e"),
                                            N.c = i
                                        }
                                    }
                            }
                    }
                    function u() {
                        var e = N.l - N.c;
                        N.k = N.c,
                        (N.e_s_b(1, "y") || (N.c = N.l - e,
                        N.e_s_b(1, "Y"))) && (N.b = N.c,
                        N.o_g_b(I, 97, 121) && N.c > N.lb && N.s_f("i"))
                    }
                    function d() {
                        var e;
                        if (N.k = N.c,
                        e = N.f_a_b(T, 24),
                        e && (N.b = N.c,
                        s()))
                            switch (e) {
                            case 1:
                                N.s_f("tion");
                                break;
                            case 2:
                                N.s_f("ence");
                                break;
                            case 3:
                                N.s_f("ance");
                                break;
                            case 4:
                                N.s_f("able");
                                break;
                            case 5:
                                N.s_f("ent");
                                break;
                            case 6:
                                N.s_f("ize");
                                break;
                            case 7:
                                N.s_f("ate");
                                break;
                            case 8:
                                N.s_f("al");
                                break;
                            case 9:
                                N.s_f("ful");
                                break;
                            case 10:
                                N.s_f("ous");
                                break;
                            case 11:
                                N.s_f("ive");
                                break;
                            case 12:
                                N.s_f("ble");
                                break;
                            case 13:
                                N.e_s_b(1, "l") && N.s_f("og");
                                break;
                            case 14:
                                N.s_f("ful");
                                break;
                            case 15:
                                N.s_f("less");
                                break;
                            case 16:
                                N.i_g_b(R, 99, 116) && N.s_d()
                            }
                    }
                    function h() {
                        var e;
                        if (N.k = N.c,
                        e = N.f_a_b(C, 9),
                        e && (N.b = N.c,
                        s()))
                            switch (e) {
                            case 1:
                                N.s_f("tion");
                                break;
                            case 2:
                                N.s_f("ate");
                                break;
                            case 3:
                                N.s_f("al");
                                break;
                            case 4:
                                N.s_f("ic");
                                break;
                            case 5:
                                N.s_d();
                                break;
                            case 6:
                                a() && N.s_d()
                            }
                    }
                    function f() {
                        var e, t;
                        if (N.k = N.c,
                        e = N.f_a_b(A, 18),
                        e && (N.b = N.c,
                        a()))
                            switch (e) {
                            case 1:
                                N.s_d();
                                break;
                            case 2:
                                if (t = N.l - N.c,
                                !N.e_s_b(1, "s") && (N.c = N.l - t,
                                !N.e_s_b(1, "t")))
                                    return;
                                N.s_d()
                            }
                    }
                    function p() {
                        var e, t;
                        if (N.k = N.c,
                        e = N.f_a_b($, 2))
                            switch (N.b = N.c,
                            e) {
                            case 1:
                                if (t = N.l - N.c,
                                !a()) {
                                    if (N.c = N.l - t,
                                    !s() || o())
                                        return;
                                    N.c = N.l - t
                                }
                                N.s_d();
                                break;
                            case 2:
                                if (!a() || !N.e_s_b(1, "l"))
                                    return;
                                N.s_d()
                            }
                    }
                    function g() {
                        return N.k = N.c,
                        !!N.f_a_b(L, 8) && (N.b = N.c,
                        N.c <= N.lb)
                    }
                    function m() {
                        var e;
                        if (N.b = N.c,
                        e = N.f_a(j, 18),
                        e && (N.k = N.c,
                        N.c >= N.l)) {
                            switch (e) {
                            case 1:
                                N.s_f("ski");
                                break;
                            case 2:
                                N.s_f("sky");
                                break;
                            case 3:
                                N.s_f("die");
                                break;
                            case 4:
                                N.s_f("lie");
                                break;
                            case 5:
                                N.s_f("tie");
                                break;
                            case 6:
                                N.s_f("idl");
                                break;
                            case 7:
                                N.s_f("gentl");
                                break;
                            case 8:
                                N.s_f("ugli");
                                break;
                            case 9:
                                N.s_f("earli");
                                break;
                            case 10:
                                N.s_f("onli");
                                break;
                            case 11:
                                N.s_f("singl")
                            }
                            return !0
                        }
                        return !1
                    }
                    function v() {
                        var e;
                        if (y)
                            for (; ; )
                                if (e = N.c,
                                N.b = e,
                                N.e_s(1, "Y"))
                                    N.k = N.c,
                                    N.c = e,
                                    N.s_f("y");
                                else {
                                    if (N.c = e,
                                    N.c >= N.l)
                                        return;
                                    N.c++
                                }
                    }
                    var y, b, _, w = [new t("arsen",(-1),(-1)), new t("commun",(-1),(-1)), new t("gener",(-1),(-1))], S = [new t("'",(-1),1), new t("'s'",0,1), new t("'s",(-1),1)], k = [new t("ied",(-1),2), new t("s",(-1),3), new t("ies",1,2), new t("sses",1,1), new t("ss",1,(-1)), new t("us",1,(-1))], x = [new t("",(-1),3), new t("bb",0,2), new t("dd",0,2), new t("ff",0,2), new t("gg",0,2), new t("bl",0,1), new t("mm",0,2), new t("nn",0,2), new t("pp",0,2), new t("rr",0,2), new t("at",0,1), new t("tt",0,2), new t("iz",0,1)], E = [new t("ed",(-1),2), new t("eed",0,1), new t("ing",(-1),2), new t("edly",(-1),2), new t("eedly",3,1), new t("ingly",(-1),2)], T = [new t("anci",(-1),3), new t("enci",(-1),2), new t("ogi",(-1),13), new t("li",(-1),16), new t("bli",3,12), new t("abli",4,4), new t("alli",3,8), new t("fulli",3,14), new t("lessli",3,15), new t("ousli",3,10), new t("entli",3,5), new t("aliti",(-1),8), new t("biliti",(-1),12), new t("iviti",(-1),11), new t("tional",(-1),1), new t("ational",14,7), new t("alism",(-1),8), new t("ation",(-1),7), new t("ization",17,6), new t("izer",(-1),6), new t("ator",(-1),7), new t("iveness",(-1),11), new t("fulness",(-1),9), new t("ousness",(-1),10)], C = [new t("icate",(-1),4), new t("ative",(-1),6), new t("alize",(-1),3), new t("iciti",(-1),4), new t("ical",(-1),4), new t("tional",(-1),1), new t("ational",5,2), new t("ful",(-1),5), new t("ness",(-1),5)], A = [new t("ic",(-1),1), new t("ance",(-1),1), new t("ence",(-1),1), new t("able",(-1),1), new t("ible",(-1),1), new t("ate",(-1),1), new t("ive",(-1),1), new t("ize",(-1),1), new t("iti",(-1),1), new t("al",(-1),1), new t("ism",(-1),1), new t("ion",(-1),2), new t("er",(-1),1), new t("ous",(-1),1), new t("ant",(-1),1), new t("ent",(-1),1), new t("ment",15,1), new t("ement",16,1)], $ = [new t("e",(-1),1), new t("l",(-1),2)], L = [new t("succeed",(-1),(-1)), new t("proceed",(-1),(-1)), new t("exceed",(-1),(-1)), new t("canning",(-1),(-1)), new t("inning",(-1),(-1)), new t("earring",(-1),(-1)), new t("herring",(-1),(-1)), new t("outing",(-1),(-1))], j = [new t("andes",(-1),(-1)), new t("atlas",(-1),(-1)), new t("bias",(-1),(-1)), new t("cosmos",(-1),(-1)), new t("dying",(-1),3), new t("early",(-1),9), new t("gently",(-1),7), new t("howe",(-1),(-1)), new t("idly",(-1),6), new t("lying",(-1),4), new t("news",(-1),(-1)), new t("only",(-1),10), new t("singly",(-1),11), new t("skies",(-1),2), new t("skis",(-1),1), new t("sky",(-1),(-1)), new t("tying",(-1),5), new t("ugly",(-1),8)], I = [17, 65, 16, 1], O = [1, 17, 65, 208, 1], R = [55, 141, 2], P = [l, u, d, h, f, p], N = new n;
                    this.setCurrent = function(e) {
                        N.s_c(e)
                    }
                    ,
                    this.getCurrent = function() {
                        return N.g_c()
                    }
                    ,
                    this.stem = function() {
                        var t = N.c;
                        if (!m()) {
                            N.c = t;
                            var n = N.c + 3;
                            if (0 <= n && n <= N.l) {
                                if (N.c = t,
                                e(),
                                N.c = t,
                                r(),
                                N.lb = t,
                                N.c = N.l,
                                c(),
                                N.c = N.l,
                                !g())
                                    for (var i = 0; i < P.length; i++)
                                        N.c = N.l,
                                        P[i]();
                                N.c = N.lb,
                                v()
                            }
                        }
                        return !0
                    }
                },
                RussianStemmer: function() {
                    function e() {
                        for (; !C.i_g(T, 1072, 1103); ) {
                            if (C.c >= C.l)
                                return !1;
                            C.c++
                        }
                        return !0
                    }
                    function r() {
                        for (; !C.o_g(T, 1072, 1103); ) {
                            if (C.c >= C.l)
                                return !1;
                            C.c++
                        }
                        return !0
                    }
                    function i() {
                        v = C.l,
                        m = v,
                        e() && (v = C.c,
                        r() && e() && r() && (m = C.c))
                    }
                    function o() {
                        return m <= C.c
                    }
                    function s(e, t) {
                        var n, r;
                        if (C.k = C.c,
                        n = C.f_a_b(e, t)) {
                            switch (C.b = C.c,
                            n) {
                            case 1:
                                if (r = C.l - C.c,
                                !C.e_s_b(1, "а") && (C.c = C.l - r,
                                !C.e_s_b(1, "я")))
                                    return !1;
                            case 2:
                                C.s_d()
                            }
                            return !0
                        }
                        return !1
                    }
                    function a() {
                        return s(y, 9)
                    }
                    function c(e, t) {
                        var n;
                        return C.k = C.c,
                        n = C.f_a_b(e, t),
                        !!n && (C.b = C.c,
                        1 == n && C.s_d(),
                        !0)
                    }
                    function l() {
                        return c(b, 26)
                    }
                    function u() {
                        return !!l() && (s(_, 8),
                        !0)
                    }
                    function d() {
                        return c(w, 2)
                    }
                    function h() {
                        return s(S, 46)
                    }
                    function f() {
                        c(k, 36)
                    }
                    function p() {
                        var e;
                        C.k = C.c,
                        e = C.f_a_b(x, 2),
                        e && (C.b = C.c,
                        o() && 1 == e && C.s_d())
                    }
                    function g() {
                        var e;
                        if (C.k = C.c,
                        e = C.f_a_b(E, 4))
                            switch (C.b = C.c,
                            e) {
                            case 1:
                                if (C.s_d(),
                                C.k = C.c,
                                !C.e_s_b(1, "н"))
                                    break;
                                C.b = C.c;
                            case 2:
                                if (!C.e_s_b(1, "н"))
                                    break;
                            case 3:
                                C.s_d()
                            }
                    }
                    var m, v, y = [new t("в",(-1),1), new t("ив",0,2), new t("ыв",0,2), new t("вши",(-1),1), new t("ивши",3,2), new t("ывши",3,2), new t("вшись",(-1),1), new t("ившись",6,2), new t("ывшись",6,2)], b = [new t("ее",(-1),1), new t("ие",(-1),1), new t("ое",(-1),1), new t("ые",(-1),1), new t("ими",(-1),1), new t("ыми",(-1),1), new t("ей",(-1),1), new t("ий",(-1),1), new t("ой",(-1),1), new t("ый",(-1),1), new t("ем",(-1),1), new t("им",(-1),1), new t("ом",(-1),1), new t("ым",(-1),1), new t("его",(-1),1), new t("ого",(-1),1), new t("ему",(-1),1), new t("ому",(-1),1), new t("их",(-1),1), new t("ых",(-1),1), new t("ею",(-1),1), new t("ою",(-1),1), new t("ую",(-1),1), new t("юю",(-1),1), new t("ая",(-1),1), new t("яя",(-1),1)], _ = [new t("ем",(-1),1), new t("нн",(-1),1), new t("вш",(-1),1), new t("ивш",2,2), new t("ывш",2,2), new t("щ",(-1),1), new t("ющ",5,1), new t("ующ",6,2)], w = [new t("сь",(-1),1), new t("ся",(-1),1)], S = [new t("ла",(-1),1), new t("ила",0,2), new t("ыла",0,2), new t("на",(-1),1), new t("ена",3,2), new t("ете",(-1),1), new t("ите",(-1),2), new t("йте",(-1),1), new t("ейте",7,2), new t("уйте",7,2), new t("ли",(-1),1), new t("или",10,2), new t("ыли",10,2), new t("й",(-1),1), new t("ей",13,2), new t("уй",13,2), new t("л",(-1),1), new t("ил",16,2), new t("ыл",16,2), new t("ем",(-1),1), new t("им",(-1),2), new t("ым",(-1),2), new t("н",(-1),1), new t("ен",22,2), new t("ло",(-1),1), new t("ило",24,2), new t("ыло",24,2), new t("но",(-1),1), new t("ено",27,2), new t("нно",27,1), new t("ет",(-1),1), new t("ует",30,2), new t("ит",(-1),2), new t("ыт",(-1),2), new t("ют",(-1),1), new t("уют",34,2), new t("ят",(-1),2), new t("ны",(-1),1), new t("ены",37,2), new t("ть",(-1),1), new t("ить",39,2), new t("ыть",39,2), new t("ешь",(-1),1), new t("ишь",(-1),2), new t("ю",(-1),2), new t("ую",44,2)], k = [new t("а",(-1),1), new t("ев",(-1),1), new t("ов",(-1),1), new t("е",(-1),1), new t("ие",3,1), new t("ье",3,1), new t("и",(-1),1), new t("еи",6,1), new t("ии",6,1), new t("ами",6,1), new t("ями",6,1), new t("иями",10,1), new t("й",(-1),1), new t("ей",12,1), new t("ией",13,1), new t("ий",12,1), new t("ой",12,1), new t("ам",(-1),1), new t("ем",(-1),1), new t("ием",18,1), new t("ом",(-1),1), new t("ям",(-1),1), new t("иям",21,1), new t("о",(-1),1), new t("у",(-1),1), new t("ах",(-1),1), new t("ях",(-1),1), new t("иях",26,1), new t("ы",(-1),1), new t("ь",(-1),1), new t("ю",(-1),1), new t("ию",30,1), new t("ью",30,1), new t("я",(-1),1), new t("ия",33,1), new t("ья",33,1)], x = [new t("ост",(-1),1), new t("ость",(-1),1)], E = [new t("ейше",(-1),1), new t("н",(-1),2), new t("ейш",(-1),1), new t("ь",(-1),3)], T = [33, 65, 8, 232], C = new n;
                    this.setCurrent = function(e) {
                        C.s_c(e)
                    }
                    ,
                    this.getCurrent = function() {
                        return C.g_c()
                    }
                    ,
                    this.stem = function() {
                        return i(),
                        C.c = C.l,
                        !(C.c < v) && (C.lb = v,
                        a() || (C.c = C.l,
                        d() || (C.c = C.l),
                        u() || (C.c = C.l,
                        h() || (C.c = C.l,
                        f()))),
                        C.c = C.l,
                        C.k = C.c,
                        C.e_s_b(1, "и") ? (C.b = C.c,
                        C.s_d()) : C.c = C.l,
                        p(),
                        C.c = C.l,
                        g(),
                        !0)
                    }
                }
            }
              , i = e.substring(0, 1).toUpperCase() + e.substring(1).toLowerCase() + "Stemmer";
            return new r[i]
        }
        t.exports = r
    }
    , {}],
    101: [function(e, t, n) {
        "use strict";
        !function(e, t) {
            function n() {
                x = $ = E = T = C = A = N
            }
            function r(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            function i(e) {
                return parseFloat(e) || 0
            }
            function o() {
                j = {
                    top: t.pageYOffset,
                    left: t.pageXOffset
                }
            }
            function s() {
                return t.pageXOffset != j.left ? (o(),
                void E()) : void (t.pageYOffset != j.top && (o(),
                c()))
            }
            function a(e) {
                setTimeout(function() {
                    t.pageYOffset != j.top && (j.top = t.pageYOffset,
                    c())
                }, 0)
            }
            function c() {
                for (var e = O.length - 1; e >= 0; e--)
                    l(O[e])
            }
            function l(e) {
                if (e.inited) {
                    var t = j.top <= e.limit.start ? 0 : j.top >= e.limit.end ? 2 : 1;
                    e.mode != t && g(e, t)
                }
            }
            function u() {
                for (var e = O.length - 1; e >= 0; e--)
                    if (O[e].inited) {
                        var t = Math.abs(b(O[e].clone) - O[e].docOffsetTop)
                          , n = Math.abs(O[e].parent.node.offsetHeight - O[e].parent.height);
                        if (t >= 2 || n >= 2)
                            return !1
                    }
                return !0
            }
            function d(e) {
                isNaN(parseFloat(e.computed.top)) || e.isCell || (e.inited = !0,
                e.clone || m(e),
                "absolute" != e.parent.computed.position && "relative" != e.parent.computed.position && (e.parent.node.style.position = "relative"),
                l(e),
                e.parent.height = e.parent.node.offsetHeight,
                e.docOffsetTop = b(e.clone))
            }
            function h(e) {
                var t = !0;
                e.clone && v(e),
                r(e.node.style, e.css);
                for (var n = O.length - 1; n >= 0; n--)
                    if (O[n].node !== e.node && O[n].parent.node === e.parent.node) {
                        t = !1;
                        break
                    }
                t && (e.parent.node.style.position = e.parent.css.position),
                e.mode = -1
            }
            function f() {
                for (var e = O.length - 1; e >= 0; e--)
                    d(O[e])
            }
            function p() {
                for (var e = O.length - 1; e >= 0; e--)
                    h(O[e])
            }
            function g(e, t) {
                var n = e.node.style;
                switch (t) {
                case 0:
                    n.position = "absolute",
                    n.left = e.offset.left + "px",
                    n.right = e.offset.right + "px",
                    n.top = e.offset.top + "px",
                    n.bottom = "auto",
                    n.width = "auto",
                    n.marginLeft = 0,
                    n.marginRight = 0,
                    n.marginTop = 0;
                    break;
                case 1:
                    n.position = "fixed",
                    n.left = e.box.left + "px",
                    n.right = e.box.right + "px",
                    n.top = e.css.top,
                    n.bottom = "auto",
                    n.width = "auto",
                    n.marginLeft = 0,
                    n.marginRight = 0,
                    n.marginTop = 0;
                    break;
                case 2:
                    n.position = "absolute",
                    n.left = e.offset.left + "px",
                    n.right = e.offset.right + "px",
                    n.top = "auto",
                    n.bottom = 0,
                    n.width = "auto",
                    n.marginLeft = 0,
                    n.marginRight = 0
                }
                e.mode = t
            }
            function m(e) {
                e.clone = document.createElement("div");
                var t = e.node.nextSibling || e.node
                  , n = e.clone.style;
                n.height = e.height + "px",
                n.width = e.width + "px",
                n.marginTop = e.computed.marginTop,
                n.marginBottom = e.computed.marginBottom,
                n.marginLeft = e.computed.marginLeft,
                n.marginRight = e.computed.marginRight,
                n.padding = n.border = n.borderSpacing = 0,
                n.fontSize = "1em",
                n.position = "static",
                n.cssFloat = e.computed.cssFloat,
                e.node.parentNode.insertBefore(e.clone, t)
            }
            function v(e) {
                e.clone.parentNode.removeChild(e.clone),
                e.clone = void 0
            }
            function y(e) {
                var t = getComputedStyle(e)
                  , n = e.parentNode
                  , r = getComputedStyle(n)
                  , o = e.style.position;
                e.style.position = "relative";
                var s = {
                    top: t.top,
                    marginTop: t.marginTop,
                    marginBottom: t.marginBottom,
                    marginLeft: t.marginLeft,
                    marginRight: t.marginRight,
                    cssFloat: t.cssFloat
                }
                  , a = {
                    top: i(t.top),
                    marginBottom: i(t.marginBottom),
                    paddingLeft: i(t.paddingLeft),
                    paddingRight: i(t.paddingRight),
                    borderLeftWidth: i(t.borderLeftWidth),
                    borderRightWidth: i(t.borderRightWidth)
                };
                e.style.position = o;
                var c = {
                    position: e.style.position,
                    top: e.style.top,
                    bottom: e.style.bottom,
                    left: e.style.left,
                    right: e.style.right,
                    width: e.style.width,
                    marginTop: e.style.marginTop,
                    marginLeft: e.style.marginLeft,
                    marginRight: e.style.marginRight
                }
                  , l = _(e)
                  , u = _(n)
                  , d = {
                    node: n,
                    css: {
                        position: n.style.position
                    },
                    computed: {
                        position: r.position
                    },
                    numeric: {
                        borderLeftWidth: i(r.borderLeftWidth),
                        borderRightWidth: i(r.borderRightWidth),
                        borderTopWidth: i(r.borderTopWidth),
                        borderBottomWidth: i(r.borderBottomWidth)
                    }
                }
                  , h = {
                    node: e,
                    box: {
                        left: l.win.left,
                        right: P.clientWidth - l.win.right
                    },
                    offset: {
                        top: l.win.top - u.win.top - d.numeric.borderTopWidth,
                        left: l.win.left - u.win.left - d.numeric.borderLeftWidth,
                        right: -l.win.right + u.win.right - d.numeric.borderRightWidth
                    },
                    css: c,
                    isCell: "table-cell" == t.display,
                    computed: s,
                    numeric: a,
                    width: l.win.right - l.win.left,
                    height: l.win.bottom - l.win.top,
                    mode: -1,
                    inited: !1,
                    parent: d,
                    limit: {
                        start: l.doc.top - a.top,
                        end: u.doc.top + n.offsetHeight - d.numeric.borderBottomWidth - e.offsetHeight - a.top - a.marginBottom
                    }
                };
                return h
            }
            function b(e) {
                for (var t = 0; e; )
                    t += e.offsetTop,
                    e = e.offsetParent;
                return t
            }
            function _(e) {
                var n = e.getBoundingClientRect();
                return {
                    doc: {
                        top: n.top + t.pageYOffset,
                        left: n.left + t.pageXOffset
                    },
                    win: n
                }
            }
            function w() {
                I = setInterval(function() {
                    !u() && E()
                }, 500)
            }
            function S() {
                clearInterval(I)
            }
            function k() {
                R && (document[M] ? S() : w())
            }
            function x() {
                R || (o(),
                f(),
                t.addEventListener("scroll", s),
                t.addEventListener("wheel", a),
                t.addEventListener("resize", E),
                t.addEventListener("orientationchange", E),
                e.addEventListener(H, k),
                w(),
                R = !0)
            }
            function E() {
                if (R) {
                    p();
                    for (var e = O.length - 1; e >= 0; e--)
                        O[e] = y(O[e].node);
                    f()
                }
            }
            function T() {
                t.removeEventListener("scroll", s),
                t.removeEventListener("wheel", a),
                t.removeEventListener("resize", E),
                t.removeEventListener("orientationchange", E),
                e.removeEventListener(H, k),
                S(),
                R = !1
            }
            function C() {
                T(),
                p()
            }
            function A() {
                for (C(); O.length; )
                    O.pop()
            }
            function $(e) {
                for (var t = O.length - 1; t >= 0; t--)
                    if (O[t].node === e)
                        return;
                var n = y(e);
                O.push(n),
                R ? d(n) : x()
            }
            function L(e) {
                for (var t = O.length - 1; t >= 0; t--)
                    O[t].node === e && (h(O[t]),
                    O.splice(t, 1))
            }
            var j, I, O = [], R = !1, P = e.documentElement, N = function() {}, M = "hidden", H = "visibilitychange";
            void 0 !== e.webkitHidden && (M = "webkitHidden",
            H = "webkitvisibilitychange"),
            t.getComputedStyle || n();
            for (var D = ["", "-webkit-", "-moz-", "-ms-"], F = document.createElement("div"), B = D.length - 1; B >= 0; B--) {
                try {
                    F.style.position = D[B] + "sticky"
                } catch (q) {}
                "" == F.style.position || window.chrome || n()
            }
            o(),
            t.Stickyfill = {
                stickies: O,
                add: $,
                remove: L,
                init: x,
                rebuild: E,
                pause: T,
                stop: C,
                kill: A
            }
        }(document, window),
        window.jQuery && !function(e) {
            e.fn.Stickyfill = function(e) {
                return this.each(function() {
                    Stickyfill.add(this)
                }),
                this
            }
        }(window.jQuery)
    }
    , {}],
    102: [function(require, module, exports) {
        "use strict";
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(a, b) {
            var c = {}
              , d = {}
              , e = {}
              , f = null;
            !function(e, t) {
                function n(e) {
                    if ("number" == typeof e)
                        return e;
                    var t = {};
                    for (var n in e)
                        t[n] = e[n];
                    return t
                }
                function r() {
                    this._delay = 0,
                    this._endDelay = 0,
                    this._fill = "none",
                    this._iterationStart = 0,
                    this._iterations = 1,
                    this._duration = 0,
                    this._playbackRate = 1,
                    this._direction = "normal",
                    this._easing = "linear",
                    this._easingFunction = S
                }
                function i() {
                    return e.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0)
                }
                function o(t, n, i) {
                    var o = new r;
                    return n && (o.fill = "both",
                    o.duration = "auto"),
                    "number" != typeof t || isNaN(t) ? void 0 !== t && Object.getOwnPropertyNames(t).forEach(function(n) {
                        if ("auto" != t[n]) {
                            if (("number" == typeof o[n] || "duration" == n) && ("number" != typeof t[n] || isNaN(t[n])))
                                return;
                            if ("fill" == n && -1 == _.indexOf(t[n]))
                                return;
                            if ("direction" == n && -1 == w.indexOf(t[n]))
                                return;
                            if ("playbackRate" == n && 1 !== t[n] && e.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead."))
                                return;
                            o[n] = t[n]
                        }
                    }) : o.duration = t,
                    o
                }
                function s(e) {
                    return "number" == typeof e && (e = isNaN(e) ? {
                        duration: 0
                    } : {
                        duration: e
                    }),
                    e
                }
                function a(t, n) {
                    return t = e.numericTimingToObject(t),
                    o(t, n)
                }
                function c(e, t, n, r) {
                    return 0 > e || e > 1 || 0 > n || n > 1 ? S : function(i) {
                        function o(e, t, n) {
                            return 3 * e * (1 - n) * (1 - n) * n + 3 * t * (1 - n) * n * n + n * n * n
                        }
                        if (0 == i || 1 == i)
                            return i;
                        for (var s = 0, a = 1; ; ) {
                            var c = (s + a) / 2
                              , l = o(e, n, c);
                            if (Math.abs(i - l) < 1e-4)
                                return o(t, r, c);
                            i > l ? s = c : a = c
                        }
                    }
                }
                function l(e, t) {
                    return function(n) {
                        if (n >= 1)
                            return 1;
                        var r = 1 / e;
                        return n += t * r,
                        n - n % r
                    }
                }
                function u(e) {
                    C || (C = document.createElement("div").style),
                    C.animationTimingFunction = "",
                    C.animationTimingFunction = e;
                    var t = C.animationTimingFunction;
                    if ("" == t && i())
                        throw new TypeError(e + " is not a valid value for easing");
                    var n = $.exec(t);
                    if (n)
                        return c.apply(this, n.slice(1).map(Number));
                    var r = L.exec(t);
                    if (r)
                        return l(Number(r[1]), {
                            start: k,
                            middle: x,
                            end: E
                        }[r[2]]);
                    var o = T[t];
                    return o ? o : S
                }
                function d(e) {
                    return Math.abs(h(e) / e.playbackRate)
                }
                function h(e) {
                    return e.duration * e.iterations
                }
                function f(e, t, n) {
                    return null == t ? j : t < n.delay ? I : t >= n.delay + e ? O : R
                }
                function p(e, t, n, r, i) {
                    switch (r) {
                    case I:
                        return "backwards" == t || "both" == t ? 0 : null;
                    case R:
                        return n - i;
                    case O:
                        return "forwards" == t || "both" == t ? e : null;
                    case j:
                        return null
                    }
                }
                function g(e, t, n, r) {
                    return (r.playbackRate < 0 ? t - e : t) * r.playbackRate + n
                }
                function m(e, t, n, r, i) {
                    return n === 1 / 0 || n === -(1 / 0) || n - r == t && i.iterations && (i.iterations + i.iterationStart) % 1 == 0 ? e : n % e
                }
                function v(e, t, n, r) {
                    return 0 === n ? 0 : t == e ? r.iterationStart + r.iterations - 1 : Math.floor(n / e)
                }
                function y(e, t, n, r) {
                    var i = e % 2 >= 1
                      , o = "normal" == r.direction || r.direction == (i ? "alternate-reverse" : "alternate")
                      , s = o ? n : t - n
                      , a = s / t;
                    return t * r._easingFunction(a)
                }
                function b(e, t, n) {
                    var r = f(e, t, n)
                      , i = p(e, n.fill, t, r, n.delay);
                    if (null === i)
                        return null;
                    if (0 === e)
                        return r === I ? 0 : 1;
                    var o = n.iterationStart * n.duration
                      , s = g(e, i, o, n)
                      , a = m(n.duration, h(n), s, o, n)
                      , c = v(n.duration, a, s, n);
                    return y(c, n.duration, a, n) / n.duration
                }
                var _ = "backwards|forwards|both|none".split("|")
                  , w = "reverse|alternate|alternate-reverse".split("|")
                  , S = function(e) {
                    return e
                };
                r.prototype = {
                    _setMember: function(t, n) {
                        this["_" + t] = n,
                        this._effect && (this._effect._timingInput[t] = n,
                        this._effect._timing = e.normalizeTimingInput(this._effect._timingInput),
                        this._effect.activeDuration = e.calculateActiveDuration(this._effect._timing),
                        this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
                    },
                    get playbackRate() {
                        return this._playbackRate
                    },
                    set delay(e) {
                        this._setMember("delay", e)
                    },
                    get delay() {
                        return this._delay
                    },
                    set endDelay(e) {
                        this._setMember("endDelay", e)
                    },
                    get endDelay() {
                        return this._endDelay
                    },
                    set fill(e) {
                        this._setMember("fill", e)
                    },
                    get fill() {
                        return this._fill
                    },
                    set iterationStart(e) {
                        if ((isNaN(e) || 0 > e) && i())
                            throw new TypeError("iterationStart must be a non-negative number, received: " + timing.iterationStart);
                        this._setMember("iterationStart", e)
                    },
                    get iterationStart() {
                        return this._iterationStart
                    },
                    set duration(e) {
                        if ("auto" != e && (isNaN(e) || 0 > e) && i())
                            throw new TypeError("duration must be non-negative or auto, received: " + e);
                        this._setMember("duration", e)
                    },
                    get duration() {
                        return this._duration
                    },
                    set direction(e) {
                        this._setMember("direction", e)
                    },
                    get direction() {
                        return this._direction
                    },
                    set easing(e) {
                        this._easingFunction = u(e),
                        this._setMember("easing", e)
                    },
                    get easing() {
                        return this._easing
                    },
                    set iterations(e) {
                        if ((isNaN(e) || 0 > e) && i())
                            throw new TypeError("iterations must be non-negative, received: " + e);
                        this._setMember("iterations", e)
                    },
                    get iterations() {
                        return this._iterations
                    }
                };
                var k = 1
                  , x = .5
                  , E = 0
                  , T = {
                    ease: c(.25, .1, .25, 1),
                    "ease-in": c(.42, 0, 1, 1),
                    "ease-out": c(0, 0, .58, 1),
                    "ease-in-out": c(.42, 0, .58, 1),
                    "step-start": l(1, k),
                    "step-middle": l(1, x),
                    "step-end": l(1, E)
                }
                  , C = null
                  , A = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*"
                  , $ = new RegExp("cubic-bezier\\(" + A + "," + A + "," + A + "," + A + "\\)")
                  , L = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/
                  , j = 0
                  , I = 1
                  , O = 2
                  , R = 3;
                e.cloneTimingInput = n,
                e.makeTiming = o,
                e.numericTimingToObject = s,
                e.normalizeTimingInput = a,
                e.calculateActiveDuration = d,
                e.calculateTimeFraction = b,
                e.calculatePhase = f,
                e.toTimingFunction = u
            }(c, f),
            function(e, t) {
                function n(e, t) {
                    return e in l ? l[e][t] || t : t
                }
                function r(e, t, r) {
                    var i = s[e];
                    if (i) {
                        a.style[e] = t;
                        for (var o in i) {
                            var c = i[o]
                              , l = a.style[c];
                            r[c] = n(c, l)
                        }
                    } else
                        r[e] = n(e, t)
                }
                function i(e) {
                    var t = [];
                    for (var n in e)
                        if (!(n in ["easing", "offset", "composite"])) {
                            var r = e[n];
                            Array.isArray(r) || (r = [r]);
                            for (var i, o = r.length, s = 0; o > s; s++)
                                i = {},
                                "offset"in e ? i.offset = e.offset : 1 == o ? i.offset = 1 : i.offset = s / (o - 1),
                                "easing"in e && (i.easing = e.easing),
                                "composite"in e && (i.composite = e.composite),
                                i[n] = r[s],
                                t.push(i)
                        }
                    return t.sort(function(e, t) {
                        return e.offset - t.offset
                    }),
                    t
                }
                function o(e) {
                    function t() {
                        var e = n.length;
                        null == n[e - 1].offset && (n[e - 1].offset = 1),
                        e > 1 && null == n[0].offset && (n[0].offset = 0);
                        for (var t = 0, r = n[0].offset, i = 1; e > i; i++) {
                            var o = n[i].offset;
                            if (null != o) {
                                for (var s = 1; i - t > s; s++)
                                    n[t + s].offset = r + (o - r) * s / (i - t);
                                t = i,
                                r = o
                            }
                        }
                    }
                    if (null == e)
                        return [];
                    window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)),
                    Array.isArray(e) || (e = i(e));
                    for (var n = e.map(function(e) {
                        var t = {};
                        for (var n in e) {
                            var i = e[n];
                            if ("offset" == n) {
                                if (null != i && (i = Number(i),
                                !isFinite(i)))
                                    throw new TypeError("keyframe offsets must be numbers.")
                            } else {
                                if ("composite" == n)
                                    throw {
                                        type: DOMException.NOT_SUPPORTED_ERR,
                                        name: "NotSupportedError",
                                        message: "add compositing is not supported"
                                    };
                                i = "" + i
                            }
                            r(n, i, t)
                        }
                        return void 0 == t.offset && (t.offset = null),
                        t
                    }), o = !0, s = -(1 / 0), a = 0; a < n.length; a++) {
                        var c = n[a].offset;
                        if (null != c) {
                            if (s > c)
                                throw {
                                    code: DOMException.INVALID_MODIFICATION_ERR,
                                    name: "InvalidModificationError",
                                    message: "Keyframes are not loosely sorted by offset. Sort or specify offsets."
                                };
                            s = c
                        } else
                            o = !1
                    }
                    return n = n.filter(function(e) {
                        return e.offset >= 0 && e.offset <= 1
                    }),
                    o || t(),
                    n
                }
                var s = {
                    background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
                    border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
                    borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
                    borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
                    borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
                    borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
                    borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
                    borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
                    flex: ["flexGrow", "flexShrink", "flexBasis"],
                    font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
                    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
                    outline: ["outlineColor", "outlineStyle", "outlineWidth"],
                    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
                }
                  , a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")
                  , c = {
                    thin: "1px",
                    medium: "3px",
                    thick: "5px"
                }
                  , l = {
                    borderBottomWidth: c,
                    borderLeftWidth: c,
                    borderRightWidth: c,
                    borderTopWidth: c,
                    fontSize: {
                        "xx-small": "60%",
                        "x-small": "75%",
                        small: "89%",
                        medium: "100%",
                        large: "120%",
                        "x-large": "150%",
                        "xx-large": "200%"
                    },
                    fontWeight: {
                        normal: "400",
                        bold: "700"
                    },
                    outlineWidth: c,
                    textShadow: {
                        none: "0px 0px 0px transparent"
                    },
                    boxShadow: {
                        none: "0px 0px 0px 0px transparent"
                    }
                };
                e.convertToArrayForm = i,
                e.normalizeKeyframes = o
            }(c, f),
            function(e) {
                var t = {};
                e.isDeprecated = function(e, n, r, i) {
                    var o = i ? "are" : "is"
                      , s = new Date
                      , a = new Date(n);
                    return a.setMonth(a.getMonth() + 3),
                    !(a > s) || (e in t || console.warn("Web Animations: " + e + " " + o + " deprecated and will stop working on " + a.toDateString() + ". " + r),
                    t[e] = !0,
                    !1)
                }
                ,
                e.deprecated = function(t, n, r, i) {
                    var o = i ? "are" : "is";
                    if (e.isDeprecated(t, n, r, i))
                        throw new Error(t + " " + o + " no longer supported. " + r)
                }
            }(c),
            function() {
                if (document.documentElement.animate) {
                    var a = document.documentElement.animate([], 0)
                      , b = !0;
                    if (a && (b = !1,
                    "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(e) {
                        void 0 === a[e] && (b = !0)
                    })),
                    !b)
                        return
                }
                !function(e, t, n) {
                    function r(e) {
                        for (var t = {}, n = 0; n < e.length; n++)
                            for (var r in e[n])
                                if ("offset" != r && "easing" != r && "composite" != r) {
                                    var i = {
                                        offset: e[n].offset,
                                        easing: e[n].easing,
                                        value: e[n][r]
                                    };
                                    t[r] = t[r] || [],
                                    t[r].push(i)
                                }
                        for (var o in t) {
                            var s = t[o];
                            if (0 != s[0].offset || 1 != s[s.length - 1].offset)
                                throw {
                                    type: DOMException.NOT_SUPPORTED_ERR,
                                    name: "NotSupportedError",
                                    message: "Partial keyframes are not supported"
                                }
                        }
                        return t
                    }
                    function i(n) {
                        var r = [];
                        for (var i in n)
                            for (var o = n[i], s = 0; s < o.length - 1; s++) {
                                var a = o[s].offset
                                  , c = o[s + 1].offset
                                  , l = o[s].value
                                  , u = o[s + 1].value
                                  , d = o[s].easing;
                                a == c && (1 == c ? l = u : u = l),
                                r.push({
                                    startTime: a,
                                    endTime: c,
                                    easing: e.toTimingFunction(d ? d : "linear"),
                                    property: i,
                                    interpolation: t.propertyInterpolation(i, l, u)
                                })
                            }
                        return r.sort(function(e, t) {
                            return e.startTime - t.startTime
                        }),
                        r
                    }
                    t.convertEffectInput = function(n) {
                        var o = e.normalizeKeyframes(n)
                          , s = r(o)
                          , a = i(s);
                        return function(e, n) {
                            if (null != n)
                                a.filter(function(e) {
                                    return 0 >= n && 0 == e.startTime || n >= 1 && 1 == e.endTime || n >= e.startTime && n <= e.endTime
                                }).forEach(function(r) {
                                    var i = n - r.startTime
                                      , o = r.endTime - r.startTime
                                      , s = 0 == o ? 0 : r.easing(i / o);
                                    t.apply(e, r.property, r.interpolation(s))
                                });
                            else
                                for (var r in s)
                                    "offset" != r && "easing" != r && "composite" != r && t.clear(e, r)
                        }
                    }
                }(c, d, f),
                function(e, t, n) {
                    function r(e) {
                        return e.replace(/-(.)/g, function(e, t) {
                            return t.toUpperCase()
                        })
                    }
                    function i(e, t, n) {
                        a[n] = a[n] || [],
                        a[n].push([e, t])
                    }
                    function o(e, t, n) {
                        for (var o = 0; o < n.length; o++) {
                            var s = n[o];
                            i(e, t, r(s))
                        }
                    }
                    function s(n, i, o) {
                        var s = n;
                        /-/.test(n) && !e.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (s = r(n)),
                        "initial" != i && "initial" != o || ("initial" == i && (i = c[s]),
                        "initial" == o && (o = c[s]));
                        for (var l = i == o ? [] : a[s], u = 0; l && u < l.length; u++) {
                            var d = l[u][0](i)
                              , h = l[u][0](o);
                            if (void 0 !== d && void 0 !== h) {
                                var f = l[u][1](d, h);
                                if (f) {
                                    var p = t.Interpolation.apply(null, f);
                                    return function(e) {
                                        return 0 == e ? i : 1 == e ? o : p(e)
                                    }
                                }
                            }
                        }
                        return t.Interpolation(!1, !0, function(e) {
                            return e ? o : i
                        })
                    }
                    var a = {};
                    t.addPropertiesHandler = o;
                    var c = {
                        backgroundColor: "transparent",
                        backgroundPosition: "0% 0%",
                        borderBottomColor: "currentColor",
                        borderBottomLeftRadius: "0px",
                        borderBottomRightRadius: "0px",
                        borderBottomWidth: "3px",
                        borderLeftColor: "currentColor",
                        borderLeftWidth: "3px",
                        borderRightColor: "currentColor",
                        borderRightWidth: "3px",
                        borderSpacing: "2px",
                        borderTopColor: "currentColor",
                        borderTopLeftRadius: "0px",
                        borderTopRightRadius: "0px",
                        borderTopWidth: "3px",
                        bottom: "auto",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        color: "black",
                        fontSize: "100%",
                        fontWeight: "400",
                        height: "auto",
                        left: "auto",
                        letterSpacing: "normal",
                        lineHeight: "120%",
                        marginBottom: "0px",
                        marginLeft: "0px",
                        marginRight: "0px",
                        marginTop: "0px",
                        maxHeight: "none",
                        maxWidth: "none",
                        minHeight: "0px",
                        minWidth: "0px",
                        opacity: "1.0",
                        outlineColor: "invert",
                        outlineOffset: "0px",
                        outlineWidth: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        paddingTop: "0px",
                        right: "auto",
                        textIndent: "0px",
                        textShadow: "0px 0px 0px transparent",
                        top: "auto",
                        transform: "",
                        verticalAlign: "0px",
                        visibility: "visible",
                        width: "auto",
                        wordSpacing: "normal",
                        zIndex: "auto"
                    };
                    t.propertyInterpolation = s
                }(c, d, f),
                function(e, t, n) {
                    function r(t) {
                        var n = e.calculateActiveDuration(t)
                          , r = function(r) {
                            return e.calculateTimeFraction(n, r, t)
                        };
                        return r._totalDuration = t.delay + n + t.endDelay,
                        r._isCurrent = function(r) {
                            var i = e.calculatePhase(n, r, t);
                            return i === PhaseActive || i === PhaseBefore
                        }
                        ,
                        r
                    }
                    t.KeyframeEffect = function(n, i, o, s) {
                        var a, c = r(e.normalizeTimingInput(o)), l = t.convertEffectInput(i), u = function() {
                            l(n, a)
                        };
                        return u._update = function(e) {
                            return a = c(e),
                            null !== a
                        }
                        ,
                        u._clear = function() {
                            l(n, null)
                        }
                        ,
                        u._hasSameTarget = function(e) {
                            return n === e
                        }
                        ,
                        u._isCurrent = c._isCurrent,
                        u._totalDuration = c._totalDuration,
                        u._id = s,
                        u
                    }
                    ,
                    t.NullEffect = function(e) {
                        var t = function() {
                            e && (e(),
                            e = null)
                        };
                        return t._update = function() {
                            return null
                        }
                        ,
                        t._totalDuration = 0,
                        t._isCurrent = function() {
                            return !1
                        }
                        ,
                        t._hasSameTarget = function() {
                            return !1
                        }
                        ,
                        t
                    }
                }(c, d, f),
                function(e, t) {
                    function n(e, t, n) {
                        n.enumerable = !0,
                        n.configurable = !0,
                        Object.defineProperty(e, t, n)
                    }
                    function r(e) {
                        this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style,
                        this._style = e.style,
                        this._length = 0,
                        this._isAnimatedProperty = {};
                        for (var t = 0; t < this._style.length; t++) {
                            var n = this._style[t];
                            this._surrogateStyle[n] = this._style[n]
                        }
                        this._updateIndices()
                    }
                    function i(e) {
                        if (!e._webAnimationsPatchedStyle) {
                            var t = new r(e);
                            try {
                                n(e, "style", {
                                    get: function() {
                                        return t
                                    }
                                })
                            } catch (i) {
                                e.style._set = function(t, n) {
                                    e.style[t] = n
                                }
                                ,
                                e.style._clear = function(t) {
                                    e.style[t] = ""
                                }
                            }
                            e._webAnimationsPatchedStyle = e.style
                        }
                    }
                    var o = {
                        cssText: 1,
                        length: 1,
                        parentRule: 1
                    }
                      , s = {
                        getPropertyCSSValue: 1,
                        getPropertyPriority: 1,
                        getPropertyValue: 1,
                        item: 1,
                        removeProperty: 1,
                        setProperty: 1
                    }
                      , a = {
                        removeProperty: 1,
                        setProperty: 1
                    };
                    r.prototype = {
                        get cssText() {
                            return this._surrogateStyle.cssText
                        },
                        set cssText(e) {
                            for (var t = {}, n = 0; n < this._surrogateStyle.length; n++)
                                t[this._surrogateStyle[n]] = !0;
                            this._surrogateStyle.cssText = e,
                            this._updateIndices();
                            for (var n = 0; n < this._surrogateStyle.length; n++)
                                t[this._surrogateStyle[n]] = !0;
                            for (var r in t)
                                this._isAnimatedProperty[r] || this._style.setProperty(r, this._surrogateStyle.getPropertyValue(r))
                        },
                        get length() {
                            return this._surrogateStyle.length
                        },
                        get parentRule() {
                            return this._style.parentRule
                        },
                        _updateIndices: function() {
                            for (; this._length < this._surrogateStyle.length; )
                                Object.defineProperty(this, this._length, {
                                    configurable: !0,
                                    enumerable: !1,
                                    get: function(e) {
                                        return function() {
                                            return this._surrogateStyle[e]
                                        }
                                    }(this._length)
                                }),
                                this._length++;
                            for (; this._length > this._surrogateStyle.length; )
                                this._length--,
                                Object.defineProperty(this, this._length, {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: void 0
                                })
                        },
                        _set: function(e, t) {
                            this._style[e] = t,
                            this._isAnimatedProperty[e] = !0
                        },
                        _clear: function(e) {
                            this._style[e] = this._surrogateStyle[e],
                            delete this._isAnimatedProperty[e]
                        }
                    };
                    for (var c in s)
                        r.prototype[c] = function(e, t) {
                            return function() {
                                var n = this._surrogateStyle[e].apply(this._surrogateStyle, arguments);
                                return t && (this._isAnimatedProperty[arguments[0]] || this._style[e].apply(this._style, arguments),
                                this._updateIndices()),
                                n
                            }
                        }(c, c in a);
                    for (var l in document.documentElement.style)
                        l in o || l in s || !function(e) {
                            n(r.prototype, e, {
                                get: function() {
                                    return this._surrogateStyle[e]
                                },
                                set: function(t) {
                                    this._surrogateStyle[e] = t,
                                    this._updateIndices(),
                                    this._isAnimatedProperty[e] || (this._style[e] = t)
                                }
                            })
                        }(l);
                    e.apply = function(t, n, r) {
                        i(t),
                        t.style._set(e.propertyName(n), r)
                    }
                    ,
                    e.clear = function(t, n) {
                        t._webAnimationsPatchedStyle && t.style._clear(e.propertyName(n))
                    }
                }(d, f),
                function(e) {
                    window.Element.prototype.animate = function(t, n) {
                        var r = "";
                        return n && n.id && (r = n.id),
                        e.timeline._play(e.KeyframeEffect(this, t, n, r))
                    }
                }(d),
                function(e, t) {
                    function n(e, t, r) {
                        if ("number" == typeof e && "number" == typeof t)
                            return e * (1 - r) + t * r;
                        if ("boolean" == typeof e && "boolean" == typeof t)
                            return .5 > r ? e : t;
                        if (e.length == t.length) {
                            for (var i = [], o = 0; o < e.length; o++)
                                i.push(n(e[o], t[o], r));
                            return i
                        }
                        throw "Mismatched interpolation arguments " + e + ":" + t
                    }
                    e.Interpolation = function(e, t, r) {
                        return function(i) {
                            return r(n(e, t, i))
                        }
                    }
                }(d, f),
                function(e, t) {
                    function n(e, t, n) {
                        return Math.max(Math.min(e, n), t)
                    }
                    function r(t, r, i) {
                        var o = e.dot(t, r);
                        o = n(o, -1, 1);
                        var s = [];
                        if (1 === o)
                            s = t;
                        else
                            for (var a = Math.acos(o), c = 1 * Math.sin(i * a) / Math.sqrt(1 - o * o), l = 0; 4 > l; l++)
                                s.push(t[l] * (Math.cos(i * a) - o * c) + r[l] * c);
                        return s
                    }
                    var i = function() {
                        function e(e, t) {
                            for (var n = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], r = 0; 4 > r; r++)
                                for (var i = 0; 4 > i; i++)
                                    for (var o = 0; 4 > o; o++)
                                        n[r][i] += t[r][o] * e[o][i];
                            return n
                        }
                        function t(e) {
                            return 0 == e[0][2] && 0 == e[0][3] && 0 == e[1][2] && 0 == e[1][3] && 0 == e[2][0] && 0 == e[2][1] && 1 == e[2][2] && 0 == e[2][3] && 0 == e[3][2] && 1 == e[3][3]
                        }
                        function n(n, r, i, o, s) {
                            for (var a = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]], c = 0; 4 > c; c++)
                                a[c][3] = s[c];
                            for (var c = 0; 3 > c; c++)
                                for (var l = 0; 3 > l; l++)
                                    a[3][c] += n[l] * a[l][c];
                            var u = o[0]
                              , d = o[1]
                              , h = o[2]
                              , f = o[3]
                              , p = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                            p[0][0] = 1 - 2 * (d * d + h * h),
                            p[0][1] = 2 * (u * d - h * f),
                            p[0][2] = 2 * (u * h + d * f),
                            p[1][0] = 2 * (u * d + h * f),
                            p[1][1] = 1 - 2 * (u * u + h * h),
                            p[1][2] = 2 * (d * h - u * f),
                            p[2][0] = 2 * (u * h - d * f),
                            p[2][1] = 2 * (d * h + u * f),
                            p[2][2] = 1 - 2 * (u * u + d * d),
                            a = e(a, p);
                            var g = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
                            i[2] && (g[2][1] = i[2],
                            a = e(a, g)),
                            i[1] && (g[2][1] = 0,
                            g[2][0] = i[0],
                            a = e(a, g)),
                            i[0] && (g[2][0] = 0,
                            g[1][0] = i[0],
                            a = e(a, g));
                            for (var c = 0; 3 > c; c++)
                                for (var l = 0; 3 > l; l++)
                                    a[c][l] *= r[c];
                            return t(a) ? [a[0][0], a[0][1], a[1][0], a[1][1], a[3][0], a[3][1]] : a[0].concat(a[1], a[2], a[3])
                        }
                        return n
                    }();
                    e.composeMatrix = i,
                    e.quat = r
                }(d, f),
                function(e, t, n) {
                    e.sequenceNumber = 0;
                    var r = function(e, t, n) {
                        this.target = e,
                        this.currentTime = t,
                        this.timelineTime = n,
                        this.type = "finish",
                        this.bubbles = !1,
                        this.cancelable = !1,
                        this.currentTarget = e,
                        this.defaultPrevented = !1,
                        this.eventPhase = Event.AT_TARGET,
                        this.timeStamp = Date.now()
                    };
                    t.Animation = function(t) {
                        this.id = "",
                        t && t._id && (this.id = t._id),
                        this._sequenceNumber = e.sequenceNumber++,
                        this._currentTime = 0,
                        this._startTime = null,
                        this._paused = !1,
                        this._playbackRate = 1,
                        this._inTimeline = !0,
                        this._finishedFlag = !0,
                        this.onfinish = null,
                        this._finishHandlers = [],
                        this._effect = t,
                        this._inEffect = this._effect._update(0),
                        this._idle = !0,
                        this._currentTimePending = !1
                    }
                    ,
                    t.Animation.prototype = {
                        _ensureAlive: function() {
                            this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime),
                            this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0,
                            t.timeline._animations.push(this))
                        },
                        _tickCurrentTime: function(e, t) {
                            e != this._currentTime && (this._currentTime = e,
                            this._isFinished && !t && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0),
                            this._ensureAlive())
                        },
                        get currentTime() {
                            return this._idle || this._currentTimePending ? null : this._currentTime
                        },
                        set currentTime(e) {
                            e = +e,
                            isNaN(e) || (t.restart(),
                            this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - e / this._playbackRate),
                            this._currentTimePending = !1,
                            this._currentTime != e && (this._tickCurrentTime(e, !0),
                            t.invalidateEffects()))
                        },
                        get startTime() {
                            return this._startTime
                        },
                        set startTime(e) {
                            e = +e,
                            isNaN(e) || this._paused || this._idle || (this._startTime = e,
                            this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate),
                            t.invalidateEffects())
                        },
                        get playbackRate() {
                            return this._playbackRate
                        },
                        set playbackRate(e) {
                            if (e != this._playbackRate) {
                                var t = this.currentTime;
                                this._playbackRate = e,
                                this._startTime = null,
                                "paused" != this.playState && "idle" != this.playState && this.play(),
                                null != t && (this.currentTime = t)
                            }
                        },
                        get _isFinished() {
                            return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
                        },
                        get _totalDuration() {
                            return this._effect._totalDuration
                        },
                        get playState() {
                            return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
                        },
                        play: function() {
                            this._paused = !1,
                            (this._isFinished || this._idle) && (this._currentTime = this._playbackRate > 0 ? 0 : this._totalDuration,
                            this._startTime = null),
                            this._finishedFlag = !1,
                            this._idle = !1,
                            this._ensureAlive(),
                            t.invalidateEffects()
                        },
                        pause: function() {
                            this._isFinished || this._paused || this._idle || (this._currentTimePending = !0),
                            this._startTime = null,
                            this._paused = !0
                        },
                        finish: function() {
                            this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0,
                            this._startTime = this._totalDuration - this.currentTime,
                            this._currentTimePending = !1,
                            t.invalidateEffects())
                        },
                        cancel: function() {
                            this._inEffect && (this._inEffect = !1,
                            this._idle = !0,
                            this._finishedFlag = !0,
                            this.currentTime = 0,
                            this._startTime = null,
                            this._effect._update(null),
                            t.invalidateEffects())
                        },
                        reverse: function() {
                            this.playbackRate *= -1,
                            this.play()
                        },
                        addEventListener: function(e, t) {
                            "function" == typeof t && "finish" == e && this._finishHandlers.push(t)
                        },
                        removeEventListener: function(e, t) {
                            if ("finish" == e) {
                                var n = this._finishHandlers.indexOf(t);
                                n >= 0 && this._finishHandlers.splice(n, 1)
                            }
                        },
                        _fireEvents: function(e) {
                            if (this._isFinished) {
                                if (!this._finishedFlag) {
                                    var t = new r(this,this._currentTime,e)
                                      , n = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                                    setTimeout(function() {
                                        n.forEach(function(e) {
                                            e.call(t.target, t)
                                        })
                                    }, 0),
                                    this._finishedFlag = !0
                                }
                            } else
                                this._finishedFlag = !1
                        },
                        _tick: function(e, t) {
                            this._idle || this._paused || (null == this._startTime ? t && (this.startTime = e - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((e - this._startTime) * this.playbackRate)),
                            t && (this._currentTimePending = !1,
                            this._fireEvents(e))
                        },
                        get _needsTick() {
                            return this.playState in {
                                pending: 1,
                                running: 1
                            } || !this._finishedFlag
                        }
                    }
                }(c, d, f),
                function(e, t, n) {
                    function r(e) {
                        var t = l;
                        l = [],
                        e < g.currentTime && (e = g.currentTime),
                        a(e, !0),
                        t.forEach(function(t) {
                            t[1](e)
                        }),
                        s(),
                        d = void 0
                    }
                    function i(e, t) {
                        return e._sequenceNumber - t._sequenceNumber
                    }
                    function o() {
                        this._animations = [],
                        this.currentTime = window.performance && performance.now ? performance.now() : 0
                    }
                    function s() {
                        p.forEach(function(e) {
                            e()
                        }),
                        p.length = 0
                    }
                    function a(e, n) {
                        f = !1;
                        var r = t.timeline;
                        r.currentTime = e,
                        r._animations.sort(i),
                        h = !1;
                        var o = r._animations;
                        r._animations = [];
                        var s = []
                          , a = [];
                        o = o.filter(function(t) {
                            t._tick(e, n),
                            t._inEffect ? a.push(t._effect) : s.push(t._effect),
                            t._needsTick && (h = !0);
                            var r = t._inEffect || t._needsTick;
                            return t._inTimeline = r,
                            r
                        }),
                        p.push.apply(p, s),
                        p.push.apply(p, a),
                        r._animations.push.apply(r._animations, o),
                        h && requestAnimationFrame(function() {})
                    }
                    var c = window.requestAnimationFrame
                      , l = []
                      , u = 0;
                    window.requestAnimationFrame = function(e) {
                        var t = u++;
                        return 0 == l.length && c(r),
                        l.push([t, e]),
                        t
                    }
                    ,
                    window.cancelAnimationFrame = function(e) {
                        l.forEach(function(t) {
                            t[0] == e && (t[1] = function() {}
                            )
                        })
                    }
                    ,
                    o.prototype = {
                        _play: function(n) {
                            n._timing = e.normalizeTimingInput(n.timing);
                            var r = new t.Animation(n);
                            return r._idle = !1,
                            r._timeline = this,
                            this._animations.push(r),
                            t.restart(),
                            t.invalidateEffects(),
                            r
                        }
                    };
                    var d = void 0
                      , h = !1
                      , f = !1;
                    t.restart = function() {
                        return h || (h = !0,
                        requestAnimationFrame(function() {}),
                        f = !0),
                        f
                    }
                    ,
                    t.invalidateEffects = function() {
                        a(t.timeline.currentTime, !1),
                        s()
                    }
                    ;
                    var p = []
                      , g = new o;
                    t.timeline = g
                }(c, d, f),
                function(e, t) {
                    function n(e, t) {
                        for (var n = 0, r = 0; r < e.length; r++)
                            n += e[r] * t[r];
                        return n
                    }
                    function r(e, t) {
                        return [e[0] * t[0] + e[4] * t[1] + e[8] * t[2] + e[12] * t[3], e[1] * t[0] + e[5] * t[1] + e[9] * t[2] + e[13] * t[3], e[2] * t[0] + e[6] * t[1] + e[10] * t[2] + e[14] * t[3], e[3] * t[0] + e[7] * t[1] + e[11] * t[2] + e[15] * t[3], e[0] * t[4] + e[4] * t[5] + e[8] * t[6] + e[12] * t[7], e[1] * t[4] + e[5] * t[5] + e[9] * t[6] + e[13] * t[7], e[2] * t[4] + e[6] * t[5] + e[10] * t[6] + e[14] * t[7], e[3] * t[4] + e[7] * t[5] + e[11] * t[6] + e[15] * t[7], e[0] * t[8] + e[4] * t[9] + e[8] * t[10] + e[12] * t[11], e[1] * t[8] + e[5] * t[9] + e[9] * t[10] + e[13] * t[11], e[2] * t[8] + e[6] * t[9] + e[10] * t[10] + e[14] * t[11], e[3] * t[8] + e[7] * t[9] + e[11] * t[10] + e[15] * t[11], e[0] * t[12] + e[4] * t[13] + e[8] * t[14] + e[12] * t[15], e[1] * t[12] + e[5] * t[13] + e[9] * t[14] + e[13] * t[15], e[2] * t[12] + e[6] * t[13] + e[10] * t[14] + e[14] * t[15], e[3] * t[12] + e[7] * t[13] + e[11] * t[14] + e[15] * t[15]]
                    }
                    function i(e) {
                        var t = e.rad || 0
                          , n = e.deg || 0
                          , r = e.grad || 0
                          , i = e.turn || 0
                          , o = (n / 360 + r / 400 + i) * (2 * Math.PI) + t;
                        return o
                    }
                    function o(e) {
                        switch (e.t) {
                        case "rotatex":
                            var t = i(e.d[0]);
                            return [1, 0, 0, 0, 0, Math.cos(t), Math.sin(t), 0, 0, -Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1];
                        case "rotatey":
                            var t = i(e.d[0]);
                            return [Math.cos(t), 0, -Math.sin(t), 0, 0, 1, 0, 0, Math.sin(t), 0, Math.cos(t), 0, 0, 0, 0, 1];
                        case "rotate":
                        case "rotatez":
                            var t = i(e.d[0]);
                            return [Math.cos(t), Math.sin(t), 0, 0, -Math.sin(t), Math.cos(t), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "rotate3d":
                            var n = e.d[0]
                              , r = e.d[1]
                              , o = e.d[2]
                              , t = i(e.d[3])
                              , s = n * n + r * r + o * o;
                            if (0 === s)
                                n = 1,
                                r = 0,
                                o = 0;
                            else if (1 !== s) {
                                var a = Math.sqrt(s);
                                n /= a,
                                r /= a,
                                o /= a
                            }
                            var c = Math.sin(t / 2)
                              , l = c * Math.cos(t / 2)
                              , u = c * c;
                            return [1 - 2 * (r * r + o * o) * u, 2 * (n * r * u + o * l), 2 * (n * o * u - r * l), 0, 2 * (n * r * u - o * l), 1 - 2 * (n * n + o * o) * u, 2 * (r * o * u + n * l), 0, 2 * (n * o * u + r * l), 2 * (r * o * u - n * l), 1 - 2 * (n * n + r * r) * u, 0, 0, 0, 0, 1];
                        case "scale":
                            return [e.d[0], 0, 0, 0, 0, e.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "scalex":
                            return [e.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "scaley":
                            return [1, 0, 0, 0, 0, e.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "scalez":
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, e.d[0], 0, 0, 0, 0, 1];
                        case "scale3d":
                            return [e.d[0], 0, 0, 0, 0, e.d[1], 0, 0, 0, 0, e.d[2], 0, 0, 0, 0, 1];
                        case "skew":
                            var d = i(e.d[0])
                              , h = i(e.d[1]);
                            return [1, Math.tan(h), 0, 0, Math.tan(d), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "skewx":
                            var t = i(e.d[0]);
                            return [1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "skewy":
                            var t = i(e.d[0]);
                            return [1, Math.tan(t), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
                        case "translate":
                            var n = e.d[0].px || 0
                              , r = e.d[1].px || 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, r, 0, 1];
                        case "translatex":
                            var n = e.d[0].px || 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, 0, 0, 1];
                        case "translatey":
                            var r = e.d[0].px || 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, r, 0, 1];
                        case "translatez":
                            var o = e.d[0].px || 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, o, 1];
                        case "translate3d":
                            var n = e.d[0].px || 0
                              , r = e.d[1].px || 0
                              , o = e.d[2].px || 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n, r, o, 1];
                        case "perspective":
                            var f = e.d[0].px ? -1 / e.d[0].px : 0;
                            return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, f, 0, 0, 0, 1];
                        case "matrix":
                            return [e.d[0], e.d[1], 0, 0, e.d[2], e.d[3], 0, 0, 0, 0, 1, 0, e.d[4], e.d[5], 0, 1];
                        case "matrix3d":
                            return e.d
                        }
                    }
                    function s(e) {
                        return 0 === e.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : e.map(o).reduce(r)
                    }
                    function a(e) {
                        return [c(s(e))]
                    }
                    var c = function() {
                        function e(e) {
                            return e[0][0] * e[1][1] * e[2][2] + e[1][0] * e[2][1] * e[0][2] + e[2][0] * e[0][1] * e[1][2] - e[0][2] * e[1][1] * e[2][0] - e[1][2] * e[2][1] * e[0][0] - e[2][2] * e[0][1] * e[1][0]
                        }
                        function t(t) {
                            for (var n = 1 / e(t), r = t[0][0], i = t[0][1], o = t[0][2], s = t[1][0], a = t[1][1], c = t[1][2], l = t[2][0], u = t[2][1], d = t[2][2], h = [[(a * d - c * u) * n, (o * u - i * d) * n, (i * c - o * a) * n, 0], [(c * l - s * d) * n, (r * d - o * l) * n, (o * s - r * c) * n, 0], [(s * u - a * l) * n, (l * i - r * u) * n, (r * a - i * s) * n, 0]], f = [], p = 0; 3 > p; p++) {
                                for (var g = 0, m = 0; 3 > m; m++)
                                    g += t[3][m] * h[m][p];
                                f.push(g)
                            }
                            return f.push(1),
                            h.push(f),
                            h
                        }
                        function r(e) {
                            return [[e[0][0], e[1][0], e[2][0], e[3][0]], [e[0][1], e[1][1], e[2][1], e[3][1]], [e[0][2], e[1][2], e[2][2], e[3][2]], [e[0][3], e[1][3], e[2][3], e[3][3]]]
                        }
                        function i(e, t) {
                            for (var n = [], r = 0; 4 > r; r++) {
                                for (var i = 0, o = 0; 4 > o; o++)
                                    i += e[o] * t[o][r];
                                n.push(i)
                            }
                            return n
                        }
                        function o(e) {
                            var t = s(e);
                            return [e[0] / t, e[1] / t, e[2] / t]
                        }
                        function s(e) {
                            return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2])
                        }
                        function a(e, t, n, r) {
                            return [n * e[0] + r * t[0], n * e[1] + r * t[1], n * e[2] + r * t[2]]
                        }
                        function c(e, t) {
                            return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
                        }
                        function l(l) {
                            var u = [l.slice(0, 4), l.slice(4, 8), l.slice(8, 12), l.slice(12, 16)];
                            if (1 !== u[3][3])
                                return null;
                            for (var d = [], h = 0; 4 > h; h++)
                                d.push(u[h].slice());
                            for (var h = 0; 3 > h; h++)
                                d[h][3] = 0;
                            if (0 === e(d))
                                return !1;
                            var f, p = [];
                            if (u[0][3] || u[1][3] || u[2][3]) {
                                p.push(u[0][3]),
                                p.push(u[1][3]),
                                p.push(u[2][3]),
                                p.push(u[3][3]);
                                var g = t(d)
                                  , m = r(g);
                                f = i(p, m)
                            } else
                                f = [0, 0, 0, 1];
                            var v = u[3].slice(0, 3)
                              , y = [];
                            y.push(u[0].slice(0, 3));
                            var b = [];
                            b.push(s(y[0])),
                            y[0] = o(y[0]);
                            var _ = [];
                            y.push(u[1].slice(0, 3)),
                            _.push(n(y[0], y[1])),
                            y[1] = a(y[1], y[0], 1, -_[0]),
                            b.push(s(y[1])),
                            y[1] = o(y[1]),
                            _[0] /= b[1],
                            y.push(u[2].slice(0, 3)),
                            _.push(n(y[0], y[2])),
                            y[2] = a(y[2], y[0], 1, -_[1]),
                            _.push(n(y[1], y[2])),
                            y[2] = a(y[2], y[1], 1, -_[2]),
                            b.push(s(y[2])),
                            y[2] = o(y[2]),
                            _[1] /= b[2],
                            _[2] /= b[2];
                            var w = c(y[1], y[2]);
                            if (n(y[0], w) < 0)
                                for (var h = 0; 3 > h; h++)
                                    b[h] *= -1,
                                    y[h][0] *= -1,
                                    y[h][1] *= -1,
                                    y[h][2] *= -1;
                            var S, k, x = y[0][0] + y[1][1] + y[2][2] + 1;
                            return x > 1e-4 ? (S = .5 / Math.sqrt(x),
                            k = [(y[2][1] - y[1][2]) * S, (y[0][2] - y[2][0]) * S, (y[1][0] - y[0][1]) * S, .25 / S]) : y[0][0] > y[1][1] && y[0][0] > y[2][2] ? (S = 2 * Math.sqrt(1 + y[0][0] - y[1][1] - y[2][2]),
                            k = [.25 * S, (y[0][1] + y[1][0]) / S, (y[0][2] + y[2][0]) / S, (y[2][1] - y[1][2]) / S]) : y[1][1] > y[2][2] ? (S = 2 * Math.sqrt(1 + y[1][1] - y[0][0] - y[2][2]),
                            k = [(y[0][1] + y[1][0]) / S, .25 * S, (y[1][2] + y[2][1]) / S, (y[0][2] - y[2][0]) / S]) : (S = 2 * Math.sqrt(1 + y[2][2] - y[0][0] - y[1][1]),
                            k = [(y[0][2] + y[2][0]) / S, (y[1][2] + y[2][1]) / S, .25 * S, (y[1][0] - y[0][1]) / S]),
                            [v, b, _, k, f]
                        }
                        return l
                    }();
                    e.dot = n,
                    e.makeMatrixDecomposition = a
                }(d, f),
                function(e) {
                    function t(e, t) {
                        var n = e.exec(t);
                        return n ? (n = e.ignoreCase ? n[0].toLowerCase() : n[0],
                        [n, t.substr(n.length)]) : void 0
                    }
                    function n(e, t) {
                        t = t.replace(/^\s*/, "");
                        var n = e(t);
                        return n ? [n[0], n[1].replace(/^\s*/, "")] : void 0
                    }
                    function r(e, r, i) {
                        e = n.bind(null, e);
                        for (var o = []; ; ) {
                            var s = e(i);
                            if (!s)
                                return [o, i];
                            if (o.push(s[0]),
                            i = s[1],
                            s = t(r, i),
                            !s || "" == s[1])
                                return [o, i];
                            i = s[1]
                        }
                    }
                    function i(e, t) {
                        for (var n = 0, r = 0; r < t.length && (!/\s|,/.test(t[r]) || 0 != n); r++)
                            if ("(" == t[r])
                                n++;
                            else if (")" == t[r] && (n--,
                            0 == n && r++,
                            0 >= n))
                                break;
                        var i = e(t.substr(0, r));
                        return void 0 == i ? void 0 : [i, t.substr(r)]
                    }
                    function o(e, t) {
                        for (var n = e, r = t; n && r; )
                            n > r ? n %= r : r %= n;
                        return n = e * t / (n + r)
                    }
                    function s(e) {
                        return function(t) {
                            var n = e(t);
                            return n && (n[0] = void 0),
                            n
                        }
                    }
                    function a(e, t) {
                        return function(n) {
                            var r = e(n);
                            return r ? r : [t, n]
                        }
                    }
                    function c(t, n) {
                        for (var r = [], i = 0; i < t.length; i++) {
                            var o = e.consumeTrimmed(t[i], n);
                            if (!o || "" == o[0])
                                return;
                            void 0 !== o[0] && r.push(o[0]),
                            n = o[1]
                        }
                        return "" == n ? r : void 0
                    }
                    function l(e, t, n, r, i) {
                        for (var s = [], a = [], c = [], l = o(r.length, i.length), u = 0; l > u; u++) {
                            var d = t(r[u % r.length], i[u % i.length]);
                            if (!d)
                                return;
                            s.push(d[0]),
                            a.push(d[1]),
                            c.push(d[2])
                        }
                        return [s, a, function(t) {
                            var r = t.map(function(e, t) {
                                return c[t](e)
                            }).join(n);
                            return e ? e(r) : r
                        }
                        ]
                    }
                    function u(e, t, n) {
                        for (var r = [], i = [], o = [], s = 0, a = 0; a < n.length; a++)
                            if ("function" == typeof n[a]) {
                                var c = n[a](e[s], t[s++]);
                                r.push(c[0]),
                                i.push(c[1]),
                                o.push(c[2])
                            } else
                                !function(e) {
                                    r.push(!1),
                                    i.push(!1),
                                    o.push(function() {
                                        return n[e]
                                    })
                                }(a);
                        return [r, i, function(e) {
                            for (var t = "", n = 0; n < e.length; n++)
                                t += o[n](e[n]);
                            return t
                        }
                        ]
                    }
                    e.consumeToken = t,
                    e.consumeTrimmed = n,
                    e.consumeRepeated = r,
                    e.consumeParenthesised = i,
                    e.ignore = s,
                    e.optional = a,
                    e.consumeList = c,
                    e.mergeNestedRepeated = l.bind(null, null),
                    e.mergeWrappedNestedRepeated = l,
                    e.mergeList = u
                }(d),
                function(e) {
                    function t(t) {
                        function n(t) {
                            var n = e.consumeToken(/^inset/i, t);
                            if (n)
                                return r.inset = !0,
                                n;
                            var n = e.consumeLengthOrPercent(t);
                            if (n)
                                return r.lengths.push(n[0]),
                                n;
                            var n = e.consumeColor(t);
                            return n ? (r.color = n[0],
                            n) : void 0
                        }
                        var r = {
                            inset: !1,
                            lengths: [],
                            color: null
                        }
                          , i = e.consumeRepeated(n, /^/, t);
                        return i && i[0].length ? [r, i[1]] : void 0
                    }
                    function n(n) {
                        var r = e.consumeRepeated(t, /^,/, n);
                        return r && "" == r[1] ? r[0] : void 0
                    }
                    function r(t, n) {
                        for (; t.lengths.length < Math.max(t.lengths.length, n.lengths.length); )
                            t.lengths.push({
                                px: 0
                            });
                        for (; n.lengths.length < Math.max(t.lengths.length, n.lengths.length); )
                            n.lengths.push({
                                px: 0
                            });
                        if (t.inset == n.inset && !!t.color == !!n.color) {
                            for (var r, i = [], o = [[], 0], s = [[], 0], a = 0; a < t.lengths.length; a++) {
                                var c = e.mergeDimensions(t.lengths[a], n.lengths[a], 2 == a);
                                o[0].push(c[0]),
                                s[0].push(c[1]),
                                i.push(c[2])
                            }
                            if (t.color && n.color) {
                                var l = e.mergeColors(t.color, n.color);
                                o[1] = l[0],
                                s[1] = l[1],
                                r = l[2]
                            }
                            return [o, s, function(e) {
                                for (var n = t.inset ? "inset " : " ", o = 0; o < i.length; o++)
                                    n += i[o](e[0][o]) + " ";
                                return r && (n += r(e[1])),
                                n
                            }
                            ]
                        }
                    }
                    function i(t, n, r, i) {
                        function o(e) {
                            return {
                                inset: e,
                                color: [0, 0, 0, 0],
                                lengths: [{
                                    px: 0
                                }, {
                                    px: 0
                                }, {
                                    px: 0
                                }, {
                                    px: 0
                                }]
                            }
                        }
                        for (var s = [], a = [], c = 0; c < r.length || c < i.length; c++) {
                            var l = r[c] || o(i[c].inset)
                              , u = i[c] || o(r[c].inset);
                            s.push(l),
                            a.push(u)
                        }
                        return e.mergeNestedRepeated(t, n, s, a)
                    }
                    var o = i.bind(null, r, ", ");
                    e.addPropertiesHandler(n, o, ["box-shadow", "text-shadow"])
                }(d),
                function(e, t) {
                    function n(e) {
                        return e.toFixed(3).replace(".000", "")
                    }
                    function r(e, t, n) {
                        return Math.min(t, Math.max(e, n))
                    }
                    function i(e) {
                        return /^\s*[-+]?(\d*\.)?\d+\s*$/.test(e) ? Number(e) : void 0
                    }
                    function o(e, t) {
                        return [e, t, n]
                    }
                    function s(e, t) {
                        return 0 != e ? c(0, 1 / 0)(e, t) : void 0
                    }
                    function a(e, t) {
                        return [e, t, function(e) {
                            return Math.round(r(1, 1 / 0, e))
                        }
                        ]
                    }
                    function c(e, t) {
                        return function(i, o) {
                            return [i, o, function(i) {
                                return n(r(e, t, i))
                            }
                            ]
                        }
                    }
                    function l(e, t) {
                        return [e, t, Math.round]
                    }
                    e.clamp = r,
                    e.addPropertiesHandler(i, c(0, 1 / 0), ["border-image-width", "line-height"]),
                    e.addPropertiesHandler(i, c(0, 1), ["opacity", "shape-image-threshold"]),
                    e.addPropertiesHandler(i, s, ["flex-grow", "flex-shrink"]),
                    e.addPropertiesHandler(i, a, ["orphans", "widows"]),
                    e.addPropertiesHandler(i, l, ["z-index"]),
                    e.parseNumber = i,
                    e.mergeNumbers = o,
                    e.numberToString = n
                }(d, f),
                function(e, t) {
                    function n(e, t) {
                        return "visible" == e || "visible" == t ? [0, 1, function(n) {
                            return 0 >= n ? e : n >= 1 ? t : "visible"
                        }
                        ] : void 0
                    }
                    e.addPropertiesHandler(String, n, ["visibility"])
                }(d),
                function(e, t) {
                    function n(e) {
                        e = e.trim(),
                        o.fillStyle = "#000",
                        o.fillStyle = e;
                        var t = o.fillStyle;
                        if (o.fillStyle = "#fff",
                        o.fillStyle = e,
                        t == o.fillStyle) {
                            o.fillRect(0, 0, 1, 1);
                            var n = o.getImageData(0, 0, 1, 1).data;
                            o.clearRect(0, 0, 1, 1);
                            var r = n[3] / 255;
                            return [n[0] * r, n[1] * r, n[2] * r, r]
                        }
                    }
                    function r(t, n) {
                        return [t, n, function(t) {
                            function n(e) {
                                return Math.max(0, Math.min(255, e))
                            }
                            if (t[3])
                                for (var r = 0; 3 > r; r++)
                                    t[r] = Math.round(n(t[r] / t[3]));
                            return t[3] = e.numberToString(e.clamp(0, 1, t[3])),
                            "rgba(" + t.join(",") + ")"
                        }
                        ]
                    }
                    var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                    i.width = i.height = 1;
                    var o = i.getContext("2d");
                    e.addPropertiesHandler(n, r, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "outline-color", "text-decoration-color"]),
                    e.consumeColor = e.consumeParenthesised.bind(null, n),
                    e.mergeColors = r
                }(d, f),
                function(a, b) {
                    function c(a, b) {
                        if (b = b.trim().toLowerCase(),
                        "0" == b && "px".search(a) >= 0)
                            return {
                                px: 0
                            };
                        if (/^[^(]*$|^calc/.test(b)) {
                            b = b.replace(/calc\(/g, "(");
                            var c = {};
                            b = b.replace(a, function(e) {
                                return c[e] = null,
                                "U" + e
                            });
                            for (var d = "U(" + a.source + ")", e = b.replace(/[-+]?(\d*\.)?\d+/g, "N").replace(new RegExp("N" + d,"g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), f = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], g = 0; g < f.length; )
                                f[g].test(e) ? (e = e.replace(f[g], "$1"),
                                g = 0) : g++;
                            if ("D" == e) {
                                for (var h in c) {
                                    var i = eval(b.replace(new RegExp("U" + h,"g"), "").replace(new RegExp(d,"g"), "*0"));
                                    if (!isFinite(i))
                                        return;
                                    c[h] = i
                                }
                                return c
                            }
                        }
                    }
                    function d(t, n) {
                        return e(t, n, !0)
                    }
                    function e(e, t, n) {
                        var r, i = [];
                        for (r in e)
                            i.push(r);
                        for (r in t)
                            i.indexOf(r) < 0 && i.push(r);
                        return e = i.map(function(t) {
                            return e[t] || 0
                        }),
                        t = i.map(function(e) {
                            return t[e] || 0
                        }),
                        [e, t, function(e) {
                            var t = e.map(function(t, r) {
                                return 1 == e.length && n && (t = Math.max(t, 0)),
                                a.numberToString(t) + i[r]
                            }).join(" + ");
                            return e.length > 1 ? "calc(" + t + ")" : t
                        }
                        ]
                    }
                    var f = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc"
                      , g = c.bind(null, new RegExp(f,"g"))
                      , h = c.bind(null, new RegExp(f + "|%","g"))
                      , i = c.bind(null, /deg|rad|grad|turn/g);
                    a.parseLength = g,
                    a.parseLengthOrPercent = h,
                    a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, h),
                    a.parseAngle = i,
                    a.mergeDimensions = e;
                    var j = a.consumeParenthesised.bind(null, g)
                      , k = a.consumeRepeated.bind(void 0, j, /^/)
                      , l = a.consumeRepeated.bind(void 0, k, /^,/);
                    a.consumeSizePairList = l;
                    var m = function(e) {
                        var t = l(e);
                        return t && "" == t[1] ? t[0] : void 0
                    }
                      , n = a.mergeNestedRepeated.bind(void 0, d, " ")
                      , o = a.mergeNestedRepeated.bind(void 0, n, ",");
                    a.mergeNonNegativeSizePair = n,
                    a.addPropertiesHandler(m, o, ["background-size"]),
                    a.addPropertiesHandler(h, d, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]),
                    a.addPropertiesHandler(h, e, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "text-indent", "top", "vertical-align", "word-spacing"])
                }(d, f),
                function(e, t) {
                    function n(t) {
                        return e.consumeLengthOrPercent(t) || e.consumeToken(/^auto/, t)
                    }
                    function r(t) {
                        var r = e.consumeList([e.ignore(e.consumeToken.bind(null, /^rect/)), e.ignore(e.consumeToken.bind(null, /^\(/)), e.consumeRepeated.bind(null, n, /^,/), e.ignore(e.consumeToken.bind(null, /^\)/))], t);
                        return r && 4 == r[0].length ? r[0] : void 0
                    }
                    function i(t, n) {
                        return "auto" == t || "auto" == n ? [!0, !1, function(r) {
                            var i = r ? t : n;
                            if ("auto" == i)
                                return "auto";
                            var o = e.mergeDimensions(i, i);
                            return o[2](o[0])
                        }
                        ] : e.mergeDimensions(t, n)
                    }
                    function o(e) {
                        return "rect(" + e + ")"
                    }
                    var s = e.mergeWrappedNestedRepeated.bind(null, o, i, ", ");
                    e.parseBox = r,
                    e.mergeBoxes = s,
                    e.addPropertiesHandler(r, s, ["clip"])
                }(d, f),
                function(e, t) {
                    function n(e) {
                        return function(t) {
                            var n = 0;
                            return e.map(function(e) {
                                return e === u ? t[n++] : e
                            })
                        }
                    }
                    function r(e) {
                        return e
                    }
                    function i(t) {
                        if (t = t.toLowerCase().trim(),
                        "none" == t)
                            return [];
                        for (var n, r = /\s*(\w+)\(([^)]*)\)/g, i = [], o = 0; n = r.exec(t); ) {
                            if (n.index != o)
                                return;
                            o = n.index + n[0].length;
                            var s = n[1]
                              , a = f[s];
                            if (!a)
                                return;
                            var c = n[2].split(",")
                              , l = a[0];
                            if (l.length < c.length)
                                return;
                            for (var u = [], p = 0; p < l.length; p++) {
                                var g, m = c[p], v = l[p];
                                if (g = m ? {
                                    A: function(t) {
                                        return "0" == t.trim() ? h : e.parseAngle(t)
                                    },
                                    N: e.parseNumber,
                                    T: e.parseLengthOrPercent,
                                    L: e.parseLength
                                }[v.toUpperCase()](m) : {
                                    a: h,
                                    n: u[0],
                                    t: d
                                }[v],
                                void 0 === g)
                                    return;
                                u.push(g)
                            }
                            if (i.push({
                                t: s,
                                d: u
                            }),
                            r.lastIndex == t.length)
                                return i
                        }
                    }
                    function o(e) {
                        return e.toFixed(6).replace(".000000", "")
                    }
                    function s(t, n) {
                        if (t.decompositionPair !== n) {
                            t.decompositionPair = n;
                            var r = e.makeMatrixDecomposition(t)
                        }
                        if (n.decompositionPair !== t) {
                            n.decompositionPair = t;
                            var i = e.makeMatrixDecomposition(n)
                        }
                        return null == r[0] || null == i[0] ? [[!1], [!0], function(e) {
                            return e ? n[0].d : t[0].d
                        }
                        ] : (r[0].push(0),
                        i[0].push(1),
                        [r, i, function(t) {
                            var n = e.quat(r[0][3], i[0][3], t[5])
                              , s = e.composeMatrix(t[0], t[1], t[2], n, t[4])
                              , a = s.map(o).join(",");
                            return a
                        }
                        ])
                    }
                    function a(e) {
                        return e.replace(/[xy]/, "")
                    }
                    function c(e) {
                        return e.replace(/(x|y|z|3d)?$/, "3d")
                    }
                    function l(t, n) {
                        var r = e.makeMatrixDecomposition && !0
                          , i = !1;
                        if (!t.length || !n.length) {
                            t.length || (i = !0,
                            t = n,
                            n = []);
                            for (var o = 0; o < t.length; o++) {
                                var l = t[o].t
                                  , u = t[o].d
                                  , d = "scale" == l.substr(0, 5) ? 1 : 0;
                                n.push({
                                    t: l,
                                    d: u.map(function(e) {
                                        if ("number" == typeof e)
                                            return d;
                                        var t = {};
                                        for (var n in e)
                                            t[n] = d;
                                        return t
                                    })
                                })
                            }
                        }
                        var h = function(e, t) {
                            return "perspective" == e && "perspective" == t || ("matrix" == e || "matrix3d" == e) && ("matrix" == t || "matrix3d" == t)
                        }
                          , p = []
                          , g = []
                          , m = [];
                        if (t.length != n.length) {
                            if (!r)
                                return;
                            var v = s(t, n);
                            p = [v[0]],
                            g = [v[1]],
                            m = [["matrix", [v[2]]]]
                        } else
                            for (var o = 0; o < t.length; o++) {
                                var l, y = t[o].t, b = n[o].t, _ = t[o].d, w = n[o].d, S = f[y], k = f[b];
                                if (h(y, b)) {
                                    if (!r)
                                        return;
                                    var v = s([t[o]], [n[o]]);
                                    p.push(v[0]),
                                    g.push(v[1]),
                                    m.push(["matrix", [v[2]]])
                                } else {
                                    if (y == b)
                                        l = y;
                                    else if (S[2] && k[2] && a(y) == a(b))
                                        l = a(y),
                                        _ = S[2](_),
                                        w = k[2](w);
                                    else {
                                        if (!S[1] || !k[1] || c(y) != c(b)) {
                                            if (!r)
                                                return;
                                            var v = s(t, n);
                                            p = [v[0]],
                                            g = [v[1]],
                                            m = [["matrix", [v[2]]]];
                                            break
                                        }
                                        l = c(y),
                                        _ = S[1](_),
                                        w = k[1](w)
                                    }
                                    for (var x = [], E = [], T = [], C = 0; C < _.length; C++) {
                                        var A = "number" == typeof _[C] ? e.mergeNumbers : e.mergeDimensions
                                          , v = A(_[C], w[C]);
                                        x[C] = v[0],
                                        E[C] = v[1],
                                        T.push(v[2])
                                    }
                                    p.push(x),
                                    g.push(E),
                                    m.push([l, T])
                                }
                            }
                        if (i) {
                            var $ = p;
                            p = g,
                            g = $
                        }
                        return [p, g, function(e) {
                            return e.map(function(e, t) {
                                var n = e.map(function(e, n) {
                                    return m[t][1][n](e)
                                }).join(",");
                                return "matrix" == m[t][0] && 16 == n.split(",").length && (m[t][0] = "matrix3d"),
                                m[t][0] + "(" + n + ")"
                            }).join(" ")
                        }
                        ]
                    }
                    var u = null
                      , d = {
                        px: 0
                    }
                      , h = {
                        deg: 0
                    }
                      , f = {
                        matrix: ["NNNNNN", [u, u, 0, 0, u, u, 0, 0, 0, 0, 1, 0, u, u, 0, 1], r],
                        matrix3d: ["NNNNNNNNNNNNNNNN", r],
                        rotate: ["A"],
                        rotatex: ["A"],
                        rotatey: ["A"],
                        rotatez: ["A"],
                        rotate3d: ["NNNA"],
                        perspective: ["L"],
                        scale: ["Nn", n([u, u, 1]), r],
                        scalex: ["N", n([u, 1, 1]), n([u, 1])],
                        scaley: ["N", n([1, u, 1]), n([1, u])],
                        scalez: ["N", n([1, 1, u])],
                        scale3d: ["NNN", r],
                        skew: ["Aa", null, r],
                        skewx: ["A", null, n([u, h])],
                        skewy: ["A", null, n([h, u])],
                        translate: ["Tt", n([u, u, d]), r],
                        translatex: ["T", n([u, d, d]), n([u, d])],
                        translatey: ["T", n([d, u, d]), n([d, u])],
                        translatez: ["L", n([d, d, u])],
                        translate3d: ["TTL", r]
                    };
                    e.addPropertiesHandler(i, l, ["transform"])
                }(d, f),
                function(e) {
                    function t(e) {
                        var t = Number(e);
                        return isNaN(t) || 100 > t || t > 900 || t % 100 !== 0 ? void 0 : t
                    }
                    function n(t) {
                        return t = 100 * Math.round(t / 100),
                        t = e.clamp(100, 900, t),
                        400 === t ? "normal" : 700 === t ? "bold" : String(t)
                    }
                    function r(e, t) {
                        return [e, t, n]
                    }
                    e.addPropertiesHandler(t, r, ["font-weight"])
                }(d),
                function(e) {
                    function t(e) {
                        var t = {};
                        for (var n in e)
                            t[n] = -e[n];
                        return t
                    }
                    function n(t) {
                        return e.consumeToken(/^(left|center|right|top|bottom)\b/i, t) || e.consumeLengthOrPercent(t)
                    }
                    function r(t, r) {
                        var i = e.consumeRepeated(n, /^/, r);
                        if (i && "" == i[1]) {
                            var o = i[0];
                            if (o[0] = o[0] || "center",
                            o[1] = o[1] || "center",
                            3 == t && (o[2] = o[2] || {
                                px: 0
                            }),
                            o.length == t) {
                                if (/top|bottom/.test(o[0]) || /left|right/.test(o[1])) {
                                    var a = o[0];
                                    o[0] = o[1],
                                    o[1] = a
                                }
                                if (/left|right|center|Object/.test(o[0]) && /top|bottom|center|Object/.test(o[1]))
                                    return o.map(function(e) {
                                        return "object" == ("undefined" == typeof e ? "undefined" : _typeof(e)) ? e : s[e]
                                    })
                            }
                        }
                    }
                    function i(r) {
                        var i = e.consumeRepeated(n, /^/, r);
                        if (i) {
                            for (var o = i[0], a = [{
                                "%": 50
                            }, {
                                "%": 50
                            }], c = 0, l = !1, u = 0; u < o.length; u++) {
                                var d = o[u];
                                "string" == typeof d ? (l = /bottom|right/.test(d),
                                c = {
                                    left: 0,
                                    right: 0,
                                    center: c,
                                    top: 1,
                                    bottom: 1
                                }[d],
                                a[c] = s[d],
                                "center" == d && c++) : (l && (d = t(d),
                                d["%"] = (d["%"] || 0) + 100),
                                a[c] = d,
                                c++,
                                l = !1)
                            }
                            return [a, i[1]]
                        }
                    }
                    function o(t) {
                        var n = e.consumeRepeated(i, /^,/, t);
                        return n && "" == n[1] ? n[0] : void 0
                    }
                    var s = {
                        left: {
                            "%": 0
                        },
                        center: {
                            "%": 50
                        },
                        right: {
                            "%": 100
                        },
                        top: {
                            "%": 0
                        },
                        bottom: {
                            "%": 100
                        }
                    }
                      , a = e.mergeNestedRepeated.bind(null, e.mergeDimensions, " ");
                    e.addPropertiesHandler(r.bind(null, 3), a, ["transform-origin"]),
                    e.addPropertiesHandler(r.bind(null, 2), a, ["perspective-origin"]),
                    e.consumePosition = i,
                    e.mergeOffsetList = a;
                    var c = e.mergeNestedRepeated.bind(null, a, ", ");
                    e.addPropertiesHandler(o, c, ["background-position", "object-position"])
                }(d),
                function(e) {
                    function t(t) {
                        var n = e.consumeToken(/^circle/, t);
                        if (n && n[0])
                            return ["circle"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0, /^\(/)), r, e.ignore(e.consumeToken.bind(void 0, /^at/)), e.consumePosition, e.ignore(e.consumeToken.bind(void 0, /^\)/))], n[1]));
                        var o = e.consumeToken(/^ellipse/, t);
                        if (o && o[0])
                            return ["ellipse"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0, /^\(/)), i, e.ignore(e.consumeToken.bind(void 0, /^at/)), e.consumePosition, e.ignore(e.consumeToken.bind(void 0, /^\)/))], o[1]));
                        var s = e.consumeToken(/^polygon/, t);
                        return s && s[0] ? ["polygon"].concat(e.consumeList([e.ignore(e.consumeToken.bind(void 0, /^\(/)), e.optional(e.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), e.consumeSizePairList, e.ignore(e.consumeToken.bind(void 0, /^\)/))], s[1])) : void 0
                    }
                    function n(t, n) {
                        return t[0] === n[0] ? "circle" == t[0] ? e.mergeList(t.slice(1), n.slice(1), ["circle(", e.mergeDimensions, " at ", e.mergeOffsetList, ")"]) : "ellipse" == t[0] ? e.mergeList(t.slice(1), n.slice(1), ["ellipse(", e.mergeNonNegativeSizePair, " at ", e.mergeOffsetList, ")"]) : "polygon" == t[0] && t[1] == n[1] ? e.mergeList(t.slice(2), n.slice(2), ["polygon(", t[1], s, ")"]) : void 0 : void 0
                    }
                    var r = e.consumeParenthesised.bind(null, e.parseLengthOrPercent)
                      , i = e.consumeRepeated.bind(void 0, r, /^/)
                      , o = e.mergeNestedRepeated.bind(void 0, e.mergeDimensions, " ")
                      , s = e.mergeNestedRepeated.bind(void 0, o, ",");
                    e.addPropertiesHandler(t, n, ["shape-outside"])
                }(d),
                function(e, t) {
                    function n(e, t) {
                        t.concat([e]).forEach(function(t) {
                            t in document.documentElement.style && (r[e] = t)
                        })
                    }
                    var r = {};
                    n("transform", ["webkitTransform", "msTransform"]),
                    n("transformOrigin", ["webkitTransformOrigin"]),
                    n("perspective", ["webkitPerspective"]),
                    n("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
                    e.propertyName = function(e) {
                        return r[e] || e
                    }
                }(d, f)
            }(),
            !function() {
                if (void 0 === document.createElement("div").animate([]).oncancel) {
                    var e;
                    if (window.performance && performance.now)
                        var e = function() {
                            return performance.now()
                        };
                    else
                        var e = function() {
                            return Date.now()
                        };
                    var t = function(e, t, n) {
                        this.target = e,
                        this.currentTime = t,
                        this.timelineTime = n,
                        this.type = "cancel",
                        this.bubbles = !1,
                        this.cancelable = !1,
                        this.currentTarget = e,
                        this.defaultPrevented = !1,
                        this.eventPhase = Event.AT_TARGET,
                        this.timeStamp = Date.now()
                    }
                      , n = window.Element.prototype.animate;
                    window.Element.prototype.animate = function(r, i) {
                        var o = n.call(this, r, i);
                        o._cancelHandlers = [],
                        o.oncancel = null;
                        var s = o.cancel;
                        o.cancel = function() {
                            s.call(this);
                            var n = new t(this,null,e())
                              , r = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
                            setTimeout(function() {
                                r.forEach(function(e) {
                                    e.call(n.target, n)
                                })
                            }, 0)
                        }
                        ;
                        var a = o.addEventListener;
                        o.addEventListener = function(e, t) {
                            "function" == typeof t && "cancel" == e ? this._cancelHandlers.push(t) : a.call(this, e, t)
                        }
                        ;
                        var c = o.removeEventListener;
                        return o.removeEventListener = function(e, t) {
                            if ("cancel" == e) {
                                var n = this._cancelHandlers.indexOf(t);
                                n >= 0 && this._cancelHandlers.splice(n, 1)
                            } else
                                c.call(this, e, t)
                        }
                        ,
                        o
                    }
                }
            }(),
            function(e) {
                var t = document.documentElement
                  , n = null
                  , r = !1;
                try {
                    var i = getComputedStyle(t).getPropertyValue("opacity")
                      , o = "0" == i ? "1" : "0";
                    n = t.animate({
                        opacity: [o, o]
                    }, {
                        duration: 1
                    }),
                    n.currentTime = 0,
                    r = getComputedStyle(t).getPropertyValue("opacity") == o
                } catch (s) {} finally {
                    n && n.cancel()
                }
                if (!r) {
                    var a = window.Element.prototype.animate;
                    window.Element.prototype.animate = function(t, n) {
                        return window.Symbol && Symbol.iterator && Array.prototype.from && t[Symbol.iterator] && (t = Array.from(t)),
                        Array.isArray(t) || null === t || (t = e.convertToArrayForm(t)),
                        a.call(this, t, n)
                    }
                }
            }(c),
            b["true"] = a
        }({}, "undefined" != typeof window ? window : void 0)
    }
    , {}],
    103: [function(e, t, n) {
        "use strict";
        window.$ = window.jQuery = e("jquery"),
        window.I18n = e("i18n-js"),
        window.I18n.defaultLocale = "ru",
        window.I18n.locale = $("html").attr("lang") || window.I18n.defaultLocale,
        I18n.pluralization.ru = function(e) {
            var t = e % 10 == 1 && e % 100 != 11 ? "one" : [2, 3, 4].indexOf(e % 10) >= 0 && [12, 13, 14].indexOf(e % 100) < 0 ? "few" : e % 10 == 0 || [5, 6, 7, 8, 9].indexOf(e % 10) >= 0 || [11, 12, 13, 14].indexOf(e % 100) >= 0 ? "many" : "other";
            return [t]
        }
        ,
        window.I18n.translations = {
            ru: {},
            en: {}
        },
        {
            "..": {
                "..": {
                    modules: {
                        modules: {
                            navigator: {
                                locale: e("../../modules/modules/navigator/locale.js")
                            },
                            test: {
                                locale: e("../../modules/modules/test/locale.js")
                            }
                        }
                    }
                }
            }
        };
        var r = e("inobounce");
        e("./jquery/dataSrc")($),
        e("./jquery/displayImage")($),
        e("./jquery/distanceFromTop")($),
        e("./jquery/turnstop")($),
        e("./jquery/ensureIsVisible")($),
        e("./jquery/backgroundImageSize")($),
        e("./jquery/backgroundImageOffset")($),
        e("./jquery/preventTouchFromHittingBounds")($),
        e("./jquery/forceRedraw")($),
        e("./jquery/cssSelector")($),
        e("./jquery/animationsObject")($),
        e("./lib/jquery.highlightWords"),
        e("./lib/requestFrame"),
        e("./app"),
        window.application.nonRetinaImages = window.application.nonRetinaImages.reduce(function(e, t) {
            return e[t] = !0,
            e
        }, {}),
        window.application.isOnRetinaDevice = function() {
            var e = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
            return window.devicePixelRatio > 1 || !(!window.matchMedia || !window.matchMedia(e).matches)
        }(),
        r.disable()
    }
    , {
        "../../modules/modules/navigator/locale.js": 31,
        "../../modules/modules/test/locale.js": 43,
        "./app": 49,
        "./jquery/animationsObject": 86,
        "./jquery/backgroundImageOffset": 87,
        "./jquery/backgroundImageSize": 88,
        "./jquery/cssSelector": 89,
        "./jquery/dataSrc": 90,
        "./jquery/displayImage": 91,
        "./jquery/distanceFromTop": 92,
        "./jquery/ensureIsVisible": 93,
        "./jquery/forceRedraw": 94,
        "./jquery/preventTouchFromHittingBounds": 95,
        "./jquery/turnstop": 96,
        "./lib/jquery.highlightWords": 98,
        "./lib/requestFrame": 99,
        "i18n-js": 46,
        inobounce: 97,
        jquery: 47
    }],
    104: [function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(e) {
            if ("function" == typeof define && define.amd)
                define(e);
            else if ("object" === ("undefined" == typeof n ? "undefined" : r(n)))
                t.exports = e();
            else {
                var i = window.Cookies
                  , o = window.Cookies = e();
                o.noConflict = function() {
                    return window.Cookies = i,
                    o
                }
            }
        }(function() {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n)
                        t[r] = n[r]
                }
                return t
            }
            function t(n) {
                function r(t, i, o) {
                    var s;
                    if (arguments.length > 1) {
                        if (o = e({
                            path: "/"
                        }, r.defaults, o),
                        "number" == typeof o.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires),
                            o.expires = a
                        }
                        try {
                            s = JSON.stringify(i),
                            /^[\{\[]/.test(s) && (i = s)
                        } catch (c) {}
                        return i = encodeURIComponent(String(i)),
                        i = i.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)),
                        t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        t = t.replace(/[\(\)]/g, escape),
                        document.cookie = [t, "=", i, o.expires && "; expires=" + o.expires.toUTCString(), o.path && "; path=" + o.path, o.domain && "; domain=" + o.domain, o.secure ? "; secure" : ""].join("")
                    }
                    t || (s = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], u = /(%[0-9A-Z]{2})+/g, d = 0; d < l.length; d++) {
                        var h = l[d].split("=")
                          , f = h[0].replace(u, decodeURIComponent)
                          , p = h.slice(1).join("=");
                        '"' === p.charAt(0) && (p = p.slice(1, -1));
                        try {
                            if (p = n && n(p, f) || p.replace(u, decodeURIComponent),
                            this.json)
                                try {
                                    p = JSON.parse(p)
                                } catch (c) {}
                            if (t === f) {
                                s = p;
                                break
                            }
                            t || (s[f] = p)
                        } catch (c) {}
                    }
                    return s
                }
                return r.get = r.set = r,
                r.getJSON = function() {
                    return r.apply({
                        json: !0
                    }, [].slice.call(arguments))
                }
                ,
                r.defaults = {},
                r.remove = function(t, n) {
                    r(t, "", e(n, {
                        expires: -1
                    }))
                }
                ,
                r.withConverter = t,
                r
            }
            return t()
        })
    }
    , {}],
    105: [function(e, t, n) {
        (function(e) {
            "use strict";
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            (function(t, r, i, o, a) {
                this.createjs = this.createjs || {},
                function() {
                    var e = createjs.PreloadJS = createjs.PreloadJS || {};
                    e.version = "0.6.2",
                    e.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
                }(),
                this.createjs = this.createjs || {},
                createjs.extend = function(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    return n.prototype = t.prototype,
                    e.prototype = new n
                }
                ,
                this.createjs = this.createjs || {},
                createjs.promote = function(e, t) {
                    var n = e.prototype
                      , r = Object.getPrototypeOf && Object.getPrototypeOf(n) || n.__proto__;
                    if (r) {
                        n[(t += "_") + "constructor"] = r.constructor;
                        for (var i in r)
                            n.hasOwnProperty(i) && "function" == typeof r[i] && (n[t + i] = r[i])
                    }
                    return e
                }
                ,
                this.createjs = this.createjs || {},
                function() {
                    createjs.proxy = function(e, t) {
                        var n = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            return e.apply(t, Array.prototype.slice.call(arguments, 0).concat(n))
                        }
                    }
                }(),
                this.createjs = this.createjs || {},
                createjs.indexOf = function(e, t) {
                    for (var n = 0, r = e.length; r > n; n++)
                        if (t === e[n])
                            return n;
                    return -1
                }
                ,
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.type = e,
                        this.target = null,
                        this.currentTarget = null,
                        this.eventPhase = 0,
                        this.bubbles = !!t,
                        this.cancelable = !!n,
                        this.timeStamp = (new Date).getTime(),
                        this.defaultPrevented = !1,
                        this.propagationStopped = !1,
                        this.immediatePropagationStopped = !1,
                        this.removed = !1
                    }
                    var t = e.prototype;
                    t.preventDefault = function() {
                        this.defaultPrevented = this.cancelable && !0
                    }
                    ,
                    t.stopPropagation = function() {
                        this.propagationStopped = !0
                    }
                    ,
                    t.stopImmediatePropagation = function() {
                        this.immediatePropagationStopped = this.propagationStopped = !0
                    }
                    ,
                    t.remove = function() {
                        this.removed = !0
                    }
                    ,
                    t.clone = function() {
                        return new e(this.type,this.bubbles,this.cancelable)
                    }
                    ,
                    t.set = function(e) {
                        for (var t in e)
                            this[t] = e[t];
                        return this
                    }
                    ,
                    t.toString = function() {
                        return "[Event (type=" + this.type + ")]"
                    }
                    ,
                    createjs.Event = e
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.Event_constructor("error"),
                        this.title = e,
                        this.message = t,
                        this.data = n
                    }
                    var t = createjs.extend(e, createjs.Event);
                    t.clone = function() {
                        return new createjs.ErrorEvent(this.title,this.message,this.data)
                    }
                    ,
                    createjs.ErrorEvent = createjs.promote(e, "Event")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e() {
                        this._listeners = null,
                        this._captureListeners = null
                    }
                    var t = e.prototype;
                    e.initialize = function(e) {
                        e.addEventListener = t.addEventListener,
                        e.on = t.on,
                        e.removeEventListener = e.off = t.removeEventListener,
                        e.removeAllEventListeners = t.removeAllEventListeners,
                        e.hasEventListener = t.hasEventListener,
                        e.dispatchEvent = t.dispatchEvent,
                        e._dispatchEvent = t._dispatchEvent,
                        e.willTrigger = t.willTrigger
                    }
                    ,
                    t.addEventListener = function(e, t, n) {
                        var r;
                        r = n ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
                        var i = r[e];
                        return i && this.removeEventListener(e, t, n),
                        i = r[e],
                        i ? i.push(t) : r[e] = [t],
                        t
                    }
                    ,
                    t.on = function(e, t, n, r, i, o) {
                        return t.handleEvent && (n = n || t,
                        t = t.handleEvent),
                        n = n || this,
                        this.addEventListener(e, function(e) {
                            t.call(n, e, i),
                            r && e.remove()
                        }, o)
                    }
                    ,
                    t.removeEventListener = function(e, t, n) {
                        var r = n ? this._captureListeners : this._listeners;
                        if (r) {
                            var i = r[e];
                            if (i)
                                for (var o = 0, s = i.length; s > o; o++)
                                    if (i[o] == t) {
                                        1 == s ? delete r[e] : i.splice(o, 1);
                                        break
                                    }
                        }
                    }
                    ,
                    t.off = t.removeEventListener,
                    t.removeAllEventListeners = function(e) {
                        e ? (this._listeners && delete this._listeners[e],
                        this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
                    }
                    ,
                    t.dispatchEvent = function(e, t, n) {
                        if ("string" == typeof e) {
                            var r = this._listeners;
                            if (!(t || r && r[e]))
                                return !0;
                            e = new createjs.Event(e,t,n)
                        } else
                            e.target && e.clone && (e = e.clone());
                        try {
                            e.target = this
                        } catch (i) {}
                        if (e.bubbles && this.parent) {
                            for (var o = this, s = [o]; o.parent; )
                                s.push(o = o.parent);
                            var a, c = s.length;
                            for (a = c - 1; a >= 0 && !e.propagationStopped; a--)
                                s[a]._dispatchEvent(e, 1 + (0 == a));
                            for (a = 1; c > a && !e.propagationStopped; a++)
                                s[a]._dispatchEvent(e, 3)
                        } else
                            this._dispatchEvent(e, 2);
                        return !e.defaultPrevented
                    }
                    ,
                    t.hasEventListener = function(e) {
                        var t = this._listeners
                          , n = this._captureListeners;
                        return !!(t && t[e] || n && n[e])
                    }
                    ,
                    t.willTrigger = function(e) {
                        for (var t = this; t; ) {
                            if (t.hasEventListener(e))
                                return !0;
                            t = t.parent
                        }
                        return !1
                    }
                    ,
                    t.toString = function() {
                        return "[EventDispatcher]"
                    }
                    ,
                    t._dispatchEvent = function(e, t) {
                        var n, r = 1 == t ? this._captureListeners : this._listeners;
                        if (e && r) {
                            var i = r[e.type];
                            if (!i || !(n = i.length))
                                return;
                            try {
                                e.currentTarget = this
                            } catch (o) {}
                            try {
                                e.eventPhase = t
                            } catch (o) {}
                            e.removed = !1,
                            i = i.slice();
                            for (var s = 0; n > s && !e.immediatePropagationStopped; s++) {
                                var a = i[s];
                                a.handleEvent ? a.handleEvent(e) : a(e),
                                e.removed && (this.off(e.type, a, 1 == t),
                                e.removed = !1)
                            }
                        }
                    }
                    ,
                    createjs.EventDispatcher = e
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.Event_constructor("progress"),
                        this.loaded = e,
                        this.total = null == t ? 1 : t,
                        this.progress = 0 == t ? 0 : this.loaded / this.total
                    }
                    var t = createjs.extend(e, createjs.Event);
                    t.clone = function() {
                        return new createjs.ProgressEvent(this.loaded,this.total)
                    }
                    ,
                    createjs.ProgressEvent = createjs.promote(e, "Event")
                }(window),
                function() {
                    function i(e, t) {
                        function r(e) {
                            if (r[e] !== v)
                                return r[e];
                            var n;
                            if ("bug-string-char-index" == e)
                                n = "a" != "a"[0];
                            else if ("json" == e)
                                n = r("json-stringify") && r("json-parse");
                            else {
                                var i, a = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                if ("json-stringify" == e) {
                                    var c = t.stringify
                                      , l = "function" == typeof c && _;
                                    if (l) {
                                        (i = function() {
                                            return 1
                                        }
                                        ).toJSON = i;
                                        try {
                                            l = "0" === c(0) && "0" === c(new o) && '""' == c(new s) && c(b) === v && c(v) === v && c() === v && "1" === c(i) && "[1]" == c([i]) && "[null]" == c([v]) && "null" == c(null) && "[null,null,null]" == c([v, b, null]) && c({
                                                a: [i, !0, !1, null, "\0\b\n\f\r  "]
                                            }) == a && "1" === c(null, i) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new u((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == c(new u(864e13)) && '"-000001-01-01T00:00:00.000Z"' == c(new u((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == c(new u((-1)))
                                        } catch (d) {
                                            l = !1
                                        }
                                    }
                                    n = l
                                }
                                if ("json-parse" == e) {
                                    var h = t.parse;
                                    if ("function" == typeof h)
                                        try {
                                            if (0 === h("0") && !h(!1)) {
                                                i = h(a);
                                                var f = 5 == i.a.length && 1 === i.a[0];
                                                if (f) {
                                                    try {
                                                        f = !h('" "')
                                                    } catch (d) {}
                                                    if (f)
                                                        try {
                                                            f = 1 !== h("01")
                                                        } catch (d) {}
                                                    if (f)
                                                        try {
                                                            f = 1 !== h("1.")
                                                        } catch (d) {}
                                                }
                                            }
                                        } catch (d) {
                                            f = !1
                                        }
                                    n = f
                                }
                            }
                            return r[e] = !!n
                        }
                        e || (e = l.Object()),
                        t || (t = l.Object());
                        var o = e.Number || l.Number
                          , s = e.String || l.String
                          , c = e.Object || l.Object
                          , u = e.Date || l.Date
                          , d = e.SyntaxError || l.SyntaxError
                          , h = e.TypeError || l.TypeError
                          , f = e.Math || l.Math
                          , p = e.JSON || l.JSON;
                        "object" == ("undefined" == typeof p ? "undefined" : n(p)) && p && (t.stringify = p.stringify,
                        t.parse = p.parse);
                        var g, m, v, y = c.prototype, b = y.toString, _ = new u((-0xc782b5b800cec));
                        try {
                            _ = -109252 == _.getUTCFullYear() && 0 === _.getUTCMonth() && 1 === _.getUTCDate() && 10 == _.getUTCHours() && 37 == _.getUTCMinutes() && 6 == _.getUTCSeconds() && 708 == _.getUTCMilliseconds()
                        } catch (w) {}
                        if (!r("json")) {
                            var S = "[object Function]"
                              , k = "[object Date]"
                              , x = "[object Number]"
                              , E = "[object String]"
                              , T = "[object Array]"
                              , C = "[object Boolean]"
                              , A = r("bug-string-char-index");
                            if (!_)
                                var $ = f.floor
                                  , L = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                                  , j = function(e, t) {
                                    return L[t] + 365 * (e - 1970) + $((e - 1969 + (t = +(t > 1))) / 4) - $((e - 1901 + t) / 100) + $((e - 1601 + t) / 400)
                                };
                            if ((g = y.hasOwnProperty) || (g = function(e) {
                                var t, n = {};
                                return (n.__proto__ = null,
                                n.__proto__ = {
                                    toString: 1
                                },
                                n).toString != b ? g = function(e) {
                                    var t = this.__proto__
                                      , n = e in (this.__proto__ = null,
                                    this);
                                    return this.__proto__ = t,
                                    n
                                }
                                : (t = n.constructor,
                                g = function(e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }
                                ),
                                n = null,
                                g.call(this, e)
                            }
                            ),
                            m = function(e, t) {
                                var r, i, o, s = 0;
                                (r = function() {
                                    this.valueOf = 0
                                }
                                ).prototype.valueOf = 0,
                                i = new r;
                                for (o in i)
                                    g.call(i, o) && s++;
                                return r = i = null,
                                s ? m = 2 == s ? function(e, t) {
                                    var n, r = {}, i = b.call(e) == S;
                                    for (n in e)
                                        i && "prototype" == n || g.call(r, n) || !(r[n] = 1) || !g.call(e, n) || t(n)
                                }
                                : function(e, t) {
                                    var n, r, i = b.call(e) == S;
                                    for (n in e)
                                        i && "prototype" == n || !g.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || g.call(e, n = "constructor")) && t(n)
                                }
                                : (i = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                                m = function(e, t) {
                                    var r, o, s = b.call(e) == S, c = !s && "function" != typeof e.constructor && a[n(e.hasOwnProperty)] && e.hasOwnProperty || g;
                                    for (r in e)
                                        s && "prototype" == r || !c.call(e, r) || t(r);
                                    for (o = i.length; r = i[--o]; c.call(e, r) && t(r))
                                        ;
                                }
                                ),
                                m(e, t)
                            }
                            ,
                            !r("json-stringify")) {
                                var I = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                }
                                  , O = "000000"
                                  , R = function(e, t) {
                                    return (O + (t || 0)).slice(-e)
                                }
                                  , P = "\\u00"
                                  , N = function(e) {
                                    for (var t = '"', n = 0, r = e.length, i = !A || r > 10, o = i && (A ? e.split("") : e); r > n; n++) {
                                        var s = e.charCodeAt(n);
                                        switch (s) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            t += I[s];
                                            break;
                                        default:
                                            if (32 > s) {
                                                t += P + R(2, s.toString(16));
                                                break
                                            }
                                            t += i ? o[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                }
                                  , M = function U(e, t, r, i, o, s, a) {
                                    var c, l, u, d, f, p, y, _, w, S, A, L, I, O, P, M;
                                    try {
                                        c = t[e]
                                    } catch (H) {}
                                    if ("object" == ("undefined" == typeof c ? "undefined" : n(c)) && c)
                                        if (l = b.call(c),
                                        l != k || g.call(c, "toJSON"))
                                            "function" == typeof c.toJSON && (l != x && l != E && l != T || g.call(c, "toJSON")) && (c = c.toJSON(e));
                                        else if (c > -1 / 0 && 1 / 0 > c) {
                                            if (j) {
                                                for (f = $(c / 864e5),
                                                u = $(f / 365.2425) + 1970 - 1; j(u + 1, 0) <= f; u++)
                                                    ;
                                                for (d = $((f - j(u, 0)) / 30.42); j(u, d + 1) <= f; d++)
                                                    ;
                                                f = 1 + f - j(u, d),
                                                p = (c % 864e5 + 864e5) % 864e5,
                                                y = $(p / 36e5) % 24,
                                                _ = $(p / 6e4) % 60,
                                                w = $(p / 1e3) % 60,
                                                S = p % 1e3
                                            } else
                                                u = c.getUTCFullYear(),
                                                d = c.getUTCMonth(),
                                                f = c.getUTCDate(),
                                                y = c.getUTCHours(),
                                                _ = c.getUTCMinutes(),
                                                w = c.getUTCSeconds(),
                                                S = c.getUTCMilliseconds();
                                            c = (0 >= u || u >= 1e4 ? (0 > u ? "-" : "+") + R(6, 0 > u ? -u : u) : R(4, u)) + "-" + R(2, d + 1) + "-" + R(2, f) + "T" + R(2, y) + ":" + R(2, _) + ":" + R(2, w) + "." + R(3, S) + "Z"
                                        } else
                                            c = null;
                                    if (r && (c = r.call(t, e, c)),
                                    null === c)
                                        return "null";
                                    if (l = b.call(c),
                                    l == C)
                                        return "" + c;
                                    if (l == x)
                                        return c > -1 / 0 && 1 / 0 > c ? "" + c : "null";
                                    if (l == E)
                                        return N("" + c);
                                    if ("object" == ("undefined" == typeof c ? "undefined" : n(c))) {
                                        for (O = a.length; O--; )
                                            if (a[O] === c)
                                                throw h();
                                        if (a.push(c),
                                        A = [],
                                        P = s,
                                        s += o,
                                        l == T) {
                                            for (I = 0,
                                            O = c.length; O > I; I++)
                                                L = U(I, c, r, i, o, s, a),
                                                A.push(L === v ? "null" : L);
                                            M = A.length ? o ? "[\n" + s + A.join(",\n" + s) + "\n" + P + "]" : "[" + A.join(",") + "]" : "[]"
                                        } else
                                            m(i || c, function(e) {
                                                var t = U(e, c, r, i, o, s, a);
                                                t !== v && A.push(N(e) + ":" + (o ? " " : "") + t)
                                            }),
                                            M = A.length ? o ? "{\n" + s + A.join(",\n" + s) + "\n" + P + "}" : "{" + A.join(",") + "}" : "{}";
                                        return a.pop(),
                                        M
                                    }
                                };
                                t.stringify = function(e, t, r) {
                                    var i, o, s, c;
                                    if (a["undefined" == typeof t ? "undefined" : n(t)] && t)
                                        if ((c = b.call(t)) == S)
                                            o = t;
                                        else if (c == T) {
                                            s = {};
                                            for (var l, u = 0, d = t.length; d > u; l = t[u++],
                                            c = b.call(l),
                                            (c == E || c == x) && (s[l] = 1))
                                                ;
                                        }
                                    if (r)
                                        if ((c = b.call(r)) == x) {
                                            if ((r -= r % 1) > 0)
                                                for (i = "",
                                                r > 10 && (r = 10); i.length < r; i += " ")
                                                    ;
                                        } else
                                            c == E && (i = r.length <= 10 ? r : r.slice(0, 10));
                                    return M("", (l = {},
                                    l[""] = e,
                                    l), o, s, i, "", [])
                                }
                            }
                            if (!r("json-parse")) {
                                var H, D, F = s.fromCharCode, B = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: " ",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                }, q = function() {
                                    throw H = D = null,
                                    d()
                                }, z = function() {
                                    for (var e, t, n, r, i, o = D, s = o.length; s > H; )
                                        switch (i = o.charCodeAt(H)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            H++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = A ? o.charAt(H) : o[H],
                                            H++,
                                            e;
                                        case 34:
                                            for (e = "@",
                                            H++; s > H; )
                                                if (i = o.charCodeAt(H),
                                                32 > i)
                                                    q();
                                                else if (92 == i)
                                                    switch (i = o.charCodeAt(++H)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        e += B[i],
                                                        H++;
                                                        break;
                                                    case 117:
                                                        for (t = ++H,
                                                        n = H + 4; n > H; H++)
                                                            i = o.charCodeAt(H),
                                                            i >= 48 && 57 >= i || i >= 97 && 102 >= i || i >= 65 && 70 >= i || q();
                                                        e += F("0x" + o.slice(t, H));
                                                        break;
                                                    default:
                                                        q()
                                                    }
                                                else {
                                                    if (34 == i)
                                                        break;
                                                    for (i = o.charCodeAt(H),
                                                    t = H; i >= 32 && 92 != i && 34 != i; )
                                                        i = o.charCodeAt(++H);
                                                    e += o.slice(t, H)
                                                }
                                            if (34 == o.charCodeAt(H))
                                                return H++,
                                                e;
                                            q();
                                        default:
                                            if (t = H,
                                            45 == i && (r = !0,
                                            i = o.charCodeAt(++H)),
                                            i >= 48 && 57 >= i) {
                                                for (48 == i && (i = o.charCodeAt(H + 1),
                                                i >= 48 && 57 >= i) && q(),
                                                r = !1; s > H && (i = o.charCodeAt(H),
                                                i >= 48 && 57 >= i); H++)
                                                    ;
                                                if (46 == o.charCodeAt(H)) {
                                                    for (n = ++H; s > n && (i = o.charCodeAt(n),
                                                    i >= 48 && 57 >= i); n++)
                                                        ;
                                                    n == H && q(),
                                                    H = n
                                                }
                                                if (i = o.charCodeAt(H),
                                                101 == i || 69 == i) {
                                                    for (i = o.charCodeAt(++H),
                                                    (43 == i || 45 == i) && H++,
                                                    n = H; s > n && (i = o.charCodeAt(n),
                                                    i >= 48 && 57 >= i); n++)
                                                        ;
                                                    n == H && q(),
                                                    H = n
                                                }
                                                return +o.slice(t, H)
                                            }
                                            if (r && q(),
                                            "true" == o.slice(H, H + 4))
                                                return H += 4,
                                                !0;
                                            if ("false" == o.slice(H, H + 5))
                                                return H += 5,
                                                !1;
                                            if ("null" == o.slice(H, H + 4))
                                                return H += 4,
                                                null;
                                            q()
                                        }
                                    return "$"
                                }, W = function X(e) {
                                    var t, n;
                                    if ("$" == e && q(),
                                    "string" == typeof e) {
                                        if ("@" == (A ? e.charAt(0) : e[0]))
                                            return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = z(),
                                            "]" != e; n || (n = !0))
                                                n && ("," == e ? (e = z(),
                                                "]" == e && q()) : q()),
                                                "," == e && q(),
                                                t.push(X(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = z(),
                                            "}" != e; n || (n = !0))
                                                n && ("," == e ? (e = z(),
                                                "}" == e && q()) : q()),
                                                ("," == e || "string" != typeof e || "@" != (A ? e.charAt(0) : e[0]) || ":" != z()) && q(),
                                                t[e.slice(1)] = X(z());
                                            return t
                                        }
                                        q()
                                    }
                                    return e
                                }, V = function(e, t, n) {
                                    var r = G(e, t, n);
                                    r === v ? delete e[t] : e[t] = r
                                }, G = function(e, t, r) {
                                    var i, o = e[t];
                                    if ("object" == ("undefined" == typeof o ? "undefined" : n(o)) && o)
                                        if (b.call(o) == T)
                                            for (i = o.length; i--; )
                                                V(o, i, r);
                                        else
                                            m(o, function(e) {
                                                V(o, e, r)
                                            });
                                    return r.call(e, t, o)
                                };
                                t.parse = function(e, t) {
                                    var n, r;
                                    return H = 0,
                                    D = "" + e,
                                    n = W(z()),
                                    "$" != z() && q(),
                                    H = D = null,
                                    t && b.call(t) == S ? G((r = {},
                                    r[""] = n,
                                    r), "", t) : n
                                }
                            }
                        }
                        return t.runInContext = i,
                        t
                    }
                    var s = "function" == typeof o && o.amd
                      , a = {
                        "function": !0,
                        object: !0
                    }
                      , c = a["undefined" == typeof r ? "undefined" : n(r)] && r && !r.nodeType && r
                      , l = a["undefined" == typeof window ? "undefined" : n(window)] && window || this
                      , u = c && a["undefined" == typeof t ? "undefined" : n(t)] && t && !t.nodeType && "object" == ("undefined" == typeof e ? "undefined" : n(e)) && e;
                    if (!u || u.global !== u && u.window !== u && u.self !== u || (l = u),
                    c && !s)
                        i(l, c);
                    else {
                        var d = l.JSON
                          , h = l.JSON3
                          , f = !1
                          , p = i(l, l.JSON3 = {
                            noConflict: function() {
                                return f || (f = !0,
                                l.JSON = d,
                                l.JSON3 = h,
                                d = h = null),
                                p
                            }
                        });
                        l.JSON = {
                            parse: p.parse,
                            stringify: p.stringify
                        }
                    }
                    s && o(function() {
                        return p
                    })
                }
                .call(this),
                function() {
                    var e = {};
                    e.appendToHead = function(t) {
                        e.getHead().appendChild(t)
                    }
                    ,
                    e.getHead = function() {
                        return document.head || document.getElementsByTagName("head")[0]
                    }
                    ,
                    e.getBody = function() {
                        return document.body || document.getElementsByTagName("body")[0]
                    }
                    ,
                    createjs.DomUtils = e
                }(),
                function() {
                    var e = {};
                    e.parseXML = function(e, t) {
                        var n = null;
                        try {
                            if (window.DOMParser) {
                                var r = new DOMParser;
                                n = r.parseFromString(e, t)
                            }
                        } catch (i) {}
                        if (!n)
                            try {
                                n = new ActiveXObject("Microsoft.XMLDOM"),
                                n.async = !1,
                                n.loadXML(e)
                            } catch (i) {
                                n = null
                            }
                        return n
                    }
                    ,
                    e.parseJSON = function(e) {
                        if (null == e)
                            return null;
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            throw t
                        }
                    }
                    ,
                    createjs.DataUtils = e
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e() {
                        this.src = null,
                        this.type = null,
                        this.id = null,
                        this.maintainOrder = !1,
                        this.callback = null,
                        this.data = null,
                        this.method = createjs.LoadItem.GET,
                        this.values = null,
                        this.headers = null,
                        this.withCredentials = !1,
                        this.mimeType = null,
                        this.crossOrigin = null,
                        this.loadTimeout = n.LOAD_TIMEOUT_DEFAULT
                    }
                    var t = e.prototype = {}
                      , n = e;
                    n.LOAD_TIMEOUT_DEFAULT = 8e3,
                    n.create = function(t) {
                        if ("string" == typeof t) {
                            var r = new e;
                            return r.src = t,
                            r
                        }
                        if (t instanceof n)
                            return t;
                        if (t instanceof Object && t.src)
                            return null == t.loadTimeout && (t.loadTimeout = n.LOAD_TIMEOUT_DEFAULT),
                            t;
                        throw new Error("Type not recognized.")
                    }
                    ,
                    t.set = function(e) {
                        for (var t in e)
                            this[t] = e[t];
                        return this
                    }
                    ,
                    createjs.LoadItem = n
                }(),
                function() {
                    var e = {};
                    e.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i,
                    e.RELATIVE_PATT = /^[.\/]*?\//i,
                    e.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i,
                    e.parseURI = function(t) {
                        var n = {
                            absolute: !1,
                            relative: !1
                        };
                        if (null == t)
                            return n;
                        var r = t.indexOf("?");
                        r > -1 && (t = t.substr(0, r));
                        var i;
                        return e.ABSOLUTE_PATT.test(t) ? n.absolute = !0 : e.RELATIVE_PATT.test(t) && (n.relative = !0),
                        (i = t.match(e.EXTENSION_PATT)) && (n.extension = i[1].toLowerCase()),
                        n
                    }
                    ,
                    e.formatQueryString = function(e, t) {
                        if (null == e)
                            throw new Error("You must specify data.");
                        var n = [];
                        for (var r in e)
                            n.push(r + "=" + escape(e[r]));
                        return t && (n = n.concat(t)),
                        n.join("&")
                    }
                    ,
                    e.buildPath = function(e, t) {
                        if (null == t)
                            return e;
                        var n = []
                          , r = e.indexOf("?");
                        if (-1 != r) {
                            var i = e.slice(r + 1);
                            n = n.concat(i.split("&"));
                        }
                        return -1 != r ? e.slice(0, r) + "?" + this.formatQueryString(t, n) : e + "?" + this.formatQueryString(t, n)
                    }
                    ,
                    e.isCrossDomain = function(e) {
                        var t = document.createElement("a");
                        t.href = e.src;
                        var n = document.createElement("a");
                        n.href = location.href;
                        var r = "" != t.hostname && (t.port != n.port || t.protocol != n.protocol || t.hostname != n.hostname);
                        return r
                    }
                    ,
                    e.isLocal = function(e) {
                        var t = document.createElement("a");
                        return t.href = e.src,
                        "" == t.hostname && "file:" == t.protocol
                    }
                    ,
                    e.isBinary = function(e) {
                        switch (e) {
                        case createjs.AbstractLoader.IMAGE:
                        case createjs.AbstractLoader.BINARY:
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    e.isImageTag = function(e) {
                        return e instanceof HTMLImageElement
                    }
                    ,
                    e.isAudioTag = function(e) {
                        return !!window.HTMLAudioElement && e instanceof HTMLAudioElement
                    }
                    ,
                    e.isVideoTag = function(e) {
                        return !!window.HTMLVideoElement && e instanceof HTMLVideoElement
                    }
                    ,
                    e.isText = function(e) {
                        switch (e) {
                        case createjs.AbstractLoader.TEXT:
                        case createjs.AbstractLoader.JSON:
                        case createjs.AbstractLoader.MANIFEST:
                        case createjs.AbstractLoader.XML:
                        case createjs.AbstractLoader.CSS:
                        case createjs.AbstractLoader.SVG:
                        case createjs.AbstractLoader.JAVASCRIPT:
                        case createjs.AbstractLoader.SPRITESHEET:
                            return !0;
                        default:
                            return !1
                        }
                    }
                    ,
                    e.getTypeByExtension = function(e) {
                        if (null == e)
                            return createjs.AbstractLoader.TEXT;
                        switch (e.toLowerCase()) {
                        case "jpeg":
                        case "jpg":
                        case "gif":
                        case "png":
                        case "webp":
                        case "bmp":
                            return createjs.AbstractLoader.IMAGE;
                        case "ogg":
                        case "mp3":
                        case "webm":
                            return createjs.AbstractLoader.SOUND;
                        case "mp4":
                        case "webm":
                        case "ts":
                            return createjs.AbstractLoader.VIDEO;
                        case "json":
                            return createjs.AbstractLoader.JSON;
                        case "xml":
                            return createjs.AbstractLoader.XML;
                        case "css":
                            return createjs.AbstractLoader.CSS;
                        case "js":
                            return createjs.AbstractLoader.JAVASCRIPT;
                        case "svg":
                            return createjs.AbstractLoader.SVG;
                        default:
                            return createjs.AbstractLoader.TEXT
                        }
                    }
                    ,
                    createjs.RequestUtils = e
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.EventDispatcher_constructor(),
                        this.loaded = !1,
                        this.canceled = !1,
                        this.progress = 0,
                        this.type = n,
                        this.resultFormatter = null,
                        this._item = e ? createjs.LoadItem.create(e) : null,
                        this._preferXHR = t,
                        this._result = null,
                        this._rawResult = null,
                        this._loadedItems = null,
                        this._tagSrcAttribute = null,
                        this._tag = null
                    }
                    var t = createjs.extend(e, createjs.EventDispatcher)
                      , n = e;
                    n.POST = "POST",
                    n.GET = "GET",
                    n.BINARY = "binary",
                    n.CSS = "css",
                    n.IMAGE = "image",
                    n.JAVASCRIPT = "javascript",
                    n.JSON = "json",
                    n.JSONP = "jsonp",
                    n.MANIFEST = "manifest",
                    n.SOUND = "sound",
                    n.VIDEO = "video",
                    n.SPRITESHEET = "spritesheet",
                    n.SVG = "svg",
                    n.TEXT = "text",
                    n.XML = "xml",
                    t.getItem = function() {
                        return this._item
                    }
                    ,
                    t.getResult = function(e) {
                        return e ? this._rawResult : this._result
                    }
                    ,
                    t.getTag = function() {
                        return this._tag
                    }
                    ,
                    t.setTag = function(e) {
                        this._tag = e
                    }
                    ,
                    t.load = function() {
                        this._createRequest(),
                        this._request.on("complete", this, this),
                        this._request.on("progress", this, this),
                        this._request.on("loadStart", this, this),
                        this._request.on("abort", this, this),
                        this._request.on("timeout", this, this),
                        this._request.on("error", this, this);
                        var e = new createjs.Event("initialize");
                        e.loader = this._request,
                        this.dispatchEvent(e),
                        this._request.load()
                    }
                    ,
                    t.cancel = function() {
                        this.canceled = !0,
                        this.destroy()
                    }
                    ,
                    t.destroy = function() {
                        this._request && (this._request.removeAllEventListeners(),
                        this._request.destroy()),
                        this._request = null,
                        this._item = null,
                        this._rawResult = null,
                        this._result = null,
                        this._loadItems = null,
                        this.removeAllEventListeners()
                    }
                    ,
                    t.getLoadedItems = function() {
                        return this._loadedItems
                    }
                    ,
                    t._createRequest = function() {
                        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
                    }
                    ,
                    t._createTag = function() {
                        return null
                    }
                    ,
                    t._sendLoadStart = function() {
                        this._isCanceled() || this.dispatchEvent("loadstart")
                    }
                    ,
                    t._sendProgress = function(e) {
                        if (!this._isCanceled()) {
                            var t = null;
                            "number" == typeof e ? (this.progress = e,
                            t = new createjs.ProgressEvent(this.progress)) : (t = e,
                            this.progress = e.loaded / e.total,
                            t.progress = this.progress,
                            (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)),
                            this.hasEventListener("progress") && this.dispatchEvent(t)
                        }
                    }
                    ,
                    t._sendComplete = function() {
                        if (!this._isCanceled()) {
                            this.loaded = !0;
                            var e = new createjs.Event("complete");
                            e.rawResult = this._rawResult,
                            null != this._result && (e.result = this._result),
                            this.dispatchEvent(e)
                        }
                    }
                    ,
                    t._sendError = function(e) {
                        !this._isCanceled() && this.hasEventListener("error") && (null == e && (e = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),
                        this.dispatchEvent(e))
                    }
                    ,
                    t._isCanceled = function() {
                        return !(null != window.createjs && !this.canceled)
                    }
                    ,
                    t.resultFormatter = null,
                    t.handleEvent = function(e) {
                        switch (e.type) {
                        case "complete":
                            this._rawResult = e.target._response;
                            var t = this.resultFormatter && this.resultFormatter(this);
                            t instanceof Function ? t.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = t || this._rawResult,
                            this._sendComplete());
                            break;
                        case "progress":
                            this._sendProgress(e);
                            break;
                        case "error":
                            this._sendError(e);
                            break;
                        case "loadstart":
                            this._sendLoadStart();
                            break;
                        case "abort":
                        case "timeout":
                            this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + e.type.toUpperCase() + "_ERROR"))
                        }
                    }
                    ,
                    t._resultFormatSuccess = function(e) {
                        this._result = e,
                        this._sendComplete()
                    }
                    ,
                    t._resultFormatFailed = function(e) {
                        this._sendError(e)
                    }
                    ,
                    t.buildPath = function(e, t) {
                        return createjs.RequestUtils.buildPath(e, t)
                    }
                    ,
                    t.toString = function() {
                        return "[PreloadJS AbstractLoader]"
                    }
                    ,
                    createjs.AbstractLoader = createjs.promote(e, "EventDispatcher")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.AbstractLoader_constructor(e, t, n),
                        this.resultFormatter = this._formatResult,
                        this._tagSrcAttribute = "src",
                        this.on("initialize", this._updateXHR, this)
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader);
                    t.load = function() {
                        this._tag || (this._tag = this._createTag(this._item.src)),
                        this._tag.preload = "auto",
                        this._tag.load(),
                        this.AbstractLoader_load()
                    }
                    ,
                    t._createTag = function() {}
                    ,
                    t._createRequest = function() {
                        this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item,this._tag || this._createTag(),this._tagSrcAttribute)
                    }
                    ,
                    t._updateXHR = function(e) {
                        e.loader.setResponseType && e.loader.setResponseType("blob")
                    }
                    ,
                    t._formatResult = function(e) {
                        if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
                        this._tag.onstalled = null,
                        this._preferXHR) {
                            var t = window.URL || window.webkitURL
                              , n = e.getResult(!0);
                            e.getTag().src = t.createObjectURL(n)
                        }
                        return e.getTag()
                    }
                    ,
                    createjs.AbstractMediaLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    var e = function(e) {
                        this._item = e
                    }
                      , t = createjs.extend(e, createjs.EventDispatcher);
                    t.load = function() {}
                    ,
                    t.destroy = function() {}
                    ,
                    t.cancel = function() {}
                    ,
                    createjs.AbstractRequest = createjs.promote(e, "EventDispatcher")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.AbstractRequest_constructor(e),
                        this._tag = t,
                        this._tagSrcAttribute = n,
                        this._loadedHandler = createjs.proxy(this._handleTagComplete, this),
                        this._addedToDOM = !1,
                        this._startTagVisibility = null
                    }
                    var t = createjs.extend(e, createjs.AbstractRequest);
                    t.load = function() {
                        this._tag.onload = createjs.proxy(this._handleTagComplete, this),
                        this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this),
                        this._tag.onerror = createjs.proxy(this._handleError, this);
                        var e = new createjs.Event("initialize");
                        e.loader = this._tag,
                        this.dispatchEvent(e),
                        this._hideTag(),
                        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
                        this._tag[this._tagSrcAttribute] = this._item.src,
                        null == this._tag.parentNode && (window.document.body.appendChild(this._tag),
                        this._addedToDOM = !0)
                    }
                    ,
                    t.destroy = function() {
                        this._clean(),
                        this._tag = null,
                        this.AbstractRequest_destroy()
                    }
                    ,
                    t._handleReadyStateChange = function() {
                        clearTimeout(this._loadTimeout);
                        var e = this._tag;
                        ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
                    }
                    ,
                    t._handleError = function() {
                        this._clean(),
                        this.dispatchEvent("error")
                    }
                    ,
                    t._handleTagComplete = function() {
                        this._rawResult = this._tag,
                        this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult,
                        this._clean(),
                        this._showTag(),
                        this.dispatchEvent("complete")
                    }
                    ,
                    t._handleTimeout = function() {
                        this._clean(),
                        this.dispatchEvent(new createjs.Event("timeout"))
                    }
                    ,
                    t._clean = function() {
                        this._tag.onload = null,
                        this._tag.onreadystatechange = null,
                        this._tag.onerror = null,
                        this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag),
                        clearTimeout(this._loadTimeout)
                    }
                    ,
                    t._hideTag = function() {
                        this._startTagVisibility = this._tag.style.visibility,
                        this._tag.style.visibility = "hidden"
                    }
                    ,
                    t._showTag = function() {
                        this._tag.style.visibility = this._startTagVisibility
                    }
                    ,
                    t._handleStalled = function() {}
                    ,
                    createjs.TagRequest = createjs.promote(e, "AbstractRequest")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.AbstractRequest_constructor(e),
                        this._tag = t,
                        this._tagSrcAttribute = n,
                        this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
                    }
                    var t = createjs.extend(e, createjs.TagRequest);
                    t.load = function() {
                        var e = createjs.proxy(this._handleStalled, this);
                        this._stalledCallback = e;
                        var t = createjs.proxy(this._handleProgress, this);
                        this._handleProgress = t,
                        this._tag.addEventListener("stalled", e),
                        this._tag.addEventListener("progress", t),
                        this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1),
                        this.TagRequest_load()
                    }
                    ,
                    t._handleReadyStateChange = function() {
                        clearTimeout(this._loadTimeout);
                        var e = this._tag;
                        ("loaded" == e.readyState || "complete" == e.readyState) && this._handleTagComplete()
                    }
                    ,
                    t._handleStalled = function() {}
                    ,
                    t._handleProgress = function(e) {
                        if (e && !(e.loaded > 0 && 0 == e.total)) {
                            var t = new createjs.ProgressEvent(e.loaded,e.total);
                            this.dispatchEvent(t)
                        }
                    }
                    ,
                    t._clean = function() {
                        this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler),
                        this._tag.removeEventListener("stalled", this._stalledCallback),
                        this._tag.removeEventListener("progress", this._progressCallback),
                        this.TagRequest__clean()
                    }
                    ,
                    createjs.MediaTagRequest = createjs.promote(e, "TagRequest")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractRequest_constructor(e),
                        this._request = null,
                        this._loadTimeout = null,
                        this._xhrLevel = 1,
                        this._response = null,
                        this._rawResponse = null,
                        this._canceled = !1,
                        this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this),
                        this._handleProgressProxy = createjs.proxy(this._handleProgress, this),
                        this._handleAbortProxy = createjs.proxy(this._handleAbort, this),
                        this._handleErrorProxy = createjs.proxy(this._handleError, this),
                        this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this),
                        this._handleLoadProxy = createjs.proxy(this._handleLoad, this),
                        this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this),
                        !this._createXHR(e)
                    }
                    var t = createjs.extend(e, createjs.AbstractRequest);
                    e.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"],
                    t.getResult = function(e) {
                        return e && this._rawResponse ? this._rawResponse : this._response
                    }
                    ,
                    t.cancel = function() {
                        this.canceled = !0,
                        this._clean(),
                        this._request.abort()
                    }
                    ,
                    t.load = function() {
                        if (null == this._request)
                            return void this._handleError();
                        null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1),
                        this._request.addEventListener("progress", this._handleProgressProxy, !1),
                        this._request.addEventListener("abort", this._handleAbortProxy, !1),
                        this._request.addEventListener("error", this._handleErrorProxy, !1),
                        this._request.addEventListener("timeout", this._handleTimeoutProxy, !1),
                        this._request.addEventListener("load", this._handleLoadProxy, !1),
                        this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy,
                        this._request.onprogress = this._handleProgressProxy,
                        this._request.onabort = this._handleAbortProxy,
                        this._request.onerror = this._handleErrorProxy,
                        this._request.ontimeout = this._handleTimeoutProxy,
                        this._request.onload = this._handleLoadProxy,
                        this._request.onreadystatechange = this._handleReadyStateChangeProxy),
                        1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
                        try {
                            this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
                        } catch (e) {
                            this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,e))
                        }
                    }
                    ,
                    t.setResponseType = function(e) {
                        "blob" === e && (e = window.URL ? "blob" : "arraybuffer",
                        this._responseType = e),
                        this._request.responseType = e
                    }
                    ,
                    t.getAllResponseHeaders = function() {
                        return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
                    }
                    ,
                    t.getResponseHeader = function(e) {
                        return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
                    }
                    ,
                    t._handleProgress = function(e) {
                        if (e && !(e.loaded > 0 && 0 == e.total)) {
                            var t = new createjs.ProgressEvent(e.loaded,e.total);
                            this.dispatchEvent(t)
                        }
                    }
                    ,
                    t._handleLoadStart = function() {
                        clearTimeout(this._loadTimeout),
                        this.dispatchEvent("loadstart")
                    }
                    ,
                    t._handleAbort = function(e) {
                        this._clean(),
                        this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,e))
                    }
                    ,
                    t._handleError = function(e) {
                        this._clean(),
                        this.dispatchEvent(new createjs.ErrorEvent(e.message))
                    }
                    ,
                    t._handleReadyStateChange = function() {
                        4 == this._request.readyState && this._handleLoad()
                    }
                    ,
                    t._handleLoad = function() {
                        if (!this.loaded) {
                            this.loaded = !0;
                            var e = this._checkError();
                            if (e)
                                return void this._handleError(e);
                            if (this._response = this._getResponse(),
                            "arraybuffer" === this._responseType)
                                try {
                                    this._response = new Blob([this._response])
                                } catch (t) {
                                    if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder,
                                    "TypeError" === t.name && window.BlobBuilder) {
                                        var n = new BlobBuilder;
                                        n.append(this._response),
                                        this._response = n.getBlob()
                                    }
                                }
                            this._clean(),
                            this.dispatchEvent(new createjs.Event("complete"))
                        }
                    }
                    ,
                    t._handleTimeout = function(e) {
                        this._clean(),
                        this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,e))
                    }
                    ,
                    t._checkError = function() {
                        var e = parseInt(this._request.status);
                        switch (e) {
                        case 404:
                        case 0:
                            return new Error(e)
                        }
                        return null
                    }
                    ,
                    t._getResponse = function() {
                        if (null != this._response)
                            return this._response;
                        if (null != this._request.response)
                            return this._request.response;
                        try {
                            if (null != this._request.responseText)
                                return this._request.responseText
                        } catch (e) {}
                        try {
                            if (null != this._request.responseXML)
                                return this._request.responseXML
                        } catch (e) {}
                        return null
                    }
                    ,
                    t._createXHR = function(e) {
                        var t = createjs.RequestUtils.isCrossDomain(e)
                          , n = {}
                          , r = null;
                        if (window.XMLHttpRequest)
                            r = new XMLHttpRequest,
                            t && void 0 === r.withCredentials && window.XDomainRequest && (r = new XDomainRequest);
                        else {
                            for (var i = 0, o = s.ACTIVEX_VERSIONS.length; o > i; i++) {
                                var a = s.ACTIVEX_VERSIONS[i];
                                try {
                                    r = new ActiveXObject(a);
                                    break
                                } catch (c) {}
                            }
                            if (null == r)
                                return !1
                        }
                        null == e.mimeType && createjs.RequestUtils.isText(e.type) && (e.mimeType = "text/plain; charset=utf-8"),
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                        this._xhrLevel = "string" == typeof r.responseType ? 2 : 1;
                        var l = null;
                        if (l = e.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(e.src, e.values) : e.src,
                        r.open(e.method || createjs.AbstractLoader.GET, l, !0),
                        t && r instanceof XMLHttpRequest && 1 == this._xhrLevel && (n.Origin = location.origin),
                        e.values && e.method == createjs.AbstractLoader.POST && (n["Content-Type"] = "application/x-www-form-urlencoded"),
                        t || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                        e.headers)
                            for (var u in e.headers)
                                n[u] = e.headers[u];
                        for (u in n)
                            r.setRequestHeader(u, n[u]);
                        return r instanceof XMLHttpRequest && void 0 !== e.withCredentials && (r.withCredentials = e.withCredentials),
                        this._request = r,
                        !0
                    }
                    ,
                    t._clean = function() {
                        clearTimeout(this._loadTimeout),
                        null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy),
                        this._request.removeEventListener("progress", this._handleProgressProxy),
                        this._request.removeEventListener("abort", this._handleAbortProxy),
                        this._request.removeEventListener("error", this._handleErrorProxy),
                        this._request.removeEventListener("timeout", this._handleTimeoutProxy),
                        this._request.removeEventListener("load", this._handleLoadProxy),
                        this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null,
                        this._request.onprogress = null,
                        this._request.onabort = null,
                        this._request.onerror = null,
                        this._request.ontimeout = null,
                        this._request.onload = null,
                        this._request.onreadystatechange = null)
                    }
                    ,
                    t.toString = function() {
                        return "[PreloadJS XHRRequest]"
                    }
                    ,
                    createjs.XHRRequest = createjs.promote(e, "AbstractRequest")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t, n) {
                        this.AbstractLoader_constructor(),
                        this._plugins = [],
                        this._typeCallbacks = {},
                        this._extensionCallbacks = {},
                        this.next = null,
                        this.maintainScriptOrder = !0,
                        this.stopOnError = !1,
                        this._maxConnections = 1,
                        this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, createjs.TextLoader],
                        this._defaultLoaderLength = this._availableLoaders.length,
                        this.init(e, t, n)
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , r = e;
                    t.init = function(e, t, n) {
                        this.useXHR = !0,
                        this.preferXHR = !0,
                        this._preferXHR = !0,
                        this.setPreferXHR(e),
                        this._paused = !1,
                        this._basePath = t,
                        this._crossOrigin = n,
                        this._loadStartWasDispatched = !1,
                        this._currentlyLoadingScript = null,
                        this._currentLoads = [],
                        this._loadQueue = [],
                        this._loadQueueBackup = [],
                        this._loadItemsById = {},
                        this._loadItemsBySrc = {},
                        this._loadedResults = {},
                        this._loadedRawResults = {},
                        this._numItems = 0,
                        this._numItemsLoaded = 0,
                        this._scriptOrder = [],
                        this._loadedScripts = [],
                        this._lastProgress = NaN
                    }
                    ,
                    r.loadTimeout = 8e3,
                    r.LOAD_TIMEOUT = 0,
                    r.BINARY = createjs.AbstractLoader.BINARY,
                    r.CSS = createjs.AbstractLoader.CSS,
                    r.IMAGE = createjs.AbstractLoader.IMAGE,
                    r.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT,
                    r.JSON = createjs.AbstractLoader.JSON,
                    r.JSONP = createjs.AbstractLoader.JSONP,
                    r.MANIFEST = createjs.AbstractLoader.MANIFEST,
                    r.SOUND = createjs.AbstractLoader.SOUND,
                    r.VIDEO = createjs.AbstractLoader.VIDEO,
                    r.SVG = createjs.AbstractLoader.SVG,
                    r.TEXT = createjs.AbstractLoader.TEXT,
                    r.XML = createjs.AbstractLoader.XML,
                    r.POST = createjs.AbstractLoader.POST,
                    r.GET = createjs.AbstractLoader.GET,
                    t.registerLoader = function(e) {
                        if (!e || !e.canLoadItem)
                            throw new Error("loader is of an incorrect type.");
                        if (-1 != this._availableLoaders.indexOf(e))
                            throw new Error("loader already exists.");
                        this._availableLoaders.unshift(e)
                    }
                    ,
                    t.unregisterLoader = function(e) {
                        var t = this._availableLoaders.indexOf(e);
                        -1 != t && t < this._defaultLoaderLength - 1 && this._availableLoaders.splice(t, 1)
                    }
                    ,
                    t.setUseXHR = function(e) {
                        return this.setPreferXHR(e)
                    }
                    ,
                    t.setPreferXHR = function(e) {
                        return this.preferXHR = 0 != e && null != window.XMLHttpRequest,
                        this.preferXHR
                    }
                    ,
                    t.removeAll = function() {
                        this.remove()
                    }
                    ,
                    t.remove = function(e) {
                        var t = null;
                        if (e && !Array.isArray(e))
                            t = [e];
                        else if (e)
                            t = e;
                        else if (arguments.length > 0)
                            return;
                        var n = !1;
                        if (t) {
                            for (; t.length; ) {
                                var r = t.pop()
                                  , i = this.getResult(r);
                                for (o = this._loadQueue.length - 1; o >= 0; o--)
                                    if (s = this._loadQueue[o].getItem(),
                                    s.id == r || s.src == r) {
                                        this._loadQueue.splice(o, 1)[0].cancel();
                                        break
                                    }
                                for (o = this._loadQueueBackup.length - 1; o >= 0; o--)
                                    if (s = this._loadQueueBackup[o].getItem(),
                                    s.id == r || s.src == r) {
                                        this._loadQueueBackup.splice(o, 1)[0].cancel();
                                        break
                                    }
                                if (i)
                                    this._disposeItem(this.getItem(r));
                                else
                                    for (var o = this._currentLoads.length - 1; o >= 0; o--) {
                                        var s = this._currentLoads[o].getItem();
                                        if (s.id == r || s.src == r) {
                                            this._currentLoads.splice(o, 1)[0].cancel(),
                                            n = !0;
                                            break
                                        }
                                    }
                            }
                            n && this._loadNext()
                        } else {
                            this.close();
                            for (var a in this._loadItemsById)
                                this._disposeItem(this._loadItemsById[a]);
                            this.init(this.preferXHR, this._basePath)
                        }
                    }
                    ,
                    t.reset = function() {
                        this.close();
                        for (var e in this._loadItemsById)
                            this._disposeItem(this._loadItemsById[e]);
                        for (var t = [], n = 0, r = this._loadQueueBackup.length; r > n; n++)
                            t.push(this._loadQueueBackup[n].getItem());
                        this.loadManifest(t, !1)
                    }
                    ,
                    t.installPlugin = function(e) {
                        if (null != e && null != e.getPreloadHandlers) {
                            this._plugins.push(e);
                            var t = e.getPreloadHandlers();
                            if (t.scope = e,
                            null != t.types)
                                for (var n = 0, r = t.types.length; r > n; n++)
                                    this._typeCallbacks[t.types[n]] = t;
                            if (null != t.extensions)
                                for (n = 0,
                                r = t.extensions.length; r > n; n++)
                                    this._extensionCallbacks[t.extensions[n]] = t
                        }
                    }
                    ,
                    t.setMaxConnections = function(e) {
                        this._maxConnections = e,
                        !this._paused && this._loadQueue.length > 0 && this._loadNext()
                    }
                    ,
                    t.loadFile = function(e, t, n) {
                        if (null == e) {
                            var r = new createjs.ErrorEvent("PRELOAD_NO_FILE");
                            return void this._sendError(r)
                        }
                        this._addItem(e, null, n),
                        this.setPaused(t === !1)
                    }
                    ,
                    t.loadManifest = function(e, t, i) {
                        var o = null
                          , s = null;
                        if (Array.isArray(e)) {
                            if (0 == e.length) {
                                var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
                                return void this._sendError(a)
                            }
                            o = e
                        } else if ("string" == typeof e)
                            o = [{
                                src: e,
                                type: r.MANIFEST
                            }];
                        else {
                            if ("object" != ("undefined" == typeof e ? "undefined" : n(e))) {
                                var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
                                return void this._sendError(a)
                            }
                            if (void 0 !== e.src) {
                                if (null == e.type)
                                    e.type = r.MANIFEST;
                                else if (e.type != r.MANIFEST) {
                                    var a = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
                                    this._sendError(a)
                                }
                                o = [e]
                            } else
                                void 0 !== e.manifest && (o = e.manifest,
                                s = e.path)
                        }
                        for (var c = 0, l = o.length; l > c; c++)
                            this._addItem(o[c], s, i);
                        this.setPaused(t === !1)
                    }
                    ,
                    t.load = function() {
                        this.setPaused(!1)
                    }
                    ,
                    t.getItem = function(e) {
                        return this._loadItemsById[e] || this._loadItemsBySrc[e]
                    }
                    ,
                    t.getResult = function(e, t) {
                        var n = this._loadItemsById[e] || this._loadItemsBySrc[e];
                        if (null == n)
                            return null;
                        var r = n.id;
                        return t && this._loadedRawResults[r] ? this._loadedRawResults[r] : this._loadedResults[r]
                    }
                    ,
                    t.getItems = function(e) {
                        var t = [];
                        for (var n in this._loadItemsById) {
                            var r = this._loadItemsById[n]
                              , i = this.getResult(n);
                            (e !== !0 || null != i) && t.push({
                                item: r,
                                result: i,
                                rawResult: this.getResult(n, !0)
                            })
                        }
                        return t
                    }
                    ,
                    t.setPaused = function(e) {
                        this._paused = e,
                        this._paused || this._loadNext()
                    }
                    ,
                    t.close = function() {
                        for (; this._currentLoads.length; )
                            this._currentLoads.pop().cancel();
                        this._scriptOrder.length = 0,
                        this._loadedScripts.length = 0,
                        this.loadStartWasDispatched = !1,
                        this._itemCount = 0,
                        this._lastProgress = NaN
                    }
                    ,
                    t._addItem = function(e, t, n) {
                        var r = this._createLoadItem(e, t, n);
                        if (null != r) {
                            var i = this._createLoader(r);
                            null != i && ("plugins"in i && (i.plugins = this._plugins),
                            r._loader = i,
                            this._loadQueue.push(i),
                            this._loadQueueBackup.push(i),
                            this._numItems++,
                            this._updateProgress(),
                            (this.maintainScriptOrder && r.type == createjs.LoadQueue.JAVASCRIPT || r.maintainOrder === !0) && (this._scriptOrder.push(r),
                            this._loadedScripts.push(null)))
                        }
                    }
                    ,
                    t._createLoadItem = function(e, t, n) {
                        var r = createjs.LoadItem.create(e);
                        if (null == r)
                            return null;
                        var i = ""
                          , o = n || this._basePath;
                        if (r.src instanceof Object) {
                            if (!r.type)
                                return null;
                            if (t) {
                                i = t;
                                var s = createjs.RequestUtils.parseURI(t);
                                null == o || s.absolute || s.relative || (i = o + i)
                            } else
                                null != o && (i = o)
                        } else {
                            var a = createjs.RequestUtils.parseURI(r.src);
                            a.extension && (r.ext = a.extension),
                            null == r.type && (r.type = createjs.RequestUtils.getTypeByExtension(r.ext));
                            var c = r.src;
                            if (!a.absolute && !a.relative)
                                if (t) {
                                    i = t;
                                    var s = createjs.RequestUtils.parseURI(t);
                                    c = t + c,
                                    null == o || s.absolute || s.relative || (i = o + i)
                                } else
                                    null != o && (i = o);
                            r.src = i + r.src
                        }
                        r.path = i,
                        (void 0 === r.id || null === r.id || "" === r.id) && (r.id = c);
                        var l = this._typeCallbacks[r.type] || this._extensionCallbacks[r.ext];
                        if (l) {
                            var u = l.callback.call(l.scope, r, this);
                            if (u === !1)
                                return null;
                            u === !0 || null != u && (r._loader = u),
                            a = createjs.RequestUtils.parseURI(r.src),
                            null != a.extension && (r.ext = a.extension)
                        }
                        return this._loadItemsById[r.id] = r,
                        this._loadItemsBySrc[r.src] = r,
                        null == r.crossOrigin && (r.crossOrigin = this._crossOrigin),
                        r
                    }
                    ,
                    t._createLoader = function(e) {
                        if (null != e._loader)
                            return e._loader;
                        for (var t = this.preferXHR, n = 0; n < this._availableLoaders.length; n++) {
                            var r = this._availableLoaders[n];
                            if (r && r.canLoadItem(e))
                                return new r(e,t)
                        }
                        return null
                    }
                    ,
                    t._loadNext = function() {
                        if (!this._paused) {
                            this._loadStartWasDispatched || (this._sendLoadStart(),
                            this._loadStartWasDispatched = !0),
                            this._numItems == this._numItemsLoaded ? (this.loaded = !0,
                            this._sendComplete(),
                            this.next && this.next.load && this.next.load()) : this.loaded = !1;
                            for (var e = 0; e < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections); e++) {
                                var t = this._loadQueue[e];
                                this._canStartLoad(t) && (this._loadQueue.splice(e, 1),
                                e--,
                                this._loadItem(t))
                            }
                        }
                    }
                    ,
                    t._loadItem = function(e) {
                        e.on("fileload", this._handleFileLoad, this),
                        e.on("progress", this._handleProgress, this),
                        e.on("complete", this._handleFileComplete, this),
                        e.on("error", this._handleError, this),
                        e.on("fileerror", this._handleFileError, this),
                        this._currentLoads.push(e),
                        this._sendFileStart(e.getItem()),
                        e.load()
                    }
                    ,
                    t._handleFileLoad = function(e) {
                        e.target = null,
                        this.dispatchEvent(e)
                    }
                    ,
                    t._handleFileError = function(e) {
                        var t = new createjs.ErrorEvent("FILE_LOAD_ERROR",null,e.item);
                        this._sendError(t)
                    }
                    ,
                    t._handleError = function(e) {
                        var t = e.target;
                        this._numItemsLoaded++,
                        this._finishOrderedItem(t, !0),
                        this._updateProgress();
                        var n = new createjs.ErrorEvent("FILE_LOAD_ERROR",null,t.getItem());
                        this._sendError(n),
                        this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(t),
                        this._cleanLoadItem(t),
                        this._loadNext())
                    }
                    ,
                    t._handleFileComplete = function(e) {
                        var t = e.target
                          , n = t.getItem()
                          , r = t.getResult();
                        this._loadedResults[n.id] = r;
                        var i = t.getResult(!0);
                        null != i && i !== r && (this._loadedRawResults[n.id] = i),
                        this._saveLoadedItems(t),
                        this._removeLoadItem(t),
                        this._finishOrderedItem(t) || this._processFinishedLoad(n, t),
                        this._cleanLoadItem(t)
                    }
                    ,
                    t._saveLoadedItems = function(e) {
                        var t = e.getLoadedItems();
                        if (null !== t)
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].item;
                                this._loadItemsBySrc[r.src] = r,
                                this._loadItemsById[r.id] = r,
                                this._loadedResults[r.id] = t[n].result,
                                this._loadedRawResults[r.id] = t[n].rawResult
                            }
                    }
                    ,
                    t._finishOrderedItem = function(e, t) {
                        var n = e.getItem();
                        if (this.maintainScriptOrder && n.type == createjs.LoadQueue.JAVASCRIPT || n.maintainOrder) {
                            e instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
                            var r = createjs.indexOf(this._scriptOrder, n);
                            return -1 != r && (this._loadedScripts[r] = t === !0 || n,
                            this._checkScriptLoadOrder(),
                            !0)
                        }
                        return !1
                    }
                    ,
                    t._checkScriptLoadOrder = function() {
                        for (var e = this._loadedScripts.length, t = 0; e > t; t++) {
                            var n = this._loadedScripts[t];
                            if (null === n)
                                break;
                            if (n !== !0) {
                                var r = this._loadedResults[n.id];
                                n.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(r);
                                var i = n._loader;
                                this._processFinishedLoad(n, i),
                                this._loadedScripts[t] = !0
                            }
                        }
                    }
                    ,
                    t._processFinishedLoad = function(e, t) {
                        if (this._numItemsLoaded++,
                        !this.maintainScriptOrder && e.type == createjs.LoadQueue.JAVASCRIPT) {
                            var n = t.getTag();
                            createjs.DomUtils.appendToHead(n)
                        }
                        this._updateProgress(),
                        this._sendFileComplete(e, t),
                        this._loadNext()
                    }
                    ,
                    t._canStartLoad = function(e) {
                        if (!this.maintainScriptOrder || e.preferXHR)
                            return !0;
                        var t = e.getItem();
                        if (t.type != createjs.LoadQueue.JAVASCRIPT)
                            return !0;
                        if (this._currentlyLoadingScript)
                            return !1;
                        for (var n = this._scriptOrder.indexOf(t), r = 0; n > r; ) {
                            var i = this._loadedScripts[r];
                            if (null == i)
                                return !1;
                            r++
                        }
                        return this._currentlyLoadingScript = !0,
                        !0
                    }
                    ,
                    t._removeLoadItem = function(e) {
                        for (var t = this._currentLoads.length, n = 0; t > n; n++)
                            if (this._currentLoads[n] == e) {
                                this._currentLoads.splice(n, 1);
                                break
                            }
                    }
                    ,
                    t._cleanLoadItem = function(e) {
                        var t = e.getItem();
                        t && delete t._loader
                    }
                    ,
                    t._handleProgress = function(e) {
                        var t = e.target;
                        this._sendFileProgress(t.getItem(), t.progress),
                        this._updateProgress()
                    }
                    ,
                    t._updateProgress = function() {
                        var e = this._numItemsLoaded / this._numItems
                          , t = this._numItems - this._numItemsLoaded;
                        if (t > 0) {
                            for (var n = 0, r = 0, i = this._currentLoads.length; i > r; r++)
                                n += this._currentLoads[r].progress;
                            e += n / t * (t / this._numItems)
                        }
                        this._lastProgress != e && (this._sendProgress(e),
                        this._lastProgress = e)
                    }
                    ,
                    t._disposeItem = function(e) {
                        delete this._loadedResults[e.id],
                        delete this._loadedRawResults[e.id],
                        delete this._loadItemsById[e.id],
                        delete this._loadItemsBySrc[e.src]
                    }
                    ,
                    t._sendFileProgress = function(e, t) {
                        if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
                            var n = new createjs.Event("fileprogress");
                            n.progress = t,
                            n.loaded = t,
                            n.total = 1,
                            n.item = e,
                            this.dispatchEvent(n)
                        }
                    }
                    ,
                    t._sendFileComplete = function(e, t) {
                        if (!this._isCanceled() && !this._paused) {
                            var n = new createjs.Event("fileload");
                            n.loader = t,
                            n.item = e,
                            n.result = this._loadedResults[e.id],
                            n.rawResult = this._loadedRawResults[e.id],
                            e.completeHandler && e.completeHandler(n),
                            this.hasEventListener("fileload") && this.dispatchEvent(n)
                        }
                    }
                    ,
                    t._sendFileStart = function(e) {
                        var t = new createjs.Event("filestart");
                        t.item = e,
                        this.hasEventListener("filestart") && this.dispatchEvent(t)
                    }
                    ,
                    t.toString = function() {
                        return "[PreloadJS LoadQueue]"
                    }
                    ,
                    createjs.LoadQueue = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.TEXT)
                    }
                    var t = (createjs.extend(e, createjs.AbstractLoader),
                    e);
                    t.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.TEXT
                    }
                    ,
                    createjs.TextLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.BINARY),
                        this.on("initialize", this._updateXHR, this)
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.BINARY
                    }
                    ,
                    t._updateXHR = function(e) {
                        e.loader.setResponseType("arraybuffer")
                    }
                    ,
                    createjs.BinaryLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.CSS),
                        this.resultFormatter = this._formatResult,
                        this._tagSrcAttribute = "href",
                        this._tag = document.createElement(t ? "style" : "link"),
                        this._tag.rel = "stylesheet",
                        this._tag.type = "text/css"
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.CSS
                    }
                    ,
                    t._formatResult = function(e) {
                        if (this._preferXHR) {
                            var t = e.getTag();
                            if (t.styleSheet)
                                t.styleSheet.cssText = e.getResult(!0);
                            else {
                                var n = document.createTextNode(e.getResult(!0));
                                t.appendChild(n)
                            }
                        } else
                            t = this._tag;
                        return createjs.DomUtils.appendToHead(t),
                        t
                    }
                    ,
                    createjs.CSSLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.IMAGE),
                        this.resultFormatter = this._formatResult,
                        this._tagSrcAttribute = "src",
                        createjs.RequestUtils.isImageTag(e) ? this._tag = e : createjs.RequestUtils.isImageTag(e.src) ? this._tag = e.src : createjs.RequestUtils.isImageTag(e.tag) && (this._tag = e.tag),
                        null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"),
                        this.on("initialize", this._updateXHR, this)
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.IMAGE
                    }
                    ,
                    t.load = function() {
                        if ("" != this._tag.src && this._tag.complete)
                            return void this._sendComplete();
                        var e = this._item.crossOrigin;
                        1 == e && (e = "Anonymous"),
                        null == e || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = e),
                        this.AbstractLoader_load()
                    }
                    ,
                    t._updateXHR = function(e) {
                        e.loader.mimeType = "text/plain; charset=x-user-defined-binary",
                        e.loader.setResponseType && e.loader.setResponseType("blob")
                    }
                    ,
                    t._formatResult = function() {
                        return this._formatImage
                    }
                    ,
                    t._formatImage = function(e, t) {
                        var n = this._tag
                          , r = window.URL || window.webkitURL;
                        if (this._preferXHR)
                            if (r) {
                                var i = r.createObjectURL(this.getResult(!0));
                                n.src = i,
                                n.addEventListener("load", this._cleanUpURL, !1),
                                n.addEventListener("error", this._cleanUpURL, !1)
                            } else
                                n.src = this._item.src;
                        n.complete ? e(n) : (n.onload = createjs.proxy(function() {
                            e(this._tag)
                        }, this),
                        n.onerror = createjs.proxy(function() {
                            t(_this._tag)
                        }, this))
                    }
                    ,
                    t._cleanUpURL = function(e) {
                        var t = window.URL || window.webkitURL;
                        t.revokeObjectURL(e.target.src)
                    }
                    ,
                    createjs.ImageLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.JAVASCRIPT),
                        this.resultFormatter = this._formatResult,
                        this._tagSrcAttribute = "src",
                        this.setTag(document.createElement("script"))
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.JAVASCRIPT
                    }
                    ,
                    t._formatResult = function(e) {
                        var t = e.getTag();
                        return this._preferXHR && (t.text = e.getResult(!0)),
                        t
                    }
                    ,
                    createjs.JavaScriptLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.JSON),
                        this.resultFormatter = this._formatResult
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.JSON;
                    }
                    ,
                    t._formatResult = function(e) {
                        var t = null;
                        try {
                            t = createjs.DataUtils.parseJSON(e.getResult(!0))
                        } catch (n) {
                            var r = new createjs.ErrorEvent("JSON_FORMAT",null,n);
                            return this._sendError(r),
                            n
                        }
                        return t
                    }
                    ,
                    createjs.JSONLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, !1, createjs.AbstractLoader.JSONP),
                        this.setTag(document.createElement("script")),
                        this.getTag().type = "text/javascript"
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.JSONP
                    }
                    ,
                    t.cancel = function() {
                        this.AbstractLoader_cancel(),
                        this._dispose()
                    }
                    ,
                    t.load = function() {
                        if (null == this._item.callback)
                            throw new Error("callback is required for loading JSONP requests.");
                        if (null != window[this._item.callback])
                            throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
                        window[this._item.callback] = createjs.proxy(this._handleLoad, this),
                        window.document.body.appendChild(this._tag),
                        this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout),
                        this._tag.src = this._item.src
                    }
                    ,
                    t._handleLoad = function(e) {
                        this._result = this._rawResult = e,
                        this._sendComplete(),
                        this._dispose()
                    }
                    ,
                    t._handleTimeout = function() {
                        this._dispose(),
                        this.dispatchEvent(new createjs.ErrorEvent("timeout"))
                    }
                    ,
                    t._dispose = function() {
                        window.document.body.removeChild(this._tag),
                        delete window[this._item.callback],
                        clearTimeout(this._loadTimeout)
                    }
                    ,
                    createjs.JSONPLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, null, createjs.AbstractLoader.MANIFEST),
                        this.plugins = null,
                        this._manifestQueue = null
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.MANIFEST_PROGRESS = .25,
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.MANIFEST
                    }
                    ,
                    t.load = function() {
                        this.AbstractLoader_load()
                    }
                    ,
                    t._createRequest = function() {
                        var e = this._item.callback;
                        this._request = null != e ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
                    }
                    ,
                    t.handleEvent = function(e) {
                        switch (e.type) {
                        case "complete":
                            return this._rawResult = e.target.getResult(!0),
                            this._result = e.target.getResult(),
                            this._sendProgress(n.MANIFEST_PROGRESS),
                            void this._loadManifest(this._result);
                        case "progress":
                            return e.loaded *= n.MANIFEST_PROGRESS,
                            this.progress = e.loaded / e.total,
                            (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0),
                            void this._sendProgress(e)
                        }
                        this.AbstractLoader_handleEvent(e)
                    }
                    ,
                    t.destroy = function() {
                        this.AbstractLoader_destroy(),
                        this._manifestQueue.close()
                    }
                    ,
                    t._loadManifest = function(e) {
                        if (e && e.manifest) {
                            var t = this._manifestQueue = new createjs.LoadQueue;
                            t.on("fileload", this._handleManifestFileLoad, this),
                            t.on("progress", this._handleManifestProgress, this),
                            t.on("complete", this._handleManifestComplete, this, !0),
                            t.on("error", this._handleManifestError, this, !0);
                            for (var n = 0, r = this.plugins.length; r > n; n++)
                                t.installPlugin(this.plugins[n]);
                            t.loadManifest(e)
                        } else
                            this._sendComplete()
                    }
                    ,
                    t._handleManifestFileLoad = function(e) {
                        e.target = null,
                        this.dispatchEvent(e)
                    }
                    ,
                    t._handleManifestComplete = function() {
                        this._loadedItems = this._manifestQueue.getItems(!0),
                        this._sendComplete()
                    }
                    ,
                    t._handleManifestProgress = function(e) {
                        this.progress = e.progress * (1 - n.MANIFEST_PROGRESS) + n.MANIFEST_PROGRESS,
                        this._sendProgress(this.progress)
                    }
                    ,
                    t._handleManifestError = function(e) {
                        var t = new createjs.Event("fileerror");
                        t.item = e.data,
                        this.dispatchEvent(t)
                    }
                    ,
                    createjs.ManifestLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.SOUND),
                        createjs.RequestUtils.isAudioTag(e) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.src) ? this._tag = e : createjs.RequestUtils.isAudioTag(e.tag) && (this._tag = createjs.RequestUtils.isAudioTag(e) ? e : e.src),
                        null != this._tag && (this._preferXHR = !1)
                    }
                    var t = createjs.extend(e, createjs.AbstractMediaLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.SOUND
                    }
                    ,
                    t._createTag = function(e) {
                        var t = document.createElement("audio");
                        return t.autoplay = !1,
                        t.preload = "none",
                        t.src = e,
                        t
                    }
                    ,
                    createjs.SoundLoader = createjs.promote(e, "AbstractMediaLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractMediaLoader_constructor(e, t, createjs.AbstractLoader.VIDEO),
                        createjs.RequestUtils.isVideoTag(e) || createjs.RequestUtils.isVideoTag(e.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(e) ? e : e.src),
                        this._preferXHR = !1) : this.setTag(this._createTag())
                    }
                    var t = createjs.extend(e, createjs.AbstractMediaLoader)
                      , n = e;
                    t._createTag = function() {
                        return document.createElement("video")
                    }
                    ,
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.VIDEO
                    }
                    ,
                    createjs.VideoLoader = createjs.promote(e, "AbstractMediaLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.SPRITESHEET),
                        this._manifestQueue = null
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.SPRITESHEET_PROGRESS = .25,
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.SPRITESHEET
                    }
                    ,
                    t.destroy = function() {
                        this.AbstractLoader_destroy,
                        this._manifestQueue.close()
                    }
                    ,
                    t._createRequest = function() {
                        var e = this._item.callback;
                        this._request = null != e ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item)
                    }
                    ,
                    t.handleEvent = function(e) {
                        switch (e.type) {
                        case "complete":
                            return this._rawResult = e.target.getResult(!0),
                            this._result = e.target.getResult(),
                            this._sendProgress(n.SPRITESHEET_PROGRESS),
                            void this._loadManifest(this._result);
                        case "progress":
                            return e.loaded *= n.SPRITESHEET_PROGRESS,
                            this.progress = e.loaded / e.total,
                            (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0),
                            void this._sendProgress(e)
                        }
                        this.AbstractLoader_handleEvent(e)
                    }
                    ,
                    t._loadManifest = function(e) {
                        if (e && e.images) {
                            var t = this._manifestQueue = new createjs.LoadQueue(this._preferXHR,this._item.path,this._item.crossOrigin);
                            t.on("complete", this._handleManifestComplete, this, !0),
                            t.on("fileload", this._handleManifestFileLoad, this),
                            t.on("progress", this._handleManifestProgress, this),
                            t.on("error", this._handleManifestError, this, !0),
                            t.loadManifest(e.images)
                        }
                    }
                    ,
                    t._handleManifestFileLoad = function(e) {
                        var t = e.result;
                        if (null != t) {
                            var n = this.getResult().images
                              , r = n.indexOf(e.item.src);
                            n[r] = t
                        }
                    }
                    ,
                    t._handleManifestComplete = function() {
                        this._result = new createjs.SpriteSheet(this._result),
                        this._loadedItems = this._manifestQueue.getItems(!0),
                        this._sendComplete()
                    }
                    ,
                    t._handleManifestProgress = function(e) {
                        this.progress = e.progress * (1 - n.SPRITESHEET_PROGRESS) + n.SPRITESHEET_PROGRESS,
                        this._sendProgress(this.progress)
                    }
                    ,
                    t._handleManifestError = function(e) {
                        var t = new createjs.Event("fileerror");
                        t.item = e.data,
                        this.dispatchEvent(t)
                    }
                    ,
                    createjs.SpriteSheetLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e, t) {
                        this.AbstractLoader_constructor(e, t, createjs.AbstractLoader.SVG),
                        this.resultFormatter = this._formatResult,
                        this._tagSrcAttribute = "data",
                        t ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")),
                        this.getTag().type = "image/svg+xml")
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.SVG
                    }
                    ,
                    t._formatResult = function(e) {
                        var t = createjs.DataUtils.parseXML(e.getResult(!0), "text/xml")
                          , n = e.getTag();
                        return !this._preferXHR && document.body.contains(n) && document.body.removeChild(n),
                        null != t.documentElement ? (n.appendChild(t.documentElement),
                        n.style.visibility = "visible",
                        n) : t
                    }
                    ,
                    createjs.SVGLoader = createjs.promote(e, "AbstractLoader")
                }(),
                this.createjs = this.createjs || {},
                function() {
                    function e(e) {
                        this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.XML),
                        this.resultFormatter = this._formatResult
                    }
                    var t = createjs.extend(e, createjs.AbstractLoader)
                      , n = e;
                    n.canLoadItem = function(e) {
                        return e.type == createjs.AbstractLoader.XML
                    }
                    ,
                    t._formatResult = function(e) {
                        return createjs.DataUtils.parseXML(e.getResult(!0), "text/xml")
                    }
                    ,
                    createjs.XMLLoader = createjs.promote(e, "AbstractLoader")
                }(),
                a("undefined" != typeof createjs ? createjs : window.createjs)
            }
            ).call(e, void 0, void 0, void 0, void 0, function(e) {
                t.exports = e
            })
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    106: [function(e, t, n) {
        "use strict";
        var r = e("./throttle");
        t.exports = function(e, t, n) {
            return void 0 === n ? r(e, t, !1) : r(e, n, t !== !1)
        }
    }
    , {
        "./throttle": 110
    }],
    107: [function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(e, n) {
            "function" == typeof define && define.amd ? define(n) : "object" == ("undefined" == typeof t ? "undefined" : r(t)) && t.exports ? t.exports = n() : e.EvEmitter = n()
        }("undefined" != typeof window ? window : void 0, function() {
            function e() {}
            var t = e.prototype;
            return t.on = function(e, t) {
                if (e && t) {
                    var n = this._events = this._events || {}
                      , r = n[e] = n[e] || [];
                    return r.indexOf(t) == -1 && r.push(t),
                    this
                }
            }
            ,
            t.once = function(e, t) {
                if (e && t) {
                    this.on(e, t);
                    var n = this._onceEvents = this._onceEvents || {}
                      , r = n[e] = n[e] || {};
                    return r[t] = !0,
                    this
                }
            }
            ,
            t.off = function(e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                    var r = n.indexOf(t);
                    return r != -1 && n.splice(r, 1),
                    this
                }
            }
            ,
            t.emitEvent = function(e, t) {
                var n = this._events && this._events[e];
                if (n && n.length) {
                    var r = 0
                      , i = n[r];
                    t = t || [];
                    for (var o = this._onceEvents && this._onceEvents[e]; i; ) {
                        var s = o && o[i];
                        s && (this.off(e, i),
                        delete o[i]),
                        i.apply(this, t),
                        r += s ? 0 : 1,
                        i = n[r]
                    }
                    return this
                }
            }
            ,
            e
        })
    }
    , {}],
    108: [function(e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(n, i) {
            "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(e) {
                return i(n, e)
            }) : "object" == ("undefined" == typeof t ? "undefined" : r(t)) && t.exports ? t.exports = i(n, e("ev-emitter")) : n.imagesLoaded = i(n, n.EvEmitter)
        }(window, function(e, t) {
            function n(e, t) {
                for (var n in t)
                    e[n] = t[n];
                return e
            }
            function r(e) {
                var t = [];
                if (Array.isArray(e))
                    t = e;
                else if ("number" == typeof e.length)
                    for (var n = 0; n < e.length; n++)
                        t.push(e[n]);
                else
                    t.push(e);
                return t
            }
            function i(e, t, o) {
                return this instanceof i ? ("string" == typeof e && (e = document.querySelectorAll(e)),
                this.elements = r(e),
                this.options = n({}, this.options),
                "function" == typeof t ? o = t : n(this.options, t),
                o && this.on("always", o),
                this.getImages(),
                a && (this.jqDeferred = new a.Deferred),
                void setTimeout(function() {
                    this.check()
                }
                .bind(this))) : new i(e,t,o)
            }
            function o(e) {
                this.img = e
            }
            function s(e, t) {
                this.url = e,
                this.element = t,
                this.img = new Image
            }
            var a = e.jQuery
              , c = e.console;
            i.prototype = Object.create(t.prototype),
            i.prototype.options = {},
            i.prototype.getImages = function() {
                this.images = [],
                this.elements.forEach(this.addElementImages, this)
            }
            ,
            i.prototype.addElementImages = function(e) {
                "IMG" == e.nodeName && this.addImage(e),
                this.options.background === !0 && this.addElementBackgroundImages(e);
                var t = e.nodeType;
                if (t && l[t]) {
                    for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
                        var i = n[r];
                        this.addImage(i)
                    }
                    if ("string" == typeof this.options.background) {
                        var o = e.querySelectorAll(this.options.background);
                        for (r = 0; r < o.length; r++) {
                            var s = o[r];
                            this.addElementBackgroundImages(s)
                        }
                    }
                }
            }
            ;
            var l = {
                1: !0,
                9: !0,
                11: !0
            };
            return i.prototype.addElementBackgroundImages = function(e) {
                var t = getComputedStyle(e);
                if (t)
                    for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage); null !== r; ) {
                        var i = r && r[2];
                        i && this.addBackground(i, e),
                        r = n.exec(t.backgroundImage)
                    }
            }
            ,
            i.prototype.addImage = function(e) {
                var t = new o(e);
                this.images.push(t)
            }
            ,
            i.prototype.addBackground = function(e, t) {
                var n = new s(e,t);
                this.images.push(n)
            }
            ,
            i.prototype.check = function() {
                function e(e, n, r) {
                    setTimeout(function() {
                        t.progress(e, n, r)
                    })
                }
                var t = this;
                return this.progressedCount = 0,
                this.hasAnyBroken = !1,
                this.images.length ? void this.images.forEach(function(t) {
                    t.once("progress", e),
                    t.check()
                }) : void this.complete()
            }
            ,
            i.prototype.progress = function(e, t, n) {
                this.progressedCount++,
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded,
                this.emitEvent("progress", [this, e, t]),
                this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                this.progressedCount == this.images.length && this.complete(),
                this.options.debug && c && c.log("progress: " + n, e, t)
            }
            ,
            i.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0,
                this.emitEvent(e, [this]),
                this.emitEvent("always", [this]),
                this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }
            ,
            o.prototype = Object.create(t.prototype),
            o.prototype.check = function() {
                var e = this.getIsImageComplete();
                return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
                this.proxyImage.addEventListener("load", this),
                this.proxyImage.addEventListener("error", this),
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                void (this.proxyImage.src = this.img.src))
            }
            ,
            o.prototype.getIsImageComplete = function() {
                return this.img.complete && void 0 !== this.img.naturalWidth
            }
            ,
            o.prototype.confirm = function(e, t) {
                this.isLoaded = e,
                this.emitEvent("progress", [this, this.img, t])
            }
            ,
            o.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }
            ,
            o.prototype.onload = function() {
                this.confirm(!0, "onload"),
                this.unbindEvents()
            }
            ,
            o.prototype.onerror = function() {
                this.confirm(!1, "onerror"),
                this.unbindEvents()
            }
            ,
            o.prototype.unbindEvents = function() {
                this.proxyImage.removeEventListener("load", this),
                this.proxyImage.removeEventListener("error", this),
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this)
            }
            ,
            s.prototype = Object.create(o.prototype),
            s.prototype.check = function() {
                this.img.addEventListener("load", this),
                this.img.addEventListener("error", this),
                this.img.src = this.url;
                var e = this.getIsImageComplete();
                e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                this.unbindEvents())
            }
            ,
            s.prototype.unbindEvents = function() {
                this.img.removeEventListener("load", this),
                this.img.removeEventListener("error", this)
            }
            ,
            s.prototype.confirm = function(e, t) {
                this.isLoaded = e,
                this.emitEvent("progress", [this, this.element, t])
            }
            ,
            i.makeJQueryPlugin = function(t) {
                t = t || e.jQuery,
                t && (a = t,
                a.fn.imagesLoaded = function(e, t) {
                    var n = new i(this,e,t);
                    return n.jqDeferred.promise(a(this))
                }
                )
            }
            ,
            i.makeJQueryPlugin(),
            i
        })
    }
    , {
        "ev-emitter": 107
    }],
    109: [function(e, t, n) {
        (function(r) {
            "use strict";
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ;
            !function(e) {
                if ("object" == ("undefined" == typeof n ? "undefined" : i(n)) && "undefined" != typeof t)
                    t.exports = e();
                else if ("function" == typeof define && define.amd)
                    define([], e);
                else {
                    var o;
                    o = "undefined" != typeof window ? window : "undefined" != typeof r ? r : "undefined" != typeof self ? self : this,
                    o.jogwheel = e()
                }
            }(function() {
                return function t(n, r, i) {
                    function o(a, c) {
                        if (!r[a]) {
                            if (!n[a]) {
                                var l = "function" == typeof e && e;
                                if (!c && l)
                                    return l(a, !0);
                                if (s)
                                    return s(a, !0);
                                var u = new Error("Cannot find module '" + a + "'");
                                throw u.code = "MODULE_NOT_FOUND",
                                u
                            }
                            var d = r[a] = {
                                exports: {}
                            };
                            n[a][0].call(d.exports, function(e) {
                                var t = n[a][1][e];
                                return o(t ? t : e)
                            }, d, d.exports, t, n, r, i)
                        }
                        return r[a].exports
                    }
                    for (var s = "function" == typeof e && e, a = 0; a < i.length; a++)
                        o(i[a]);
                    return o
                }({
                    1: [function(e, t, n) {
                        (function(r) {
                            function i(e) {
                                return e && e.__esModule ? e : {
                                    "default": e
                                }
                            }
                            function o(e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var s = Function.prototype.bind
                              , a = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n)
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                }
                                return e
                            }
                              , c = function() {
                                function e(e, t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var r = t[n];
                                        r.enumerable = r.enumerable || !1,
                                        r.configurable = !0,
                                        "value"in r && (r.writable = !0),
                                        Object.defineProperty(e, r.key, r)
                                    }
                                }
                                return function(t, n, r) {
                                    return n && e(t.prototype, n),
                                    r && e(t, r),
                                    t
                                }
                            }()
                              , l = e("./defaults.js")
                              , u = i(l)
                              , d = e("./get-player.js")
                              , h = i(d)
                              , f = function() {
                                function e(t, n) {
                                    var i = arguments.length <= 2 || void 0 === arguments[2] ? r.window : arguments[2]
                                      , s = arguments.length <= 3 || void 0 === arguments[3] ? r.document : arguments[3];
                                    if (o(this, e),
                                    !t)
                                        throw new Error("Could not construct JogWheel, missing element");
                                    var c = a({}, u["default"], n)
                                      , l = t instanceof i.NodeList ? [].slice.call(t) : [t]
                                      , d = l.map(function(e) {
                                        return h["default"](e, c, i, s)
                                    })
                                      , f = d.map(function(e) {
                                        return e.player
                                    })
                                      , p = d.map(function(e) {
                                        return e.duration
                                    });
                                    this.__instance = {
                                        elements: l,
                                        players: f,
                                        durations: p,
                                        settings: c
                                    }
                                }
                                return c(e, null, [{
                                    key: "create",
                                    value: function() {
                                        for (var t = arguments.length, n = Array(t), r = 0; t > r; r++)
                                            n[r] = arguments[r];
                                        return new (s.apply(e, [null].concat(n)))
                                    }
                                }]),
                                c(e, [{
                                    key: "play",
                                    value: function() {
                                        return this.players.forEach(function(e) {
                                            return e.play()
                                        }),
                                        this
                                    }
                                }, {
                                    key: "pause",
                                    value: function() {
                                        return this.players.forEach(function(e) {
                                            return e.pause()
                                        }),
                                        this
                                    }
                                }, {
                                    key: "seek",
                                    value: function(e) {
                                        var t = this;
                                        return this.__instance.players.forEach(function(n, r) {
                                            n.currentTime = t.durations[r] * e
                                        }),
                                        this
                                    }
                                }, {
                                    key: "plug",
                                    value: function() {
                                        return this
                                    }
                                }, {
                                    key: "unplug",
                                    value: function() {
                                        return this
                                    }
                                }, {
                                    key: "render",
                                    value: function() {
                                        return this
                                    }
                                }, {
                                    key: "playState",
                                    get: function() {
                                        var e = this.players[0];
                                        return e.playState
                                    }
                                }, {
                                    key: "progress",
                                    get: function() {
                                        var e = this.players[0]
                                          , t = this.durations[0];
                                        return e.currentTime / t
                                    }
                                }, {
                                    key: "players",
                                    get: function() {
                                        return this.__instance.players
                                    }
                                }, {
                                    key: "durations",
                                    get: function() {
                                        return this.__instance.durations
                                    }
                                }]),
                                e
                            }();
                            n["default"] = f,
                            t.exports = n["default"]
                        }
                        ).call(this, "undefined" != typeof r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./defaults.js": 5,
                        "./get-player.js": 12
                    }],
                    2: [function(e, t, n) {
                        function r() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? "0s" : arguments[0]
                              , t = e.indexOf("ms") > -1 ? ["ms", 1] : ["s", 1e3]
                              , n = i(t, 2)
                              , r = n[0]
                              , o = n[1]
                              , s = e.replace(r, "").trim()
                              , a = "." === s[0] ? "0" + s : s;
                            return parseFloat(a, 10) * o
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var i = function() {
                            function e(e, t) {
                                var n = []
                                  , r = !0
                                  , i = !1
                                  , o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value),
                                    !t || n.length !== t); r = !0)
                                        ;
                                } catch (c) {
                                    i = !0,
                                    o = c
                                } finally {
                                    try {
                                        !r && a["return"] && a["return"]()
                                    } finally {
                                        if (i)
                                            throw o
                                    }
                                }
                                return n
                            }
                            return function(t, n) {
                                if (Array.isArray(t))
                                    return t;
                                if (Symbol.iterator in Object(t))
                                    return e(t, n);
                                throw new TypeError("Invalid attempt to destructure non-iterable instance")
                            }
                        }();
                        n["default"] = r,
                        t.exports = n["default"]
                    }
                    , {}],
                    3: [function(e, t, n) {
                        function r() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? "1" : arguments[0];
                            return "infinite" === e ? 1 / 0 : parseInt(e, 10)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = r,
                        t.exports = n["default"]
                    }
                    , {}],
                    4: [function(e, t, n) {
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = {
                            unknown: 0,
                            style: 1,
                            charset: 2,
                            "import": 3,
                            media: 4,
                            fontface: 5,
                            page: 6,
                            keyframes: 7,
                            keyframe: 8,
                            namespace: 9,
                            counter: 11,
                            supports: 12,
                            document: 13,
                            fontfeature: 14,
                            viewport: 15,
                            region: 16
                        },
                        t.exports = n["default"]
                    }
                    , {}],
                    5: [function(e, t, n) {
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = {
                            render: function(e, t) {
                                e.style = t
                            }
                        },
                        t.exports = n["default"]
                    }
                    , {}],
                    6: [function(e, t, n) {
                        (function(r) {
                            function i(e) {
                                var t = arguments.length <= 1 || void 0 === arguments[1] ? r.window : arguments[1]
                                  , n = arguments.length <= 2 || void 0 === arguments[2] ? r.document : arguments[2]
                                  , i = t.getComputedStyle(e);
                                return s.reduce(function(e, r) {
                                    var s = "animation" + r[0].toUpperCase() + r.slice(1);
                                    return e[r] = i[o.prefix(s, t, n)],
                                    e
                                }, {})
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }),
                            n["default"] = i;
                            var o = e("./get-vendor-prefix")
                              , s = ["name", "duration", "iterationCount", "timingFunction", "fillMode", "playState", "delay"];
                            t.exports = n["default"]
                        }
                        ).call(this, "undefined" != typeof r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./get-vendor-prefix": 13
                    }],
                    7: [function(e, t, n) {
                        function r(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }
                        function i(e) {
                            try {
                                return s["default"](e.cssRules || [])
                            } catch (t) {
                                return console.warn('Error while reading cssRules from StyleSheet "' + (e.href || "local") + '".'),
                                console.error(t),
                                []
                            }
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = i;
                        var o = e("./to-array")
                          , s = r(o);
                        t.exports = n["default"]
                    }
                    , {
                        "./to-array": 16
                    }],
                    8: [function(e, t, n) {
                        function r(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }
                        function i(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, n = Array(e.length); t < e.length; t++)
                                    n[t] = e[t];
                                return n
                            }
                            return Array.from(e)
                        }
                        function o() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? "style" : arguments[0]
                              , t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1]
                              , n = arguments.length <= 2 || void 0 === arguments[2] ? Boolean : arguments[2]
                              , r = a["default"][e];
                            return l["default"](t).filter(function(e) {
                                return e.type === r
                            }).filter(n).map(function(e) {
                                return e.cssRules
                            }).reduce(function(e, t) {
                                return [].concat(i(e), i(l["default"](t)))
                            }, [])
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = o;
                        var s = e("./cssrule-enumerations")
                          , a = r(s)
                          , c = e("./to-array")
                          , l = r(c);
                        t.exports = n["default"]
                    }
                    , {
                        "./cssrule-enumerations": 4,
                        "./to-array": 16
                    }],
                    9: [function(e, t, n) {
                        function r(e) {
                            for (var t = {}, n = e.length - 1; n >= 0; n -= 1) {
                                var r = e.item(n)
                                  , i = e.getPropertyValue(r);
                                "initial" !== i && (t[r] = i)
                            }
                            return t
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = r,
                        t.exports = n["default"]
                    }
                    , {}],
                    10: [function(e, t, n) {
                        function r(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }
                        function i(e, t) {
                            return s["default"]("keyframes", t, function(t) {
                                return t.name === e
                            })
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = i;
                        var o = e("./get-declarations")
                          , s = r(o);
                        t.exports = n["default"]
                    }
                    , {
                        "./get-declarations": 8
                    }],
                    11: [function(e, t, n) {
                        (function(r) {
                            function i(e) {
                                return e && e.__esModule ? e : {
                                    "default": e
                                }
                            }
                            function o(e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                                        n[t] = e[t];
                                    return n
                                }
                                return Array.from(e)
                            }
                            function s(e) {
                                var t = (arguments.length <= 1 || void 0 === arguments[1] ? r.window : arguments[1],
                                arguments.length <= 2 || void 0 === arguments[2] ? r.document : arguments[2])
                                  , n = c["default"](t.styleSheets).reduce(function(e, t) {
                                    return [].concat(o(e), o(u["default"](t)))
                                }, []);
                                return h["default"](e, n).map(p["default"]).reduce(function(e, t) {
                                    var n = Array.isArray(t) ? t : [t];
                                    return [].concat(o(e), o(n))
                                }, [])
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }),
                            n["default"] = s;
                            var a = e("./to-array")
                              , c = i(a)
                              , l = e("./get-css-rules")
                              , u = i(l)
                              , d = e("./get-keyframe-declarations")
                              , h = i(d)
                              , f = e("./transform-keyframe-declaration")
                              , p = i(f);
                            t.exports = n["default"]
                        }
                        ).call(this, "undefined" != typeof r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./get-css-rules": 7,
                        "./get-keyframe-declarations": 10,
                        "./to-array": 16,
                        "./transform-keyframe-declaration": 17
                    }],
                    12: [function(e, t, n) {
                        (function(r) {
                            function i(e) {
                                return e && e.__esModule ? e : {
                                    "default": e
                                }
                            }
                            function o(e, t) {
                                var n = arguments.length <= 2 || void 0 === arguments[2] ? r.window : arguments[2]
                                  , i = arguments.length <= 3 || void 0 === arguments[3] ? r.document : arguments[3]
                                  , o = d["default"](e, n, i)
                                  , c = o.name
                                  , u = o.duration
                                  , h = o.iterationCount
                                  , p = o.timingFunction
                                  , m = o.fillMode
                                  , v = o.playState
                                  , y = o.delay
                                  , b = l["default"](c, n, i)
                                  , _ = s({
                                    duration: f["default"](u),
                                    delay: f["default"](y),
                                    iterations: g["default"](h),
                                    fill: m,
                                    easing: p,
                                    playState: v
                                }, t);
                                b.sort(function(e, t) {
                                    return e.offset - t.offset
                                });
                                var w = t.animate ? function() {
                                    for (var n = arguments.length, r = Array(n), i = 0; n > i; i++)
                                        r[i] = arguments[i];
                                    return t.animate.apply(t, [e].concat(r))
                                }
                                : e.animate;
                                "function" != typeof w && console.warn("No animation function found. Have you forgotten to include a pony- or polyfill?");
                                var S = w.bind(e)(b, _);
                                return e.style[a.prefix("animationName", n, i)] = "__jogwheelName-" + c,
                                S.__jogwheelName = c,
                                "paused" === _.playState ? S.pause() : S.play(),
                                {
                                    player: S,
                                    duration: _.duration
                                }
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            });
                            var s = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n)
                                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                                }
                                return e
                            }
                            ;
                            n["default"] = o;
                            var a = e("./get-vendor-prefix")
                              , c = e("./get-keyframes")
                              , l = i(c)
                              , u = e("./get-animation-properties")
                              , d = i(u)
                              , h = e("./convert-animation-duration")
                              , f = i(h)
                              , p = e("./convert-animation-iterations")
                              , g = i(p);
                            t.exports = n["default"]
                        }
                        ).call(this, "undefined" != typeof r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {
                        "./convert-animation-duration": 2,
                        "./convert-animation-iterations": 3,
                        "./get-animation-properties": 6,
                        "./get-keyframes": 11,
                        "./get-vendor-prefix": 13
                    }],
                    13: [function(e, t, n) {
                        (function(e) {
                            function t() {
                                var t = (arguments.length <= 0 || void 0 === arguments[0] ? e.window : arguments[0],
                                arguments.length <= 1 || void 0 === arguments[1] ? e.document : arguments[1]);
                                if (t[i])
                                    return t[i];
                                t[i] = "";
                                var n = /^(Moz|Webkit|ms)(?=[A-Z])/i
                                  , r = t.body;
                                for (var o in r.style)
                                    if (n.test(o))
                                        return t[i] = o.match(n)[0],
                                        t[i];
                                return t[i]
                            }
                            function r(n) {
                                var r = arguments.length <= 1 || void 0 === arguments[1] ? e.window : arguments[1]
                                  , i = arguments.length <= 2 || void 0 === arguments[2] ? e.document : arguments[2]
                                  , o = i.body
                                  , s = t(r, i);
                                return "" === s ? n : n in o.style ? n : "" + s + n[0].toUpperCase() + n.slice(1)
                            }
                            Object.defineProperty(n, "__esModule", {
                                value: !0
                            }),
                            n["default"] = t,
                            n.prefix = r;
                            var i = "__jogwheel_vendor_prefix_cache"
                        }
                        ).call(this, "undefined" != typeof r ? r : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }
                    , {}],
                    14: [function(e, t, n) {
                        function r(e) {
                            return e.split(",").map(function(e) {
                                return e.trim()
                            }).map(function(e) {
                                return e.replace("from", "0").replace("to", "100")
                            }).map(function(e) {
                                return e.replace("%", "")
                            }).map(function(e) {
                                return parseInt(e, 10)
                            })
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = r,
                        t.exports = n["default"]
                    }
                    , {}],
                    15: [function(e, t, n) {
                        function r(e) {
                            var t = e.split("-");
                            return i.indexOf(t[1]) > -1 ? t.slice(2).join("-") : e
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = r;
                        var i = ["ms", "webkit", "moz"];
                        t.exports = n["default"]
                    }
                    , {}],
                    16: [function(e, t, n) {
                        function r(e) {
                            return i.slice.call(e)
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        }),
                        n["default"] = r;
                        var i = [];
                        t.exports = n["default"]
                    }
                    , {}],
                    17: [function(e, t, n) {
                        function r(e) {
                            return e && e.__esModule ? e : {
                                "default": e
                            }
                        }
                        function i(e) {
                            var t = a["default"](e.keyText)
                              , n = l["default"](e.style)
                              , r = Object.keys(n).reduce(function(e, t) {
                                return e[d["default"](t)] = n[t],
                                e
                            }, {});
                            return t.map(function(e) {
                                return o({
                                    offset: e / 100
                                }, r)
                            })
                        }
                        Object.defineProperty(n, "__esModule", {
                            value: !0
                        });
                        var o = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n)
                                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        }
                        ;
                        n["default"] = i;
                        var s = e("./parse-keyframe-key")
                          , a = r(s)
                          , c = e("./get-defined-styles")
                          , l = r(c)
                          , u = e("./remove-vendor-prefix")
                          , d = r(u);
                        t.exports = n["default"]
                    }
                    , {
                        "./get-defined-styles": 9,
                        "./parse-keyframe-key": 14,
                        "./remove-vendor-prefix": 15
                    }]
                }, {}, [1])(1)
            })
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    110: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t, n, r) {
            function i() {
                function i() {
                    s = Number(new Date),
                    n.apply(c, u)
                }
                function a() {
                    o = void 0
                }
                var c = this
                  , l = Number(new Date) - s
                  , u = arguments;
                r && !o && i(),
                o && clearTimeout(o),
                void 0 === r && l > e ? i() : t !== !0 && (o = setTimeout(r ? a : i, void 0 === r ? e - l : e))
            }
            var o, s = 0;
            return "boolean" != typeof t && (r = n,
            n = t,
            t = void 0),
            i
        }
    }
    , {}]
}, {}, [103]);
