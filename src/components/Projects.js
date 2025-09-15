"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Projects = function () {
    var items = [
        {
            title: "Project One",
            description: "High-impact marketing site with complex animations and blazing performance.",
        },
        {
            title: "Project Two",
            description: "E-commerce revamp focused on accessibility, conversions, and modern UX.",
        },
        {
            title: "Project Three",
            description: "Interactive data visualization dashboard with realtime updates.",
        },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "projects", className: "py-20 lg:py-28 bg-secondary/30", children: (0, jsx_runtime_1.jsxs)("div", { className: "mx-auto max-w-5xl px-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Projects" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-6", children: items.map(function (p) { return ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-xl border p-6 bg-card/40", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold", children: p.title }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm/6 text-muted-foreground", children: p.description })] }, p.title)); }) })] }) }));
};
exports.default = Projects;
