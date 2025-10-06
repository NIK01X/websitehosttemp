"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var AnimatedContent = function (_a) {
    var children = _a.children, _b = _a.distance, distance = _b === void 0 ? 100 : _b, _c = _a.direction, direction = _c === void 0 ? "vertical" : _c, _d = _a.reverse, reverse = _d === void 0 ? false : _d, _e = _a.duration, duration = _e === void 0 ? 0.8 : _e, _f = _a.ease, ease = _f === void 0 ? "power3.out" : _f, _g = _a.initialOpacity, initialOpacity = _g === void 0 ? 0 : _g, _h = _a.animateOpacity, animateOpacity = _h === void 0 ? true : _h, _j = _a.scale, scale = _j === void 0 ? 1 : _j, _k = _a.threshold, threshold = _k === void 0 ? 0.1 : _k, _l = _a.delay, delay = _l === void 0 ? 0 : _l, onComplete = _a.onComplete;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var el = ref.current;
        if (!el)
            return;
        var axis = direction === "horizontal" ? "x" : "y";
        var offset = reverse ? -distance : distance;
        var startPct = (1 - threshold) * 100;
        gsap_1.gsap.set(el, (_a = {},
            _a[axis] = offset,
            _a.scale = scale,
            _a.opacity = animateOpacity ? initialOpacity : 1,
            _a));
        gsap_1.gsap.to(el, (_b = {},
            _b[axis] = 0,
            _b.scale = 1,
            _b.opacity = 1,
            _b.duration = duration,
            _b.ease = ease,
            _b.delay = delay,
            _b.onComplete = onComplete,
            _b.scrollTrigger = {
                trigger: el,
                start: "top ".concat(startPct, "%"),
                end: "bottom 20%",
                toggleActions: "play none none reverse",
                once: false,
                scrub: false,
                markers: false, // Set to true for debugging
            },
            _b));
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (t) { return t.kill(); });
            gsap_1.gsap.killTweensOf(el);
        };
    }, [
        distance,
        direction,
        reverse,
        duration,
        ease,
        initialOpacity,
        animateOpacity,
        scale,
        threshold,
        delay,
        onComplete,
    ]);
    return (0, jsx_runtime_1.jsx)("div", { ref: ref, children: children });
};
exports.default = AnimatedContent;
