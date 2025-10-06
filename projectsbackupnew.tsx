// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ShinyText from "../shared/animations/ui/ShinyText";
// gsap.registerPlugin(ScrollTrigger);

// // Optimized Professional Theme Styles
// const premiumStyles = `
//    /* Performance-optimized animations */
//    @keyframes subtleFloat {
//      0%, 100% { transform: translateY(0px) translateZ(0); }
//      50% { transform: translateY(-5px) translateZ(0); }
//    }

//    @keyframes gentleGlow {
//      0%, 100% {
//        box-shadow: 0 0 15px rgba(37, 40, 98, 0.2);
//      }
//      50% {
//        box-shadow: 0 0 25px rgba(37, 40, 98, 0.3);
//      }
//    }

//    @keyframes softPulse {
//      0%, 100% {
//        opacity: 0.8;
//        transform: scale(1) translateZ(0);
//      }
//      50% {
//        opacity: 1;
//        transform: scale(1.02) translateZ(0);
//      }
//    }

//    @keyframes fadeInUp {
//      0% {
//        opacity: 0;
//        transform: translateY(20px) translateZ(0);
//      }
//      100% {
//        opacity: 1;
//        transform: translateY(0) translateZ(0);
//      }
//    }

//    /* Performance-first classes */
//    .animate-subtle-float {
//      animation: subtleFloat 4s ease-in-out infinite;
//      will-change: transform;
//    }

//    .animate-gentle-glow {
//      animation: gentleGlow 3s ease-in-out infinite;
//      will-change: box-shadow;
//    }

//    .animate-soft-pulse {
//      animation: softPulse 2s ease-in-out infinite;
//      will-change: opacity, transform;
//    }

//    .animate-fade-in-up {
//      animation: fadeInUp 0.6s ease-out forwards;
//      will-change: opacity, transform;
//    }

//    /* Optimized utility classes */
//    .gpu-layer {
//      transform: translateZ(0);
//      backface-visibility: hidden;
//      perspective: 1000px;
//    }

//    .reduced-motion {
//      animation: none !important;
//      transition: none !important;
//    }

//    /* Professional color scheme */
//    .theme-cream { color: #EEE8D6; }
//    .theme-navy { color: #252862; }
//    .theme-mint { color: #F1F5F1; }
//    .bg-theme-cream { background-color: #EEE8D6; }
//    .bg-theme-navy { background-color: #252862; }
//    .bg-theme-mint { background-color: #F1F5F1; }
//    .border-theme-cream { border-color: #EEE8D6; }
//    .border-theme-navy { border-color: #252862; }
//    .border-theme-mint { border-color: #F1F5F1; }

//    /* Consistent professional gradients */
//    .gradient-primary {
//      background: linear-gradient(135deg, #252862 0%, #EEE8D6 50%, #F1F5F1 100%);
//    }

//    .gradient-subtle {
//      background: linear-gradient(135deg, rgba(37, 40, 98, 0.1) 0%, rgba(238, 232, 214, 0.05) 100%);
//    }

//    .shadow-professional {
//      box-shadow: 0 10px 25px rgba(37, 40, 98, 0.15), 0 5px 10px rgba(37, 40, 98, 0.1);
//    }
//  `;

// interface Project {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
//   images: string[];
//   client: string;
//   year: string;
//   scope: string[];
// }

