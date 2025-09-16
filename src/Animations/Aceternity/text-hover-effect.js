"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextHoverEffect = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var TextHoverEffect = function (_a) {
    var text = _a.text, duration = _a.duration;
    var svgRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)({ x: 0, y: 0 }), cursor = _b[0], setCursor = _b[1];
    var _c = (0, react_1.useState)(false), hovered = _c[0], setHovered = _c[1];
    var _d = (0, react_1.useState)({ cx: "50%", cy: "50%" }), maskPosition = _d[0], setMaskPosition = _d[1];
    (0, react_1.useEffect)(function () {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            var svgRect = svgRef.current.getBoundingClientRect();
            var cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            var cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: "".concat(cxPercentage, "%"),
                cy: "".concat(cyPercentage, "%"),
            });
        }
    }, [cursor]);
    return ((0, jsx_runtime_1.jsxs)("svg", { ref: svgRef, width: "100%", height: "100%", viewBox: "0 0 300 100", xmlns: "http://www.w3.org/2000/svg", onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); }, onMouseMove: function (e) { return setCursor({ x: e.clientX, y: e.clientY }); }, className: "select-none", children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsx)("linearGradient", { id: "textGradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", gradientUnits: "objectBoundingBox", children: hovered ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "#eab308" }), (0, jsx_runtime_1.jsx)("stop", { offset: "25%", stopColor: "#ef4444" }), (0, jsx_runtime_1.jsx)("stop", { offset: "50%", stopColor: "#3b82f6" }), (0, jsx_runtime_1.jsx)("stop", { offset: "75%", stopColor: "#06b6d4" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "#8b5cf6" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "transparent" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "transparent" })] })) }), (0, jsx_runtime_1.jsxs)(react_2.motion.radialGradient, { id: "revealMask", gradientUnits: "userSpaceOnUse", r: hovered ? "30%" : "0%", initial: { cx: "50%", cy: "50%" }, animate: maskPosition, transition: { duration: duration !== null && duration !== void 0 ? duration : 0.3, ease: "easeOut" }, children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", stopColor: "white" }), (0, jsx_runtime_1.jsx)("stop", { offset: "70%", stopColor: "white" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", stopColor: "black" })] }), (0, jsx_runtime_1.jsx)("mask", { id: "textMask", children: (0, jsx_runtime_1.jsx)("rect", { x: "0", y: "0", width: "100%", height: "100%", fill: "url(#revealMask)" }) })] }), (0, jsx_runtime_1.jsx)("text", { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "middle", strokeWidth: "0.3", className: "fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800", style: { opacity: hovered ? 0.3 : 0 }, children: text }), (0, jsx_runtime_1.jsx)(react_2.motion.text, { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "middle", strokeWidth: "0.3", className: "fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800", style: { opacity: 0.5 }, initial: { strokeDashoffset: 1000, strokeDasharray: 1000 }, animate: {
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }, transition: {
                    duration: 4,
                    ease: "easeInOut",
                }, children: text }), (0, jsx_runtime_1.jsx)("text", { x: "50%", y: "50%", textAnchor: "middle", dominantBaseline: "middle", stroke: "url(#textGradient)", strokeWidth: "0.3", mask: "url(#textMask)", className: "fill-transparent font-[helvetica] text-7xl font-bold", children: text })] }));
};
exports.TextHoverEffect = TextHoverEffect;
