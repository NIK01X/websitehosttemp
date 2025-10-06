"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
// Premium Project Details Page Styles
var projectDetailsStyles = "\n  /* Page animations */\n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(30px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  @keyframes float {\n    0%, 100% { transform: translateY(0px); }\n    50% { transform: translateY(-10px); }\n  }\n\n  @keyframes shimmer {\n    0% { transform: translateX(-100%); }\n    100% { transform: translateX(100%); }\n  }\n\n  .premium-glass-bg {\n    background: linear-gradient(135deg, \n      rgba(255, 255, 255, 0.08) 0%, \n      rgba(255, 255, 255, 0.04) 50%, \n      rgba(255, 255, 255, 0.02) 100%);\n    backdrop-filter: blur(20px) saturate(180%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n  }\n\n  .gallery-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 1.5rem;\n  }\n\n  .gallery-item {\n    position: relative;\n    overflow: hidden;\n    border-radius: 1rem;\n    aspect-ratio: 16/10;\n    cursor: pointer;\n    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n\n  .gallery-item:hover {\n    transform: scale(1.05) translateY(-5px);\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);\n  }\n\n  .gallery-item img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 0.4s ease;\n  }\n\n  .gallery-item:hover img {\n    transform: scale(1.1);\n  }\n\n  .text-gradient {\n    background: linear-gradient(135deg, #EEE8D6 0%, #252862 50%, #F1F5F1 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  .scroll-smooth-custom {\n    scroll-behavior: smooth;\n  }\n\n  .scroll-smooth-custom::-webkit-scrollbar {\n    width: 8px;\n  }\n\n  .scroll-smooth-custom::-webkit-scrollbar-track {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .scroll-smooth-custom::-webkit-scrollbar-thumb {\n    background: rgba(238, 232, 214, 0.3);\n    border-radius: 4px;\n  }\n\n  .lightbox-overlay {\n    backdrop-filter: blur(20px);\n    background: rgba(0, 0, 0, 0.9);\n  }\n\n  .animate-section {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n\n  .animate-section.visible {\n    animation: fadeInUp 0.8s ease-out forwards;\n  }\n";
// Sample project data - matches the data from Projects.tsx
var projectsData = [
    {
        id: "PRJ001",
        title: "Akhand Bharat",
        category: "Cultural Event",
        description: "A grand cultural celebration showcasing India's rich heritage through immersive experiences, traditional performances, and contemporary art installations.",
        images: [
            "/images/akhand/akhandone.jpg",
            "/images/akhand/akhand2.jpg",
            "/images/akhand/akhand3.jpg",
            "/images/purvankara/img.jpg",
            "/images/tulah/tulah.JPG",
            "/images/yougov/IMG_4429.jpg",
            "/images/bakerdozen/img1.jpg",
            "/images/sleepzone/sz1.JPG",
        ],
        client: "Cultural Foundation",
        year: "2024",
        scope: ["Event Design", "Production", "Cultural Programming"],
        fullDescription: "Akhand Bharat was a monumental cultural celebration that brought together India's diverse heritage under one spectacular event. This grand celebration featured traditional performances, contemporary art installations, and immersive cultural experiences that transported visitors through India's rich history and vibrant present. The event showcased the unity in diversity that defines India, creating an unforgettable journey through time and tradition.",
        challenges: [
            "Coordinating diverse cultural performances from multiple states",
            "Creating authentic experiences while maintaining modern appeal",
            "Managing large crowds while preserving intimate cultural moments",
            "Balancing traditional elements with contemporary presentation",
        ],
        solutions: [
            "Developed modular event design allowing seamless transitions",
            "Implemented advanced crowd management with digital wayfinding",
            "Created hybrid performance spaces honoring tradition and innovation",
            "Established partnerships with cultural institutions across India",
        ],
        results: [
            "Over 50,000 attendees across 3 days",
            "Featured in 15+ national media outlets",
            "98% visitor satisfaction rating",
            "Established as an annual cultural landmark event",
        ],
        testimonial: {
            text: "White Eventive transformed our vision into a breathtaking reality. Their attention to cultural authenticity while creating a modern, engaging experience was exceptional.",
            author: "Dr. Priya Sharma",
            position: "Director, Cultural Foundation",
        },
    },
    {
        id: "PRJ002",
        title: "Purvankara Launch",
        category: "Real Estate",
        description: "Premium property launch event featuring luxury brand positioning, exclusive presentations, and sophisticated networking experiences.",
        images: [
            "/images/purvankara/img.jpg",
            "/images/purvankara/img2.jpg",
            "/images/purvankara/IMG_5187.jpg",
            "/images/purvankara/IMG_5215.jpg",
            "/images/purvankara/IMG_5227.jpg",
        ],
        client: "Purvankara Limited",
        year: "2024",
        scope: ["Brand Launch", "Luxury Events", "Corporate Hospitality"],
        fullDescription: "The Purvankara Launch was a sophisticated real estate event that redefined luxury property presentations. We created an immersive experience that showcased the premium lifestyle and architectural excellence of Purvankara's latest development, combining elegant design with cutting-edge technology to create memorable brand interactions.",
        challenges: [
            "Creating exclusivity while maintaining broad market appeal",
            "Showcasing property features without physical site visits",
            "Managing high-profile guest expectations and networking opportunities",
        ],
        solutions: [
            "Developed virtual reality property tours with premium presentation setups",
            "Created intimate networking zones with personalized concierge services",
            "Implemented luxury brand partnerships for enhanced guest experience",
        ],
        testimonial: {
            text: "The launch event exceeded our expectations. White Eventive created the perfect blend of luxury and accessibility that resonated with our target audience.",
            author: "Rajesh Kumar",
            position: "Marketing Director, Purvankara Group",
        },
    },
    // Add other projects as needed...
];
var ProjectDetails = function () {
    var projectId = (0, react_router_dom_1.useParams)().projectId;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(null), project = _a[0], setProject = _a[1];
    var _b = (0, react_1.useState)(0), selectedImageIndex = _b[0], setSelectedImageIndex = _b[1];
    var _c = (0, react_1.useState)(false), lightboxOpen = _c[0], setLightboxOpen = _c[1];
    var heroRef = (0, react_1.useRef)(null);
    var contentRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        // Find project by ID
        var foundProject = projectsData.find(function (p) { return p.id === projectId; });
        if (foundProject) {
            setProject(foundProject);
        }
        else {
            // Redirect to home if project not found
            navigate("/");
        }
    }, [projectId, navigate]);
    (0, react_1.useEffect)(function () {
        if (!project)
            return;
        // Hero section animation
        if (heroRef.current) {
            gsap_1.gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
        }
        // Content sections animation
        if (contentRef.current) {
            var sections = contentRef.current.querySelectorAll(".animate-section");
            gsap_1.gsap.fromTo(sections, { opacity: 0, y: 30 }, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
            });
        }
    }, [project]);
    var openLightbox = function (index) {
        setSelectedImageIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    };
    var closeLightbox = function () {
        setLightboxOpen(false);
        document.body.style.overflow = "unset";
    };
    var nextImage = function () {
        if (project) {
            setSelectedImageIndex(function (prev) { return (prev + 1) % project.images.length; });
        }
    };
    var prevImage = function () {
        if (project) {
            setSelectedImageIndex(function (prev) { return (prev - 1 + project.images.length) % project.images.length; });
        }
    };
    if (!project) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "min-h-screen flex items-center justify-center bg-black", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 border-4 border-[#EEE8D6] border-t-transparent rounded-full animate-spin mx-auto mb-4" }), (0, jsx_runtime_1.jsx)("p", { style: { color: "#EEE8D6" }, children: "Loading project..." })] }) }));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("style", { dangerouslySetInnerHTML: { __html: projectDetailsStyles } }), (0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-black scroll-smooth-custom", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return navigate("/"); }, className: "fixed top-8 left-8 z-50 px-6 py-3 rounded-xl premium-glass-bg transition-all duration-300 hover:scale-110 group", style: {
                            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                        }, children: (0, jsx_runtime_1.jsxs)("span", { className: "flex items-center gap-2", style: { color: "#EEE8D6" }, children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 19l-7-7m0 0l7-7m-7 7h18" }) }), "Back to Projects"] }) }), (0, jsx_runtime_1.jsxs)("div", { ref: heroRef, className: "relative h-screen overflow-hidden", children: [(0, jsx_runtime_1.jsx)("img", { src: project.images[0], alt: project.title, className: "w-full h-full object-cover", style: { filter: "brightness(0.5) contrast(1.1)" } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0", style: {
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)",
                                } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center max-w-4xl", children: [(0, jsx_runtime_1.jsx)("div", { className: "inline-block mb-6", children: (0, jsx_runtime_1.jsx)("span", { className: "px-4 py-2 rounded-full text-sm font-medium", style: {
                                                    background: "linear-gradient(135deg, rgba(37, 40, 98, 0.8) 0%, rgba(238, 232, 214, 0.3) 100%)",
                                                    color: "#EEE8D6",
                                                }, children: project.category }) }), (0, jsx_runtime_1.jsx)("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight", style: { color: "#EEE8D6" }, children: project.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg md:text-xl mb-8 max-w-2xl mx-auto", style: { color: "rgba(238, 232, 214, 0.9)" }, children: project.description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap items-center justify-center gap-8 text-sm", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: { color: "rgba(238, 232, 214, 0.6)" }, children: "Client" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#EEE8D6" }, className: "font-semibold", children: project.client })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-px h-8 bg-gray-700" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: { color: "rgba(238, 232, 214, 0.6)" }, children: "Year" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#EEE8D6" }, className: "font-semibold", children: project.year })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-px h-8 bg-gray-700" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: { color: "rgba(238, 232, 214, 0.6)" }, children: "Photos" }), (0, jsx_runtime_1.jsx)("div", { style: { color: "#EEE8D6" }, className: "font-semibold", children: project.images.length })] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-2 animate-bounce", children: [(0, jsx_runtime_1.jsx)("span", { style: { color: "rgba(238, 232, 214, 0.7)" }, className: "text-sm", children: "Scroll to explore" }), (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "rgba(238, 232, 214, 0.7)", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 14l-7 7m0 0l-7-7m7 7V3" }) })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { ref: contentRef, className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20", children: [(0, jsx_runtime_1.jsxs)("section", { className: "mb-24 animate-section", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold mb-12 text-center", style: { color: "#EEE8D6" }, children: "Project Gallery" }), (0, jsx_runtime_1.jsx)("div", { className: "gallery-grid", children: project.images.map(function (image, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "gallery-item", onClick: function () { return openLightbox(index); }, children: [(0, jsx_runtime_1.jsx)("img", { src: image, alt: "".concat(project.title, " ").concat(index + 1) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300", style: {
                                                        background: "rgba(0, 0, 0, 0.6)",
                                                    }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-12 h-12", fill: "none", stroke: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" }) }) })] }, index)); }) })] }), (0, jsx_runtime_1.jsx)("section", { className: "mb-24 animate-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-8", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-6", style: { color: "#EEE8D6" }, children: "About This Project" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg leading-relaxed mb-6", style: { color: "rgba(238, 232, 214, 0.85)" }, children: project.fullDescription || project.description }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-semibold mb-4", style: { color: "#EEE8D6" }, children: "Services Provided" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap gap-3", children: project.scope.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("span", { className: "px-4 py-2 rounded-full text-sm font-medium", style: {
                                                                    background: "linear-gradient(135deg, rgba(37, 40, 98, 0.3) 0%, rgba(238, 232, 214, 0.1) 100%)",
                                                                    color: "rgba(238, 232, 214, 0.9)",
                                                                    border: "1px solid rgba(238, 232, 214, 0.2)",
                                                                }, children: item }, index)); }) })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: project.results && ((0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-8", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold mb-6", style: { color: "#EEE8D6" }, children: "Project Results" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: project.results.map(function (result, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1", style: { background: "rgba(52, 199, 89, 0.2)" }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4", fill: "currentColor", style: { color: "#EEE8D6" }, viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-base leading-relaxed", style: { color: "rgba(238, 232, 214, 0.85)" }, children: result })] }, index)); }) })] })) })] }) }), (project.challenges || project.solutions) && ((0, jsx_runtime_1.jsxs)("section", { className: "mb-24 animate-section", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold mb-12 text-center", style: { color: "#EEE8D6" }, children: "Our Approach" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-2 gap-8", children: [project.challenges && ((0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-8", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-3", style: { color: "#EEE8D6" }, children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) }), "Challenges"] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: project.challenges.map(function (challenge, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-4 p-4 rounded-lg", style: {
                                                                background: "rgba(255, 69, 58, 0.1)",
                                                                border: "1px solid rgba(255, 69, 58, 0.2)",
                                                            }, children: [(0, jsx_runtime_1.jsx)("span", { className: "text-lg font-bold", style: { color: "#EEE8D6" }, children: index + 1 }), (0, jsx_runtime_1.jsx)("p", { className: "text-base leading-relaxed", style: { color: "rgba(238, 232, 214, 0.85)" }, children: challenge })] }, index)); }) })] })), project.solutions && ((0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-8", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-2xl font-bold mb-6 flex items-center gap-3", style: { color: "#EEE8D6" }, children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" }) }), "Solutions"] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: project.solutions.map(function (solution, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-4 p-4 rounded-lg", style: {
                                                                background: "rgba(52, 199, 89, 0.1)",
                                                                border: "1px solid rgba(52, 199, 89, 0.2)",
                                                            }, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0", style: { background: "rgba(52, 199, 89, 0.2)" }, children: (0, jsx_runtime_1.jsx)("svg", { className: "w-3 h-3", fill: "currentColor", style: { color: "#EEE8D6" }, viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-base leading-relaxed", style: { color: "rgba(238, 232, 214, 0.85)" }, children: solution })] }, index)); }) })] }))] })] })), project.testimonial && ((0, jsx_runtime_1.jsx)("section", { className: "mb-24 animate-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-12 text-center max-w-4xl mx-auto", children: [(0, jsx_runtime_1.jsx)("svg", { className: "w-12 h-12 mx-auto mb-6 opacity-50", fill: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { d: "M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" }) }), (0, jsx_runtime_1.jsxs)("blockquote", { className: "text-2xl md:text-3xl italic mb-8 leading-relaxed", style: { color: "#EEE8D6" }, children: ["\"", project.testimonial.text, "\""] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-lg font-semibold mb-1", style: { color: "#EEE8D6" }, children: project.testimonial.author }), (0, jsx_runtime_1.jsx)("div", { style: { color: "rgba(238, 232, 214, 0.7)" }, children: project.testimonial.position })] })] }) })), (0, jsx_runtime_1.jsx)("section", { className: "text-center animate-section", children: (0, jsx_runtime_1.jsxs)("div", { className: "premium-glass-bg rounded-3xl p-12", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold mb-6", style: { color: "#EEE8D6" }, children: "Ready to Create Something Similar?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-8 max-w-2xl mx-auto", style: { color: "rgba(238, 232, 214, 0.85)" }, children: "Let's discuss your vision and bring it to life with the same level of excellence and attention to detail." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [(0, jsx_runtime_1.jsxs)("button", { onClick: function () { return navigate("/#contact"); }, className: "group relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 overflow-hidden", style: {
                                                        background: "linear-gradient(135deg, rgba(37, 40, 98, 0.9) 0%, rgba(238, 232, 214, 0.3) 100%)",
                                                        border: "1px solid rgba(238, 232, 214, 0.3)",
                                                        boxShadow: "0 8px 25px rgba(37, 40, 98, 0.3)",
                                                    }, children: [(0, jsx_runtime_1.jsxs)("span", { className: "relative z-10 flex items-center gap-2", children: ["Get in Touch", (0, jsx_runtime_1.jsx)("svg", { className: "w-5 h-5 transition-transform duration-300 group-hover:translate-x-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return navigate("/#projects"); }, className: "px-8 py-4 rounded-xl font-semibold transition-all duration-300 premium-glass-bg", style: { color: "#EEE8D6" }, children: "View More Projects" })] })] }) })] }), lightboxOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay", onClick: closeLightbox, children: [(0, jsx_runtime_1.jsx)("button", { onClick: closeLightbox, className: "absolute top-6 right-6 w-12 h-12 rounded-full premium-glass-bg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) }), (0, jsx_runtime_1.jsx)("button", { onClick: function (e) {
                                    e.stopPropagation();
                                    prevImage();
                                }, className: "absolute left-6 w-12 h-12 rounded-full premium-glass-bg flex items-center justify-center transition-all duration-300 hover:scale-110", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), (0, jsx_runtime_1.jsx)("button", { onClick: function (e) {
                                    e.stopPropagation();
                                    nextImage();
                                }, className: "absolute right-6 w-12 h-12 rounded-full premium-glass-bg flex items-center justify-center transition-all duration-300 hover:scale-110", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "#EEE8D6", viewBox: "0 0 24 24", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) }), (0, jsx_runtime_1.jsx)("img", { src: project.images[selectedImageIndex], alt: "".concat(project.title, " ").concat(selectedImageIndex + 1), className: "max-w-full max-h-[90vh] object-contain rounded-2xl", onClick: function (e) { return e.stopPropagation(); } }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-6 left-1/2 transform -translate-x-1/2", children: (0, jsx_runtime_1.jsxs)("span", { className: "px-4 py-2 rounded-full premium-glass-bg text-sm", style: { color: "#EEE8D6" }, children: [selectedImageIndex + 1, " / ", project.images.length] }) })] }))] })] }));
};
exports.default = ProjectDetails;
