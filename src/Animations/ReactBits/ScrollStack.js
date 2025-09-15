"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollStackItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lenis_1 = __importDefault(require("lenis"));
require("./ScrollStack.css");
var ScrollStackItem = function (_a) {
    var children = _a.children, _b = _a.itemClassName, itemClassName = _b === void 0 ? "" : _b;
    return ((0, jsx_runtime_1.jsx)("div", { className: "scroll-stack-card ".concat(itemClassName).trim(), children: children }));
};
exports.ScrollStackItem = ScrollStackItem;
var ScrollStack = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.itemDistance, itemDistance = _c === void 0 ? 100 : _c, _d = _a.itemScale, itemScale = _d === void 0 ? 0.03 : _d, _e = _a.itemStackDistance, itemStackDistance = _e === void 0 ? 30 : _e, _f = _a.stackPosition, stackPosition = _f === void 0 ? "20%" : _f, _g = _a.scaleEndPosition, scaleEndPosition = _g === void 0 ? "10%" : _g, _h = _a.baseScale, baseScale = _h === void 0 ? 0.85 : _h, _j = _a.scaleDuration, scaleDuration = _j === void 0 ? 0.5 : _j, _k = _a.rotationAmount, rotationAmount = _k === void 0 ? 0 : _k, _l = _a.blurAmount, blurAmount = _l === void 0 ? 0 : _l, _m = _a.useWindowScroll, useWindowScroll = _m === void 0 ? false : _m, onStackComplete = _a.onStackComplete;
    var scrollerRef = (0, react_1.useRef)(null);
    var stackCompletedRef = (0, react_1.useRef)(false);
    var animationFrameRef = (0, react_1.useRef)(null);
    var lenisRef = (0, react_1.useRef)(null);
    var cardsRef = (0, react_1.useRef)([]);
    var lastTransformsRef = (0, react_1.useRef)(new Map());
    var isUpdatingRef = (0, react_1.useRef)(false);
    var calculateProgress = (0, react_1.useCallback)(function (scrollTop, start, end) {
        if (scrollTop < start)
            return 0;
        if (scrollTop > end)
            return 1;
        return (scrollTop - start) / (end - start);
    }, []);
    var parsePercentage = (0, react_1.useCallback)(function (value, containerHeight) {
        if (typeof value === "string" && value.includes("%")) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);
    var getScrollData = (0, react_1.useCallback)(function () {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight,
                scrollContainer: document.documentElement,
            };
        }
        else {
            var scroller = scrollerRef.current;
            return {
                scrollTop: scroller.scrollTop,
                containerHeight: scroller.clientHeight,
                scrollContainer: scroller,
            };
        }
    }, [useWindowScroll]);
    var getElementOffset = (0, react_1.useCallback)(function (element) {
        if (useWindowScroll) {
            var rect = element.getBoundingClientRect();
            return rect.top + window.scrollY;
        }
        else {
            return element.offsetTop;
        }
    }, [useWindowScroll]);
    var updateCardTransforms = (0, react_1.useCallback)(function () {
        var _a;
        if (!cardsRef.current.length || isUpdatingRef.current)
            return;
        isUpdatingRef.current = true;
        var _b = getScrollData(), scrollTop = _b.scrollTop, containerHeight = _b.containerHeight;
        var stackPositionPx = parsePercentage(stackPosition, containerHeight);
        var scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
        var endElement = useWindowScroll
            ? document.querySelector(".scroll-stack-end")
            : (_a = scrollerRef.current) === null || _a === void 0 ? void 0 : _a.querySelector(".scroll-stack-end");
        var endElementTop = endElement ? getElementOffset(endElement) : 0;
        cardsRef.current.forEach(function (card, i) {
            if (!card)
                return;
            var cardTop = getElementOffset(card);
            var triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            var triggerEnd = cardTop - scaleEndPositionPx;
            var pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            var pinEnd = endElementTop - containerHeight / 2;
            var scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            var targetScale = baseScale + i * itemScale;
            var scale = 1 - scaleProgress * (1 - targetScale);
            var rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
            var blur = 0;
            if (blurAmount) {
                var topCardIndex = 0;
                for (var j = 0; j < cardsRef.current.length; j++) {
                    var jCardTop = getElementOffset(cardsRef.current[j]);
                    var jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) {
                        topCardIndex = j;
                    }
                }
                if (i < topCardIndex) {
                    var depthInStack = topCardIndex - i;
                    blur = Math.max(0, depthInStack * blurAmount);
                }
            }
            var translateY = 0;
            var isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
            if (isPinned) {
                translateY =
                    scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            }
            else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }
            var newTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
                rotation: Math.round(rotation * 100) / 100,
                blur: Math.round(blur * 100) / 100,
            };
            var lastTransform = lastTransformsRef.current.get(i);
            var hasChanged = !lastTransform ||
                Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
                Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
                Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
                Math.abs(lastTransform.blur - newTransform.blur) > 0.1;
            if (hasChanged) {
                var transform = "translate3d(0, ".concat(newTransform.translateY, "px, 0) scale(").concat(newTransform.scale, ") rotate(").concat(newTransform.rotation, "deg)");
                var filter = newTransform.blur > 0 ? "blur(".concat(newTransform.blur, "px)") : "";
                card.style.transform = transform;
                card.style.filter = filter;
                lastTransformsRef.current.set(i, newTransform);
            }
            if (i === cardsRef.current.length - 1) {
                var isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
                if (isInView && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete === null || onStackComplete === void 0 ? void 0 : onStackComplete();
                }
                else if (!isInView && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });
        isUpdatingRef.current = false;
    }, [
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        calculateProgress,
        parsePercentage,
        getScrollData,
        getElementOffset,
    ]);
    var handleScroll = (0, react_1.useCallback)(function () {
        updateCardTransforms();
    }, [updateCardTransforms]);
    var setupLenis = (0, react_1.useCallback)(function () {
        if (useWindowScroll) {
            var lenis_2 = new lenis_1.default({
                duration: 1.2,
                easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075,
            });
            lenis_2.on("scroll", handleScroll);
            var raf_1 = function (time) {
                lenis_2.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf_1);
            };
            animationFrameRef.current = requestAnimationFrame(raf_1);
            lenisRef.current = lenis_2;
            return lenis_2;
        }
        else {
            var scroller = scrollerRef.current;
            if (!scroller)
                return;
            var lenis_3 = new lenis_1.default({
                wrapper: scroller,
                content: scroller.querySelector(".scroll-stack-inner"),
                duration: 1.2,
                easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
                smoothWheel: true,
                touchMultiplier: 2,
                infinite: false,
                gestureOrientation: "vertical",
                wheelMultiplier: 1,
                lerp: 0.1,
                syncTouch: true,
                syncTouchLerp: 0.075,
            });
            lenis_3.on("scroll", handleScroll);
            var raf_2 = function (time) {
                lenis_3.raf(time);
                animationFrameRef.current = requestAnimationFrame(raf_2);
            };
            animationFrameRef.current = requestAnimationFrame(raf_2);
            lenisRef.current = lenis_3;
            return lenis_3;
        }
    }, [handleScroll, useWindowScroll]);
    (0, react_1.useLayoutEffect)(function () {
        var scroller = scrollerRef.current;
        if (!scroller)
            return;
        var cards = Array.from(useWindowScroll
            ? document.querySelectorAll(".scroll-stack-card")
            : scroller.querySelectorAll(".scroll-stack-card"));
        cardsRef.current = cards;
        var transformsCache = lastTransformsRef.current;
        cards.forEach(function (card, i) {
            if (i < cards.length - 1) {
                card.style.marginBottom = "".concat(itemDistance, "px");
            }
            card.style.willChange = "transform, filter";
            card.style.transformOrigin = "top center";
            card.style.backfaceVisibility = "hidden";
            card.style.transform = "translateZ(0)";
            card.style.webkitTransform = "translateZ(0)";
            card.style.perspective = "1000px";
            card.style.webkitPerspective = "1000px";
        });
        setupLenis();
        updateCardTransforms();
        return function () {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            if (lenisRef.current) {
                lenisRef.current.destroy();
            }
            stackCompletedRef.current = false;
            cardsRef.current = [];
            transformsCache.clear();
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        itemScale,
        itemStackDistance,
        stackPosition,
        scaleEndPosition,
        baseScale,
        scaleDuration,
        rotationAmount,
        blurAmount,
        useWindowScroll,
        onStackComplete,
        setupLenis,
        updateCardTransforms,
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { className: "scroll-stack-scroller ".concat(className).trim(), ref: scrollerRef, children: (0, jsx_runtime_1.jsxs)("div", { className: "scroll-stack-inner", children: [children, (0, jsx_runtime_1.jsx)("div", { className: "scroll-stack-end" })] }) }));
};
exports.default = ScrollStack;
