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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
require("./MagicBento.css");
var DEFAULT_PARTICLE_COUNT = 12;
var DEFAULT_SPOTLIGHT_RADIUS = 300;
var DEFAULT_GLOW_COLOR = '132, 0, 255';
var MOBILE_BREAKPOINT = 768;
var cardData = [
    {
        color: '#060010',
        title: 'Analytics',
        description: 'Track user behavior',
        label: 'Insights'
    },
    {
        color: '#060010',
        title: 'Dashboard',
        description: 'Centralized data view',
        label: 'Overview'
    },
    {
        color: '#060010',
        title: 'Collaboration',
        description: 'Work together seamlessly',
        label: 'Teamwork'
    },
    {
        color: '#060010',
        title: 'Automation',
        description: 'Streamline workflows',
        label: 'Efficiency'
    },
    {
        color: '#060010',
        title: 'Integration',
        description: 'Connect favorite tools',
        label: 'Connectivity'
    },
    {
        color: '#060010',
        title: 'Security',
        description: 'Enterprise-grade protection',
        label: 'Protection'
    }
];
var createParticleElement = function (x, y, color) {
    if (color === void 0) { color = DEFAULT_GLOW_COLOR; }
    var el = document.createElement('div');
    el.className = 'particle';
    el.style.cssText = "\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    border-radius: 50%;\n    background: rgba(".concat(color, ", 1);\n    box-shadow: 0 0 6px rgba(").concat(color, ", 0.6);\n    pointer-events: none;\n    z-index: 100;\n    left: ").concat(x, "px;\n    top: ").concat(y, "px;\n  ");
    return el;
};
var calculateSpotlightValues = function (radius) { return ({
    proximity: radius * 0.5,
    fadeDistance: radius * 0.75
}); };
var updateCardGlowProperties = function (card, mouseX, mouseY, glow, radius) {
    var rect = card.getBoundingClientRect();
    var relativeX = ((mouseX - rect.left) / rect.width) * 100;
    var relativeY = ((mouseY - rect.top) / rect.height) * 100;
    card.style.setProperty('--glow-x', "".concat(relativeX, "%"));
    card.style.setProperty('--glow-y', "".concat(relativeY, "%"));
    card.style.setProperty('--glow-intensity', glow.toString());
    card.style.setProperty('--glow-radius', "".concat(radius, "px"));
};
var ParticleCard = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.disableAnimations, disableAnimations = _c === void 0 ? false : _c, style = _a.style, _d = _a.particleCount, particleCount = _d === void 0 ? DEFAULT_PARTICLE_COUNT : _d, _e = _a.glowColor, glowColor = _e === void 0 ? DEFAULT_GLOW_COLOR : _e, _f = _a.enableTilt, enableTilt = _f === void 0 ? true : _f, _g = _a.clickEffect, clickEffect = _g === void 0 ? false : _g, _h = _a.enableMagnetism, enableMagnetism = _h === void 0 ? false : _h;
    var cardRef = (0, react_1.useRef)(null);
    var particlesRef = (0, react_1.useRef)([]);
    var timeoutsRef = (0, react_1.useRef)([]);
    var isHoveredRef = (0, react_1.useRef)(false);
    var memoizedParticles = (0, react_1.useRef)([]);
    var particlesInitialized = (0, react_1.useRef)(false);
    var magnetismAnimationRef = (0, react_1.useRef)(null);
    var initializeParticles = (0, react_1.useCallback)(function () {
        if (particlesInitialized.current || !cardRef.current)
            return;
        var _a = cardRef.current.getBoundingClientRect(), width = _a.width, height = _a.height;
        memoizedParticles.current = Array.from({ length: particleCount }, function () {
            return createParticleElement(Math.random() * width, Math.random() * height, glowColor);
        });
        particlesInitialized.current = true;
    }, [particleCount, glowColor]);
    var clearAllParticles = (0, react_1.useCallback)(function () {
        var _a;
        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];
        (_a = magnetismAnimationRef.current) === null || _a === void 0 ? void 0 : _a.kill();
        particlesRef.current.forEach(function (particle) {
            gsap_1.gsap.to(particle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                ease: 'back.in(1.7)',
                onComplete: function () {
                    var _a;
                    (_a = particle.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(particle);
                }
            });
        });
        particlesRef.current = [];
    }, []);
    var animateParticles = (0, react_1.useCallback)(function () {
        if (!cardRef.current || !isHoveredRef.current)
            return;
        if (!particlesInitialized.current) {
            initializeParticles();
        }
        memoizedParticles.current.forEach(function (particle, index) {
            var timeoutId = setTimeout(function () {
                if (!isHoveredRef.current || !cardRef.current)
                    return;
                var clone = particle.cloneNode(true);
                cardRef.current.appendChild(clone);
                particlesRef.current.push(clone);
                gsap_1.gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
                gsap_1.gsap.to(clone, {
                    x: (Math.random() - 0.5) * 100,
                    y: (Math.random() - 0.5) * 100,
                    rotation: Math.random() * 360,
                    duration: 2 + Math.random() * 2,
                    ease: 'none',
                    repeat: -1,
                    yoyo: true
                });
                gsap_1.gsap.to(clone, {
                    opacity: 0.3,
                    duration: 1.5,
                    ease: 'power2.inOut',
                    repeat: -1,
                    yoyo: true
                });
            }, index * 100);
            timeoutsRef.current.push(timeoutId);
        });
    }, [initializeParticles]);
    (0, react_1.useEffect)(function () {
        if (disableAnimations || !cardRef.current)
            return;
        var element = cardRef.current;
        var handleMouseEnter = function () {
            isHoveredRef.current = true;
            animateParticles();
            if (enableTilt) {
                gsap_1.gsap.to(element, {
                    rotateX: 5,
                    rotateY: 5,
                    duration: 0.3,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
        };
        var handleMouseLeave = function () {
            isHoveredRef.current = false;
            clearAllParticles();
            if (enableTilt) {
                gsap_1.gsap.to(element, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
            if (enableMagnetism) {
                gsap_1.gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        var handleMouseMove = function (e) {
            if (!enableTilt && !enableMagnetism)
                return;
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            if (enableTilt) {
                var rotateX = ((y - centerY) / centerY) * -10;
                var rotateY = ((x - centerX) / centerX) * 10;
                gsap_1.gsap.to(element, {
                    rotateX: rotateX,
                    rotateY: rotateY,
                    duration: 0.1,
                    ease: 'power2.out',
                    transformPerspective: 1000
                });
            }
            if (enableMagnetism) {
                var magnetX = (x - centerX) * 0.05;
                var magnetY = (y - centerY) * 0.05;
                magnetismAnimationRef.current = gsap_1.gsap.to(element, {
                    x: magnetX,
                    y: magnetY,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        var handleClick = function (e) {
            if (!clickEffect)
                return;
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
            var ripple = document.createElement('div');
            ripple.style.cssText = "\n        position: absolute;\n        width: ".concat(maxDistance * 2, "px;\n        height: ").concat(maxDistance * 2, "px;\n        border-radius: 50%;\n        background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n        left: ").concat(x - maxDistance, "px;\n        top: ").concat(y - maxDistance, "px;\n        pointer-events: none;\n        z-index: 1000;\n      ");
            element.appendChild(ripple);
            gsap_1.gsap.fromTo(ripple, {
                scale: 0,
                opacity: 1
            }, {
                scale: 1,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                onComplete: function () { return ripple.remove(); }
            });
        };
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('click', handleClick);
        return function () {
            isHoveredRef.current = false;
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('click', handleClick);
            clearAllParticles();
        };
    }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: cardRef, className: "".concat(className, " particle-container"), style: __assign(__assign({}, style), { position: 'relative', overflow: 'hidden' }), children: children }));
};
var GlobalSpotlight = function (_a) {
    var gridRef = _a.gridRef, _b = _a.disableAnimations, disableAnimations = _b === void 0 ? false : _b, _c = _a.enabled, enabled = _c === void 0 ? true : _c, _d = _a.spotlightRadius, spotlightRadius = _d === void 0 ? DEFAULT_SPOTLIGHT_RADIUS : _d, _e = _a.glowColor, glowColor = _e === void 0 ? DEFAULT_GLOW_COLOR : _e;
    var spotlightRef = (0, react_1.useRef)(null);
    var isInsideSection = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (disableAnimations || !(gridRef === null || gridRef === void 0 ? void 0 : gridRef.current) || !enabled)
            return;
        var spotlight = document.createElement('div');
        spotlight.className = 'global-spotlight';
        spotlight.style.cssText = "\n      position: fixed;\n      width: 800px;\n      height: 800px;\n      border-radius: 50%;\n      pointer-events: none;\n      background: radial-gradient(circle,\n        rgba(".concat(glowColor, ", 0.15) 0%,\n        rgba(").concat(glowColor, ", 0.08) 15%,\n        rgba(").concat(glowColor, ", 0.04) 25%,\n        rgba(").concat(glowColor, ", 0.02) 40%,\n        rgba(").concat(glowColor, ", 0.01) 65%,\n        transparent 70%\n      );\n      z-index: 200;\n      opacity: 0;\n      transform: translate(-50%, -50%);\n      mix-blend-mode: screen;\n    ");
        document.body.appendChild(spotlight);
        spotlightRef.current = spotlight;
        var handleMouseMove = function (e) {
            if (!spotlightRef.current || !gridRef.current)
                return;
            var section = gridRef.current.closest('.bento-section');
            var rect = section === null || section === void 0 ? void 0 : section.getBoundingClientRect();
            var mouseInside = rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
            isInsideSection.current = mouseInside || false;
            var cards = gridRef.current.querySelectorAll('.card');
            if (!mouseInside) {
                gsap_1.gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                cards.forEach(function (card) {
                    card.style.setProperty('--glow-intensity', '0');
                });
                return;
            }
            var _a = calculateSpotlightValues(spotlightRadius), proximity = _a.proximity, fadeDistance = _a.fadeDistance;
            var minDistance = Infinity;
            cards.forEach(function (card) {
                var cardElement = card;
                var cardRect = cardElement.getBoundingClientRect();
                var centerX = cardRect.left + cardRect.width / 2;
                var centerY = cardRect.top + cardRect.height / 2;
                var distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
                var effectiveDistance = Math.max(0, distance);
                minDistance = Math.min(minDistance, effectiveDistance);
                var glowIntensity = 0;
                if (effectiveDistance <= proximity) {
                    glowIntensity = 1;
                }
                else if (effectiveDistance <= fadeDistance) {
                    glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
                }
                updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
            });
            gsap_1.gsap.to(spotlightRef.current, {
                left: e.clientX,
                top: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
            var targetOpacity = minDistance <= proximity
                ? 0.8
                : minDistance <= fadeDistance
                    ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
                    : 0;
            gsap_1.gsap.to(spotlightRef.current, {
                opacity: targetOpacity,
                duration: targetOpacity > 0 ? 0.2 : 0.5,
                ease: 'power2.out'
            });
        };
        var handleMouseLeave = function () {
            var _a;
            isInsideSection.current = false;
            (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.card').forEach(function (card) {
                card.style.setProperty('--glow-intensity', '0');
            });
            if (spotlightRef.current) {
                gsap_1.gsap.to(spotlightRef.current, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        return function () {
            var _a, _b;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            (_b = (_a = spotlightRef.current) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(spotlightRef.current);
        };
    }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
    return null;
};
var BentoCardGrid = function (_a) {
    var children = _a.children, gridRef = _a.gridRef;
    return ((0, jsx_runtime_1.jsx)("div", { className: "card-grid bento-section", ref: gridRef, children: children }));
};
var useMobileDetection = function () {
    var _a = (0, react_1.useState)(false), isMobile = _a[0], setIsMobile = _a[1];
    (0, react_1.useEffect)(function () {
        var checkMobile = function () { return setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT); };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return function () { return window.removeEventListener('resize', checkMobile); };
    }, []);
    return isMobile;
};
var MagicBento = function (_a) {
    var _b = _a.textAutoHide, textAutoHide = _b === void 0 ? true : _b, _c = _a.enableStars, enableStars = _c === void 0 ? true : _c, _d = _a.enableSpotlight, enableSpotlight = _d === void 0 ? true : _d, _e = _a.enableBorderGlow, enableBorderGlow = _e === void 0 ? true : _e, _f = _a.disableAnimations, disableAnimations = _f === void 0 ? false : _f, _g = _a.spotlightRadius, spotlightRadius = _g === void 0 ? DEFAULT_SPOTLIGHT_RADIUS : _g, _h = _a.particleCount, particleCount = _h === void 0 ? DEFAULT_PARTICLE_COUNT : _h, _j = _a.enableTilt, enableTilt = _j === void 0 ? false : _j, _k = _a.glowColor, glowColor = _k === void 0 ? DEFAULT_GLOW_COLOR : _k, _l = _a.clickEffect, clickEffect = _l === void 0 ? true : _l, _m = _a.enableMagnetism, enableMagnetism = _m === void 0 ? true : _m;
    var gridRef = (0, react_1.useRef)(null);
    var isMobile = useMobileDetection();
    var shouldDisableAnimations = disableAnimations || isMobile;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [enableSpotlight && ((0, jsx_runtime_1.jsx)(GlobalSpotlight, { gridRef: gridRef, disableAnimations: shouldDisableAnimations, enabled: enableSpotlight, spotlightRadius: spotlightRadius, glowColor: glowColor })), (0, jsx_runtime_1.jsx)(BentoCardGrid, { gridRef: gridRef, children: cardData.map(function (card, index) {
                    var baseClassName = "card ".concat(textAutoHide ? 'card--text-autohide' : '', " ").concat(enableBorderGlow ? 'card--border-glow' : '');
                    var cardProps = {
                        className: baseClassName,
                        style: {
                            backgroundColor: card.color,
                            '--glow-color': glowColor
                        }
                    };
                    if (enableStars) {
                        return ((0, jsx_runtime_1.jsxs)(ParticleCard, __assign({}, cardProps, { disableAnimations: shouldDisableAnimations, particleCount: particleCount, glowColor: glowColor, enableTilt: enableTilt, clickEffect: clickEffect, enableMagnetism: enableMagnetism, children: [(0, jsx_runtime_1.jsx)("div", { className: "card__header", children: (0, jsx_runtime_1.jsx)("div", { className: "card__label", children: card.label }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card__content", children: [(0, jsx_runtime_1.jsx)("h2", { className: "card__title", children: card.title }), (0, jsx_runtime_1.jsx)("p", { className: "card__description", children: card.description })] })] }), index));
                    }
                    return ((0, jsx_runtime_1.jsxs)("div", __assign({}, cardProps, { ref: function (el) {
                            if (!el)
                                return;
                            var handleMouseMove = function (e) {
                                if (shouldDisableAnimations)
                                    return;
                                var rect = el.getBoundingClientRect();
                                var x = e.clientX - rect.left;
                                var y = e.clientY - rect.top;
                                var centerX = rect.width / 2;
                                var centerY = rect.height / 2;
                                if (enableTilt) {
                                    var rotateX = ((y - centerY) / centerY) * -10;
                                    var rotateY = ((x - centerX) / centerX) * 10;
                                    gsap_1.gsap.to(el, {
                                        rotateX: rotateX,
                                        rotateY: rotateY,
                                        duration: 0.1,
                                        ease: 'power2.out',
                                        transformPerspective: 1000
                                    });
                                }
                                if (enableMagnetism) {
                                    var magnetX = (x - centerX) * 0.05;
                                    var magnetY = (y - centerY) * 0.05;
                                    gsap_1.gsap.to(el, {
                                        x: magnetX,
                                        y: magnetY,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                            };
                            var handleMouseLeave = function () {
                                if (shouldDisableAnimations)
                                    return;
                                if (enableTilt) {
                                    gsap_1.gsap.to(el, {
                                        rotateX: 0,
                                        rotateY: 0,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                                if (enableMagnetism) {
                                    gsap_1.gsap.to(el, {
                                        x: 0,
                                        y: 0,
                                        duration: 0.3,
                                        ease: 'power2.out'
                                    });
                                }
                            };
                            var handleClick = function (e) {
                                if (!clickEffect || shouldDisableAnimations)
                                    return;
                                var rect = el.getBoundingClientRect();
                                var x = e.clientX - rect.left;
                                var y = e.clientY - rect.top;
                                // Calculate the maximum distance from click point to any corner
                                var maxDistance = Math.max(Math.hypot(x, y), Math.hypot(x - rect.width, y), Math.hypot(x, y - rect.height), Math.hypot(x - rect.width, y - rect.height));
                                var ripple = document.createElement('div');
                                ripple.style.cssText = "\n                    position: absolute;\n                    width: ".concat(maxDistance * 2, "px;\n                    height: ").concat(maxDistance * 2, "px;\n                    border-radius: 50%;\n                    background: radial-gradient(circle, rgba(").concat(glowColor, ", 0.4) 0%, rgba(").concat(glowColor, ", 0.2) 30%, transparent 70%);\n                    left: ").concat(x - maxDistance, "px;\n                    top: ").concat(y - maxDistance, "px;\n                    pointer-events: none;\n                    z-index: 1000;\n                  ");
                                el.appendChild(ripple);
                                gsap_1.gsap.fromTo(ripple, {
                                    scale: 0,
                                    opacity: 1
                                }, {
                                    scale: 1,
                                    opacity: 0,
                                    duration: 0.8,
                                    ease: 'power2.out',
                                    onComplete: function () { return ripple.remove(); }
                                });
                            };
                            el.addEventListener('mousemove', handleMouseMove);
                            el.addEventListener('mouseleave', handleMouseLeave);
                            el.addEventListener('click', handleClick);
                        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "card__header", children: (0, jsx_runtime_1.jsx)("div", { className: "card__label", children: card.label }) }), (0, jsx_runtime_1.jsxs)("div", { className: "card__content", children: [(0, jsx_runtime_1.jsx)("h2", { className: "card__title", children: card.title }), (0, jsx_runtime_1.jsx)("p", { className: "card__description", children: card.description })] })] }), index));
                }) })] }));
};
exports.default = MagicBento;
