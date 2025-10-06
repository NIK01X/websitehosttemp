"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var gsap_1 = require("gsap");
// Premium Project Modal Styles
var projectModalStyles = "\n  /* Ultra-Premium Modal Animations */\n  @keyframes modalBackdropFade {\n    0% { \n      opacity: 0;\n      backdrop-filter: blur(0px);\n    }\n    100% { \n      opacity: 1;\n      backdrop-filter: blur(20px);\n    }\n  }\n  \n  @keyframes modalSlideUp {\n    0% { \n      transform: translateY(100vh) scale(0.8);\n      opacity: 0;\n    }\n    100% { \n      transform: translateY(0) scale(1);\n      opacity: 1;\n    }\n  }\n  \n  @keyframes galleryImageFloat {\n    0%, 100% { \n      transform: translateY(0px) scale(1);\n    }\n    50% { \n      transform: translateY(-5px) scale(1.02);\n    }\n  }\n  \n  @keyframes premiumShimmer {\n    0% {\n      transform: translateX(-100%) rotate(-45deg);\n      opacity: 0;\n    }\n    50% {\n      opacity: 0.6;\n    }\n    100% {\n      transform: translateX(200%) rotate(-45deg);\n      opacity: 0;\n    }\n  }\n  \n  .modal-backdrop {\n    animation: modalBackdropFade 0.4s ease-out forwards;\n  }\n  \n  .modal-content {\n    animation: modalSlideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;\n  }\n  \n  .gallery-image {\n    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n  \n  .gallery-image:hover {\n    transform: scale(1.05);\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  }\n  \n  .premium-glass {\n    background: linear-gradient(135deg, \n      rgba(255, 255, 255, 0.1) 0%, \n      rgba(255, 255, 255, 0.05) 50%, \n      rgba(255, 255, 255, 0.02) 100%);\n    backdrop-filter: blur(20px) saturate(180%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  }\n  \n  .shimmer-effect {\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .shimmer-effect::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);\n    animation: premiumShimmer 3s ease-in-out infinite;\n  }\n  \n  .scroll-smooth {\n    scroll-behavior: smooth;\n  }\n  \n  .scroll-smooth::-webkit-scrollbar {\n    width: 6px;\n  }\n  \n  .scroll-smooth::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n  }\n  \n  .scroll-smooth::-webkit-scrollbar-thumb {\n    background: rgba(238, 232, 214, 0.3);\n    border-radius: 3px;\n  }\n  \n  .scroll-smooth::-webkit-scrollbar-thumb:hover {\n    background: rgba(238, 232, 214, 0.5);\n  }\n";
var ProjectModal = function (_a) {
    var project = _a.project, isOpen = _a.isOpen, onClose = _a.onClose;
    var _b = (0, react_1.useState)(0), selectedImageIndex = _b[0], setSelectedImageIndex = _b[1];
    var modalRef = (0, react_1.useRef)(null);
    var contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (isOpen && project) {
            document.body.style.overflow = "hidden";
            // GSAP entrance animation
            if (contentRef.current) {
                gsap_1.gsap.fromTo(contentRef.current, {
                    y: 100,
                    opacity: 0,
                    scale: 0.9,
                }, {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                });
            }
        }
        else {
            document.body.style.overflow = "unset";
        }
        return function () {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, project]);
    var handleClose = function () {
        if (contentRef.current) {
            gsap_1.gsap.to(contentRef.current, {
                y: 100,
                opacity: 0,
                scale: 0.9,
                duration: 0.4,
                ease: "power2.in",
                onComplete: onClose,
            });
        }
        else {
            onClose();
        }
    };
    var handleBackdropClick = function (e) {
        if (e.target === modalRef.current) {
            handleClose();
        }
    };
    if (!isOpen || !project)
        return null;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: { __html: projectModalStyles } }), (0, jsx_runtime_1.jsx)("div", { ref: modalRef, className: "fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop", style: {
                    background: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(20px)",
                }, onClick: handleBackdropClick, children: (0, jsx_runtime_1.jsxs)("div", { ref: contentRef, className: "relative w-full max-w-6xl max-h-[90vh] modal-content premium-glass rounded-3xl overflow-hidden", style: {
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    }, children: [(0, jsx_runtime_1.jsx)("button", { onClick: handleClose, className: "absolute top-6 right-6 z-10 w-12 h-12 rounded-full premium-glass flex items-center justify-center transition-all duration-300 hover:scale-110 group", style: {
                                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                            }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6 transition-transform duration-300 group-hover:rotate-90", fill: "none", stroke: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "h-full overflow-y-auto scroll-smooth", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative h-96 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("img", { src: project.images[selectedImageIndex], alt: project.title, className: "w-full h-full object-cover transition-all duration-700", style: {
                                                filter: "brightness(0.7) contrast(1.1)",
                                            } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0", style: {
                                                background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                                            } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-8 left-8 right-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "premium-glass rounded-2xl p-6 shimmer-effect", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 mb-3", children: [(0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm font-medium", style: {
                                                                    background: "linear-gradient(135deg, rgba(37, 40, 98, 0.8) 0%, rgba(238, 232, 214, 0.3) 100%)",
                                                                    color: "#EEE8D6",
                                                                }, children: project.category }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm", style: { color: "rgba(238, 232, 214, 0.7)" }, children: project.year })] }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl md:text-4xl font-bold mb-2", style: { color: "#EEE8D6" }, children: project.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", style: { color: "rgba(238, 232, 214, 0.8)" }, children: project.client })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-8 space-y-12", children: [(0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold mb-6", style: { color: "#EEE8D6" }, children: "Project Gallery" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: project.images.map(function (image, index) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setSelectedImageIndex(index); }, className: "gallery-image rounded-xl overflow-hidden aspect-square ".concat(selectedImageIndex === index
                                                            ? "ring-2 ring-[#EEE8D6]"
                                                            : ""), style: {
                                                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
                                                        }, children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: "".concat(project.title, " ").concat(index + 1), className: "w-full h-full object-cover" }) }, index)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("section", { className: "premium-glass rounded-2xl p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4", style: { color: "#EEE8D6" }, children: "About This Project" }), (0, jsx_runtime_1.jsx)("p", { className: "text-base leading-relaxed mb-6", style: { color: "rgba(238, 232, 214, 0.8)" }, children: project.fullDescription || project.description }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-lg font-semibold mb-3", style: { color: "#EEE8D6" }, children: "Project Scope" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-2", children: project.scope.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm", style: {
                                                                            background: "linear-gradient(135deg, rgba(37, 40, 98, 0.3) 0%, rgba(238, 232, 214, 0.1) 100%)",
                                                                            color: "rgba(238, 232, 214, 0.9)",
                                                                            border: "1px solid rgba(238, 232, 214, 0.2)",
                                                                        }, children: item }, index)); }) })] })] }), (0, jsx_runtime_1.jsxs)("section", { className: "premium-glass rounded-2xl p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4", style: { color: "#EEE8D6" }, children: "Project Details" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.7)" }, children: "Client" }), (0, jsx_runtime_1.jsx)("span", { style: { color: "#EEE8D6" }, children: project.client })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.7)" }, children: "Year" }), (0, jsx_runtime_1.jsx)("span", { style: { color: "#EEE8D6" }, children: project.year })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center py-2 border-b border-gray-700", children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.7)" }, children: "Category" }), (0, jsx_runtime_1.jsx)("span", { style: { color: "#EEE8D6" }, children: project.category })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center py-2", children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.7)" }, children: "Images" }), (0, jsx_runtime_1.jsxs)("span", { style: { color: "#EEE8D6" }, children: [project.images.length, " Photos"] })] })] })] })] }), (project.challenges || project.solutions) && ((0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [project.challenges && ((0, jsx_runtime_1.jsxs)("section", { className: "premium-glass rounded-2xl p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4", style: { color: "#EEE8D6" }, children: "Challenges" }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-3", children: project.challenges.map(function (challenge, index) { return ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-start gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-2 h-2 rounded-full mt-2 flex-shrink-0", style: { background: "#EEE8D6" } }), (0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.8)" }, children: challenge })] }, index)); }) })] })), project.solutions && ((0, jsx_runtime_1.jsxs)("section", { className: "premium-glass rounded-2xl p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4", style: { color: "#EEE8D6" }, children: "Solutions" }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-3", children: project.solutions.map(function (solution, index) { return ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-start gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-2 h-2 rounded-full mt-2 flex-shrink-0", style: { background: "#EEE8D6" } }), (0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.8)" }, children: solution })] }, index)); }) })] }))] })), project.testimonial && ((0, jsx_runtime_1.jsx)("section", { className: "premium-glass rounded-2xl p-8 text-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-3xl mx-auto", children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-12 h-12 mx-auto mb-4 opacity-50", fill: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" }) }), (0, jsx_runtime_1.jsxs)("blockquote", { className: "text-xl italic mb-6", style: { color: "#EEE8D6" }, children: ["\"", project.testimonial.text, "\""] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "font-semibold", style: { color: "#EEE8D6" }, children: project.testimonial.author }), (0, jsx_runtime_1.jsx)("div", { className: "text-sm", style: { color: "rgba(238, 232, 214, 0.7)" }, children: project.testimonial.position })] })] }) })), (0, jsx_runtime_1.jsxs)("section", { className: "text-center premium-glass rounded-2xl p-8", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold mb-4", style: { color: "#EEE8D6" }, children: "Ready to Create Something Similar?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-6", style: { color: "rgba(238, 232, 214, 0.8)" }, children: "Let's discuss your vision and bring it to life with the same level of excellence." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [(0, jsx_runtime_1.jsxs)("button", { className: "group relative px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden", style: {
                                                                background: "linear-gradient(135deg, rgba(37, 40, 98, 0.9) 0%, rgba(238, 232, 214, 0.3) 100%)",
                                                                border: "1px solid rgba(238, 232, 214, 0.3)",
                                                                boxShadow: "0 8px 25px rgba(37, 40, 98, 0.3)",
                                                            }, children: [(0, jsx_runtime_1.jsxs)("span", { className: "relative z-10 flex items-center gap-2", children: ["Start Your Project", (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" })] }), (0, jsx_runtime_1.jsx)("button", { className: "px-8 py-3 rounded-xl font-semibold transition-all duration-300 premium-glass", style: { color: "#EEE8D6" }, children: "Contact Us" })] })] })] })] })] }) })] }));
};
exports.default = ProjectModal;
