"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskContainer = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var cn_1 = require("/Users/nikhil/Client-Websites/Digvijay_website/Website/utils/cn");
var MaskContainer = function (_a) {
    var children = _a.children, revealText = _a.revealText, _b = _a.size, size = _b === void 0 ? 10 : _b, _c = _a.revealSize, revealSize = _c === void 0 ? 600 : _c, className = _a.className;
    var _d = (0, react_1.useState)(false), isHovered = _d[0], setIsHovered = _d[1];
    var _e = (0, react_1.useState)({ x: null, y: null }), mousePosition = _e[0], setMousePosition = _e[1];
    var containerRef = (0, react_1.useRef)(null);
    var updateMousePosition = function (e) {
        var rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    (0, react_1.useEffect)(function () {
        containerRef.current.addEventListener("mousemove", updateMousePosition);
        return function () {
            if (containerRef.current) {
                containerRef.current.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, []);
    var maskSize = isHovered ? revealSize : size;
    return ((0, jsx_runtime_1.jsxs)(react_2.motion.div, { ref: containerRef, className: (0, cn_1.cn)("relative h-screen", className), animate: {
            backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
        }, transition: {
            backgroundColor: { duration: 0.3 },
        }, children: [(0, jsx_runtime_1.jsxs)(react_2.motion.div, { className: "absolute flex h-full w-full items-center justify-center bg-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white", animate: {
                    maskPosition: "".concat(mousePosition.x - maskSize / 2, "px ").concat(mousePosition.y - maskSize / 2, "px"),
                    maskSize: "".concat(maskSize, "px"),
                }, transition: {
                    maskSize: { duration: 0.3, ease: "easeInOut" },
                    maskPosition: { duration: 0.15, ease: "linear" },
                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 z-0 h-full w-full bg-black opacity-50 dark:bg-white" }), (0, jsx_runtime_1.jsx)("div", { onMouseEnter: function () {
                            setIsHovered(true);
                        }, onMouseLeave: function () {
                            setIsHovered(false);
                        }, className: "relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold", children: children })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: revealText })] }));
};
exports.MaskContainer = MaskContainer;
