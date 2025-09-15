"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParallaxScroll = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var react_3 = require("motion/react");
var utils_1 = require("../../lib/utils");
var ParallaxScroll = function (_a) {
    var images = _a.images, className = _a.className;
    var gridRef = (0, react_2.useRef)(null);
    var scrollYProgress = (0, react_1.useScroll)({
        container: gridRef, // remove this if your container is not fixed height
        offset: ["start start", "end start"], // remove this if your container is not fixed height
    }).scrollYProgress;
    var translateFirst = (0, react_1.useTransform)(scrollYProgress, [0, 1], [0, -200]);
    var translateSecond = (0, react_1.useTransform)(scrollYProgress, [0, 1], [0, 200]);
    var translateThird = (0, react_1.useTransform)(scrollYProgress, [0, 1], [0, -200]);
    var third = Math.ceil(images.length / 3);
    var firstPart = images.slice(0, third);
    var secondPart = images.slice(third, 2 * third);
    var thirdPart = images.slice(2 * third);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("h-[40rem] items-start overflow-y-auto w-full", className), ref: gridRef, children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10", ref: gridRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "grid gap-10", children: firstPart.map(function (el, idx) { return ((0, jsx_runtime_1.jsx)(react_3.motion.div, { style: { y: translateFirst }, children: (0, jsx_runtime_1.jsx)("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-1" + idx)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid gap-10", children: secondPart.map(function (el, idx) { return ((0, jsx_runtime_1.jsx)(react_3.motion.div, { style: { y: translateSecond }, children: (0, jsx_runtime_1.jsx)("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-2" + idx)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid gap-10", children: thirdPart.map(function (el, idx) { return ((0, jsx_runtime_1.jsx)(react_3.motion.div, { style: { y: translateThird }, children: (0, jsx_runtime_1.jsx)("img", { src: el, className: "h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0", height: "400", width: "400", alt: "thumbnail" }) }, "grid-3" + idx)); }) })] }) }));
};
exports.ParallaxScroll = ParallaxScroll;
