"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = Service;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var comet_card_1 = require("../Animations/Aceternity/comet-card");
var ShinyText_1 = __importDefault(require("../Animations/ReactBits/ShinyText"));
var utils_1 = require("../lib/utils");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
var serviceData = [
    {
        id: "SRV1",
        title: "Live Experiences",
        description: "Concert, Ips, Festivals, Brand Launches",
        image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Planning",
    },
    {
        id: "SRV2",
        title: "Production",
        description: "Set Design, AV, Staging, Logistics",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Corporate",
    },
    {
        id: "SRV3",
        title: "Activations",
        description: "On ground brand activations, Sampling, Pops Up",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Wedding",
    },
    {
        id: "SRV4",
        title: "MICE",
        description: "Meetings, Incentives, Conference, Exhibitions-globally",
        image: "https://images.unsplash.com/photo-1554048612-b6ebae896fb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Media",
    },
    {
        id: "SRV5",
        title: "Mall Decor",
        description: "Themed Installations, Festive Decor, Visual Merchandising",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Venue",
    },
    {
        id: "SRV6",
        title: "Branding",
        description: "Concept-led Branding, Space Design, Campaign, Web-App Design",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Catering",
    },
];
function Service() {
    var sectionRef = (0, react_1.useRef)(null);
    var containerRef = (0, react_1.useRef)(null);
    var contentRef = (0, react_1.useRef)(null);
    var titleRefs = (0, react_1.useRef)([]);
    (0, react_1.useEffect)(function () {
        if (!sectionRef.current || !containerRef.current || !contentRef.current)
            return;
        // Create scroll-triggered fisheye reduction animation
        ScrollTrigger_1.ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 0.8,
            onUpdate: function (self) {
                var progress = self.progress; // 0 to 1 as user scrolls through section
                // Reduce container fisheye effect
                if (containerRef.current) {
                    var containerScale = 1.1 - progress * 0.12; // 1.1 to 0.98 (slightly faster)
                    var containerRotation = 5 - progress * 5.5; // 5deg to -0.5deg (subtle overcorrect)
                    gsap_1.gsap.set(containerRef.current, {
                        transform: "perspective(800px) rotateX(".concat(containerRotation, "deg) scale3d(").concat(containerScale, ", ").concat(containerScale, ", 1)"),
                    });
                }
                // Reduce content fisheye effect
                if (contentRef.current) {
                    var contentScaleX = 1.15 - progress * 0.18; // 1.15 to 0.97 (slightly faster)
                    var contentScaleY = 1.2 - progress * 0.23; // 1.2 to 0.97 (slightly faster)
                    var contentRotation = -3 + progress * 3.5; // -3deg to 0.5deg (slight overcorrect)
                    gsap_1.gsap.set(contentRef.current, {
                        transform: "perspective(1200px) scale3d(".concat(contentScaleX, ", ").concat(contentScaleY, ", 1) rotateX(").concat(contentRotation, "deg)"),
                        borderRadius: "".concat(60 - progress * 60, "px"), // 60px to 0px
                        filter: "blur(0px) contrast(".concat(1.08 - progress * 0.08, ") brightness(").concat(1.05 - progress * 0.05, ")"),
                    });
                }
                // Reduce title fisheye effects
                titleRefs.current.forEach(function (titleRef) {
                    if (titleRef) {
                        var titleScaleX = 1.1 - progress * 0.13; // 1.1 to 0.97 (slightly faster)
                        var titleScaleY = 1.15 - progress * 0.18; // 1.15 to 0.97 (slightly faster)
                        var titleRotation = -1 + progress * 1.2; // -1deg to 0.2deg (subtle overcorrect)
                        gsap_1.gsap.set(titleRef, {
                            transform: "perspective(800px) scale3d(".concat(titleScaleX, ", ").concat(titleScaleY, ", 1) rotateX(").concat(titleRotation, "deg)"),
                            filter: "drop-shadow(0 ".concat(20 - progress * 20, "px ").concat(40 - progress * 40, "px rgba(0,0,0,").concat(0.5 - progress * 0.3, ")) contrast(").concat(1.05 - progress * 0.05, ")"),
                            textShadow: "0 0 ".concat(30 - progress * 30, "px rgba(238, 232, 214, ").concat(0.3 - progress * 0.3, ")"),
                        });
                    }
                });
            },
        });
        // Also animate cards to reduce their individual fisheye on scroll
        var cards = document.querySelectorAll(".service-card");
        cards.forEach(function (card) {
            ScrollTrigger_1.ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top 60%",
                end: "bottom 40%",
                scrub: 0.8,
                onUpdate: function (self) {
                    var progress = self.progress;
                    var cardScaleX = 1.05 - progress * 0.07; // 1.05 to 0.98 (slightly faster)
                    var cardScaleY = 1.08 - progress * 0.1; // 1.08 to 0.98 (slightly faster)
                    if (card instanceof HTMLElement) {
                        card.style.transform = "perspective(600px) scale3d(".concat(cardScaleX, ", ").concat(cardScaleY, ", 1) rotateX(0deg)");
                        card.style.filter = "drop-shadow(0 ".concat(15 - progress * 15, "px ").concat(35 - progress * 35, "px rgba(0,0,0,").concat(0.4 - progress * 0.2, ")) contrast(").concat(1.02 - progress * 0.02, ")");
                    }
                },
            });
        });
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (trigger) { return trigger.kill(); });
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("section", { ref: sectionRef, id: "service", className: "relative w-full min-h-screen bg-black py-20 px-4 overflow-hidden", style: {
            perspective: "1000px",
            perspectiveOrigin: "center center",
        }, children: (0, jsx_runtime_1.jsxs)("div", { ref: containerRef, className: "relative h-full w-full items-center justify-center bg-black dark:bg-black", style: {
                transform: "perspective(800px) rotateX(5deg) scale3d(1.1, 1.1, 1)",
                transformStyle: "preserve-3d",
                borderRadius: "50px",
                filter: "contrast(1.05) brightness(1.02)",
            }, children: [(0, jsx_runtime_1.jsx)("div", { className: (0, utils_1.cn)("absolute inset-0", "[background-size:20px_20px]", "[background-image:radial-gradient(#252525_1px,transparent_1px)]", "dark:[background-image:radial-gradient(#222222_1px,transparent_1px)]") }), (0, jsx_runtime_1.jsxs)("div", { ref: contentRef, className: "relative z-10 max-w-7xl mx-auto flex-col items-center justify-center min-h-screen py-20", style: {
                        transform: "perspective(1200px) scale3d(1.15, 1.2, 1) rotateX(-3deg)",
                        transformStyle: "preserve-3d",
                        borderRadius: "60px",
                        background: "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
                        filter: "blur(0px) contrast(1.08) brightness(1.05)",
                        boxShadow: "inset 0 0 80px rgba(255, 255, 255, 0), 0 30px 60px rgba(0,0,0,0.5)",
                        clipPath: "ellipse(95% 90% at 50% 50%)",
                    }, children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16", children: serviceData.slice(0, 3).map(function (service, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(comet_card_1.CometCard, { floatDelay: index * 0.2, children: (0, jsx_runtime_1.jsxs)("div", { className: "service-card w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4", style: {
                                            transformStyle: "preserve-3d",
                                            transform: "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)",
                                            opacity: 1,
                                            filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)",
                                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        }, onMouseEnter: function (e) {
                                            e.currentTarget.style.transform =
                                                "perspective(600px) scale3d(1.15, 1.2, 1.1) rotateX(-2deg) rotateY(0deg)";
                                            e.currentTarget.style.filter =
                                                "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) contrast(1.05) brightness(1.1)";
                                        }, onMouseLeave: function (e) {
                                            e.currentTarget.style.transform =
                                                "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)";
                                            e.currentTarget.style.filter =
                                                "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)";
                                        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "mx-2 flex-1", children: (0, jsx_runtime_1.jsx)("div", { className: "relative mt-2 aspect-[4/3] w-full", children: (0, jsx_runtime_1.jsx)("img", { loading: "lazy", className: "absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover", alt: service.title, src: service.image, style: {
                                                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                                            opacity: 1,
                                                        } }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex flex-col space-y-2 p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between", children: (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-white", children: service.title }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-300 leading-relaxed", children: service.description }), (0, jsx_runtime_1.jsx)("div", { className: "pt-2", children: (0, jsx_runtime_1.jsx)("button", { className: "w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm", children: "Learn More" }) })] })] }) }) }, service.id)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "hidden lg:block relative mb-16 w-full flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "relative flex items-center justify-center w-full", children: (0, jsx_runtime_1.jsx)("h2", { ref: function (el) {
                                        titleRefs.current[0] = el;
                                    }, className: "text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold opacity-90 text-center", style: {
                                        fontFamily: "Inter, sans-serif",
                                        color: "transparent",
                                        letterSpacing: "0.02em",
                                        whiteSpace: "normal",
                                        wordBreak: "break-word",
                                        hyphens: "auto",
                                        WebkitTextStroke: "1px #EEE8D6",
                                        lineHeight: "0.9",
                                        padding: "0 1rem",
                                        transform: "perspective(800px) scale3d(1.1, 1.15, 1) rotateX(-1deg)",
                                        transformStyle: "preserve-3d",
                                        filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) contrast(1.05)",
                                        textShadow: "0 0 30px rgba(238, 232, 214, 0.3)",
                                    }, children: (0, jsx_runtime_1.jsx)(ShinyText_1.default, { text: "OUR SERVICES", disabled: false, speed: 3 }) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12", children: serviceData.slice(3, 6).map(function (service, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(comet_card_1.CometCard, { floatDelay: (index + 3) * 0.2, children: (0, jsx_runtime_1.jsxs)("div", { className: "service-card w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4", style: {
                                            transformStyle: "preserve-3d",
                                            transform: "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)",
                                            opacity: 1,
                                            filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)",
                                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                        }, onMouseEnter: function (e) {
                                            e.currentTarget.style.transform =
                                                "perspective(600px) scale3d(1.15, 1.2, 1.1) rotateX(-2deg) rotateY(0deg)";
                                            e.currentTarget.style.filter =
                                                "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) contrast(1.05) brightness(1.1)";
                                        }, onMouseLeave: function (e) {
                                            e.currentTarget.style.transform =
                                                "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)";
                                            e.currentTarget.style.filter =
                                                "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)";
                                        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "mx-2 flex-1", children: (0, jsx_runtime_1.jsx)("div", { className: "relative mt-2 aspect-[4/3] w-full", children: (0, jsx_runtime_1.jsx)("img", { loading: "lazy", className: "absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover", alt: service.title, src: service.image, style: {
                                                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                                            opacity: 1,
                                                        } }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex flex-col space-y-2 p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between", children: (0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-white", children: service.title }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-300 leading-relaxed", children: service.description }), (0, jsx_runtime_1.jsx)("div", { className: "pt-2", children: (0, jsx_runtime_1.jsx)("button", { className: "w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm", children: "Learn More" }) })] })] }) }) }, service.id)); }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden w-full flex flex-col items-center justify-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative mb-16 w-full flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "relative flex items-center justify-center w-full", children: (0, jsx_runtime_1.jsx)("h2", { ref: function (el) {
                                                titleRefs.current[1] = el;
                                            }, className: "text-4xl sm:text-6xl md:text-7xl font-bold opacity-90 text-center", style: {
                                                fontFamily: "Inter, sans-serif",
                                                color: "transparent",
                                                letterSpacing: "0.02em",
                                                whiteSpace: "normal",
                                                wordBreak: "break-word",
                                                hyphens: "auto",
                                                WebkitTextStroke: "1px #EEE8D6",
                                                lineHeight: "0.9",
                                                padding: "0 1rem",
                                            } }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl justify-items-center", children: serviceData.map(function (service, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(comet_card_1.CometCard, { floatDelay: index * 0.2, children: (0, jsx_runtime_1.jsxs)("div", { className: "w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4", style: {
                                                    transformStyle: "preserve-3d",
                                                    transform: "none",
                                                    opacity: 1,
                                                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "mx-2 flex-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative mt-2 aspect-[4/3] w-full", children: [(0, jsx_runtime_1.jsx)("img", { loading: "lazy", className: "absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover", alt: service.title, src: service.image, style: {
                                                                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                                                        opacity: 1,
                                                                    } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1", children: (0, jsx_runtime_1.jsx)("span", { className: "text-xs font-medium text-white", children: service.category }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex flex-col space-y-2 p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-white", children: service.title }), (0, jsx_runtime_1.jsxs)("div", { className: "text-xs text-gray-400 opacity-75", children: ["#", service.id] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-300 leading-relaxed", children: service.description }), (0, jsx_runtime_1.jsx)("div", { className: "pt-2", children: (0, jsx_runtime_1.jsx)("button", { className: "w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm", children: "Learn More" }) })] })] }) }) }, service.id)); }) })] })] })] }) }));
}