// const projectsData: Project[] = [
//   {
//     id: "PRJ001",
//     title: "Akhand Bharat",
//     category: "Cultural Event",
//     description:
//       "A grand cultural celebration showcasing India's rich heritage through immersive experiences, traditional performances, and contemporary art installations.",
//     images: [
//       // "/websitehosttemp/images/akhand/akhandone.jpg",
//       "/images/akhand/akhandone.jpg",
//       // "/websitehosttemp/images/akhand/akhand2.jpg",
//       "/images/akhand/akhand2.jpg",
//       // "/websitehosttemp/images/akhand/akhand3.jpg",
//       "/images/akhand/akhand3.jpg",
//     ],
//     client: "Cultural Foundation",
//     year: "2024",
//     scope: ["Event Design", "Production", "Cultural Programming"],
//   },
//   {
//     id: "PRJ002",
//     title: "Purvankara Launch",
//     category: "Real Estate",
//     description:
//       "Premium property launch event featuring luxury brand positioning, exclusive presentations, and sophisticated networking experiences.",
//     images: [
//       // "/websitehosttemp/images/purvankara/img.jpg",
//       "/images/purvankara/img.jpg",
//       // "/websitehosttemp/images/purvankara/img2.jpg",
//       "/images/purvankara/img2.jpg",
//       // "/websitehosttemp/images/purvankara/IMG_5187.jpg",
//       "/images/purvankara/IMG_5187.jpg",
//       // "/websitehosttemp/images/purvankara/IMG_5215.jpg",
//       "/images/purvankara/IMG_5215.jpg",
//     ],
//     client: "Purvankara Limited",
//     year: "2024",
//     scope: ["Brand Launch", "Luxury Events", "Corporate Hospitality"],
//   },
//   {
//     id: "PRJ003",
//     title: "Tulah Fashion Show",
//     category: "Fashion & Lifestyle",
//     description:
//       "High-end fashion runway show featuring cutting-edge designs, dramatic lighting, and immersive brand storytelling experiences.",
//     images: [
//       // "/websitehosttemp/images/tulah/tulah.JPG",
//       "/images/tulah/tulah.JPG",
//       // "/websitehosttemp/images/tulah/tulahtwo.jpg",
//       "/images/tulah/tulahtwo.jpg",
//       // "/websitehosttemp/images/tulah/tulahthree.jpg",
//       "/images/tulah/tulahthree.jpg",
//       // "/websitehosttemp/images/tulah/tulah4.jpg",
//       "/images/tulah/tulah4.jpg",
//     ],
//     client: "Tulah Fashion House",
//     year: "2024",
//     scope: ["Fashion Shows", "Brand Experience", "Creative Direction"],
//   },
//   {
//     id: "PRJ004",
//     title: "YouGov Research Summit",
//     category: "Corporate Conference",
//     description:
//       "International research conference featuring thought leadership sessions, interactive workshops, and networking experiences for industry leaders.",
//     images: [
//       // "/websitehosttemp/images/yougov/IMG_4429.jpg",
//       "/images/yougov/IMG_4429.jpg",
//       // "/websitehosttemp/images/yougov/IMG_4432.jpg",
//       "/images/yougov/IMG_4432.jpg",
//       // "/websitehosttemp/images/yougov/IMG_4449.jpg",
//       "/images/yougov/IMG_4449.jpg",
//     ],
//     client: "YouGov",
//     year: "2024",
//     scope: ["Conference Management", "Corporate Events", "Thought Leadership"],
//   },
//   {
//     id: "PRJ005",
//     title: "Baker's Dozen Activation",
//     category: "Brand Activation",
//     description:
//       "Interactive culinary brand experience featuring live cooking demonstrations, tasting sessions, and community engagement programs.",
//     images: [
//       // "/websitehosttemp/images/bakerdozen/img1.jpg",
//       "/images/bakerdozen/img1.jpg",
//       // "/websitehosttemp/images/bakerdozen/img2.jpg",
//       "/images/bakerdozen/img2.jpg",
//     ],
//     client: "Baker's Dozen",
//     year: "2024",
//     scope: ["Brand Activation", "Culinary Events", "Community Engagement"],
//   },
//   {
//     id: "PRJ006",
//     title: "Sleep Zone Showcase",
//     category: "Product Launch",
//     description:
//       "Innovative product launch event featuring immersive sleep experiences, wellness workshops, and interactive brand demonstrations.",
//     images: [
//       // "/websitehosttemp/images/sleepzone/sz1.JPG",
//       "/images/sleepzone/sz1.JPG",
//       // "/websitehosttemp/images/sleepzone/sz2.JPG",
//       "/images/sleepzone/sz2.JPG",
//     ],
//     client: "Sleep Zone",
//     year: "2024",
//     scope: ["Product Launch", "Wellness Events", "Experiential Marketing"],
//   },
// ];

// const Projects: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     if (!sectionRef.current) return;

//     // Performance detection
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;
//     const isLowEndDevice =
//       navigator.hardwareConcurrency <= 4 ||
//       ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4);
//     const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice;

//     // Apply reduced motion class if needed
//     if (shouldReduceAnimations && sectionRef.current) {
//       sectionRef.current.classList.add("reduced-motion");
//     }

//     // Optimized title animation
//     if (titleRef.current) {
//       if (shouldReduceAnimations) {
//         // Simple fade-in for low-end devices
//         gsap.set(titleRef.current, { opacity: 0 });
//         ScrollTrigger.create({
//           trigger: titleRef.current,
//           start: "top 90%",
//           once: true,
//           onEnter: () => {
//             gsap.to(titleRef.current, {
//               opacity: 1,
//               duration: 0.3,
//               ease: "none",
//             });
//           },
//         });
//       } else {
//         // Enhanced animation for capable devices
//         gsap.set(titleRef.current, {
//           opacity: 0,
//           y: 20,
//           willChange: "transform, opacity",
//         });

