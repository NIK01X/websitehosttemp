"use client";
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CometCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var utils_1 = require("../../lib/utils");
var CometCard = function (_a) {
    var _b = _a.rotateDepth, rotateDepth = _b === void 0 ? 17.5 : _b, _c = _a.translateDepth, translateDepth = _c === void 0 ? 20 : _c, className = _a.className, children = _a.children, _d = _a.floatDelay, floatDelay = _d === void 0 ? 0 : _d;
    var ref = (0, react_1.useRef)(null);
    var x = (0, react_2.useMotionValue)(0);
    var y = (0, react_2.useMotionValue)(0);
    var mouseXSpring = (0, react_2.useSpring)(x);
    var mouseYSpring = (0, react_2.useSpring)(y);
    var rotateX = (0, react_2.useTransform)(mouseYSpring, [-0.5, 0.5], ["-".concat(rotateDepth, "deg"), "".concat(rotateDepth, "deg")]);
    var rotateY = (0, react_2.useTransform)(mouseXSpring, [-0.5, 0.5], ["".concat(rotateDepth, "deg"), "-".concat(rotateDepth, "deg")]);
    var translateX = (0, react_2.useTransform)(mouseXSpring, [-0.5, 0.5], ["-".concat(translateDepth, "px"), "".concat(translateDepth, "px")]);
    var translateY = (0, react_2.useTransform)(mouseYSpring, [-0.5, 0.5], ["".concat(translateDepth, "px"), "-".concat(translateDepth, "px")]);
    var glareX = (0, react_2.useTransform)(mouseXSpring, [-0.5, 0.5], [0, 100]);
    var glareY = (0, react_2.useTransform)(mouseYSpring, [-0.5, 0.5], [0, 100]);
    var glareBackground = (0, react_2.useMotionTemplate)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["radial-gradient(circle at ", "% ", "%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)"], ["radial-gradient(circle at ", "% ", "%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)"])), glareX, glareY);
    var handleMouseMove = function (e) {
        if (!ref.current)
            return;
        var rect = ref.current.getBoundingClientRect();
        var width = rect.width;
        var height = rect.height;
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;
        var xPct = mouseX / width - 0.5;
        var yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };
    var handleMouseLeave = function () {
        x.set(0);
        y.set(0);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(className), style: {
            perspective: "1000px",
            transformStyle: "preserve-3d",
        }, children: (0, jsx_runtime_1.jsxs)(react_2.motion.div, { ref: ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, style: {
                rotateX: rotateX,
                rotateY: rotateY,
                translateX: translateX,
                translateY: translateY,
            }, initial: { scale: 1, z: 0, y: 0 }, animate: {
                y: [0, -8, 0],
                boxShadow: [
                    "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px, rgba(0, 0, 0, 0.2) 0px 4px 8px 0px",
                    "rgba(0, 0, 0, 0.15) 0px 15px 40px 0px, rgba(0, 0, 0, 0.25) 0px 6px 12px 0px",
                    "rgba(0, 0, 0, 0.1) 0px 10px 30px 0px, rgba(0, 0, 0, 0.2) 0px 4px 8px 0px",
                ],
                transition: {
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: floatDelay,
                },
            }, whileHover: {
                scale: 1.05,
                z: 50,
                y: -12,
                transition: { duration: 0.2 },
            }, className: "relative rounded-2xl", children: [children, (0, jsx_runtime_1.jsx)(react_2.motion.div, { className: "pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay", style: {
                        background: glareBackground,
                        opacity: 0.6,
                    }, transition: { duration: 0.2 } })] }) }));
};
exports.CometCard = CometCard;
var templateObject_1;
