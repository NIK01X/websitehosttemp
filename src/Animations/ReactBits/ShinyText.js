"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ShinyText.css");
var ShinyText = function (_a) {
    var text = _a.text, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.speed, speed = _c === void 0 ? 5 : _c, _d = _a.className, className = _d === void 0 ? '' : _d;
    var animationDuration = "".concat(speed, "s");
    return ((0, jsx_runtime_1.jsx)("div", { className: "shiny-text ".concat(disabled ? 'disabled' : '', " ").concat(className), style: { animationDuration: animationDuration }, children: text }));
};
exports.default = ShinyText;
