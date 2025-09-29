"use client";
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoizedStars = exports.TextRevealCardDescription = exports.TextRevealCardTitle = exports.TextRevealCard = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var tailwind_merge_1 = require("tailwind-merge");
var utils_1 = require("../../lib/utils");
var TextRevealCard = function (_a) {
    var text = _a.text, revealText = _a.revealText, children = _a.children, className = _a.className;
    var _b = (0, react_1.useState)(0), widthPercentage = _b[0], setWidthPercentage = _b[1];
    var cardRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(0), left = _c[0], setLeft = _c[1];
    var _d = (0, react_1.useState)(0), localWidth = _d[0], setLocalWidth = _d[1];
    var _e = (0, react_1.useState)(false), isMouseOver = _e[0], setIsMouseOver = _e[1];
    (0, react_1.useEffect)(function () {
        if (cardRef.current) {
            var _a = cardRef.current.getBoundingClientRect(), left_1 = _a.left, localWidth_1 = _a.width;
            setLeft(left_1);
            setLocalWidth(localWidth_1);
        }
    }, []);
    function mouseMoveHandler(event) {
        event.preventDefault();
        var clientX = event.clientX;
        if (cardRef.current) {
            var relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }
    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }
    function touchMoveHandler(event) {
        event.preventDefault();
        var clientX = event.touches[0].clientX;
        if (cardRef.current) {
            var relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }
    var rotateDeg = (widthPercentage - 50) * 0.1;
    return ((0, jsx_runtime_1.jsxs)("div", { onMouseEnter: mouseEnterHandler, onMouseLeave: mouseLeaveHandler, onMouseMove: mouseMoveHandler, onTouchStart: mouseEnterHandler, onTouchEnd: mouseLeaveHandler, onTouchMove: touchMoveHandler, ref: cardRef, className: (0, utils_1.cn)("bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden", className), children: [children, (0, jsx_runtime_1.jsxs)("div", { className: "h-40  relative flex items-center overflow-hidden", children: [(0, jsx_runtime_1.jsx)(react_2.motion.div, { style: {
                            width: "100%",
                        }, animate: isMouseOver
                            ? {
                                opacity: widthPercentage > 0 ? 1 : 0,
                                clipPath: "inset(0 ".concat(100 - widthPercentage, "% 0 0)"),
                            }
                            : {
                                clipPath: "inset(0 ".concat(100 - widthPercentage, "% 0 0)"),
                            }, transition: isMouseOver ? { duration: 0 } : { duration: 0.4 }, className: "absolute bg-[#1d1c20] z-20  will-change-transform", children: (0, jsx_runtime_1.jsx)("p", { style: {
                                textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
                            }, className: "text-base sm:text-[3rem] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300", children: revealText }) }), (0, jsx_runtime_1.jsx)(react_2.motion.div, { animate: {
                            left: "".concat(widthPercentage, "%"),
                            rotate: "".concat(rotateDeg, "deg"),
                            opacity: widthPercentage > 0 ? 1 : 0,
                        }, transition: isMouseOver ? { duration: 0 } : { duration: 0.4 }, className: "h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform" }), (0, jsx_runtime_1.jsxs)("div", { className: " overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]", children: text }), (0, jsx_runtime_1.jsx)(exports.MemoizedStars, {})] })] })] }));
};
exports.TextRevealCard = TextRevealCard;
var TextRevealCardTitle = function (_a) {
    var children = _a.children, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("h2", { className: (0, tailwind_merge_1.twMerge)("text-white text-lg mb-2", className), children: children }));
};
exports.TextRevealCardTitle = TextRevealCardTitle;
var TextRevealCardDescription = function (_a) {
    var children = _a.children, className = _a.className;
    return ((0, jsx_runtime_1.jsx)("p", { className: (0, tailwind_merge_1.twMerge)("text-[#a9a9a9] text-sm", className), children: children }));
};
exports.TextRevealCardDescription = TextRevealCardDescription;
var Stars = function () {
    var randomMove = function () { return Math.random() * 4 - 2; };
    var randomOpacity = function () { return Math.random(); };
    var random = function () { return Math.random(); };
    return ((0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0", children: __spreadArray([], Array(80), true).map(function (_, i) { return ((0, jsx_runtime_1.jsx)(react_2.motion.span, { animate: {
                top: "calc(".concat(random() * 100, "% + ").concat(randomMove(), "px)"),
                left: "calc(".concat(random() * 100, "% + ").concat(randomMove(), "px)"),
                opacity: randomOpacity(),
                scale: [1, 1.2, 0],
            }, transition: {
                duration: random() * 10 + 20,
                repeat: Infinity,
                ease: "linear",
            }, style: {
                position: "absolute",
                top: "".concat(random() * 100, "%"),
                left: "".concat(random() * 100, "%"),
                width: "2px",
                height: "2px",
                backgroundColor: "white",
                borderRadius: "50%",
                zIndex: 1,
            }, className: "inline-block" }, "star-".concat(i))); }) }));
};
exports.MemoizedStars = (0, react_1.memo)(Stars);
