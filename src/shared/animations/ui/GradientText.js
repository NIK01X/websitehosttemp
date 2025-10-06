"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GradientText;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./GradientText.css");
function GradientText(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.colors, colors = _c === void 0 ? ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"] : _c, _d = _a.animationSpeed, animationSpeed = _d === void 0 ? 8 : _d, _e = _a.showBorder, showBorder = _e === void 0 ? false : _e, style = _a.style;
    var gradientStyle = {
        backgroundImage: "linear-gradient(to right, ".concat(colors.join(", "), ")"),
        animationDuration: "".concat(animationSpeed, "s"),
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "animated-gradient-text ".concat(className), style: style, children: [showBorder && ((0, jsx_runtime_1.jsx)("div", { className: "gradient-overlay", style: gradientStyle })), (0, jsx_runtime_1.jsx)("div", { className: "text-content", style: gradientStyle, children: children })] }));
}