//         ScrollTrigger.create({
//           trigger: titleRef.current,
//           start: "top 85%",
//           once: true,
//           onEnter: () => {
//             gsap.to(titleRef.current, {
//               opacity: 1,
//               y: 0,
//               duration: 0.6,
//               ease: "power2.out",
//               onComplete: () =>
//                 gsap.set(titleRef.current, { clearProps: "willChange" }),
//             });
//           },
//         });
//       }
//     }

//     // Optimized project cards animation
//     projectRefs.current.forEach((ref, index) => {
//       if (!ref) return;

//       if (shouldReduceAnimations) {
//         // Simple fade-in for low-end devices
//         gsap.set(ref, { opacity: 0 });
//         ScrollTrigger.create({
//           trigger: ref,
//           start: "top 90%",
//           once: true,
//           onEnter: () => {
//             gsap.to(ref, {
//               opacity: 1,
//               duration: 0.3,
//               delay: index * 0.05,
//               ease: "none",
//             });
//           },
//         });
//       } else {
//         // Enhanced animation for capable devices
//         const isEven = index % 2 === 0;
//         gsap.set(ref, {
//           opacity: 0,
//           x: isEven ? -30 : 30,
//           y: 20,
//           willChange: "transform, opacity",
//         });

//         ScrollTrigger.create({
//           trigger: ref,
//           start: "top 85%",
//           once: true,
//           onEnter: () => {
//             gsap.to(ref, {
//               opacity: 1,
//               x: 0,
//               y: 0,
//               duration: 0.6,
//               delay: index * 0.08,
//               ease: "power2.out",
//               onComplete: () => gsap.set(ref, { clearProps: "willChange" }),
//             });
//           },
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       {/* Inject premium styles */}
//       <style dangerouslySetInnerHTML={{ __html: premiumStyles }} />

//       <section
//         ref={sectionRef}
//         id="projects"
//         className="relative w-full min-h-screen overflow-hidden"
//         style={{
//           background: `
//             radial-gradient(circle at 20% 80%, rgba(37, 40, 98, 0.08) 0%, transparent 50%),
//             radial-gradient(circle at 80% 20%, rgba(238, 232, 214, 0.06) 0%, transparent 50%),
//             linear-gradient(135deg, #F1F5F1 0%, #EEE8D6 100%)
//           `,
//         }}
//       >
//         {/* Optimized Professional Background Effects */}
//         <div className="absolute inset-0 gpu-layer">
//           {/* Subtle gradient orbs - performance optimized */}
//           <div
//             className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-2xl animate-soft-pulse opacity-60"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(37, 40, 98, 0.12) 0%, transparent 70%)",
//             }}
//           />
//           <div
//             className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl animate-soft-pulse opacity-50"
//             style={{
//               background:
//                 "radial-gradient(circle, rgba(238, 232, 214, 0.1) 0%, transparent 70%)",
//               animationDelay: "1s",
//             }}
//           />

//           {/* Minimal grid pattern for texture */}
//           <div
//             className="absolute inset-0 opacity-[0.02]"
//             style={{
//               backgroundImage: `
//               linear-gradient(rgba(37, 40, 98, 0.15) 1px, transparent 1px),
//               linear-gradient(90deg, rgba(37, 40, 98, 0.15) 1px, transparent 1px)
//             `,
//               backgroundSize: "80px 80px",
//             }}
//           />
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
//           {/* Premium Section Title */}
//           <div className="text-center mb-32">
//             <div className="inline-block mb-8">
//               <span className="text-sm font-medium tracking-[0.3em] theme-navy uppercase mb-4 block">
//                 Portfolio Excellence
//               </span>
//               <h2
//                 ref={titleRef}
//                 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.85]"
//                 style={{
//                   fontFamily: "Inter, sans-serif",
//                   letterSpacing: "-0.02em",
//                   color: "#252862",
//                   textShadow: "0 0 40px rgba(37, 40, 98, 0.2)",
//                 }}
//               >
//                 OUR{" "}
//                 <span className="relative inline-block">
//                   <span
//                     className="text-transparent bg-clip-text bg-300% animate-gradient"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #252862 0%, #252862 50%, #F1F5F1 100%)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                     }}
//                   >
//                     <ShinyText text={"PROJECTS"} disabled={false} speed={3} />
//                   </span>
//                   <div
//                     className="absolute -inset-1 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-professional-glow"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, rgba(37, 40, 98, 0.3) 0%, rgba(238, 232, 214, 0.2) 100%)",
//                     }}
//                   />
//                 </span>
//               </h2>
//             </div>
//             <div className="max-w-3xl mx-auto">
//               <p className="theme-navy text-xl leading-relaxed mb-6 opacity-80">
//                 Crafting extraordinary experiences that transcend expectations
//                 and redefine industry standards through innovative design and
//                 meticulous execution.
//               </p>
//               <div
//                 className="w-24 h-px mx-auto"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.5), transparent)",
//                 }}
//               />
//             </div>
//           </div>

