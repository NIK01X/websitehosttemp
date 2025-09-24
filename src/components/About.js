"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var background_beams_1 = require("../Animations/Aceternity/background-beams");
var GradientText_1 = __importDefault(require("../Animations/ReactBits/GradientText"));
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
var GlowingStars_1 = __importDefault(require("./GlowingStars"));
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var About = function () {
    var sectionRefs = (0, react_1.useRef)([]);
    var logoRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isMobile = _a[0], setIsMobile = _a[1];
    // Check if device is mobile
    (0, react_1.useEffect)(function () {
        var checkMobile = function () {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return function () { return window.removeEventListener("resize", checkMobile); };
    }, []);
    (0, react_1.useEffect)(function () {
        // Optimized GSAP animation with batch processing
        var animations = gsap_1.gsap.timeline();
        // Logo reveal animation (matching WHITE EVENTIVE letterReveal style)
        if (logoRef.current) {
            // Set initial state for logo reveal - matching letterReveal keyframes
            gsap_1.gsap.set(logoRef.current, {
                opacity: 0,
                scaleX: 0.1,
                rotateY: -90,
                willChange: "transform, opacity",
            });
            // Create scroll trigger for logo reveal
            ScrollTrigger_1.ScrollTrigger.create({
                trigger: logoRef.current,
                start: "top 90%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
                onEnter: function () {
                    // Reveal animation mimicking letterReveal keyframes
                    gsap_1.gsap
                        .timeline()
                        .to(logoRef.current, {
                        opacity: 0.7,
                        scaleX: 0.7,
                        rotateY: -100,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                        .to(logoRef.current, {
                        opacity: 1,
                        scaleX: 1,
                        rotateY: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        onComplete: function () {
                            gsap_1.gsap.set(logoRef.current, { willChange: "auto" });
                        },
                    });
                },
                onLeave: function () {
                    gsap_1.gsap.to(logoRef.current, {
                        opacity: 0.6,
                        scaleX: 0.9,
                        duration: 0.5,
                        ease: "power2.out",
                    });
                },
                onEnterBack: function () {
                    // Quick reveal when scrolling back
                    gsap_1.gsap
                        .timeline()
                        .to(logoRef.current, {
                        opacity: 0.7,
                        scaleX: 0.7,
                        rotateY: -100,
                        duration: 0.2,
                        ease: "power2.out",
                    })
                        .to(logoRef.current, {
                        opacity: 1,
                        scaleX: 1,
                        rotateY: 0,
                        duration: 0.6,
                        ease: "power2.out",
                        onComplete: function () {
                            gsap_1.gsap.set(logoRef.current, { willChange: "auto" });
                        },
                    });
                },
                onLeaveBack: function () {
                    gsap_1.gsap.to(logoRef.current, {
                        opacity: 0,
                        scaleX: 0.1,
                        rotateY: -90,
                        duration: 0.8,
                        ease: "power2.in",
                    });
                },
            });
        }
        sectionRefs.current.forEach(function (section, index) {
            if (section) {
                // Determine animation direction based on index
                // 0: Who We Are (left to right) - x: -100 to 0
                // 1: What Makes Us Unique (right to left) - x: 100 to 0
                // 2: What We Deliver (left to right) - x: -100 to 0
                // 3: How We Work (right to left) - x: 100 to 0
                var isRightToLeft = index % 2 === 1; // odd indices fade from right to left
                var initialX_1 = isRightToLeft ? 100 : -100;
                // Set initial state
                gsap_1.gsap.set(section, {
                    opacity: 0,
                    x: initialX_1,
                    willChange: "transform, opacity",
                });
                // Create scroll trigger for each section with repeatable animations
                ScrollTrigger_1.ScrollTrigger.create({
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse", // Always trigger on enter/leave
                    onEnter: function () {
                        // Reset to initial position first, then animate
                        gsap_1.gsap.set(section, {
                            opacity: 0,
                            x: initialX_1,
                            willChange: "transform, opacity",
                        });
                        gsap_1.gsap.to(section, {
                            opacity: 1,
                            x: 0,
                            duration: 1.2,
                            ease: "power2.out",
                            delay: index * 0.1, // Stagger effect
                            onComplete: function () {
                                gsap_1.gsap.set(section, { willChange: "auto" }); // Performance optimization
                            },
                        });
                    },
                    onLeave: function () {
                        gsap_1.gsap.to(section, {
                            opacity: 0,
                            x: initialX_1,
                            duration: 0.6,
                            ease: "power2.in",
                        });
                    },
                    onEnterBack: function () {
                        // Reset to initial position first, then animate
                        gsap_1.gsap.set(section, {
                            opacity: 0,
                            x: initialX_1,
                            willChange: "transform, opacity",
                        });
                        gsap_1.gsap.to(section, {
                            opacity: 1,
                            x: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            onComplete: function () {
                                gsap_1.gsap.set(section, { willChange: "auto" }); // Performance optimization
                            },
                        });
                    },
                    onLeaveBack: function () {
                        gsap_1.gsap.to(section, {
                            opacity: 0,
                            x: initialX_1,
                            duration: 0.6,
                            ease: "power2.in",
                        });
                    },
                });
            }
        });
        // Cleanup function for optimization
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (trigger) { return trigger.kill(); });
            animations.kill();
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("section", { id: "about", children: (0, jsx_runtime_1.jsx)("section", { style: {
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #000000)",
                width: "100%",
                position: "relative",
            }, children: (0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen w-full relative flex flex-col items-center justify-start antialiased bg-gradient-to-b from-neutral-950 via-neutral-950/15 to-black py-20", children: [(0, jsx_runtime_1.jsxs)("div", { className: "max-w-6xl mx-auto px-8 space-y-12 md:space-y-20", children: [(0, jsx_runtime_1.jsxs)("div", { ref: function (el) {
                                    sectionRefs.current[0] = el;
                                }, className: "md:ml-10 mt-30 text-left space-y-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center gap-6 md:gap-8", children: (0, jsx_runtime_1.jsx)(GradientText_1.default, { colors: [
                                                "#4E53C2",
                                                "#D9D9D9",
                                                "#4E53C2",
                                                "#D9D9D9",
                                                "#4E53C2",
                                            ], animationSpeed: 8, showBorder: false, className: "", style: { justifyContent: "flex-start", margin: "0" }, children: (0, jsx_runtime_1.jsx)("h1", { className: "text-5xl md:text-8xl font-bold", children: "Who We Are" }) }) }), (0, jsx_runtime_1.jsx)("p", { className: "mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-5 md:mr-25", style: { fontFamily: "Aileron, sans-serif" }, children: "Founded in 2018, White Eventive has emerged as one of India's leading experiential event agencies, celebrated for creating high-impact brand experiences." })] }), (0, jsx_runtime_1.jsxs)("div", { ref: function (el) {
                                    sectionRefs.current[1] = el;
                                }, className: "md:mr-10 mt-20 md:mt-60 text-right space-y-8", children: [(0, jsx_runtime_1.jsx)(GradientText_1.default, { colors: ["#C24E50", "#D9D9D9", "#C24E50", "#D9D9D9", "#C24E50"], animationSpeed: 8, showBorder: false, className: "", style: {
                                            justifyContent: "flex-end",
                                            margin: "0",
                                            maxWidth: "100%",
                                            width: "100%",
                                        }, children: (0, jsx_runtime_1.jsx)("h2", { className: "text-5xl md:text-8xl font-bold", children: "What Makes Us Unique" }) }), (0, jsx_runtime_1.jsx)("p", { className: "mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed  ml-5 md:ml-25", style: { fontFamily: "Aileron, sans-serif" }, children: "We are driven by precision, creativity, and cultural sensitivity, with a strong focus on luxury innovation and seamless execution. Our work is designed not just to impress but to transcend expectations." })] }), (0, jsx_runtime_1.jsxs)("div", { ref: function (el) {
                                    sectionRefs.current[2] = el;
                                }, className: "md:ml-10 mt-20 md:mt-60 text-left space-y-8", children: [(0, jsx_runtime_1.jsxs)(GradientText_1.default, { colors: ["#C2844E", "#D9D9D9", "#C2844E", "#D9D9D9", "#C2844E"], animationSpeed: 8, showBorder: false, className: "", style: {
                                            justifyContent: "flex-start",
                                            margin: "0",
                                            maxWidth: "100%",
                                            width: "100%",
                                        }, children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-5xl md:text-8xl font-bold ", children: "What We Deliver" }), " "] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-5 md:mr-25", style: { fontFamily: "Aileron, sans-serif" }, children: "From grand-scale festivals to refined corporate summits and retail activations, we deliver tailor-made experiences across diverse spaces. Our solutions combine strategic insight, design excellence, and flawless operations." })] }), (0, jsx_runtime_1.jsxs)("div", { ref: function (el) {
                                    sectionRefs.current[3] = el;
                                }, className: "md:mr-10 mt-20 md:mt-60 text-right space-y-8", children: [(0, jsx_runtime_1.jsx)(GradientText_1.default, { colors: ["#59C24E", "#D9D9D9", "#59C24E", "#D9D9D9", "#59C24E"], animationSpeed: 8, showBorder: false, className: "", style: {
                                            justifyContent: "flex-end",
                                            margin: "0",
                                            maxWidth: "100%",
                                            width: "100%",
                                        }, children: (0, jsx_runtime_1.jsx)("h2", { className: "text-5xl md:text-8xl font-bold", children: "How We Work" }) }), (0, jsx_runtime_1.jsx)("p", { className: "mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed ml-5 md:ml-25", style: { fontFamily: "Aileron, sans-serif" }, children: "We believe in emotion-led storytelling and disciplined execution. Every detail \u2014 from concept development and vendor management to on-ground delivery \u2014 is handled with passion, precision, and a commitment to perfection." })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0 pointer-events-none", children: [!isMobile && ((0, jsx_runtime_1.jsx)(background_beams_1.BackgroundBeams, { className: "md:scale-100 scale-150 sm:scale-125" })), isMobile && (0, jsx_runtime_1.jsx)(GlowingStars_1.default, {})] })] }) }) }));
};
exports.default = About;
