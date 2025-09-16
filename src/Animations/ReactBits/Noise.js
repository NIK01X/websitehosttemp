"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Noise.css");
var Noise = function (_a) {
    var _b = _a.patternSize, patternSize = _b === void 0 ? 250 : _b, _c = _a.patternScaleX, patternScaleX = _c === void 0 ? 1 : _c, _d = _a.patternScaleY, patternScaleY = _d === void 0 ? 1 : _d, _e = _a.patternRefreshInterval, patternRefreshInterval = _e === void 0 ? 2 : _e, _f = _a.patternAlpha, patternAlpha = _f === void 0 ? 15 : _f;
    var grainRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var canvas = grainRef.current;
        if (!canvas)
            return;
        var ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx)
            return;
        var frame = 0;
        var animationId;
        var canvasSize = 1024;
        var resize = function () {
            if (!canvas)
                return;
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            canvas.style.width = '100vw';
            canvas.style.height = '100vh';
        };
        var drawGrain = function () {
            var imageData = ctx.createImageData(canvasSize, canvasSize);
            var data = imageData.data;
            for (var i = 0; i < data.length; i += 4) {
                var value = Math.random() * 255;
                data[i] = value;
                data[i + 1] = value;
                data[i + 2] = value;
                data[i + 3] = patternAlpha;
            }
            ctx.putImageData(imageData, 0, 0);
        };
        var loop = function () {
            if (frame % patternRefreshInterval === 0) {
                drawGrain();
            }
            frame++;
            animationId = window.requestAnimationFrame(loop);
        };
        window.addEventListener('resize', resize);
        resize();
        loop();
        return function () {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationId);
        };
    }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);
    return (0, jsx_runtime_1.jsx)("canvas", { className: "noise-overlay", ref: grainRef, style: { imageRendering: 'pixelated' } });
};
exports.default = Noise;
