"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("motion/react");
var react_2 = require("react");
var Timeline = function (_a) {
    var data = _a.data;
    var ref = (0, react_2.useRef)(null);
    var containerRef = (0, react_2.useRef)(null);
    var _b = (0, react_2.useState)(0), height = _b[0], setHeight = _b[1];
    (0, react_2.useEffect)(function () {
        if (ref.current) {
            var rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);
    var scrollYProgress = (0, react_1.useScroll)({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    }).scrollYProgress;
    var heightTransform = (0, react_1.useTransform)(scrollYProgress, [0, 1], [0, height]);
    var opacityTransform = (0, react_1.useTransform)(scrollYProgress, [0, 0.1], [0, 1]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full bg-black font-sans md:px-10", ref: containerRef, children: (0, jsx_runtime_1.jsxs)("div", { ref: ref, className: "relative max-w-7xl mx-auto pb-20", children: [data.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-start md:gap-10 ".concat(index === 0 ? "pt-4 md:pt-0" : "pt-10 md:pt-40"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "sticky flex flex-col md:flex-row z-40 items-center top-2 md:top-0 self-start max-w-xs lg:max-w-sm md:w-full", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-10 absolute left-3 md:left-3 w-10 rounded-full bg-neutral-800 flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "h-4 w-4 rounded-full bg-neutral-600 border border-neutral-500 p-2" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-white", children: item.title })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative pl-20 pr-4 md:pl-4 w-full", children: [(0, jsx_runtime_1.jsx)("h3", { className: "md:hidden block text-2xl mb-4 text-left font-bold text-white", children: item.title }), item.content, " "] })] }, index)); }), (0, jsx_runtime_1.jsx)("div", { style: {
                        height: height + "px",
                    }, className: "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ", children: (0, jsx_runtime_1.jsx)(react_1.motion.div, { style: {
                            height: heightTransform,
                            opacity: opacityTransform,
                        }, className: "absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" }) })] }) }));
};
exports.Timeline = Timeline;
