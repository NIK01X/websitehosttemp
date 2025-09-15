"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var TextPressure = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'Compressa' : _b, _c = _a.fontFamily, fontFamily = _c === void 0 ? 'Compressa VF' : _c, _d = _a.fontUrl, fontUrl = _d === void 0 ? 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2' : _d, _e = _a.width, width = _e === void 0 ? true : _e, _f = _a.weight, weight = _f === void 0 ? true : _f, _g = _a.italic, italic = _g === void 0 ? true : _g, _h = _a.alpha, alpha = _h === void 0 ? false : _h, _j = _a.flex, flex = _j === void 0 ? true : _j, _k = _a.stroke, stroke = _k === void 0 ? false : _k, _l = _a.scale, scale = _l === void 0 ? false : _l, _m = _a.textColor, textColor = _m === void 0 ? '#FFFFFF' : _m, _o = _a.strokeColor, strokeColor = _o === void 0 ? '#FF0000' : _o, _p = _a.className, className = _p === void 0 ? '' : _p, _q = _a.minFontSize, minFontSize = _q === void 0 ? 24 : _q;
    var containerRef = (0, react_1.useRef)(null);
    var titleRef = (0, react_1.useRef)(null);
    var spansRef = (0, react_1.useRef)([]);
    var mouseRef = (0, react_1.useRef)({ x: 0, y: 0 });
    var cursorRef = (0, react_1.useRef)({ x: 0, y: 0 });
    var _r = (0, react_1.useState)(minFontSize), fontSize = _r[0], setFontSize = _r[1];
    var _s = (0, react_1.useState)(1), scaleY = _s[0], setScaleY = _s[1];
    var _t = (0, react_1.useState)(1), lineHeight = _t[0], setLineHeight = _t[1];
    var chars = text.split('');
    var dist = function (a, b) {
        var dx = b.x - a.x;
        var dy = b.y - a.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    (0, react_1.useEffect)(function () {
        var handleMouseMove = function (e) {
            cursorRef.current.x = e.clientX;
            cursorRef.current.y = e.clientY;
        };
        var handleTouchMove = function (e) {
            var t = e.touches[0];
            cursorRef.current.x = t.clientX;
            cursorRef.current.y = t.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        if (containerRef.current) {
            var _a = containerRef.current.getBoundingClientRect(), left = _a.left, top_1 = _a.top, width_1 = _a.width, height = _a.height;
            mouseRef.current.x = left + width_1 / 2;
            mouseRef.current.y = top_1 + height / 2;
            cursorRef.current.x = mouseRef.current.x;
            cursorRef.current.y = mouseRef.current.y;
        }
        return function () {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);
    var setSize = function () {
        if (!containerRef.current || !titleRef.current)
            return;
        var _a = containerRef.current.getBoundingClientRect(), containerW = _a.width, containerH = _a.height;
        var newFontSize = containerW / (chars.length / 2);
        newFontSize = Math.max(newFontSize, minFontSize);
        setFontSize(newFontSize);
        setScaleY(1);
        setLineHeight(1);
        requestAnimationFrame(function () {
            if (!titleRef.current)
                return;
            var textRect = titleRef.current.getBoundingClientRect();
            if (scale && textRect.height > 0) {
                var yRatio = containerH / textRect.height;
                setScaleY(yRatio);
                setLineHeight(yRatio);
            }
        });
    };
    (0, react_1.useEffect)(function () {
        setSize();
        window.addEventListener('resize', setSize);
        return function () { return window.removeEventListener('resize', setSize); };
    }, [scale, text]);
    (0, react_1.useEffect)(function () {
        var rafId;
        var animate = function () {
            mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
            mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;
            if (titleRef.current) {
                var titleRect = titleRef.current.getBoundingClientRect();
                var maxDist_1 = titleRect.width / 2;
                spansRef.current.forEach(function (span) {
                    if (!span)
                        return;
                    var rect = span.getBoundingClientRect();
                    var charCenter = {
                        x: rect.x + rect.width / 2,
                        y: rect.y + rect.height / 2
                    };
                    var d = dist(mouseRef.current, charCenter);
                    var getAttr = function (distance, minVal, maxVal) {
                        var val = maxVal - Math.abs((maxVal * distance) / maxDist_1);
                        return Math.max(minVal, val + minVal);
                    };
                    var wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
                    var wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
                    var italVal = italic ? getAttr(d, 0, 1).toFixed(2) : 0;
                    var alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : 1;
                    span.style.opacity = alphaVal.toString();
                    span.style.fontVariationSettings = "'wght' ".concat(wght, ", 'wdth' ").concat(wdth, ", 'ital' ").concat(italVal);
                });
            }
            rafId = requestAnimationFrame(animate);
        };
        animate();
        return function () { return cancelAnimationFrame(rafId); };
    }, [width, weight, italic, alpha, chars.length]);
    var dynamicClassName = [className, flex ? 'flex' : '', stroke ? 'stroke' : ''].filter(Boolean).join(' ');
    return ((0, jsx_runtime_1.jsxs)("div", { ref: containerRef, style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            background: 'transparent'
        }, children: [(0, jsx_runtime_1.jsx)("style", { children: "\n        @font-face {\n          font-family: '".concat(fontFamily, "';\n          src: url('").concat(fontUrl, "');\n          font-style: normal;\n        }\n\n        .flex {\n          display: flex;\n          justify-content: space-between;\n        }\n\n        .stroke span {\n          position: relative;\n          color: ").concat(textColor, ";\n        }\n        .stroke span::after {\n          content: attr(data-char);\n          position: absolute;\n          left: 0;\n          top: 0;\n          color: transparent;\n          z-index: -1;\n          -webkit-text-stroke-width: 3px;\n          -webkit-text-stroke-color: ").concat(strokeColor, ";\n        }\n\n        .text-pressure-title {\n          color: ").concat(textColor, ";\n        }\n      ") }), (0, jsx_runtime_1.jsx)("h1", { ref: titleRef, className: "text-pressure-title ".concat(dynamicClassName), style: {
                    fontFamily: fontFamily,
                    textTransform: 'uppercase',
                    fontSize: fontSize,
                    lineHeight: lineHeight,
                    transform: "scale(1, ".concat(scaleY, ")"),
                    transformOrigin: 'center top',
                    margin: 0,
                    textAlign: 'center',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    fontWeight: 100,
                    width: '100%'
                }, children: chars.map(function (char, i) { return ((0, jsx_runtime_1.jsx)("span", { ref: function (el) {
                        spansRef.current[i] = el;
                    }, "data-char": char, style: {
                        display: 'inline-block',
                        color: stroke ? undefined : textColor
                    }, children: char }, i)); }) })] }));
};
exports.default = TextPressure;
