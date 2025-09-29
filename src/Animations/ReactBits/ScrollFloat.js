"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
require("./ScrollFloat.css");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var ScrollFloat = function (_a) {
    var children = _a.children, scrollContainerRef = _a.scrollContainerRef, _b = _a.containerClassName, containerClassName = _b === void 0 ? '' : _b, _c = _a.textClassName, textClassName = _c === void 0 ? '' : _c, _d = _a.animationDuration, animationDuration = _d === void 0 ? 1 : _d, _e = _a.ease, ease = _e === void 0 ? 'back.inOut(2)' : _e, _f = _a.scrollStart, scrollStart = _f === void 0 ? 'center bottom+=50%' : _f, _g = _a.scrollEnd, scrollEnd = _g === void 0 ? 'bottom bottom-=40%' : _g, _h = _a.stagger, stagger = _h === void 0 ? 0.03 : _h;
    var containerRef = (0, react_1.useRef)(null);
    var splitText = (0, react_1.useMemo)(function () {
        var text = typeof children === 'string' ? children : '';
        return text.split('').map(function (char, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "char", children: char === ' ' ? '\u00A0' : char }, index)); });
    }, [children]);
    (0, react_1.useEffect)(function () {
        var el = containerRef.current;
        if (!el)
            return;
        var scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        var charElements = el.querySelectorAll('.char');
        gsap_1.gsap.fromTo(charElements, {
            willChange: 'opacity, transform',
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: '50% 0%'
        }, {
            duration: animationDuration,
            ease: ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger: stagger,
            scrollTrigger: {
                trigger: el,
                scroller: scroller,
                start: scrollStart,
                end: scrollEnd,
                scrub: true
            }
        });
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);
    return ((0, jsx_runtime_1.jsx)("h2", { ref: containerRef, className: "scroll-float ".concat(containerClassName), children: (0, jsx_runtime_1.jsx)("span", { className: "scroll-float-text ".concat(textClassName), children: splitText }) }));
};
exports.default = ScrollFloat;
