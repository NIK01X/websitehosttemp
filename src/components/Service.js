"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = Service;
var jsx_runtime_1 = require("react/jsx-runtime");
var comet_card_1 = require("../Animations/Aceternity/comet-card");
var serviceData = [
    {
        id: "SRV1",
        title: "Event Planning",
        description: "Complete event planning and coordination services",
        image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Planning"
    },
    {
        id: "SRV2",
        title: "Corporate Events",
        description: "Professional corporate event management",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Corporate"
    },
    {
        id: "SRV3",
        title: "Wedding Services",
        description: "Elegant wedding planning and execution",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Wedding"
    },
    {
        id: "SRV4",
        title: "Photography",
        description: "Professional event photography services",
        image: "https://images.unsplash.com/photo-1554048612-b6ebae896fb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Media"
    },
    {
        id: "SRV5",
        title: "Venue Management",
        description: "Complete venue setup and management",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Venue"
    },
    {
        id: "SRV6",
        title: "Catering Services",
        description: "Premium catering and hospitality services",
        image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
        category: "Catering"
    }
];
function Service() {
    return ((0, jsx_runtime_1.jsx)("section", { id: "service", className: "w-full min-h-screen bg-black py-20 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-16", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-6xl font-bold text-white mb-6", children: "Our Services" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg text-gray-300 max-w-2xl mx-auto", children: "Comprehensive event solutions designed to create unforgettable experiences" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12", children: serviceData.map(function (service) { return ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)(comet_card_1.CometCard, { children: (0, jsx_runtime_1.jsxs)("div", { className: "w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4", style: {
                                    transformStyle: "preserve-3d",
                                    transform: "none",
                                    opacity: 1,
                                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "mx-2 flex-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative mt-2 aspect-[4/3] w-full", children: [(0, jsx_runtime_1.jsx)("img", { loading: "lazy", className: "absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover", alt: service.title, src: service.image, style: {
                                                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                                        opacity: 1,
                                                    } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1", children: (0, jsx_runtime_1.jsx)("span", { className: "text-xs font-medium text-white", children: service.category }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex flex-col space-y-2 p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-semibold text-white", children: service.title }), (0, jsx_runtime_1.jsxs)("div", { className: "text-xs text-gray-400 opacity-75", children: ["#", service.id] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-300 leading-relaxed", children: service.description }), (0, jsx_runtime_1.jsx)("div", { className: "pt-2", children: (0, jsx_runtime_1.jsx)("button", { className: "w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm", children: "Learn More" }) })] })] }) }) }, service.id)); }) })] }) }));
}
