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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
require("./Masonry.css");
var useMedia = function (queries, values, defaultValue) {
    var get = function () { var _a; return (_a = values[queries.findIndex(function (q) { return matchMedia(q).matches; })]) !== null && _a !== void 0 ? _a : defaultValue; };
    var _a = (0, react_1.useState)(get), value = _a[0], setValue = _a[1];
    (0, react_1.useEffect)(function () {
        var handler = function () { return setValue(get); };
        queries.forEach(function (q) { return matchMedia(q).addEventListener("change", handler); });
        return function () {
            return queries.forEach(function (q) {
                return matchMedia(q).removeEventListener("change", handler);
            });
        };
    }, [queries]);
    return value;
};
var useMeasure = function () {
    var ref = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)({ width: 0, height: 0 }), size = _a[0], setSize = _a[1];
    (0, react_1.useLayoutEffect)(function () {
        if (!ref.current)
            return;
        var ro = new ResizeObserver(function (_a) {
            var entry = _a[0];
            var _b = entry.contentRect, width = _b.width, height = _b.height;
            setSize({ width: width, height: height });
        });
        ro.observe(ref.current);
        return function () { return ro.disconnect(); };
    }, []);
    return [ref, size];
};
var preloadImages = function (urls) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all(urls.map(function (src) {
                    return new Promise(function (resolve) {
                        var img = new Image();
                        img.src = src;
                        img.onload = img.onerror = function () { return resolve(); };
                    });
                }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var Masonry = function (_a) {
    var items = _a.items, _b = _a.ease, ease = _b === void 0 ? "power3.out" : _b, _c = _a.duration, duration = _c === void 0 ? 0.6 : _c, _d = _a.stagger, stagger = _d === void 0 ? 0.05 : _d, _e = _a.animateFrom, animateFrom = _e === void 0 ? "bottom" : _e, _f = _a.scaleOnHover, scaleOnHover = _f === void 0 ? true : _f, _g = _a.hoverScale, hoverScale = _g === void 0 ? 0.95 : _g, _h = _a.blurToFocus, blurToFocus = _h === void 0 ? true : _h, _j = _a.colorShiftOnHover, colorShiftOnHover = _j === void 0 ? false : _j;
    var columns = useMedia([
        "(min-width:1500px)",
        "(min-width:1000px)",
        "(min-width:600px)",
        "(min-width:400px)",
    ], [5, 4, 3, 2], 1);
    // Mobile detection for responsive item filtering
    var _k = (0, react_1.useState)(false), isMobile = _k[0], setIsMobile = _k[1];
    (0, react_1.useEffect)(function () {
        var mediaQuery = window.matchMedia("(max-width:768px)");
        var handleMediaChange = function (e) {
            return setIsMobile(e.matches);
        };
        setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleMediaChange);
        return function () { return mediaQuery.removeEventListener("change", handleMediaChange); };
    }, []);
    // Force 2 columns on mobile, use responsive columns otherwise
    var finalColumns = isMobile ? 2 : columns;
    // Filter items for mobile: show only 10 items (5 per column)
    var filteredItems = isMobile ? items.slice(0, 10) : items;
    var _l = useMeasure(), containerRef = _l[0], width = _l[1].width;
    var _m = (0, react_1.useState)(false), imagesReady = _m[0], setImagesReady = _m[1];
    var getInitialPosition = function (item) {
        var _a;
        var containerRect = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (!containerRect)
            return { x: item.x, y: item.y };
        var direction = animateFrom;
        if (animateFrom === "random") {
            var directions = ["top", "bottom", "left", "right"];
            direction = directions[Math.floor(Math.random() * directions.length)];
        }
        switch (direction) {
            case "top":
                return { x: item.x, y: -200 };
            case "bottom":
                return { x: item.x, y: window.innerHeight + 200 };
            case "left":
                return { x: -200, y: item.y };
            case "right":
                return { x: window.innerWidth + 200, y: item.y };
            case "center":
                return {
                    x: containerRect.width / 2 - item.w / 2,
                    y: containerRect.height / 2 - item.h / 2,
                };
            default:
                return { x: item.x, y: item.y + 100 };
        }
    };
    (0, react_1.useEffect)(function () {
        preloadImages(filteredItems.map(function (i) { return i.img; })).then(function () {
            return setImagesReady(true);
        });
    }, [filteredItems]);
    var grid = (0, react_1.useMemo)(function () {
        if (!width)
            return [];
        var colHeights = new Array(finalColumns).fill(0);
        var columnWidth = width / finalColumns;
        return filteredItems.map(function (child) {
            var col = colHeights.indexOf(Math.min.apply(Math, colHeights));
            var x = columnWidth * col;
            var height = isMobile ? child.height / 2.5 : child.height / 2; // Slightly smaller on mobile
            var y = colHeights[col];
            colHeights[col] += height;
            return __assign(__assign({}, child), { x: x, y: y, w: columnWidth, h: height });
        });
    }, [finalColumns, filteredItems, width, isMobile]);
    var hasMounted = (0, react_1.useRef)(false);
    (0, react_1.useLayoutEffect)(function () {
        if (!imagesReady)
            return;
        grid.forEach(function (item, index) {
            var selector = "[data-key=\"".concat(item.id, "\"]");
            var animationProps = {
                x: item.x,
                y: item.y,
                width: item.w,
                height: item.h,
            };
            if (!hasMounted.current) {
                var initialPos = getInitialPosition(item);
                var initialState = __assign({ opacity: 0, x: initialPos.x, y: initialPos.y, width: item.w, height: item.h }, (blurToFocus && { filter: "blur(10px)" }));
                gsap_1.gsap.fromTo(selector, initialState, __assign(__assign(__assign({ opacity: 1 }, animationProps), (blurToFocus && { filter: "blur(0px)" })), { duration: 0.8, ease: "power3.out", delay: index * stagger }));
            }
            else {
                gsap_1.gsap.to(selector, __assign(__assign({}, animationProps), { duration: duration, ease: ease, overwrite: "auto" }));
            }
        });
        hasMounted.current = true;
    }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease]);
    var handleMouseEnter = function (e, item) {
        var element = e.currentTarget;
        var selector = "[data-key=\"".concat(item.id, "\"]");
        if (scaleOnHover) {
            gsap_1.gsap.to(selector, {
                scale: hoverScale,
                duration: 0.3,
                ease: "power2.out",
            });
        }
        if (colorShiftOnHover) {
            var overlay = element.querySelector(".color-overlay");
            if (overlay) {
                gsap_1.gsap.to(overlay, {
                    opacity: 0.3,
                    duration: 0.3,
                });
            }
        }
    };
    var handleMouseLeave = function (e, item) {
        var element = e.currentTarget;
        var selector = "[data-key=\"".concat(item.id, "\"]");
        if (scaleOnHover) {
            gsap_1.gsap.to(selector, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            });
        }
        if (colorShiftOnHover) {
            var overlay = element.querySelector(".color-overlay");
            if (overlay) {
                gsap_1.gsap.to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                });
            }
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", { ref: containerRef, className: "list", children: grid.map(function (item) {
            return ((0, jsx_runtime_1.jsx)("div", { "data-key": item.id, className: "item-wrapper", 
                // onClick={() => window.open(item.url, "_blank", "noopener")}
                onClick: function () { }, onMouseEnter: function (e) { return handleMouseEnter(e, item); }, onMouseLeave: function (e) { return handleMouseLeave(e, item); }, children: (0, jsx_runtime_1.jsx)("div", { className: "item-img", style: { backgroundImage: "url(".concat(item.img, ")") }, children: colorShiftOnHover && ((0, jsx_runtime_1.jsx)("div", { className: "color-overlay", style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(45deg, rgba(255,0,150,0.5), rgba(0,150,255,0.5))",
                            opacity: 0,
                            pointerEvents: "none",
                            borderRadius: "8px",
                        } })) }) }, item.id));
        }) }));
};
exports.default = Masonry;
