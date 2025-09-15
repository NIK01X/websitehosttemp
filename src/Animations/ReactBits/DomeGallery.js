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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DomeGallery;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@use-gesture/react");
require("./DomeGallery.css");
var DEFAULT_IMAGES = [
    {
        src: "https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Abstract art",
    },
    {
        src: "https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Modern sculpture",
    },
    {
        src: "https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Digital artwork",
    },
    {
        src: "https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Contemporary art",
    },
    {
        src: "https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Geometric pattern",
    },
    {
        src: "https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Textured surface",
    },
    {
        src: "https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large",
        alt: "Social media image",
    },
];
var DEFAULTS = {
    maxVerticalRotationDeg: 0,
    dragSensitivity: 20,
    enlargeTransitionMs: 300,
    segments: 20,
};
var clamp = function (v, min, max) {
    return Math.min(Math.max(v, min), max);
};
var normalizeAngle = function (d) { return ((d % 360) + 360) % 360; };
var wrapAngleSigned = function (deg) {
    var a = (((deg + 180) % 360) + 360) % 360;
    return a - 180;
};
var getDataNumber = function (el, name, fallback) {
    var _a;
    var attr = (_a = el.dataset[name]) !== null && _a !== void 0 ? _a : el.getAttribute("data-".concat(name));
    var n = attr == null ? NaN : parseFloat(attr);
    return Number.isFinite(n) ? n : fallback;
};
function buildItems(pool, seg) {
    var xCols = Array.from({ length: seg }, function (_, i) { return -37 + i * 2; });
    var evenYs = [-4, -2, 0, 2, 4];
    var oddYs = [-3, -1, 1, 3, 5];
    var coords = xCols.flatMap(function (x, c) {
        var ys = c % 2 === 0 ? evenYs : oddYs;
        return ys.map(function (y) { return ({ x: x, y: y, sizeX: 2, sizeY: 2 }); });
    });
    var totalSlots = coords.length;
    if (pool.length === 0) {
        return coords.map(function (c) { return (__assign(__assign({}, c), { src: "", alt: "" })); });
    }
    if (pool.length > totalSlots) {
        console.warn("[DomeGallery] Provided image count (".concat(pool.length, ") exceeds available tiles (").concat(totalSlots, "). Some images will not be shown."));
    }
    var normalizedImages = pool.map(function (image) {
        if (typeof image === "string") {
            return { src: image, alt: "" };
        }
        return { src: image.src || "", alt: image.alt || "" };
    });
    var usedImages = Array.from({ length: totalSlots }, function (_, i) { return normalizedImages[i % normalizedImages.length]; });
    for (var i = 1; i < usedImages.length; i++) {
        if (usedImages[i].src === usedImages[i - 1].src) {
            for (var j = i + 1; j < usedImages.length; j++) {
                if (usedImages[j].src !== usedImages[i].src) {
                    var tmp = usedImages[i];
                    usedImages[i] = usedImages[j];
                    usedImages[j] = tmp;
                    break;
                }
            }
        }
    }
    return coords.map(function (c, i) { return (__assign(__assign({}, c), { src: usedImages[i].src, alt: usedImages[i].alt })); });
}
function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
    var unit = 360 / segments / 2;
    var rotateY = unit * (offsetX + (sizeX - 1) / 2);
    var rotateX = unit * (offsetY - (sizeY - 1) / 2);
    return { rotateX: rotateX, rotateY: rotateY };
}
function DomeGallery(_a) {
    var _b;
    var _c = _a.images, images = _c === void 0 ? DEFAULT_IMAGES : _c, _d = _a.fit, fit = _d === void 0 ? 0.5 : _d, _e = _a.fitBasis, fitBasis = _e === void 0 ? "auto" : _e, _f = _a.minRadius, minRadius = _f === void 0 ? 200 : _f, _g = _a.maxRadius, maxRadius = _g === void 0 ? Infinity : _g, _h = _a.padFactor, padFactor = _h === void 0 ? 0.25 : _h, _j = _a.overlayBlurColor, overlayBlurColor = _j === void 0 ? "#00060010" : _j, _k = _a.maxVerticalRotationDeg, maxVerticalRotationDeg = _k === void 0 ? DEFAULTS.maxVerticalRotationDeg : _k, _l = _a.dragSensitivity, dragSensitivity = _l === void 0 ? DEFAULTS.dragSensitivity : _l, _m = _a.enlargeTransitionMs, enlargeTransitionMs = _m === void 0 ? DEFAULTS.enlargeTransitionMs : _m, _o = _a.segments, segments = _o === void 0 ? DEFAULTS.segments : _o, _p = _a.dragDampening, dragDampening = _p === void 0 ? 5 : _p, _q = _a.openedImageWidth, openedImageWidth = _q === void 0 ? "400px" : _q, _r = _a.openedImageHeight, openedImageHeight = _r === void 0 ? "400px" : _r, _s = _a.imageBorderRadius, imageBorderRadius = _s === void 0 ? "30px" : _s, _t = _a.openedImageBorderRadius, openedImageBorderRadius = _t === void 0 ? "30px" : _t, _u = _a.grayscale, grayscale = _u === void 0 ? false : _u;
    var rootRef = (0, react_1.useRef)(null);
    var mainRef = (0, react_1.useRef)(null);
    var sphereRef = (0, react_1.useRef)(null);
    var frameRef = (0, react_1.useRef)(null);
    var viewerRef = (0, react_1.useRef)(null);
    var scrimRef = (0, react_1.useRef)(null);
    var focusedElRef = (0, react_1.useRef)(null);
    var originalTilePositionRef = (0, react_1.useRef)(null);
    var rotationRef = (0, react_1.useRef)({ x: 0, y: 0 });
    var startRotRef = (0, react_1.useRef)({ x: 0, y: 0 });
    var startPosRef = (0, react_1.useRef)(null);
    var draggingRef = (0, react_1.useRef)(false);
    var movedRef = (0, react_1.useRef)(false);
    var inertiaRAF = (0, react_1.useRef)(null);
    var openingRef = (0, react_1.useRef)(false);
    var openStartedAtRef = (0, react_1.useRef)(0);
    var lastDragEndAt = (0, react_1.useRef)(0);
    var scrollLockedRef = (0, react_1.useRef)(false);
    var lockScroll = (0, react_1.useCallback)(function () {
        if (scrollLockedRef.current)
            return;
        scrollLockedRef.current = true;
        document.body.classList.add("dg-scroll-lock");
    }, []);
    var unlockScroll = (0, react_1.useCallback)(function () {
        var _a;
        if (!scrollLockedRef.current)
            return;
        if (((_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.getAttribute("data-enlarging")) === "true")
            return;
        scrollLockedRef.current = false;
        document.body.classList.remove("dg-scroll-lock");
    }, []);
    var items = (0, react_1.useMemo)(function () { return buildItems(images, segments); }, [images, segments]);
    var applyTransform = function (xDeg, yDeg) {
        var el = sphereRef.current;
        if (el) {
            el.style.transform = "translateZ(calc(var(--radius) * -1)) rotateX(".concat(xDeg, "deg) rotateY(").concat(yDeg, "deg)");
        }
    };
    var lockedRadiusRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var root = rootRef.current;
        if (!root)
            return;
        var ro = new ResizeObserver(function (entries) {
            var _a;
            var cr = entries[0].contentRect;
            var w = Math.max(1, cr.width), h = Math.max(1, cr.height);
            var minDim = Math.min(w, h), maxDim = Math.max(w, h), aspect = w / h;
            var basis;
            switch (fitBasis) {
                case "min":
                    basis = minDim;
                    break;
                case "max":
                    basis = maxDim;
                    break;
                case "width":
                    basis = w;
                    break;
                case "height":
                    basis = h;
                    break;
                default:
                    basis = aspect >= 1.3 ? w : minDim;
            }
            var radius = basis * fit;
            var heightGuard = h * 1.35;
            radius = Math.min(radius, heightGuard);
            radius = clamp(radius, minRadius, maxRadius);
            lockedRadiusRef.current = Math.round(radius);
            var viewerPad = Math.max(8, Math.round(minDim * padFactor));
            root.style.setProperty("--radius", "".concat(lockedRadiusRef.current, "px"));
            root.style.setProperty("--viewer-pad", "".concat(viewerPad, "px"));
            root.style.setProperty("--overlay-blur-color", overlayBlurColor);
            root.style.setProperty("--tile-radius", imageBorderRadius);
            root.style.setProperty("--enlarge-radius", openedImageBorderRadius);
            root.style.setProperty("--image-filter", grayscale ? "grayscale(1)" : "none");
            applyTransform(rotationRef.current.x, rotationRef.current.y);
            var enlargedOverlay = (_a = viewerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".enlarge");
            if (enlargedOverlay && frameRef.current && mainRef.current) {
                var frameR = frameRef.current.getBoundingClientRect();
                var mainR = mainRef.current.getBoundingClientRect();
                var hasCustomSize = openedImageWidth && openedImageHeight;
                if (hasCustomSize) {
                    var tempDiv = document.createElement("div");
                    tempDiv.style.cssText = "position: absolute; width: ".concat(openedImageWidth, "; height: ").concat(openedImageHeight, "; visibility: hidden;");
                    document.body.appendChild(tempDiv);
                    var tempRect = tempDiv.getBoundingClientRect();
                    document.body.removeChild(tempDiv);
                    var centeredLeft = frameR.left - mainR.left + (frameR.width - tempRect.width) / 2;
                    var centeredTop = frameR.top - mainR.top + (frameR.height - tempRect.height) / 2;
                    enlargedOverlay.style.left = "".concat(centeredLeft, "px");
                    enlargedOverlay.style.top = "".concat(centeredTop, "px");
                }
                else {
                    enlargedOverlay.style.left = "".concat(frameR.left - mainR.left, "px");
                    enlargedOverlay.style.top = "".concat(frameR.top - mainR.top, "px");
                    enlargedOverlay.style.width = "".concat(frameR.width, "px");
                    enlargedOverlay.style.height = "".concat(frameR.height, "px");
                }
            }
        });
        ro.observe(root);
        return function () { return ro.disconnect(); };
    }, [
        fit,
        fitBasis,
        minRadius,
        maxRadius,
        padFactor,
        overlayBlurColor,
        grayscale,
        imageBorderRadius,
        openedImageBorderRadius,
        openedImageWidth,
        openedImageHeight,
    ]);
    (0, react_1.useEffect)(function () {
        applyTransform(rotationRef.current.x, rotationRef.current.y);
    }, []);
    var stopInertia = (0, react_1.useCallback)(function () {
        if (inertiaRAF.current) {
            cancelAnimationFrame(inertiaRAF.current);
            inertiaRAF.current = null;
        }
    }, []);
    var startInertia = (0, react_1.useCallback)(function (vx, vy) {
        var MAX_V = 1.4;
        var vX = clamp(vx, -MAX_V, MAX_V) * 80;
        var vY = clamp(vy, -MAX_V, MAX_V) * 80;
        var frames = 0;
        var d = clamp(dragDampening !== null && dragDampening !== void 0 ? dragDampening : 0.6, 0, 1);
        var frictionMul = 0.94 + 0.055 * d;
        var stopThreshold = 0.015 - 0.01 * d;
        var maxFrames = Math.round(90 + 270 * d);
        var step = function () {
            vX *= frictionMul;
            vY *= frictionMul;
            if (Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) {
                inertiaRAF.current = null;
                return;
            }
            if (++frames > maxFrames) {
                inertiaRAF.current = null;
                return;
            }
            var nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
            var nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
            rotationRef.current = { x: nextX, y: nextY };
            applyTransform(nextX, nextY);
            inertiaRAF.current = requestAnimationFrame(step);
        };
        stopInertia();
        inertiaRAF.current = requestAnimationFrame(step);
    }, [dragDampening, maxVerticalRotationDeg, stopInertia]);
    (0, react_2.useGesture)({
        onDragStart: function (_a) {
            var event = _a.event;
            if (focusedElRef.current)
                return;
            stopInertia();
            var evt = event;
            draggingRef.current = true;
            movedRef.current = false;
            startRotRef.current = __assign({}, rotationRef.current);
            startPosRef.current = { x: evt.clientX, y: evt.clientY };
        },
        onDrag: function (_a) {
            var event = _a.event, last = _a.last, _b = _a.velocity, velocity = _b === void 0 ? [0, 0] : _b, _c = _a.direction, direction = _c === void 0 ? [0, 0] : _c, movement = _a.movement;
            if (focusedElRef.current ||
                !draggingRef.current ||
                !startPosRef.current)
                return;
            var evt = event;
            var dxTotal = evt.clientX - startPosRef.current.x;
            var dyTotal = evt.clientY - startPosRef.current.y;
            if (!movedRef.current) {
                var dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
                if (dist2 > 16)
                    movedRef.current = true;
            }
            var nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
            var nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
            if (rotationRef.current.x !== nextX ||
                rotationRef.current.y !== nextY) {
                rotationRef.current = { x: nextX, y: nextY };
                applyTransform(nextX, nextY);
            }
            if (last) {
                draggingRef.current = false;
                var vMagX = velocity[0], vMagY = velocity[1];
                var dirX = direction[0], dirY = direction[1];
                var vx = vMagX * dirX;
                var vy = vMagY * dirY;
                if (Math.abs(vx) < 0.001 &&
                    Math.abs(vy) < 0.001 &&
                    Array.isArray(movement)) {
                    var mx = movement[0], my = movement[1];
                    vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
                    vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
                }
                if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) {
                    startInertia(vx, vy);
                }
                if (movedRef.current)
                    lastDragEndAt.current = performance.now();
                movedRef.current = false;
            }
        },
    }, { target: mainRef, eventOptions: { passive: true } });
    var openItemFromElement = function (el) {
        var _a;
        if (openingRef.current)
            return;
        openingRef.current = true;
        openStartedAtRef.current = performance.now();
        lockScroll();
        var parent = el.parentElement;
        focusedElRef.current = el;
        el.setAttribute("data-focused", "true");
        var offsetX = getDataNumber(parent, "offsetX", 0);
        var offsetY = getDataNumber(parent, "offsetY", 0);
        var sizeX = getDataNumber(parent, "sizeX", 2);
        var sizeY = getDataNumber(parent, "sizeY", 2);
        var parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
        var parentY = normalizeAngle(parentRot.rotateY);
        var globalY = normalizeAngle(rotationRef.current.y);
        var rotY = -(parentY + globalY) % 360;
        if (rotY < -180)
            rotY += 360;
        var rotX = -parentRot.rotateX - rotationRef.current.x;
        parent.style.setProperty("--rot-y-delta", "".concat(rotY, "deg"));
        parent.style.setProperty("--rot-x-delta", "".concat(rotX, "deg"));
        var refDiv = document.createElement("div");
        refDiv.className = "item__image item__image--reference";
        refDiv.style.opacity = "0";
        refDiv.style.transform = "rotateX(".concat(-parentRot.rotateX, "deg) rotateY(").concat(-parentRot.rotateY, "deg)");
        parent.appendChild(refDiv);
        var tileR = refDiv.getBoundingClientRect();
        var mainR = mainRef.current.getBoundingClientRect();
        var frameR = frameRef.current.getBoundingClientRect();
        originalTilePositionRef.current = {
            left: tileR.left,
            top: tileR.top,
            width: tileR.width,
            height: tileR.height,
        };
        el.style.visibility = "hidden";
        el.style.zIndex = 0;
        var overlay = document.createElement("div");
        overlay.className = "enlarge";
        overlay.style.position = "absolute";
        overlay.style.left = frameR.left - mainR.left + "px";
        overlay.style.top = frameR.top - mainR.top + "px";
        overlay.style.width = frameR.width + "px";
        overlay.style.height = frameR.height + "px";
        overlay.style.opacity = "0";
        overlay.style.zIndex = "30";
        overlay.style.willChange = "transform, opacity";
        overlay.style.transformOrigin = "top left";
        overlay.style.transition = "transform ".concat(enlargeTransitionMs, "ms ease, opacity ").concat(enlargeTransitionMs, "ms ease");
        var rawSrc = parent.dataset.src ||
            ((_a = el.querySelector("img")) === null || _a === void 0 ? void 0 : _a.src) ||
            "";
        var img = document.createElement("img");
        img.src = rawSrc;
        overlay.appendChild(img);
        viewerRef.current.appendChild(overlay);
        var tx0 = tileR.left - frameR.left;
        var ty0 = tileR.top - frameR.top;
        var sx0 = tileR.width / frameR.width;
        var sy0 = tileR.height / frameR.height;
        overlay.style.transform = "translate(".concat(tx0, "px, ").concat(ty0, "px) scale(").concat(sx0, ", ").concat(sy0, ")");
        requestAnimationFrame(function () {
            var _a;
            overlay.style.opacity = "1";
            overlay.style.transform = "translate(0px, 0px) scale(1, 1)";
            (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.setAttribute("data-enlarging", "true");
        });
        var wantsResize = openedImageWidth || openedImageHeight;
        if (wantsResize) {
            var onFirstEnd_1 = function (ev) {
                if (ev.propertyName !== "transform")
                    return;
                overlay.removeEventListener("transitionend", onFirstEnd_1);
                var prevTransition = overlay.style.transition;
                overlay.style.transition = "none";
                var tempWidth = openedImageWidth || "".concat(frameR.width, "px");
                var tempHeight = openedImageHeight || "".concat(frameR.height, "px");
                overlay.style.width = tempWidth;
                overlay.style.height = tempHeight;
                var newRect = overlay.getBoundingClientRect();
                overlay.style.width = frameR.width + "px";
                overlay.style.height = frameR.height + "px";
                void overlay.offsetWidth;
                overlay.style.transition = "left ".concat(enlargeTransitionMs, "ms ease, top ").concat(enlargeTransitionMs, "ms ease, width ").concat(enlargeTransitionMs, "ms ease, height ").concat(enlargeTransitionMs, "ms ease");
                var centeredLeft = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
                var centeredTop = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
                requestAnimationFrame(function () {
                    overlay.style.left = "".concat(centeredLeft, "px");
                    overlay.style.top = "".concat(centeredTop, "px");
                    overlay.style.width = tempWidth;
                    overlay.style.height = tempHeight;
                });
                var cleanupSecond = function () {
                    overlay.removeEventListener("transitionend", cleanupSecond);
                    overlay.style.transition = prevTransition;
                };
                overlay.addEventListener("transitionend", cleanupSecond, {
                    once: true,
                });
            };
            overlay.addEventListener("transitionend", onFirstEnd_1);
        }
    };
    var onTileClick = (0, react_1.useCallback)(function (e) {
        if (draggingRef.current)
            return;
        if (performance.now() - lastDragEndAt.current < 80)
            return;
        if (openingRef.current)
            return;
        openItemFromElement(e.currentTarget);
    }, []);
    var onTilePointerUp = (0, react_1.useCallback)(function (e) {
        if (e.pointerType !== "touch")
            return;
        if (draggingRef.current)
            return;
        if (performance.now() - lastDragEndAt.current < 80)
            return;
        if (openingRef.current)
            return;
        openItemFromElement(e.currentTarget);
    }, []);
    var onTileTouchEnd = (0, react_1.useCallback)(function (e) {
        if (draggingRef.current)
            return;
        if (performance.now() - lastDragEndAt.current < 80)
            return;
        if (openingRef.current)
            return;
        openItemFromElement(e.currentTarget);
    }, []);
    (0, react_1.useEffect)(function () {
        var scrim = scrimRef.current;
        if (!scrim)
            return;
        var close = function () {
            var _a, _b;
            if (performance.now() - openStartedAtRef.current < 250)
                return;
            var el = focusedElRef.current;
            if (!el)
                return;
            var parent = el.parentElement;
            var overlay = (_a = viewerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".enlarge");
            if (!overlay)
                return;
            var refDiv = parent.querySelector(".item__image--reference");
            var originalPos = originalTilePositionRef.current;
            if (!originalPos) {
                overlay.remove();
                if (refDiv)
                    refDiv.remove();
                parent.style.setProperty("--rot-y-delta", "0deg");
                parent.style.setProperty("--rot-x-delta", "0deg");
                el.style.visibility = "";
                el.style.zIndex = 0;
                focusedElRef.current = null;
                (_b = rootRef.current) === null || _b === void 0 ? void 0 : _b.removeAttribute("data-enlarging");
                openingRef.current = false;
                unlockScroll();
                return;
            }
            var currentRect = overlay.getBoundingClientRect();
            var rootRect = rootRef.current.getBoundingClientRect();
            var originalPosRelativeToRoot = {
                left: originalPos.left - rootRect.left,
                top: originalPos.top - rootRect.top,
                width: originalPos.width,
                height: originalPos.height,
            };
            var overlayRelativeToRoot = {
                left: currentRect.left - rootRect.left,
                top: currentRect.top - rootRect.top,
                width: currentRect.width,
                height: currentRect.height,
            };
            var animatingOverlay = document.createElement("div");
            animatingOverlay.className = "enlarge-closing";
            animatingOverlay.style.cssText = "\n        position: absolute;\n        left: ".concat(overlayRelativeToRoot.left, "px;\n        top: ").concat(overlayRelativeToRoot.top, "px;\n        width: ").concat(overlayRelativeToRoot.width, "px;\n        height: ").concat(overlayRelativeToRoot.height, "px;\n        z-index: 9999;\n        border-radius: var(--enlarge-radius, 32px);\n        overflow: hidden;\n        box-shadow: 0 10px 30px rgba(0,0,0,.35);\n        transition: all ").concat(enlargeTransitionMs, "ms ease-out;\n        pointer-events: none;\n        margin: 0;\n        transform: none;\n      ");
            var originalImg = overlay.querySelector("img");
            if (originalImg) {
                var img = originalImg.cloneNode();
                img.style.cssText = "width: 100%; height: 100%; object-fit: cover;";
                animatingOverlay.appendChild(img);
            }
            overlay.remove();
            rootRef.current.appendChild(animatingOverlay);
            void animatingOverlay.getBoundingClientRect();
            requestAnimationFrame(function () {
                animatingOverlay.style.left = originalPosRelativeToRoot.left + "px";
                animatingOverlay.style.top = originalPosRelativeToRoot.top + "px";
                animatingOverlay.style.width = originalPosRelativeToRoot.width + "px";
                animatingOverlay.style.height = originalPosRelativeToRoot.height + "px";
                animatingOverlay.style.opacity = "0";
            });
            var cleanup = function () {
                animatingOverlay.remove();
                originalTilePositionRef.current = null;
                if (refDiv)
                    refDiv.remove();
                parent.style.transition = "none";
                el.style.transition = "none";
                parent.style.setProperty("--rot-y-delta", "0deg");
                parent.style.setProperty("--rot-x-delta", "0deg");
                requestAnimationFrame(function () {
                    var _a;
                    el.style.visibility = "";
                    el.style.opacity = "0";
                    el.style.zIndex = 0;
                    focusedElRef.current = null;
                    (_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.removeAttribute("data-enlarging");
                    requestAnimationFrame(function () {
                        parent.style.transition = "";
                        el.style.transition = "opacity 300ms ease-out";
                        requestAnimationFrame(function () {
                            el.style.opacity = "1";
                            setTimeout(function () {
                                var _a;
                                el.style.transition = "";
                                el.style.opacity = "";
                                openingRef.current = false;
                                if (!draggingRef.current &&
                                    ((_a = rootRef.current) === null || _a === void 0 ? void 0 : _a.getAttribute("data-enlarging")) !== "true") {
                                    document.body.classList.remove("dg-scroll-lock");
                                }
                            }, 300);
                        });
                    });
                });
            };
            animatingOverlay.addEventListener("transitionend", cleanup, {
                once: true,
            });
        };
        scrim.addEventListener("click", close);
        var onKey = function (e) {
            if (e.key === "Escape")
                close();
        };
        window.addEventListener("keydown", onKey);
        return function () {
            scrim.removeEventListener("click", close);
            window.removeEventListener("keydown", onKey);
        };
    }, [enlargeTransitionMs, unlockScroll]);
    (0, react_1.useEffect)(function () {
        return function () {
            document.body.classList.remove("dg-scroll-lock");
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: rootRef, className: "sphere-root", style: (_b = {},
            _b["--segments-x"] = segments,
            _b["--segments-y"] = segments,
            _b["--overlay-blur-color"] = overlayBlurColor,
            _b["--tile-radius"] = imageBorderRadius,
            _b["--enlarge-radius"] = openedImageBorderRadius,
            _b["--image-filter"] = grayscale ? "grayscale(1)" : "none",
            _b), children: (0, jsx_runtime_1.jsxs)("main", { ref: mainRef, className: "sphere-main", children: [(0, jsx_runtime_1.jsx)("div", { className: "stage", children: (0, jsx_runtime_1.jsx)("div", { ref: sphereRef, className: "sphere", children: items.map(function (it, i) {
                            var _a;
                            return ((0, jsx_runtime_1.jsx)("div", { className: "item", "data-src": it.src, "data-offset-x": it.x, "data-offset-y": it.y, "data-size-x": it.sizeX, "data-size-y": it.sizeY, style: (_a = {},
                                    _a["--offset-x"] = it.x,
                                    _a["--offset-y"] = it.y,
                                    _a["--item-size-x"] = it.sizeX,
                                    _a["--item-size-y"] = it.sizeY,
                                    _a), children: (0, jsx_runtime_1.jsx)("div", { className: "item__image", role: "button", tabIndex: 0, "aria-label": it.alt || "Open image", onClick: onTileClick, onPointerUp: onTilePointerUp, onTouchEnd: onTileTouchEnd, children: (0, jsx_runtime_1.jsx)("img", { src: it.src, draggable: false, alt: it.alt }) }) }, "".concat(it.x, ",").concat(it.y, ",").concat(i)));
                        }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "overlay" }), (0, jsx_runtime_1.jsx)("div", { className: "overlay overlay--blur" }), (0, jsx_runtime_1.jsx)("div", { className: "edge-fade edge-fade--top" }), (0, jsx_runtime_1.jsx)("div", { className: "edge-fade edge-fade--bottom" }), (0, jsx_runtime_1.jsxs)("div", { className: "viewer", ref: viewerRef, children: [(0, jsx_runtime_1.jsx)("div", { ref: scrimRef, className: "scrim" }), (0, jsx_runtime_1.jsx)("div", { ref: frameRef, className: "frame" })] })] }) }));
}
