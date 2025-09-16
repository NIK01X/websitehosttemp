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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollVelocity = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
require("./ScrollVelocity.css");
function useElementWidth(ref) {
    var _a = (0, react_1.useState)(0), width = _a[0], setWidth = _a[1];
    (0, react_1.useLayoutEffect)(function () {
        function updateWidth() {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        }
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return function () { return window.removeEventListener("resize", updateWidth); };
    }, [ref]);
    return width;
}
var ScrollVelocity = function (_a) {
    var scrollContainerRef = _a.scrollContainerRef, _b = _a.texts, texts = _b === void 0 ? [] : _b, _c = _a.velocity, velocity = _c === void 0 ? 80 : _c, // Slower default velocity for smoother motion
    _d = _a.className, // Slower default velocity for smoother motion
    className = _d === void 0 ? "" : _d, _e = _a.damping, damping = _e === void 0 ? 80 : _e, // Higher damping for stability
    _f = _a.stiffness, // Higher damping for stability
    stiffness = _f === void 0 ? 200 : _f, // Lower stiffness for smoother response
    _g = _a.numCopies, // Lower stiffness for smoother response
    numCopies = _g === void 0 ? 6 : _g, _h = _a.velocityMapping, velocityMapping = _h === void 0 ? { input: [0, 1000], output: [0, 2] } : _h, // Reduced output range
    _j = _a.parallaxClassName, // Reduced output range
    parallaxClassName = _j === void 0 ? "parallax" : _j, _k = _a.scrollerClassName, scrollerClassName = _k === void 0 ? "scroller" : _k, parallaxStyle = _a.parallaxStyle, scrollerStyle = _a.scrollerStyle;
    function VelocityText(_a) {
        var children = _a.children, _b = _a.baseVelocity, baseVelocity = _b === void 0 ? velocity : _b, scrollContainerRef = _a.scrollContainerRef, _c = _a.className, className = _c === void 0 ? "" : _c, damping = _a.damping, stiffness = _a.stiffness, numCopies = _a.numCopies, velocityMapping = _a.velocityMapping, parallaxClassName = _a.parallaxClassName, scrollerClassName = _a.scrollerClassName, parallaxStyle = _a.parallaxStyle, scrollerStyle = _a.scrollerStyle;
        var baseX = (0, react_2.useMotionValue)(0);
        var scrollOptions = scrollContainerRef
            ? { container: scrollContainerRef }
            : {};
        var scrollY = (0, react_2.useScroll)(scrollOptions).scrollY;
        var scrollVelocity = (0, react_2.useVelocity)(scrollY);
        var smoothVelocity = (0, react_2.useSpring)(scrollVelocity, {
            damping: damping !== null && damping !== void 0 ? damping : 80, // Increased damping for smoother motion
            stiffness: stiffness !== null && stiffness !== void 0 ? stiffness : 200, // Reduced stiffness for less jerky movement
        });
        var velocityFactor = (0, react_2.useTransform)(smoothVelocity, (velocityMapping === null || velocityMapping === void 0 ? void 0 : velocityMapping.input) || [0, 1000], (velocityMapping === null || velocityMapping === void 0 ? void 0 : velocityMapping.output) || [0, 2], // Reduced output range for subtler effect
        { clamp: true } // Enable clamping to prevent extreme values
        );
        var copyRef = (0, react_1.useRef)(null);
        var copyWidth = useElementWidth(copyRef);
        function wrap(min, max, v) {
            var range = max - min;
            var mod = (((v - min) % range) + range) % range;
            return mod + min;
        }
        var x = (0, react_2.useTransform)(baseX, function (v) {
            if (copyWidth === 0)
                return "0px";
            return "".concat(wrap(-copyWidth, 0, v), "px");
        });
        var directionFactor = (0, react_1.useRef)(1);
        (0, react_2.useAnimationFrame)(function (t, delta) {
            // Normalize delta to prevent large jumps
            var normalizedDelta = Math.min(delta, 16.67); // Cap at ~60fps
            var moveBy = directionFactor.current * baseVelocity * (normalizedDelta / 1000);
            var currentVelocity = velocityFactor.get();
            // Smooth direction changes with threshold
            if (Math.abs(currentVelocity) > 0.1) {
                if (currentVelocity < 0) {
                    directionFactor.current = -1;
                }
                else if (currentVelocity > 0) {
                    directionFactor.current = 1;
                }
            }
            // Apply velocity effect more smoothly
            var velocityEffect = Math.abs(currentVelocity) > 0.1 ? currentVelocity * 0.3 : 0;
            moveBy += directionFactor.current * moveBy * velocityEffect;
            baseX.set(baseX.get() + moveBy);
        });
        var spans = [];
        for (var i = 0; i < numCopies; i++) {
            spans.push((0, jsx_runtime_1.jsx)("span", { className: className, ref: i === 0 ? copyRef : null, children: children }, i));
        }
        return ((0, jsx_runtime_1.jsx)("div", { className: parallaxClassName, style: parallaxStyle, children: (0, jsx_runtime_1.jsx)(react_2.motion.div, { className: scrollerClassName, style: __assign({ x: x }, scrollerStyle), children: spans }) }));
    }
    return ((0, jsx_runtime_1.jsx)("section", { children: texts.map(function (text, index) { return ((0, jsx_runtime_1.jsxs)(VelocityText, { className: className, baseVelocity: index % 2 !== 0 ? -velocity : velocity, scrollContainerRef: scrollContainerRef, damping: damping, stiffness: stiffness, numCopies: numCopies, velocityMapping: velocityMapping, parallaxClassName: parallaxClassName, scrollerClassName: scrollerClassName, parallaxStyle: parallaxStyle, scrollerStyle: scrollerStyle, children: [text, "\u00A0"] }, index)); }) }));
};
exports.ScrollVelocity = ScrollVelocity;
exports.default = exports.ScrollVelocity;
