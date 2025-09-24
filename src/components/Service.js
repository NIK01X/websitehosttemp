"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = Service;
var jsx_runtime_1 = require("react/jsx-runtime");
var DarkVeil_1 = __importDefault(require("../Animations/ReactBits/DarkVeil"));
function Service() {
    return ((0, jsx_runtime_1.jsx)("section", { id: "service", children: (0, jsx_runtime_1.jsx)("div", { style: { width: "100%", height: "100vh", position: "relative" }, children: (0, jsx_runtime_1.jsx)(DarkVeil_1.default, {}) }) }));
}
