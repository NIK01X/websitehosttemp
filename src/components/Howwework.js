"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Howwework = Howwework;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var timeline_1 = require("../Animations/Aceternity/timeline");
var gsap_1 = require("gsap");
var ScrollTrigger_1 = require("gsap/ScrollTrigger");
// Register the ScrollTrigger plugin
gsap_1.gsap.registerPlugin(ScrollTrigger_1.ScrollTrigger);
function Howwework() {
    var timelineRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        // Optimized GSAP bottom-to-top fade animation
        if (timelineRef.current) {
            // Set initial state
            gsap_1.gsap.set(timelineRef.current, {
                opacity: 0,
                y: 100, // Start 100px below
                willChange: "transform, opacity",
            });
            // Create scroll trigger for the timeline section
            ScrollTrigger_1.ScrollTrigger.create({
                trigger: timelineRef.current,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play reverse play reverse", // Always trigger on enter/leave
                onEnter: function () {
                    // Reset to initial position first, then animate
                    gsap_1.gsap.set(timelineRef.current, {
                        opacity: 0,
                        y: 100,
                        willChange: "transform, opacity",
                    });
                    gsap_1.gsap.to(timelineRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        onComplete: function () {
                            gsap_1.gsap.set(timelineRef.current, { willChange: "auto" }); // Performance optimization
                        },
                    });
                },
                onLeave: function () {
                    gsap_1.gsap.to(timelineRef.current, {
                        opacity: 0,
                        y: 50, // Slight downward movement on leave
                        duration: 0.8,
                        ease: "power2.in",
                    });
                },
                onEnterBack: function () {
                    // Reset to initial position first, then animate
                    gsap_1.gsap.set(timelineRef.current, {
                        opacity: 0,
                        y: 100,
                        willChange: "transform, opacity",
                    });
                    gsap_1.gsap.to(timelineRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        ease: "power2.out",
                        onComplete: function () {
                            gsap_1.gsap.set(timelineRef.current, { willChange: "auto" }); // Performance optimization
                        },
                    });
                },
                onLeaveBack: function () {
                    gsap_1.gsap.to(timelineRef.current, {
                        opacity: 0,
                        y: 100,
                        duration: 0.8,
                        ease: "power2.in",
                    });
                },
            });
        }
        // Cleanup function for optimization
        return function () {
            ScrollTrigger_1.ScrollTrigger.getAll().forEach(function (trigger) { return trigger.kill(); });
        };
    }, []);
    var data = [
        {
            title: "Briefing",
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { className: "mb-8 text-2xs font-normal text-[#F1F5F1] md:text-2xl dark:text-[#F1F5F1]", children: ["At White Eventive, we understand that one size does not fit all. We approach every project with a clean slate\u2014 starting by understanding our client\u2019s thoughts and ideas. Your unique business needs and context form the foundation upon which we wear our creative heads to reimagine your space and event.", " "] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/templates/startup-1.webp", alt: "startup template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/templates/startup-2.webp", alt: "startup template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/templates/startup-3.webp", alt: "startup template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/templates/startup-4.webp", alt: "startup template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" })] })] })),
        },
        {
            title: "Curation",
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-8 text-2xs font-normal text-[#F1F5F1] md:text-2xl dark:text-[#F1F5F1]", children: "We Curate Experiences That Resonate At White Eventive, we seamlessly align your vision with our expertise\u2014curating every Corner of the event with precision, purpose, and flair. Every detail is crafted to meet your goals , & leave a lasting impression on your audience" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "hero template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/features-section.png", alt: "feature template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "bento template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/cards.png", alt: "cards template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" })] })] })),
        },
        {
            title: "Execution",
            content: ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { className: "mb-8 text-2xs font-normal text-[#F1F5F1] md:text-2xl dark:text-[#F1F5F1]", children: ["We Deliver Seamless Experiences At White Eventive, we manage every step from d\u00E9cor design and schedule planning to production and on-site coordination with a structured, strategic approach. Our method ensures a smooth event flow, so you can relax knowing your vision is in expert hands", " "] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/pro/hero-sections.png", alt: "hero template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/features-section.png", alt: "feature template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/pro/bento-grids.png", alt: "bento template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" }), (0, jsx_runtime_1.jsx)("img", { src: "https://assets.aceternity.com/cards.png", alt: "cards template", width: 500, height: 500, className: "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" })] })] })),
        },
        // {
        //   title: "MICE",
        //   content: (
        //     <div>
        //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //         Launched our premium design system with advanced components and
        //         animations. Focus on user experience and modern web standards.
        //       </p>
        //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //         Implemented cutting-edge technologies including React 18,
        //         TypeScript, and modern CSS frameworks for optimal performance.
        //       </p>
        //       <div className="grid grid-cols-2 gap-4">
        //         <img
        //           src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
        //           alt="design system"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
        //           alt="analytics dashboard"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80"
        //           alt="mobile design"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="data visualization"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //       </div>
        //     </div>
        //   ),
        // },
        // {
        //   title: "Mall Decor",
        //   content: (
        //     <div>
        //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //         Started our journey with innovative web solutions and creative
        //         digital experiences. Building the foundation for next-generation web
        //         applications.
        //       </p>
        //       <div className="mb-8">
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           ✅ Modern responsive layouts
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           ✅ Interactive animations
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           ✅ Cross-platform compatibility
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           ✅ Performance optimization
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           ✅ Accessibility features
        //         </div>
        //       </div>
        //       <div className="grid grid-cols-2 gap-4">
        //         <img
        //           src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="web development"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="coding workspace"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="creative design"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
        //           alt="team collaboration"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //       </div>
        //     </div>
        //   ),
        // },
        // {
        //   title: "Branding",
        //   content: (
        //     <div>
        //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //         Exciting roadmap ahead with AI integration, advanced animations, and
        //         next-generation user experiences. Building the future of web
        //         development.
        //       </p>
        //       <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        //         Exploring new technologies like WebGL, WebAssembly, and progressive
        //         web apps to deliver cutting-edge solutions for our clients.
        //       </p>
        //       <div className="mb-8">
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           🚀 AI-powered design tools
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           🚀 3D web experiences
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           🚀 Advanced micro-interactions
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           🚀 Real-time collaboration tools
        //         </div>
        //         <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
        //           🚀 Voice-controlled interfaces
        //         </div>
        //       </div>
        //       <div className="grid grid-cols-2 gap-4">
        //         <img
        //           src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80"
        //           alt="AI technology"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="3D visualization"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80"
        //           alt="future technology"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //         <img
        //           src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        //           alt="innovation lab"
        //           width={500}
        //           height={500}
        //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        //         />
        //       </div>
        //     </div>
        //   ),
        // },
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "service", className: "pt-0 md:pt-18", style: {
            background: "black",
            minHeight: "100vh",
        }, children: (0, jsx_runtime_1.jsx)("div", { ref: timelineRef, className: "relative w-full", style: {
                background: "black",
                minHeight: "100vh",
            }, children: (0, jsx_runtime_1.jsx)(timeline_1.Timeline, { data: data }) }) }));
}
