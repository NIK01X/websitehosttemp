"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var StaggeredMenu_1 = __importDefault(require("./Animations/ReactBits/StaggeredMenu"));
var About_1 = __importDefault(require("./components/About"));
var Projects_1 = __importDefault(require("./components/Projects"));
var Service_1 = __importDefault(require("./components/Service"));
var Contact_1 = __importDefault(require("./components/Contact"));
var AnimatedContent_1 = __importDefault(require("./Animations/ReactBits/AnimatedContent"));
var react_1 = require("react");
var background_gradient_animation_1 = require("./Animations/Aceternity/background-gradient-animation");
var text_hover_effect_1 = require("./Animations/Aceternity/text-hover-effect");
var ScrollVelocity_1 = __importDefault(require("./Animations/ReactBits/ScrollVelocity"));
var Masonry_1 = __importDefault(require("./Animations/ReactBits/Masonry"));
var background_beams_1 = require("./Animations/Aceternity/background-beams");
var Noise_1 = __importDefault(require("./Animations/ReactBits/Noise"));
// height of hero
var heroHeight = window.innerHeight;
// calculate progress (0 to 1)
var progress = Math.min(scrollY / heroHeight, 1);
var SkeletonOne = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold md:text-4xl text-xl text-white", children: "House in the woods" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200", children: "A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life." })] }));
};
var SkeletonTwo = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold md:text-4xl text-xl text-white", children: "House above the clouds" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200", children: "Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life." })] }));
};
var SkeletonThree = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold md:text-4xl text-xl text-white", children: "Greens all over" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200", children: "A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life." })] }));
};
var SkeletonFour = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-bold md:text-4xl text-xl text-white", children: "Rivers are serene" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base text-white" }), (0, jsx_runtime_1.jsx)("p", { className: "font-normal text-base my-4 max-w-lg text-neutral-200", children: "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life." })] }));
};
var cards = [
    {
        id: 1,
        content: (0, jsx_runtime_1.jsx)(SkeletonOne, {}),
        className: "md:col-span-2",
        thumbnail: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 2,
        content: (0, jsx_runtime_1.jsx)(SkeletonTwo, {}),
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        content: (0, jsx_runtime_1.jsx)(SkeletonThree, {}),
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        content: (0, jsx_runtime_1.jsx)(SkeletonFour, {}),
        className: "md:col-span-2",
        thumbnail: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];
var items2 = [
    {
        id: "1",
        img: "/images/tulah/tulahthree.jpg",
        url: "#tulah",
        height: 400,
    },
    {
        id: "2",
        img: "/images/akhand/akhandone.jpg",
        url: "#akhand",
        height: 350,
    },
    {
        id: "3",
        img: "/images/purvankara/IMG_5187.jpg",
        url: "#purvankara",
        height: 500,
    },
    {
        id: "4",
        img: "/images/yougov/IMG_4429.jpg",
        url: "#yougov",
        height: 300,
    },
    {
        id: "5",
        img: "/images/sleepzone/sz1.JPG",
        url: "#sleepzone",
        height: 450,
    },
    {
        id: "6",
        img: "/images/jiobp/img1.JPEG",
        url: "#jiobp",
        height: 380,
    },
    {
        id: "7",
        img: "/images/bakerdozen/img1.jpg",
        url: "#bakerdozen",
        height: 420,
    },
    {
        id: "8",
        img: "/images/tulah/tulahtwo.jpg",
        url: "#tulah",
        height: 350,
    },
    {
        id: "9",
        img: "/images/akhand/akhand2.jpg",
        url: "#akhand",
        height: 480,
    },
    {
        id: "10",
        img: "/images/purvankara/IMG_5215.jpg",
        url: "#purvankara",
        height: 400,
    },
    {
        id: "11",
        img: "/images/yougov/IMG_4432.jpg",
        url: "#yougov",
        height: 360,
    },
    {
        id: "12",
        img: "/images/sleepzone/sz2.JPG",
        url: "#sleepzone",
        height: 440,
    },
    {
        id: "13",
        img: "/images/tulah/tulah.JPG",
        url: "#tulah",
        height: 380,
    },
    {
        id: "14",
        img: "/images/tulah/tulah4.jpg",
        url: "#tulah",
        height: 520,
    },
    {
        id: "15",
        img: "/images/akhand/akhand3.jpg",
        url: "#akhand",
        height: 340,
    },
    {
        id: "16",
        img: "/images/purvankara/IMG_5227.jpg",
        url: "#purvankara",
        height: 460,
    },
    {
        id: "17",
        img: "/images/purvankara/img.jpg",
        url: "#purvankara",
        height: 390,
    },
    {
        id: "18",
        img: "/images/purvankara/img2.jpg",
        url: "#purvankara",
        height: 430,
    },
    {
        id: "19",
        img: "/images/yougov/IMG_4449.jpg",
        url: "#yougov",
        height: 370,
    },
    {
        id: "20",
        img: "/images/jiobp/img2.jpg",
        url: "#jiobp",
        height: 410,
    },
    {
        id: "21",
        img: "/images/bakerdozen/img2.jpg",
        url: "#bakerdozen",
        height: 450,
    },
];
var images = [
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
];
// Navigation menu items - converted to anchor links for smooth scrolling
var menuItems = [
    { label: "Home", ariaLabel: "Go to home section", link: "#home" },
    { label: "About", ariaLabel: "Learn about us", link: "#about" },
    { label: "Projects", ariaLabel: "Our projects", link: "#projects" },
    { label: "Services", ariaLabel: "View our services", link: "#service" },
    { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];
// Social media links for the StaggeredMenu component
var socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
];
var items = [
    // "Event Photography Portfolio",
    // Tulah Images
    "/images/tulah/tulahthree.jpg",
    "/images/tulah/tulahtwo.JPG",
    "/images/tulah/tulah.JPG",
    "/images/tulah/tulah4.JPG",
    // Akhand Images
    "/images/akhand/akhandone.jpg",
    "/images/akhand/akhand2.jpg",
    "/images/akhand/akhand3.jpg",
    // Purvankara Images
    "/images/purvankara/IMG_5187.jpg",
    "/images/purvankara/IMG_5215.jpg",
    "/images/purvankara/IMG_5227.jpg",
    "/images/purvankara/img.jpg",
    "/images/purvankara/img2.jpg",
    // YouGov Images
    "/images/yougov/IMG_4429.jpg",
    "/images/yougov/IMG_4432.jpg",
    "/images/yougov/IMG_4449.jpg",
    //sleepzone
    "/images/sleepzone/sz1.JPG",
    "/images/sleepzone/sz2.JPG",
    //jiobp
    "/images/jiobp/img1.JPEG",
    "/images/jiobp/img2.jpg",
    //bakerdozen
    // <div key="jsx-item-1">
    //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
    //     Professional Event Photography
    //   </div>
    // </div>,
    // <div key="jsx-item-2">
    //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
    //     Corporate Events & Celebrations
    //   </div>
    // </div>,
    // <div key="jsx-item-3">
    //   <div style={{ color: "#EEE8D6", fontWeight: "bold", fontSize: "1.2rem" }}>
    //     Capturing Memorable Moments
    //   </div>
    // </div>,
    // Add more items as needed
];
function App() {
    var _a = (0, react_1.useState)(0), scrollY = _a[0], setScrollY = _a[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    // height of hero
    var heroHeight = window.innerHeight;
    // calculate progress (0 to 1)
    var progress = Math.min(scrollY / heroHeight, 1);
    // Calculate scroll-based animations for EVENTIVE text
    var eventiveProgress = Math.min(Math.max((scrollY - heroHeight * 0.3) / (heroHeight * 0.7), 0), 1);
    var eventiveTranslateY = eventiveProgress * (heroHeight * 0.7); // Move down by 30% of screen height
    var eventiveScale = 1 + eventiveProgress * 0.5; // Scale from 1 to 3x
    var eventiveOpacity = 1 - eventiveProgress * 0.3; // Slight fade for depth
    // Subtitle animation - appears when EVENTIVE text settles
    var textSettledProgress = eventiveProgress > 0.8 ? (eventiveProgress - 0.8) / 0.2 : 0;
    var showSubAnimation = textSettledProgress > 0.3;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("section", { id: "home", style: {
                // height: "200vh", // Extended height for scroll animation
                // position: "relative",
                // overflow: "hidden",
                // backgroundColor: "#EEE8D6",
                }, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                            position: "absolute",
                            inset: 0,
                            zIndex: 1,
                            opacity: 1 - eventiveProgress * 0.3, // Subtle fade as text animates
                        }, children: [(0, jsx_runtime_1.jsx)(background_gradient_animation_1.BackgroundGradientAnimation, { children: (0, jsx_runtime_1.jsx)("div", { className: "absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl", children: (0, jsx_runtime_1.jsx)("p", { className: "bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20" }) }) }), (0, jsx_runtime_1.jsx)("div", { style: {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    pointerEvents: "none",
                                    zIndex: 2,
                                    overflow: "hidden",
                                }, children: (0, jsx_runtime_1.jsx)(Noise_1.default, { patternSize: 250, patternScaleX: 1, patternScaleY: 1, patternRefreshInterval: 2, patternAlpha: 15 }) })] }), (0, jsx_runtime_1.jsx)(StaggeredMenu_1.default, { position: "right", items: menuItems, socialItems: socialItems, displaySocials: true, displayItemNumbering: true, menuButtonColor: "#EEE8D6", openMenuButtonColor: "#fff", changeMenuColorOnOpen: true, colors: ["#EEE8D6", "#5227ff"], logoUrl: "/whitelogo.svg", accentColor: "#5227ff", onMenuOpen: function () { return console.log("Menu opened"); }, onMenuClose: function () { return console.log("Menu closed"); } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center", style: {
                            zIndex: 10,
                            height: "100vh", // Fixed to viewport height to maintain initial centering
                            top: 0,
                        }, children: (0, jsx_runtime_1.jsx)("div", { className: "text-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-container", style: {
                                    transform: "scale(0.3)",
                                    animation: "zoomIn 1.8s ease-out 0s forwards",
                                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "white-text", style: {
                                            fontFamily: "Anvers, sans-serif",
                                            color: "#EEE8D6",
                                            fontSize: "clamp(4rem, 8vw, 8rem)",
                                            fontWeight: "50",
                                            lineHeight: "1",
                                            margin: "0",
                                            letterSpacing: "0.05em",
                                            // animation: "moveUp 0.8s ease-out 2.5s forwards",
                                        }, children: "WHITE".split("").map(function (letter, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "letter-animate", style: {
                                                display: "inline-block",
                                                fontWeight: "100",
                                                opacity: "0",
                                                transform: "scaleX(0.1)",
                                                animation: "letterReveal 0.8s ease-out ".concat(0.1 * index, "s forwards"),
                                            }, children: letter }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "expanding-rectangle", style: {
                                            width: "0px",
                                            height: "0px",
                                            backgroundColor: "#EEE8D6",
                                            borderRadius: "50px",
                                            margin: "0px auto",
                                            opacity: "0",
                                            // animation: "expandRectangle 0.7s ease-out 2.0s forwards",
                                        } }), (0, jsx_runtime_1.jsxs)("div", { className: "eventive-text", style: {
                                            fontFamily: "Anvers, sans-serif",
                                            color: "#EEE8D6",
                                            fontSize: "clamp(2.5rem, 5vw, 5rem)",
                                            fontWeight: "50",
                                            lineHeight: "1",
                                            margin: "0",
                                            letterSpacing: "0.05em",
                                            // transform: `translateY(${eventiveTranslateY}px) scale(${eventiveScale})`,
                                            opacity: eventiveOpacity,
                                            transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
                                            // animation: "moveDown 0.8s ease-out 2.5s forwards",
                                        }, children: ["EVENTIVE".split("").map(function (letter, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "letter-animate", style: {
                                                    display: "inline-block",
                                                    fontWeight: "100",
                                                    opacity: "0",
                                                    transform: "scaleX(0.1)",
                                                    animation: "letterReveal 0.8s ease-out ".concat(0.6 + 0.1 * index, "s forwards"),
                                                }, children: letter }, index)); }), (0, jsx_runtime_1.jsxs)("div", { style: {
                                                    position: "absolute",
                                                    inset: 0,
                                                    pointerEvents: "none",
                                                    opacity: showSubAnimation ? 1 : 0,
                                                    transition: "opacity 0.5s ease-out",
                                                }, children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                                            position: "absolute",
                                                            // inset: "-10px",
                                                            // background: "transparent",
                                                            // "linear-gradient(45deg, #5227ff, transparent, #5227ff, transparent)",
                                                            // borderRadius: "8px",
                                                            opacity: showSubAnimation ? 0.3 : 0,
                                                            animation: showSubAnimation
                                                                ? "pulse 2s ease-in-out infinite"
                                                                : "none",
                                                            // filter: "blur(8px)",
                                                        } }), (0, jsx_runtime_1.jsx)("div", { style: {
                                                            position: "absolute",
                                                            inset: 0,
                                                            textShadow: showSubAnimation
                                                                ? "0 0 20px rgba(82, 39, 255, 0.5), 0 0 40px rgba(82, 39, 255, 0.3)"
                                                                : "none",
                                                            transition: "text-shadow 0.8s ease-out",
                                                        } })] })] })] }) }) })] }), (0, jsx_runtime_1.jsxs)("section", { style: {
                    height: "800vh",
                    background: 
                    // "linear-gradient(to bottom, #15284B, #000000,#000000, #000000, #000000, #000000)",
                    "linear-gradient(to bottom, #000000, #000000,#000000, #000000, #000000, #000000)",
                    width: "100%",
                    position: "relative",
                }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased", children: [(0, jsx_runtime_1.jsxs)("div", { className: "max-w-2xl mx-auto p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-[25rem] flex items-center justify-center px-4 text-center relative z-10", children: (0, jsx_runtime_1.jsx)(text_hover_effect_1.TextHoverEffect, { text: "EVENTS" }) }), (0, jsx_runtime_1.jsx)("div", { style: { margin: "20px" }, children: (0, jsx_runtime_1.jsx)(Masonry_1.default, { items: items2, ease: "power3.out", duration: 0.6, stagger: 0.05, animateFrom: "bottom", scaleOnHover: true, hoverScale: 0.95, blurToFocus: true, colorShiftOnHover: true }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 pointer-events-none", children: (0, jsx_runtime_1.jsx)(background_beams_1.BackgroundBeams, {}) })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                            // width: "100%",
                            // height: "100%",
                            position: "absolute",
                            top: 1800,
                            // background: "linear-gradient(to bottom, #EEE8D6,#EEE8D6)",
                        }, children: (0, jsx_runtime_1.jsx)(ScrollVelocity_1.default, { texts: ["WHITE EVENTIVE ", "THE CREATIVE WAY TO PLAN"], velocity: 100, className: "custom-scroll-text" }) }), (0, jsx_runtime_1.jsx)(AnimatedContent_1.default, { distance: 200, direction: "vertical", reverse: false, duration: 3.5, ease: "power2.out", initialOpacity: 0, animateOpacity: true, scale: 0.95, threshold: 0.3, delay: 0.2, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                                position: "absolute",
                                top: 1500,
                                // top: 600,
                                left: 0,
                                width: "100%",
                                height: "100vh",
                                zIndex: 10,
                            }, children: [(0, jsx_runtime_1.jsx)(AnimatedContent_1.default, { distance: 50, direction: "horizontal", reverse: true, duration: 1.2, ease: "power2.out", initialOpacity: 0, animateOpacity: true, scale: 0.95, threshold: 0.3, delay: 0, children: (0, jsx_runtime_1.jsx)("p", { style: {
                                            color: "#EEE8D6",
                                            fontFamily: "Aileron, sans-serif",
                                            fontSize: "clamp(1rem, 3vw, 2rem)",
                                            fontWeight: "600",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15em",
                                            margin: "clamp(2rem, 8vw, 8rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
                                            pointerEvents: "none",
                                        }, children: "Professionally executed experiences for top-tier clients like Reliance Jio BP, Birla White, Jio World Garden, Sleepwell, and HDFC Life." }) }), (0, jsx_runtime_1.jsx)(AnimatedContent_1.default, { distance: 50, direction: "horizontal", reverse: true, duration: 1.2, ease: "power2.out", initialOpacity: 0, animateOpacity: true, scale: 0.95, threshold: 0.3, delay: 0, children: (0, jsx_runtime_1.jsx)("p", { style: {
                                            color: "#EEE8D6",
                                            fontFamily: "Aileron, sans-serif",
                                            fontSize: "clamp(1rem, 3vw, 2rem)",
                                            fontWeight: "600",
                                            lineHeight: "1.5",
                                            letterSpacing: "0.15em",
                                            margin: "clamp(1rem, 3vw, 3rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
                                            pointerEvents: "none",
                                        }, children: "With a sharp focus on in-house design and production, the company ensures flawless execution with fast turnaround times, cost-effective solutions, and data-driven campaigns that maximize brand visibility." }) })] }) })] }), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Projects_1.default, {}), (0, jsx_runtime_1.jsx)(Service_1.default, {}), (0, jsx_runtime_1.jsx)(Contact_1.default, {})] }));
}
exports.default = App;
