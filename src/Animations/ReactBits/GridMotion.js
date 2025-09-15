"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
require("./GridMotion.css");
var GridMotion = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, _c = _a.gradientColor, gradientColor = _c === void 0 ? "#080e1b" : _c;
    var gridRef = (0, react_1.useRef)(null);
    var rowRefs = (0, react_1.useRef)([]);
    var mouseXRef = (0, react_1.useRef)(window.innerWidth / 2);
    var totalItems = 28;
    var defaultItems = Array.from({ length: totalItems }, function (_, index) { return "Item ".concat(index + 1); });
    var combinedItems = items.length > 0 ? items.slice(0, totalItems) : defaultItems;
    (0, react_1.useEffect)(function () {
        gsap_1.gsap.ticker.lagSmoothing(0);
        var handleMouseMove = function (e) {
            mouseXRef.current = e.clientX;
        };
        var updateMotion = function () {
            var maxMoveAmount = 300;
            var baseDuration = 0.8;
            var inertiaFactors = [0.6, 0.4, 0.3, 0.2];
            rowRefs.current.forEach(function (row, index) {
                if (row) {
                    var direction = index % 2 === 0 ? 1 : -1;
                    var moveAmount = ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
                        maxMoveAmount / 2) *
                        direction;
                    gsap_1.gsap.to(row, {
                        x: moveAmount,
                        duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
                        ease: "power3.out",
                        overwrite: "auto",
                    });
                }
            });
        };
        var removeAnimationLoop = gsap_1.gsap.ticker.add(updateMotion);
        window.addEventListener("mousemove", handleMouseMove);
        return function () {
            window.removeEventListener("mousemove", handleMouseMove);
            removeAnimationLoop();
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { className: "noscroll loading", ref: gridRef, children: (0, jsx_runtime_1.jsxs)("section", { className: "intro", style: {
                background: "radial-gradient(circle, ".concat(gradientColor, " 0%, transparent 100%)"),
            }, children: [(0, jsx_runtime_1.jsx)("div", { className: "gridMotion-container", children: Array.from({ length: 4 }, function (_, rowIndex) { return ((0, jsx_runtime_1.jsx)("div", { className: "row", ref: function (el) {
                            rowRefs.current[rowIndex] = el;
                        }, children: Array.from({ length: 7 }, function (_, itemIndex) {
                            var content = combinedItems[rowIndex * 7 + itemIndex];
                            return ((0, jsx_runtime_1.jsx)("div", { className: "row__item", children: (0, jsx_runtime_1.jsx)("div", { className: "row__item-inner", style: { backgroundColor: "#111" }, children: typeof content === "string" &&
                                        (content.startsWith("http") ||
                                            content.toLowerCase().endsWith(".svg") ||
                                            content.toLowerCase().endsWith(".png") ||
                                            content.toLowerCase().endsWith(".jpg") ||
                                            content.toLowerCase().endsWith(".jpeg") ||
                                            content.toLowerCase().endsWith(".gif") ||
                                            content.toLowerCase().endsWith(".heic") ||
                                            content.toLowerCase().endsWith(".webp")) ? ((0, jsx_runtime_1.jsx)("div", { className: "row__item-img", style: {
                                            backgroundImage: "url(".concat(content, ")"),
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }, onError: function (e) {
                                            // Fallback for unsupported formats like HEIC
                                            var target = e.target;
                                            target.style.backgroundImage = "none";
                                            target.innerHTML = "<div style=\"color: #666; text-align: center; padding: 20px; font-size: 14px;\">Image format not supported in browser<br/><small>".concat(content
                                                .split("/")
                                                .pop(), "</small></div>");
                                        } })) : ((0, jsx_runtime_1.jsx)("div", { className: "row__item-content", children: content })) }) }, itemIndex));
                        }) }, rowIndex)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "fullview" })] }) }));
};
exports.default = GridMotion;