//           {/* Projects Alternating Layout */}
//           <div className="space-y-16 lg:space-y-24">
//             {projectsData.map((project, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <div
//                   key={project.id}
//                   ref={(el) => {
//                     projectRefs.current[index] = el;
//                   }}
//                   className={`flex flex-col ${
//                     isEven ? "lg:flex-row" : "lg:flex-row-reverse"
//                   } items-center gap-8 lg:gap-16`}
//                 >
//                   {/* Professional Project Image Section */}
//                   <div className="w-full lg:w-1/2 relative">
//                     {/* Elegant floating elements */}
//                     <div
//                       className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg"
//                       style={{ borderColor: "rgba(37, 40, 98, 0.4)" }}
//                     />
//                     <div
//                       className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg"
//                       style={{ borderColor: "rgba(238, 232, 214, 0.4)" }}
//                     />

//                     <div
//                       className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-professional gpu-layer"
//                       style={{
//                         background: `
//                         linear-gradient(135deg,
//                           rgba(241, 245, 241, 0.8) 0%,
//                           rgba(238, 232, 214, 0.6) 100%
//                         )
//                       `,
//                         border: "1px solid rgba(37, 40, 98, 0.15)",
//                       }}
//                     >
//                       {/* Premium Project Image Gallery */}
//                       <div
//                         className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl"
//                         style={{
//                           contentVisibility: "auto",
//                           containIntrinsicSize: "512px",
//                         }}
//                       >
//                         {/* Premium image grid with enhanced effects */}
//                         <div className="grid grid-cols-2 gap-2 h-full">
//                           {project.images.slice(0, 4).map((image, imgIndex) => (
//                             <div
//                               key={imgIndex}
//                               className={`relative overflow-hidden rounded-xl ${
//                                 imgIndex === 0 && project.images.length === 1
//                                   ? "col-span-2"
//                                   : imgIndex === 0 && project.images.length > 2
//                                   ? "col-span-2"
//                                   : ""
//                               }`}
//                               style={{
//                                 boxShadow:
//                                   "inset 0 0 0 1px rgba(255,255,255,0.1)",
//                               }}
//                             >
//                               <img
//                                 src={image}
//                                 alt={`${project.title} ${imgIndex + 1}`}
//                                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
//                                 loading="lazy"
//                                 decoding="async"
//                                 fetchPriority={imgIndex === 0 ? "high" : "auto"}
//                                 style={{
//                                   filter: "contrast(1.05) saturate(1.1)",
//                                 }}
//                               />
//                               {/* Premium image overlay */}
//                               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//                               {imgIndex === 3 && project.images.length > 4 && (
//                                 <div
//                                   className="absolute inset-0 flex items-center justify-center transition-all duration-500"
//                                   style={{
//                                     background:
//                                       "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(147,51,234,0.3) 100%)",
//                                     backdropFilter: "blur(10px)",
//                                   }}
//                                 >
//                                   <span className="text-white text-xl font-bold tracking-wider">
//                                     +{project.images.length - 4}
//                                   </span>
//                                 </div>
//                               )}
//                             </div>
//                           ))}
//                         </div>

//                         {/* Professional Category Badge */}
//                         <div className="absolute top-4 left-4 rounded-lg px-4 py-2 bg-theme-navy shadow-professional">
//                           <span className="text-sm font-medium tracking-wide theme-mint">
//                             {project.category}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Professional Project Content Section */}
//                   <div className="w-full lg:w-1/2 relative">
//                     <div
//                       className={`${isEven ? "lg:pl-12" : "lg:pr-12"} relative`}
//                     >
//                       {/* Elegant accent line */}
//                       <div
//                         className={`absolute top-0 ${
//                           isEven ? "left-0" : "right-0"
//                         } w-1 h-24 rounded-full opacity-60`}
//                         style={{
//                           background:
//                             "linear-gradient(to bottom, rgba(37, 40, 98, 0.8), rgba(238, 232, 214, 0.6), transparent)",
//                         }}
//                       />

