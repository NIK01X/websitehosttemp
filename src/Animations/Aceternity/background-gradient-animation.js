"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundGradientAnimation = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../lib/utils");
var react_1 = require("react");
var BackgroundGradientAnimation = function (_a) {
    var _b = _a.gradientBackgroundStart, gradientBackgroundStart = _b === void 0 ? "rgb(108, 0, 162)" : _b, _c = _a.gradientBackgroundEnd, gradientBackgroundEnd = _c === void 0 ? "rgb(0, 17, 82)" : _c, _d = _a.firstColor, firstColor = _d === void 0 ? "18, 113, 255" : _d, //Bright Blue
    _e = _a.secondColor, //Bright Blue
    secondColor = _e === void 0 ? "221, 74, 255" : _e, //Vivid Magenta / Pinkish Purple
    _f = _a.thirdColor, //Vivid Magenta / Pinkish Purple
    thirdColor = _f === void 0 ? "100, 220, 255" : _f, // Light Cyan / Sky Blue
    _g = _a.fourthColor, // Light Cyan / Sky Blue
    fourthColor = _g === void 0 ? "200, 50, 50" : _g, //Strong Red
    _h = _a.fifthColor, //Strong Red
    fifthColor = _h === void 0 ? "180, 180, 50" : _h, // Muted Yellow / Olive Yellow
    _j = _a.pointerColor, // Muted Yellow / Olive Yellow
    pointerColor = _j === void 0 ? "140, 100, 255" : _j, // Medium Purple / Violet
    _k = _a.size, // Medium Purple / Violet
    size = _k === void 0 ? "80%" : _k, _l = _a.blendingValue, blendingValue = _l === void 0 ? "hard-light" : _l, children = _a.children, className = _a.className, _m = _a.interactive, interactive = _m === void 0 ? true : _m, containerClassName = _a.containerClassName;
    var interactiveRef = (0, react_1.useRef)(null);
    var _o = (0, react_1.useState)(0), curX = _o[0], setCurX = _o[1];
    var _p = (0, react_1.useState)(0), curY = _p[0], setCurY = _p[1];
    var _q = (0, react_1.useState)(0), tgX = _q[0], setTgX = _q[1];
    var _r = (0, react_1.useState)(0), tgY = _r[0], setTgY = _r[1];
    (0, react_1.useEffect)(function () {
        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, []);
    (0, react_1.useEffect)(function () {
        function move() {
            if (!interactiveRef.current) {
                return;
            }
            setCurX(curX + (tgX - curX) / 20);
            setCurY(curY + (tgY - curY) / 20);
            interactiveRef.current.style.transform = "translate(".concat(Math.round(curX), "px, ").concat(Math.round(curY), "px)");
        }
        move();
    }, [tgX, tgY]);
    var handleMouseMove = function (event) {
        if (interactiveRef.current) {
            var rect = interactiveRef.current.getBoundingClientRect();
            setTgX(event.clientX - rect.left);
            setTgY(event.clientY - rect.top);
        }
    };
    var _s = (0, react_1.useState)(false), isSafari = _s[0], setIsSafari = _s[1];
    (0, react_1.useEffect)(function () {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]", containerClassName), children: [(0, jsx_runtime_1.jsx)("svg", { className: "hidden", children: (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("filter", { id: "blurMe", children: [(0, jsx_runtime_1.jsx)("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "10", result: "blur" }), (0, jsx_runtime_1.jsx)("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8", result: "goo" }), (0, jsx_runtime_1.jsx)("feBlend", { in: "SourceGraphic", in2: "goo" })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("", className), children: children }), (0, jsx_runtime_1.jsxs)("div", { className: (0, utils_1.cn)("gradients-container h-full w-full blur-lg", isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"), children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:center_center]", "animate-first", "opacity-100") }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-400px)]", "animate-second", "opacity-100") }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%+400px)]", "animate-third", "opacity-100") }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-200px)]", "animate-fourth", "opacity-70") }), (0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]", "[transform-origin:calc(50%-800px)_calc(50%+800px)]", "animate-fifth", "opacity-100") }), interactive && ((0, jsx_runtime_1.jsx)("div", { ref: interactiveRef, onMouseMove: handleMouseMove, className: (0, utils_1.cn)("absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]", "[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2", "opacity-70") }))] })] }));
};
exports.BackgroundGradientAnimation = BackgroundGradientAnimation;
