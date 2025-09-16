"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutGrid = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("motion/react");
var utils_1 = require("../../lib/utils");
var LayoutGrid = function (_a) {
    var cards = _a.cards;
    var _b = (0, react_1.useState)(null), selected = _b[0], setSelected = _b[1];
    var _c = (0, react_1.useState)(null), lastSelected = _c[0], setLastSelected = _c[1];
    var handleClick = function (card) {
        setLastSelected(selected);
        setSelected(card);
    };
    var handleOutsideClick = function () {
        setLastSelected(selected);
        setSelected(null);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative", children: [cards.map(function (card, i) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)(card.className, ""), children: (0, jsx_runtime_1.jsxs)(react_2.motion.div, { onClick: function () { return handleClick(card); }, className: (0, utils_1.cn)(card.className, "relative overflow-hidden", (selected === null || selected === void 0 ? void 0 : selected.id) === card.id
                        ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                        : (lastSelected === null || lastSelected === void 0 ? void 0 : lastSelected.id) === card.id
                            ? "z-40 bg-white rounded-xl h-full w-full"
                            : "bg-white rounded-xl h-full w-full"), layoutId: "card-".concat(card.id), children: [(selected === null || selected === void 0 ? void 0 : selected.id) === card.id && (0, jsx_runtime_1.jsx)(SelectedCard, { selected: selected }), (0, jsx_runtime_1.jsx)(ImageComponent, { card: card })] }) }, i)); }), (0, jsx_runtime_1.jsx)(react_2.motion.div, { onClick: handleOutsideClick, className: (0, utils_1.cn)("absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10", (selected === null || selected === void 0 ? void 0 : selected.id) ? "pointer-events-auto" : "pointer-events-none"), animate: { opacity: (selected === null || selected === void 0 ? void 0 : selected.id) ? 0.3 : 0 } })] }));
};
exports.LayoutGrid = LayoutGrid;
var ImageComponent = function (_a) {
    var card = _a.card;
    return ((0, jsx_runtime_1.jsx)(react_2.motion.img, { layoutId: "image-".concat(card.id, "-image"), src: card.thumbnail, height: "500", width: "500", className: (0, utils_1.cn)("object-cover object-top absolute inset-0 h-full w-full transition duration-200"), alt: "thumbnail" }));
};
var SelectedCard = function (_a) {
    var selected = _a.selected;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]", children: [(0, jsx_runtime_1.jsx)(react_2.motion.div, { initial: {
                    opacity: 0,
                }, animate: {
                    opacity: 0.6,
                }, className: "absolute inset-0 h-full w-full bg-black opacity-60 z-10" }), (0, jsx_runtime_1.jsx)(react_2.motion.div, { layoutId: "content-".concat(selected === null || selected === void 0 ? void 0 : selected.id), initial: {
                    opacity: 0,
                    y: 100,
                }, animate: {
                    opacity: 1,
                    y: 0,
                }, exit: {
                    opacity: 0,
                    y: 100,
                }, transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                }, className: "relative px-8 pb-4 z-[70]", children: selected === null || selected === void 0 ? void 0 : selected.content })] }));
};