//                       {/* Premium Project Header */}
//                       <div className="flex items-start justify-between mb-8">
//                         <div className="flex-1">
//                           <div className="mb-4">
//                             <span className="text-xs font-medium tracking-[0.2em] theme-navy opacity-70 uppercase mb-2 block">
//                               Featured Work
//                             </span>
//                             <h3
//                               className="text-4xl lg:text-5xl xl:text-6xl font-bold theme-navy mb-4 leading-tight transition-all duration-500"
//                               style={{
//                                 color: "#252862",
//                                 fontFamily: "Inter, sans-serif",
//                                 letterSpacing: "-0.02em",
//                                 textShadow: "0 0 30px rgba(37, 40, 98, 0.2)",
//                               }}
//                               onMouseEnter={(e) => {
//                                 e.currentTarget.style.background =
//                                   "linear-gradient(135deg, #252862 0%, #EEE8D6 50%, #F1F5F1 100%)";
//                                 e.currentTarget.style.webkitBackgroundClip =
//                                   "text";
//                                 e.currentTarget.style.webkitTextFillColor =
//                                   "transparent";
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.currentTarget.style.background = "none";
//                                 e.currentTarget.style.webkitBackgroundClip =
//                                   "unset";
//                                 e.currentTarget.style.webkitTextFillColor =
//                                   "unset";
//                                 e.currentTarget.style.color = "#252862";
//                               }}
//                             >
//                               {project.title}
//                             </h3>
//                           </div>
//                           <div className="flex items-center gap-6 text-gray-400 mb-6">
//                             <div className="flex items-center gap-2">
//                               <div className="w-2 h-2 bg-purple-400 rounded-full" />
//                               <span className="font-medium text-white">
//                                 {project.client}
//                               </span>
//                             </div>
//                             <div className="w-px h-4 bg-gray-600" />
//                             <span className="text-sm tracking-wide">
//                               {project.year}
//                             </span>
//                           </div>
//                         </div>
//                         <div
//                           className="text-xs text-gray-500 opacity-60 font-mono tracking-wider"
//                           style={{
//                             writingMode: "vertical-rl",
//                             textOrientation: "mixed",
//                           }}
//                         >
//                           {project.id}
//                         </div>
//                       </div>

//                       {/* Professional Project Description */}
//                       <div className="mb-10">
//                         <p className="text-xl leading-relaxed mb-6 font-light theme-navy opacity-80">
//                           {project.description}
//                         </p>
//                         <div
//                           className="w-16 h-px"
//                           style={{
//                             background:
//                               "linear-gradient(to right, rgba(37, 40, 98, 0.6), transparent)",
//                           }}
//                         />
//                       </div>

//                       {/* Professional Scope Tags */}
//                       <div className="flex flex-wrap gap-3 mb-12">
//                         {project.scope.map((item, scopeIndex) => (
//                           <span
//                             key={scopeIndex}
//                             className="px-4 py-2 rounded-lg text-sm font-medium theme-navy gradient-subtle border border-theme-navy border-opacity-20"
//                           >
//                             {item}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Professional CTA Button */}
//                       <div className="relative">
//                         <button className="px-8 py-3 rounded-lg font-medium text-base bg-theme-navy theme-mint shadow-professional transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
//                           Explore Project
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Premium Bottom CTA */}
//           <div className="text-center mt-32 relative">
//             {/* Professional separator */}
//             <div className="flex items-center justify-center mb-16">
//               <div
//                 className="w-32 h-px"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.6), transparent)",
//                 }}
//               />
//               <div
//                 className="mx-8 w-3 h-3 rounded-full animate-elegant-pulse"
//                 style={{
//                   background:
//                     "linear-gradient(135deg, #252862 0%, #EEE8D6 100%)",
//                 }}
//               />
//               <div
//                 className="w-32 h-px"
//                 style={{
//                   background:
//                     "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.6), transparent)",
//                 }}
//               />
//             </div>

//             <div className="max-w-4xl mx-auto mb-12">
//               <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight theme-navy">
//                 Ready to create something{" "}
//                 <span
//                   className="text-transparent bg-clip-text"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #252862 0%, #EEE8D6 50%, #F1F5F1 100%)",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   extraordinary
//                 </span>{" "}
//                 together?
//               </h3>
//               <p className="text-xl leading-relaxed max-w-2xl mx-auto theme-navy opacity-70">
//                 Let's transform your vision into a remarkable experience that
//                 captivates and inspires.
//               </p>
//             </div>

//             <div className="relative inline-block">
//               <button className="px-10 py-4 rounded-xl font-semibold text-lg bg-theme-navy theme-mint shadow-professional transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
//                 Start Your Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;
