"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spotlight = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var Spotlight = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.gradientFirst, gradientFirst = _c === void 0 ? "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)" : _c, _d = _b.gradientSecond, gradientSecond = _d === void 0 ? "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)" : _d, _e = _b.gradientThird, gradientThird = _e === void 0 ? "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)" : _e, _f = _b.translateY, translateY = _f === void 0 ? -350 : _f, _g = _b.width, width = _g === void 0 ? 560 : _g, _h = _b.height, height = _h === void 0 ? 1380 : _h, _j = _b.smallWidth, smallWidth = _j === void 0 ? 240 : _j, _k = _b.duration, duration = _k === void 0 ? 7 : _k, _l = _b.xOffset, xOffset = _l === void 0 ? 100 : _l;
    return ((0, jsx_runtime_1.jsxs)(react_1.motion.div, { initial: {
            opacity: 0,
        }, animate: {
            opacity: 1,
        }, transition: {
            duration: 1.5,
        }, className: "pointer-events-none absolute inset-0 h-full w-full", children: [(0, jsx_runtime_1.jsxs)(react_1.motion.div, { animate: {
                    x: [0, xOffset, 0],
                }, transition: {
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }, className: "absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none", children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "translateY(".concat(translateY, "px) rotate(-45deg)"),
                            background: gradientFirst,
                            width: "".concat(width, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 left-0" }), (0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "rotate(-45deg) translate(5%, -50%)",
                            background: gradientSecond,
                            width: "".concat(smallWidth, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 left-0 origin-top-left" }), (0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "rotate(-45deg) translate(-180%, -70%)",
                            background: gradientThird,
                            width: "".concat(smallWidth, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 left-0 origin-top-left" })] }), (0, jsx_runtime_1.jsxs)(react_1.motion.div, { animate: {
                    x: [0, -xOffset, 0],
                }, transition: {
                    duration: duration,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }, className: "absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none", children: [(0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "translateY(".concat(translateY, "px) rotate(45deg)"),
                            background: gradientFirst,
                            width: "".concat(width, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 right-0" }), (0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "rotate(45deg) translate(-5%, -50%)",
                            background: gradientSecond,
                            width: "".concat(smallWidth, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 right-0 origin-top-right" }), (0, jsx_runtime_1.jsx)("div", { style: {
                            transform: "rotate(45deg) translate(180%, -70%)",
                            background: gradientThird,
                            width: "".concat(smallWidth, "px"),
                            height: "".concat(height, "px"),
                        }, className: "absolute top-0 right-0 origin-top-right" })] })] }));
};
exports.Spotlight = Spotlight;
