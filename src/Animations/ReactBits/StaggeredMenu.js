"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaggeredMenu = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var gsap_1 = require("gsap");
require("./StaggeredMenu.css");
var StaggeredMenu = function (_a) {
    var _b;
    var _c = _a.position, position = _c === void 0 ? "right" : _c, _d = _a.colors, colors = _d === void 0 ? ["#B19EEF", "#5227FF"] : _d, _e = _a.items, items = _e === void 0 ? [] : _e, _f = _a.socialItems, socialItems = _f === void 0 ? [] : _f, _g = _a.displaySocials, displaySocials = _g === void 0 ? true : _g, _h = _a.displayItemNumbering, displayItemNumbering = _h === void 0 ? true : _h, className = _a.className, _j = _a.logoUrl, logoUrl = _j === void 0 ? "/src/assets/logos/reactbits-gh-white.svg" : _j, _k = _a.menuButtonColor, menuButtonColor = _k === void 0 ? "#fff" : _k, _l = _a.openMenuButtonColor, openMenuButtonColor = _l === void 0 ? "#fff" : _l, _m = _a.changeMenuColorOnOpen, changeMenuColorOnOpen = _m === void 0 ? true : _m, _o = _a.accentColor, accentColor = _o === void 0 ? "#5227FF" : _o, onMenuOpen = _a.onMenuOpen, onMenuClose = _a.onMenuClose;
    var _p = (0, react_1.useState)(false), open = _p[0], setOpen = _p[1];
    var openRef = (0, react_1.useRef)(false);
    var panelRef = (0, react_1.useRef)(null);
    var preLayersRef = (0, react_1.useRef)(null);
    var preLayerElsRef = (0, react_1.useRef)([]);
    var plusHRef = (0, react_1.useRef)(null);
    var plusVRef = (0, react_1.useRef)(null);
    var iconRef = (0, react_1.useRef)(null);
    var textInnerRef = (0, react_1.useRef)(null);
    var textWrapRef = (0, react_1.useRef)(null);
    var _q = (0, react_1.useState)(["Menu", "Close"]), textLines = _q[0], setTextLines = _q[1];
    var openTlRef = (0, react_1.useRef)(null);
    var closeTweenRef = (0, react_1.useRef)(null);
    var spinTweenRef = (0, react_1.useRef)(null);
    var textCycleAnimRef = (0, react_1.useRef)(null);
    var colorTweenRef = (0, react_1.useRef)(null);
    var toggleBtnRef = (0, react_1.useRef)(null);
    var busyRef = (0, react_1.useRef)(false);
    var itemEntranceTweenRef = (0, react_1.useRef)(null);
    (0, react_1.useLayoutEffect)(function () {
        var ctx = gsap_1.gsap.context(function () {
            var panel = panelRef.current;
            var preContainer = preLayersRef.current;
            var plusH = plusHRef.current;
            var plusV = plusVRef.current;
            var icon = iconRef.current;
            var textInner = textInnerRef.current;
            if (!panel || !plusH || !plusV || !icon || !textInner)
                return;
            var preLayers = [];
            if (preContainer) {
                preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer"));
            }
            preLayerElsRef.current = preLayers;
            var offscreen = position === "left" ? -100 : 100;
            gsap_1.gsap.set(__spreadArray([panel], preLayers, true), { xPercent: offscreen });
            gsap_1.gsap.set(plusH, { transformOrigin: "50% 50%", rotate: 0 });
            gsap_1.gsap.set(plusV, { transformOrigin: "50% 50%", rotate: 90 });
            gsap_1.gsap.set(icon, { rotate: 0, transformOrigin: "50% 50%" });
            gsap_1.gsap.set(textInner, { yPercent: 0 });
            if (toggleBtnRef.current)
                gsap_1.gsap.set(toggleBtnRef.current, { color: menuButtonColor });
        });
        return function () { return ctx.revert(); };
    }, [menuButtonColor, position]);
    var buildOpenTimeline = (0, react_1.useCallback)(function () {
        var _a, _b;
        var panel = panelRef.current;
        var layers = preLayerElsRef.current;
        if (!panel)
            return null;
        (_a = openTlRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }
        (_b = itemEntranceTweenRef.current) === null || _b === void 0 ? void 0 : _b.kill();
        var itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
        var numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
        var socialTitle = panel.querySelector(".sm-socials-title");
        var socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
        var layerStates = layers.map(function (el) { return ({
            el: el,
            start: Number(gsap_1.gsap.getProperty(el, "xPercent")),
        }); });
        var panelStart = Number(gsap_1.gsap.getProperty(panel, "xPercent"));
        if (itemEls.length) {
            gsap_1.gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        if (numberEls.length) {
            gsap_1.gsap.set(numberEls, { "--sm-num-opacity": 0 });
        }
        if (socialTitle) {
            gsap_1.gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
            gsap_1.gsap.set(socialLinks, { y: 25, opacity: 0 });
        }
        var tl = gsap_1.gsap.timeline({ paused: true });
        layerStates.forEach(function (ls, i) {
            tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07);
        });
        var lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
        var panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
        var panelDuration = 0.65;
        tl.fromTo(panel, { xPercent: panelStart }, { xPercent: 0, duration: panelDuration, ease: "power4.out" }, panelInsertTime);
        if (itemEls.length) {
            var itemsStartRatio = 0.15;
            var itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
            tl.to(itemEls, {
                yPercent: 0,
                rotate: 0,
                duration: 1,
                ease: "power4.out",
                stagger: { each: 0.1, from: "start" },
            }, itemsStart);
            if (numberEls.length) {
                tl.to(numberEls, {
                    duration: 0.6,
                    ease: "power2.out",
                    "--sm-num-opacity": 1,
                    stagger: { each: 0.08, from: "start" },
                }, itemsStart + 0.1);
            }
        }
        if (socialTitle || socialLinks.length) {
            var socialsStart = panelInsertTime + panelDuration * 0.4;
            if (socialTitle) {
                tl.to(socialTitle, {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                }, socialsStart);
            }
            if (socialLinks.length) {
                tl.to(socialLinks, {
                    y: 0,
                    opacity: 1,
                    duration: 0.55,
                    ease: "power3.out",
                    stagger: { each: 0.08, from: "start" },
                    onComplete: function () {
                        gsap_1.gsap.set(socialLinks, { clearProps: "opacity" });
                    },
                }, socialsStart + 0.04);
            }
        }
        openTlRef.current = tl;
        return tl;
    }, [position]);
    var playOpen = (0, react_1.useCallback)(function () {
        if (busyRef.current)
            return;
        busyRef.current = true;
        var tl = buildOpenTimeline();
        if (tl) {
            tl.eventCallback("onComplete", function () {
                busyRef.current = false;
            });
            tl.play(0);
        }
        else {
            busyRef.current = false;
        }
    }, [buildOpenTimeline]);
    var playClose = (0, react_1.useCallback)(function () {
        var _a, _b, _c;
        (_a = openTlRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        openTlRef.current = null;
        (_b = itemEntranceTweenRef.current) === null || _b === void 0 ? void 0 : _b.kill();
        var panel = panelRef.current;
        var layers = preLayerElsRef.current;
        if (!panel)
            return;
        var all = __spreadArray(__spreadArray([], layers, true), [panel], false);
        (_c = closeTweenRef.current) === null || _c === void 0 ? void 0 : _c.kill();
        var offscreen = position === "left" ? -100 : 100;
        closeTweenRef.current = gsap_1.gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: function () {
                var itemEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel"));
                if (itemEls.length) {
                    gsap_1.gsap.set(itemEls, { yPercent: 140, rotate: 10 });
                }
                var numberEls = Array.from(panel.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));
                if (numberEls.length) {
                    gsap_1.gsap.set(numberEls, { "--sm-num-opacity": 0 });
                }
                var socialTitle = panel.querySelector(".sm-socials-title");
                var socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link"));
                if (socialTitle)
                    gsap_1.gsap.set(socialTitle, { opacity: 0 });
                if (socialLinks.length)
                    gsap_1.gsap.set(socialLinks, { y: 25, opacity: 0 });
                busyRef.current = false;
            },
        });
    }, [position]);
    var animateIcon = (0, react_1.useCallback)(function (opening) {
        var _a;
        var icon = iconRef.current;
        if (!icon)
            return;
        (_a = spinTweenRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        if (opening) {
            spinTweenRef.current = gsap_1.gsap.to(icon, {
                rotate: 225,
                duration: 0.8,
                ease: "power4.out",
                overwrite: "auto",
            });
        }
        else {
            spinTweenRef.current = gsap_1.gsap.to(icon, {
                rotate: 0,
                duration: 0.35,
                ease: "power3.inOut",
                overwrite: "auto",
            });
        }
    }, []);
    var animateColor = (0, react_1.useCallback)(function (opening) {
        var _a;
        var btn = toggleBtnRef.current;
        if (!btn)
            return;
        (_a = colorTweenRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        if (changeMenuColorOnOpen) {
            var targetColor = opening ? openMenuButtonColor : menuButtonColor;
            colorTweenRef.current = gsap_1.gsap.to(btn, {
                color: targetColor,
                delay: 0.18,
                duration: 0.3,
                ease: "power2.out",
            });
        }
        else {
            gsap_1.gsap.set(btn, { color: menuButtonColor });
        }
    }, [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]);
    react_1.default.useEffect(function () {
        if (toggleBtnRef.current) {
            if (changeMenuColorOnOpen) {
                var targetColor = openRef.current
                    ? openMenuButtonColor
                    : menuButtonColor;
                gsap_1.gsap.set(toggleBtnRef.current, { color: targetColor });
            }
            else {
                gsap_1.gsap.set(toggleBtnRef.current, { color: menuButtonColor });
            }
        }
    }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);
    var animateText = (0, react_1.useCallback)(function (opening) {
        var _a;
        var inner = textInnerRef.current;
        if (!inner)
            return;
        (_a = textCycleAnimRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        var currentLabel = opening ? "Menu" : "Close";
        var targetLabel = opening ? "Close" : "Menu";
        var cycles = 3;
        var seq = [currentLabel];
        var last = currentLabel;
        for (var i = 0; i < cycles; i++) {
            last = last === "Menu" ? "Close" : "Menu";
            seq.push(last);
        }
        if (last !== targetLabel)
            seq.push(targetLabel);
        seq.push(targetLabel);
        setTextLines(seq);
        gsap_1.gsap.set(inner, { yPercent: 0 });
        var lineCount = seq.length;
        var finalShift = ((lineCount - 1) / lineCount) * 100;
        textCycleAnimRef.current = gsap_1.gsap.to(inner, {
            yPercent: -finalShift,
            duration: 0.5 + lineCount * 0.07,
            ease: "power4.out",
        });
    }, []);
    var toggleMenu = (0, react_1.useCallback)(function () {
        var target = !openRef.current;
        openRef.current = target;
        setOpen(target);
        if (target) {
            onMenuOpen === null || onMenuOpen === void 0 ? void 0 : onMenuOpen();
            playOpen();
        }
        else {
            onMenuClose === null || onMenuClose === void 0 ? void 0 : onMenuClose();
            playClose();
        }
        animateIcon(target);
        animateColor(target);
        animateText(target);
    }, [playOpen, playClose, animateIcon, animateColor, animateText]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: (className ? className + " " : "") + "staggered-menu-wrapper", style: accentColor ? (_b = {}, _b["--sm-accent"] = accentColor, _b) : undefined, "data-position": position, "data-open": open || undefined, children: [(0, jsx_runtime_1.jsx)("div", { ref: preLayersRef, className: "sm-prelayers", "aria-hidden": "true", children: (function () {
                    var raw = colors && colors.length
                        ? colors.slice(0, 4)
                        : ["#1e1e22", "#35353c"];
                    var arr = __spreadArray([], raw, true);
                    if (arr.length >= 3) {
                        var mid = Math.floor(arr.length / 2);
                        arr.splice(mid, 1);
                    }
                    return arr.map(function (c, i) { return ((0, jsx_runtime_1.jsx)("div", { className: "sm-prelayer", style: { background: c } }, i)); });
                })() }), (0, jsx_runtime_1.jsxs)("header", { className: "staggered-menu-header", "aria-label": "Main navigation header", children: [(0, jsx_runtime_1.jsx)("div", { className: "sm-logo", "aria-label": "Logo", children: (0, jsx_runtime_1.jsx)("img", { src: logoUrl || "/src/assets/logos/reactbits-gh-white.svg", alt: "Logo", className: "sm-logo-img", draggable: false, width: 110, height: 24 }) }), (0, jsx_runtime_1.jsxs)("button", { ref: toggleBtnRef, className: "sm-toggle", "aria-label": open ? "Close menu" : "Open menu", "aria-expanded": open, "aria-controls": "staggered-menu-panel", onClick: toggleMenu, type: "button", children: [(0, jsx_runtime_1.jsx)("span", { ref: textWrapRef, className: "sm-toggle-textWrap", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { ref: textInnerRef, className: "sm-toggle-textInner", children: textLines.map(function (l, i) { return ((0, jsx_runtime_1.jsx)("span", { className: "sm-toggle-line", children: l }, i)); }) }) }), (0, jsx_runtime_1.jsxs)("span", { ref: iconRef, className: "sm-icon", "aria-hidden": "true", children: [(0, jsx_runtime_1.jsx)("span", { ref: plusHRef, className: "sm-icon-line" }), (0, jsx_runtime_1.jsx)("span", { ref: plusVRef, className: "sm-icon-line sm-icon-line-v" })] })] })] }), (0, jsx_runtime_1.jsx)("aside", { id: "staggered-menu-panel", ref: panelRef, className: "staggered-menu-panel", "aria-hidden": !open, children: (0, jsx_runtime_1.jsxs)("div", { className: "sm-panel-inner", children: [(0, jsx_runtime_1.jsx)("ul", { className: "sm-panel-list", role: "list", "data-numbering": displayItemNumbering || undefined, children: items && items.length ? (items.map(function (it, idx) { return ((0, jsx_runtime_1.jsx)("li", { className: "sm-panel-itemWrap", children: (0, jsx_runtime_1.jsx)("a", { className: "sm-panel-item", href: it.link, "aria-label": it.ariaLabel, "data-index": idx + 1, children: (0, jsx_runtime_1.jsx)("span", { className: "sm-panel-itemLabel", children: it.label }) }) }, it.label + idx)); })) : ((0, jsx_runtime_1.jsx)("li", { className: "sm-panel-itemWrap", "aria-hidden": "true", children: (0, jsx_runtime_1.jsx)("span", { className: "sm-panel-item", children: (0, jsx_runtime_1.jsx)("span", { className: "sm-panel-itemLabel", children: "No items" }) }) })) }), displaySocials && socialItems && socialItems.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "sm-socials", "aria-label": "Social links", children: [(0, jsx_runtime_1.jsx)("h3", { className: "sm-socials-title", children: "Socials" }), (0, jsx_runtime_1.jsx)("ul", { className: "sm-socials-list", role: "list", children: socialItems.map(function (s, i) { return ((0, jsx_runtime_1.jsx)("li", { className: "sm-socials-item", children: (0, jsx_runtime_1.jsx)("a", { href: s.link, target: "_blank", rel: "noopener noreferrer", className: "sm-socials-link", children: s.label }) }, s.label + i)); }) })] }))] }) })] }));
};
exports.StaggeredMenu = StaggeredMenu;
exports.default = exports.StaggeredMenu;
