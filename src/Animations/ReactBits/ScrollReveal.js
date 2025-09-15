"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
require("./ScrollReveal.css");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var ScrollReveal = function (_a) {
    var children = _a.children, scrollContainerRef = _a.scrollContainerRef, _b = _a.enableBlur, enableBlur = _b === void 0 ? true : _b, _c = _a.baseOpacity, baseOpacity = _c === void 0 ? 0.1 : _c, _d = _a.baseRotation, baseRotation = _d === void 0 ? 3 : _d, _e = _a.blurStrength, blurStrength = _e === void 0 ? 4 : _e, _f = _a.containerClassName, containerClassName = _f === void 0 ? '' : _f, _g = _a.textClassName, textClassName = _g === void 0 ? '' : _g, _h = _a.rotationEnd, rotationEnd = _h === void 0 ? 'bottom bottom' : _h, _j = _a.wordAnimationEnd, wordAnimationEnd = _j === void 0 ? 'bottom bottom' : _j;
    var containerRef = (0, react_1.useRef)(null);
    var splitText = (0, react_1.useMemo)(function () {
        var text = typeof children === 'string' ? children : '';
        return text.split(/(\s+)/).map(function (word, index) {
            if (word.match(/^\s+$/))
                return word;
            return ((0, jsx_runtime_1.jsx)("span", { className: "word", children: word }, index));
        });
    }, [children]);
    (0, react_1.useEffect)(function () {
        var el = containerRef.current;
        if (!el)
            return;
        var scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
        gsap_1.gsap.fromTo(el, { transformOrigin: '0% 50%', rotate: baseRotation }, {
            ease: 'none',
            rotate: 0,
            scrollTrigger: {
                trigger: el,
                scroller: scroller,
                start: 'top bottom',
                end: rotationEnd,
                scrub: true
            }
        });
        var wordElements = el.querySelectorAll('.word');
        gsap_1.gsap.fromTo(wordElements, { opacity: baseOpacity, willChange: 'opacity' }, {
            ease: 'none',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: el,
                scroller: scroller,
                start: 'top bottom-=20%',
                end: wordAnimationEnd,
                scrub: true
            }
        });
        if (enableBlur) {
            gsap_1.gsap.fromTo(wordElements, { filter: "blur(".concat(blurStrength, "px)") }, {
                ease: 'none',
                filter: 'blur(0px)',
                stagger: 0.05,
                scrollTrigger: {
                    trigger: el,
                    scroller: scroller,
                    start: 'top bottom-=20%',
                    end: wordAnimationEnd,
                    scrub: true
                }
            });
        }
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (trigger) { return trigger.kill(); });
        };
    }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);
    return ((0, jsx_runtime_1.jsx)("h2", { ref: containerRef, className: "scroll-reveal ".concat(containerClassName), children: (0, jsx_runtime_1.jsx)("p", { className: "scroll-reveal-text ".concat(textClassName), children: splitText }) }));
};
exports.default = ScrollReveal;
