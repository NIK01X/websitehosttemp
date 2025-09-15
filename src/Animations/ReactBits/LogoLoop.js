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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoLoop = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
require("./LogoLoop.css");
var ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
var toCssLength = function (value) {
    return typeof value === 'number' ? "".concat(value, "px") : (value !== null && value !== void 0 ? value : undefined);
};
var useResizeObserver = function (callback, elements, dependencies) {
    (0, react_1.useEffect)(function () {
        if (!window.ResizeObserver) {
            var handleResize_1 = function () { return callback(); };
            window.addEventListener('resize', handleResize_1);
            callback();
            return function () { return window.removeEventListener('resize', handleResize_1); };
        }
        var observers = elements.map(function (ref) {
            if (!ref.current)
                return null;
            var observer = new ResizeObserver(callback);
            observer.observe(ref.current);
            return observer;
        });
        callback();
        return function () {
            observers.forEach(function (observer) { return observer === null || observer === void 0 ? void 0 : observer.disconnect(); });
        };
    }, dependencies);
};
var useImageLoader = function (seqRef, onLoad, dependencies) {
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var images = (_b = (_a = seqRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('img')) !== null && _b !== void 0 ? _b : [];
        if (images.length === 0) {
            onLoad();
            return;
        }
        var remainingImages = images.length;
        var handleImageLoad = function () {
            remainingImages -= 1;
            if (remainingImages === 0) {
                onLoad();
            }
        };
        images.forEach(function (img) {
            var htmlImg = img;
            if (htmlImg.complete) {
                handleImageLoad();
            }
            else {
                htmlImg.addEventListener('load', handleImageLoad, { once: true });
                htmlImg.addEventListener('error', handleImageLoad, { once: true });
            }
        });
        return function () {
            images.forEach(function (img) {
                img.removeEventListener('load', handleImageLoad);
                img.removeEventListener('error', handleImageLoad);
            });
        };
    }, dependencies);
};
var useAnimationLoop = function (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) {
    var rafRef = (0, react_1.useRef)(null);
    var lastTimestampRef = (0, react_1.useRef)(null);
    var offsetRef = (0, react_1.useRef)(0);
    var velocityRef = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        var track = trackRef.current;
        if (!track)
            return;
        if (seqWidth > 0) {
            offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
            track.style.transform = "translate3d(".concat(-offsetRef.current, "px, 0, 0)");
        }
        var animate = function (timestamp) {
            if (lastTimestampRef.current === null) {
                lastTimestampRef.current = timestamp;
            }
            var deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
            lastTimestampRef.current = timestamp;
            var target = pauseOnHover && isHovered ? 0 : targetVelocity;
            var easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
            velocityRef.current += (target - velocityRef.current) * easingFactor;
            if (seqWidth > 0) {
                var nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
                offsetRef.current = nextOffset;
                var translateX = -offsetRef.current;
                track.style.transform = "translate3d(".concat(translateX, "px, 0, 0)");
            }
            rafRef.current = requestAnimationFrame(animate);
        };
        rafRef.current = requestAnimationFrame(animate);
        return function () {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            }
            lastTimestampRef.current = null;
        };
    }, [targetVelocity, seqWidth, isHovered, pauseOnHover]);
};
exports.LogoLoop = react_1.default.memo(function (_a) {
    var logos = _a.logos, _b = _a.speed, speed = _b === void 0 ? 120 : _b, _c = _a.direction, direction = _c === void 0 ? 'left' : _c, _d = _a.width, width = _d === void 0 ? '100%' : _d, _e = _a.logoHeight, logoHeight = _e === void 0 ? 28 : _e, _f = _a.gap, gap = _f === void 0 ? 32 : _f, _g = _a.pauseOnHover, pauseOnHover = _g === void 0 ? true : _g, _h = _a.fadeOut, fadeOut = _h === void 0 ? false : _h, fadeOutColor = _a.fadeOutColor, _j = _a.scaleOnHover, scaleOnHover = _j === void 0 ? false : _j, _k = _a.ariaLabel, ariaLabel = _k === void 0 ? 'Partner logos' : _k, className = _a.className, style = _a.style;
    var containerRef = (0, react_1.useRef)(null);
    var trackRef = (0, react_1.useRef)(null);
    var seqRef = (0, react_1.useRef)(null);
    var _l = (0, react_1.useState)(0), seqWidth = _l[0], setSeqWidth = _l[1];
    var _m = (0, react_1.useState)(ANIMATION_CONFIG.MIN_COPIES), copyCount = _m[0], setCopyCount = _m[1];
    var _o = (0, react_1.useState)(false), isHovered = _o[0], setIsHovered = _o[1];
    var targetVelocity = (0, react_1.useMemo)(function () {
        var magnitude = Math.abs(speed);
        var directionMultiplier = direction === 'left' ? 1 : -1;
        var speedMultiplier = speed < 0 ? -1 : 1;
        return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);
    var updateDimensions = (0, react_1.useCallback)(function () {
        var _a, _b, _c, _d, _e, _f;
        var containerWidth = (_b = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        var sequenceWidth = (_f = (_e = (_d = (_c = seqRef.current) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect) === null || _d === void 0 ? void 0 : _d.call(_c)) === null || _e === void 0 ? void 0 : _e.width) !== null && _f !== void 0 ? _f : 0;
        if (sequenceWidth > 0) {
            setSeqWidth(Math.ceil(sequenceWidth));
            var copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
            setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
        }
    }, []);
    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);
    var cssVariables = (0, react_1.useMemo)(function () {
        return (__assign({ '--logoloop-gap': "".concat(gap, "px"), '--logoloop-logoHeight': "".concat(logoHeight, "px") }, (fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })));
    }, [gap, logoHeight, fadeOutColor]);
    var rootClassName = (0, react_1.useMemo)(function () {
        return ['logoloop', fadeOut && 'logoloop--fade', scaleOnHover && 'logoloop--scale-hover', className]
            .filter(Boolean)
            .join(' ');
    }, [fadeOut, scaleOnHover, className]);
    var handleMouseEnter = (0, react_1.useCallback)(function () {
        if (pauseOnHover)
            setIsHovered(true);
    }, [pauseOnHover]);
    var handleMouseLeave = (0, react_1.useCallback)(function () {
        if (pauseOnHover)
            setIsHovered(false);
    }, [pauseOnHover]);
    var renderLogoItem = (0, react_1.useCallback)(function (item, key) {
        var _a, _b, _c;
        var isNodeItem = 'node' in item;
        var content = isNodeItem ? ((0, jsx_runtime_1.jsx)("span", { className: "logoloop__node", "aria-hidden": !!item.href && !item.ariaLabel, children: item.node })) : ((0, jsx_runtime_1.jsx)("img", { src: item.src, srcSet: item.srcSet, sizes: item.sizes, width: item.width, height: item.height, alt: (_a = item.alt) !== null && _a !== void 0 ? _a : '', title: item.title, loading: "lazy", decoding: "async", draggable: false }));
        var itemAriaLabel = isNodeItem ? ((_b = item.ariaLabel) !== null && _b !== void 0 ? _b : item.title) : ((_c = item.alt) !== null && _c !== void 0 ? _c : item.title);
        var itemContent = item.href ? ((0, jsx_runtime_1.jsx)("a", { className: "logoloop__link", href: item.href, "aria-label": itemAriaLabel || 'logo link', target: "_blank", rel: "noreferrer noopener", children: content })) : (content);
        return ((0, jsx_runtime_1.jsx)("li", { className: "logoloop__item", role: "listitem", children: itemContent }, key));
    }, []);
    var logoLists = (0, react_1.useMemo)(function () {
        return Array.from({ length: copyCount }, function (_, copyIndex) { return ((0, jsx_runtime_1.jsx)("ul", { className: "logoloop__list", role: "list", "aria-hidden": copyIndex > 0, ref: copyIndex === 0 ? seqRef : undefined, children: logos.map(function (item, itemIndex) { return renderLogoItem(item, "".concat(copyIndex, "-").concat(itemIndex)); }) }, "copy-".concat(copyIndex))); });
    }, [copyCount, logos, renderLogoItem]);
    var containerStyle = (0, react_1.useMemo)(function () {
        var _a;
        return (__assign(__assign({ width: (_a = toCssLength(width)) !== null && _a !== void 0 ? _a : '100%' }, cssVariables), style));
    }, [width, cssVariables, style]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: containerRef, className: rootClassName, style: containerStyle, role: "region", "aria-label": ariaLabel, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: (0, jsx_runtime_1.jsx)("div", { className: "logoloop__track", ref: trackRef, children: logoLists }) }));
});
exports.LogoLoop.displayName = 'LogoLoop';
exports.default = exports.LogoLoop;
