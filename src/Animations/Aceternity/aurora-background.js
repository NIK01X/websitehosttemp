"use client";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuroraBackground = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var utils_1 = require("../../lib/utils");
var AuroraBackground = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.showRadialGradient, showRadialGradient = _b === void 0 ? true : _b, props = __rest(_a, ["className", "children", "showRadialGradient"]);
    return ((0, jsx_runtime_1.jsx)("main", { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, utils_1.cn)("transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900", className) }, props, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 overflow-hidden", style: {
                        "--aurora": "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
                        "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
                        "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
                        "--blue-300": "#93c5fd",
                        "--blue-400": "#60a5fa",
                        "--blue-500": "#3b82f6",
                        "--indigo-300": "#a5b4fc",
                        "--violet-200": "#ddd6fe",
                        "--black": "#000",
                        "--white": "#fff",
                        "--transparent": "transparent",
                    }, children: (0, jsx_runtime_1.jsx)("div", { 
                        //   I'm sorry but this is what peak developer performance looks like // trigger warning
                        className: (0, utils_1.cn)("after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[\"\"] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]", showRadialGradient &&
                            "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]") }) }), children] })) }));
};
exports.AuroraBackground = AuroraBackground;
