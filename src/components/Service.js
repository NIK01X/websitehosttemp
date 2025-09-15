"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Service = function () {
    var services = [
        {
            title: "Web Design",
            description: "Modern, responsive design systems that communicate your brand clearly.",
        },
        {
            title: "Web Development",
            description: "Robust, maintainable frontends with strong performance and accessibility.",
        },
        {
            title: "SEO & Analytics",
            description: "Technical SEO and analytics setup to measure and grow effectively.",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "service", className: "py-20 lg:py-28", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-5xl px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Service" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6", children: services.map(function (s) { return ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-xl border p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold", children: s.title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm/6 text-muted-foreground", children: s.description })] }, s.title)); }) })] }) }));
};
exports.default = Service;
