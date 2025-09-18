"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var SplitText_1 = require("gsap/SplitText");
var react_2 = require("@gsap/react");
require("./Shuffle.css");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger, SplitText_1.SplitText, react_2.useGSAP);
var Shuffle = function (_a) {
    var text = _a.text, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.shuffleDirection, shuffleDirection = _d === void 0 ? "right" : _d, _e = _a.duration, duration = _e === void 0 ? 0.35 : _e, _f = _a.maxDelay, maxDelay = _f === void 0 ? 0 : _f, _g = _a.ease, ease = _g === void 0 ? "power3.out" : _g, _h = _a.threshold, threshold = _h === void 0 ? 0.1 : _h, _j = _a.rootMargin, rootMargin = _j === void 0 ? "-100px" : _j, _k = _a.tag, tag = _k === void 0 ? "p" : _k, _l = _a.textAlign, textAlign = _l === void 0 ? "center" : _l, onShuffleComplete = _a.onShuffleComplete, _m = _a.shuffleTimes, shuffleTimes = _m === void 0 ? 1 : _m, _o = _a.animationMode, animationMode = _o === void 0 ? "evenodd" : _o, _p = _a.loop, loop = _p === void 0 ? false : _p, _q = _a.loopDelay, loopDelay = _q === void 0 ? 0 : _q, _r = _a.stagger, stagger = _r === void 0 ? 0.03 : _r, _s = _a.scrambleCharset, scrambleCharset = _s === void 0 ? "" : _s, colorFrom = _a.colorFrom, colorTo = _a.colorTo, _t = _a.triggerOnce, triggerOnce = _t === void 0 ? true : _t, _u = _a.respectReducedMotion, respectReducedMotion = _u === void 0 ? true : _u, _v = _a.triggerOnHover, triggerOnHover = _v === void 0 ? true : _v;
    var ref = (0, react_1.useRef)(null);
    var _w = (0, react_1.useState)(false), fontsLoaded = _w[0], setFontsLoaded = _w[1];
    var _x = (0, react_1.useState)(false), ready = _x[0], setReady = _x[1];
    var splitRef = (0, react_1.useRef)(null);
    var wrappersRef = (0, react_1.useRef)([]);
    var tlRef = (0, react_1.useRef)(null);
    var playingRef = (0, react_1.useRef)(false);
    var hoverHandlerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if ("fonts" in document) {
            if (document.fonts.status === "loaded")
                setFontsLoaded(true);
            else
                document.fonts.ready.then(function () { return setFontsLoaded(true); });
        }
        else
            setFontsLoaded(true);
    }, []);
    (0, react_2.useGSAP)(function () {
        if (!ref.current || !text || !fontsLoaded)
            return;
        if (respectReducedMotion &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            onShuffleComplete === null || onShuffleComplete === void 0 ? void 0 : onShuffleComplete();
            return;
        }
        var el = ref.current;
        var startPct = (1 - threshold) * 100;
        var mm = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin || "");
        var mv = mm ? parseFloat(mm[1]) : 0;
        var mu = mm ? mm[2] || "px" : "px";
        var sign = mv === 0 ? "" : mv < 0 ? "-=".concat(Math.abs(mv)).concat(mu) : "+=".concat(mv).concat(mu);
        var start = "top ".concat(startPct, "%").concat(sign);
        var removeHover = function () {
            if (hoverHandlerRef.current && ref.current) {
                ref.current.removeEventListener("mouseenter", hoverHandlerRef.current);
                hoverHandlerRef.current = null;
            }
        };
        var teardown = function () {
            var _a;
            if (tlRef.current) {
                tlRef.current.kill();
                tlRef.current = null;
            }
            if (wrappersRef.current.length) {
                wrappersRef.current.forEach(function (wrap) {
                    var inner = wrap.firstElementChild;
                    var orig = inner === null || inner === void 0 ? void 0 : inner.querySelector('[data-orig="1"]');
                    if (orig && wrap.parentNode)
                        wrap.parentNode.replaceChild(orig, wrap);
                });
                wrappersRef.current = [];
            }
            try {
                (_a = splitRef.current) === null || _a === void 0 ? void 0 : _a.revert();
            }
            catch (_b) { }
            splitRef.current = null;
            playingRef.current = false;
        };
        var build = function () {
            teardown();
            splitRef.current = new SplitText_1.SplitText(el, {
                type: "chars",
                charsClass: "shuffle-char",
                wordsClass: "shuffle-word",
                linesClass: "shuffle-line",
                smartWrap: true,
                reduceWhiteSpace: false,
            });
            var chars = (splitRef.current.chars || []);
            wrappersRef.current = [];
            var rolls = Math.max(1, Math.floor(shuffleTimes));
            var rand = function (set) {
                return set.charAt(Math.floor(Math.random() * set.length)) || "";
            };
            chars.forEach(function (ch) {
                var parent = ch.parentElement;
                if (!parent)
                    return;
                var w = ch.getBoundingClientRect().width;
                if (!w)
                    return;
                var wrap = document.createElement("span");
                Object.assign(wrap.style, {
                    display: "inline-block",
                    overflow: "hidden",
                    width: w + "px",
                    verticalAlign: "baseline",
                });
                var inner = document.createElement("span");
                Object.assign(inner.style, {
                    display: "inline-block",
                    whiteSpace: "nowrap",
                    willChange: "transform",
                });
                parent.insertBefore(wrap, ch);
                wrap.appendChild(inner);
                var firstOrig = ch.cloneNode(true);
                Object.assign(firstOrig.style, {
                    display: "inline-block",
                    width: w + "px",
                    textAlign: "center",
                });
                ch.setAttribute("data-orig", "1");
                Object.assign(ch.style, {
                    display: "inline-block",
                    width: w + "px",
                    textAlign: "center",
                });
                inner.appendChild(firstOrig);
                for (var k = 0; k < rolls; k++) {
                    var c = ch.cloneNode(true);
                    if (scrambleCharset)
                        c.textContent = rand(scrambleCharset);
                    Object.assign(c.style, {
                        display: "inline-block",
                        width: w + "px",
                        textAlign: "center",
                    });
                    inner.appendChild(c);
                }
                inner.appendChild(ch);
                var steps = rolls + 1;
                var startX = 0;
                var finalX = -steps * w;
                if (shuffleDirection === "right") {
                    var firstCopy = inner.firstElementChild;
                    var real = inner.lastElementChild;
                    if (real)
                        inner.insertBefore(real, inner.firstChild);
                    if (firstCopy)
                        inner.appendChild(firstCopy);
                    startX = -steps * w;
                    finalX = 0;
                }
                gsap_1.gsap.set(inner, { x: startX, force3D: true });
                if (colorFrom)
                    inner.style.color = colorFrom;
                inner.setAttribute("data-final-x", String(finalX));
                inner.setAttribute("data-start-x", String(startX));
                wrappersRef.current.push(wrap);
            });
        };
        var inners = function () {
            return wrappersRef.current.map(function (w) { return w.firstElementChild; });
        };
        var randomizeScrambles = function () {
            if (!scrambleCharset)
                return;
            wrappersRef.current.forEach(function (w) {
                var strip = w.firstElementChild;
                if (!strip)
                    return;
                var kids = Array.from(strip.children);
                for (var i = 1; i < kids.length - 1; i++) {
                    kids[i].textContent = scrambleCharset.charAt(Math.floor(Math.random() * scrambleCharset.length));
                }
            });
        };
        var cleanupToStill = function () {
            wrappersRef.current.forEach(function (w) {
                var strip = w.firstElementChild;
                if (!strip)
                    return;
                var real = strip.querySelector('[data-orig="1"]');
                if (!real)
                    return;
                strip.replaceChildren(real);
                strip.style.transform = "none";
                strip.style.willChange = "auto";
            });
        };
        var play = function () {
            var strips = inners();
            if (!strips.length)
                return;
            playingRef.current = true;
            var tl = gsap_1.gsap.timeline({
                smoothChildTiming: true,
                repeat: loop ? -1 : 0,
                repeatDelay: loop ? loopDelay : 0,
                onRepeat: function () {
                    if (scrambleCharset)
                        randomizeScrambles();
                    gsap_1.gsap.set(strips, {
                        x: function (i, t) {
                            return parseFloat(t.getAttribute("data-start-x") || "0");
                        },
                    });
                    onShuffleComplete === null || onShuffleComplete === void 0 ? void 0 : onShuffleComplete();
                },
                onComplete: function () {
                    playingRef.current = false;
                    if (!loop) {
                        cleanupToStill();
                        if (colorTo)
                            gsap_1.gsap.set(strips, { color: colorTo });
                        onShuffleComplete === null || onShuffleComplete === void 0 ? void 0 : onShuffleComplete();
                        armHover();
                    }
                },
            });
            var addTween = function (targets, at) {
                tl.to(targets, {
                    x: function (i, t) {
                        return parseFloat(t.getAttribute("data-final-x") || "0");
                    },
                    duration: duration,
                    ease: ease,
                    force3D: true,
                    stagger: animationMode === "evenodd" ? stagger : 0,
                }, at);
                if (colorFrom && colorTo) {
                    tl.to(targets, { color: colorTo, duration: duration, ease: ease }, at);
                }
            };
            if (animationMode === "evenodd") {
                var odd = strips.filter(function (_, i) { return i % 2 === 1; });
                var even = strips.filter(function (_, i) { return i % 2 === 0; });
                var oddTotal = duration + Math.max(0, odd.length - 1) * stagger;
                var evenStart = odd.length ? oddTotal * 0.7 : 0;
                if (odd.length)
                    addTween(odd, 0);
                if (even.length)
                    addTween(even, evenStart);
            }
            else {
                strips.forEach(function (strip) {
                    var d = Math.random() * maxDelay;
                    tl.to(strip, {
                        x: parseFloat(strip.getAttribute("data-final-x") || "0"),
                        duration: duration,
                        ease: ease,
                        force3D: true,
                    }, d);
                    if (colorFrom && colorTo)
                        tl.fromTo(strip, { color: colorFrom }, { color: colorTo, duration: duration, ease: ease }, d);
                });
            }
            tlRef.current = tl;
        };
        var armHover = function () {
            if (!triggerOnHover || !ref.current)
                return;
            removeHover();
            var handler = function () {
                if (playingRef.current)
                    return;
                build();
                if (scrambleCharset)
                    randomizeScrambles();
                play();
            };
            hoverHandlerRef.current = handler;
            ref.current.addEventListener("mouseenter", handler);
        };
        var create = function () {
            build();
            if (scrambleCharset)
                randomizeScrambles();
            play();
            armHover();
            setReady(true);
        };
        var st = ScrollTrigger_1.ScrollTrigger.create({
            trigger: el,
            start: start,
            once: triggerOnce,
            onEnter: create,
        });
        return function () {
            st.kill();
            removeHover();
            teardown();
            setReady(false);
        };
    }, {
        dependencies: [
            text,
            duration,
            maxDelay,
            ease,
            threshold,
            rootMargin,
            fontsLoaded,
            shuffleDirection,
            shuffleTimes,
            animationMode,
            loop,
            loopDelay,
            stagger,
            scrambleCharset,
            colorFrom,
            colorTo,
            triggerOnce,
            respectReducedMotion,
            triggerOnHover,
        ],
        scope: ref,
    });
    var commonStyle = __assign({ textAlign: textAlign }, style);
    var classes = "shuffle-parent ".concat(ready ? "is-ready" : "", " ").concat(className);
    var Tag = tag || "p";
    return react_1.default.createElement(Tag, { ref: ref, className: classes, style: commonStyle }, text);
};
exports.default = Shuffle;
