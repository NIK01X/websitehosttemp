import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "../shared/animations/ui/ShinyText";

gsap.registerPlugin(ScrollTrigger);

// Insanely Good Professional Theme Styles
const premiumStyles = `
   /* Ultra-Premium Background Animations */
   @keyframes etherealFloat {
     0%, 100% { 
       transform: translateY(0px) translateX(0px) rotate(0deg) scale(1) translateZ(0); 
       opacity: 0.4;
     }
     25% { 
       transform: translateY(-20px) translateX(15px) rotate(90deg) scale(1.1) translateZ(0); 
       opacity: 0.7;
     }
     50% { 
       transform: translateY(-10px) translateX(-10px) rotate(180deg) scale(0.9) translateZ(0); 
       opacity: 1;
     }
     75% { 
       transform: translateY(-30px) translateX(20px) rotate(270deg) scale(1.05) translateZ(0); 
       opacity: 0.6;
     }
   }
   
   @keyframes liquidMorph {
     0%, 100% {
       border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
       transform: rotate(0deg) scale(1);
       filter: blur(40px) hue-rotate(0deg);
     }
     25% {
       border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
       transform: rotate(90deg) scale(1.2);
       filter: blur(35px) hue-rotate(90deg);
     }
     50% {
       border-radius: 50% 60% 30% 60% / 60% 40% 60% 40%;
       transform: rotate(180deg) scale(0.8);
       filter: blur(45px) hue-rotate(180deg);
     }
     75% {
       border-radius: 60% 40% 60% 40% / 30% 60% 40% 70%;
       transform: rotate(270deg) scale(1.1);
       filter: blur(38px) hue-rotate(270deg);
     }
   }
   
   @keyframes particleStream {
     0% {
       transform: translateY(100vh) translateX(-50px) scale(0) rotate(0deg);
       opacity: 0;
     }
     5% {
       opacity: 1;
       transform: translateY(95vh) translateX(-40px) scale(1) rotate(45deg);
     }
     50% {
       opacity: 0.8;
       transform: translateY(50vh) translateX(0px) scale(1.2) rotate(180deg);
     }
     95% {
       opacity: 0.3;
       transform: translateY(5vh) translateX(40px) scale(0.8) rotate(315deg);
     }
     100% {
       transform: translateY(-5vh) translateX(50px) scale(0) rotate(360deg);
       opacity: 0;
     }
   }
   
   @keyframes lightRay {
     0% {
       transform: translateX(-100%) skewX(-20deg) scaleY(0.5);
       opacity: 0;
     }
     50% {
       opacity: 0.8;
       transform: translateX(0%) skewX(-20deg) scaleY(1);
     }
     100% {
       transform: translateX(100%) skewX(-20deg) scaleY(0.5);
       opacity: 0;
     }
   }
   
   @keyframes orbitalMotion {
     0% {
       transform: rotate(0deg) translateX(200px) rotate(0deg);
       opacity: 0.3;
     }
     25% {
       opacity: 0.8;
     }
     50% {
       transform: rotate(180deg) translateX(200px) rotate(-180deg);
       opacity: 1;
     }
     75% {
       opacity: 0.6;
     }
     100% {
       transform: rotate(360deg) translateX(200px) rotate(-360deg);
       opacity: 0.3;
     }
   }
   
   @keyframes gradient {
     0% { background-position: 0% 50%; }
     25% { background-position: 100% 0%; }
     50% { background-position: 100% 100%; }
     75% { background-position: 0% 100%; }
     100% { background-position: 0% 50%; }
   }
   
   @keyframes breathe {
     0%, 100% { 
       transform: scale(1) translateZ(0);
       filter: brightness(1) contrast(1);
     }
     50% { 
       transform: scale(1.05) translateZ(0);
       filter: brightness(1.1) contrast(1.05);
     }
   }
   
   @keyframes shimmerWave {
     0% {
       transform: translateX(-100%) translateY(-50%) rotate(-10deg);
       opacity: 0;
     }
     50% {
       opacity: 1;
     }
     100% {
       transform: translateX(200%) translateY(50%) rotate(10deg);
       opacity: 0;
     }
   }
   
   /* Ultra-Premium Animation Classes */
   .animate-ethereal-float {
     animation: etherealFloat 12s ease-in-out infinite;
     will-change: transform, opacity;
   }
   
   .animate-liquid-morph {
     animation: liquidMorph 15s ease-in-out infinite;
     will-change: border-radius, transform, filter;
   }
   
   .animate-particle-stream {
     animation: particleStream 8s linear infinite;
     will-change: transform, opacity;
   }
   
   .animate-light-ray {
     animation: lightRay 4s ease-in-out infinite;
     will-change: transform, opacity;
   }
   
   .animate-orbital-motion {
     animation: orbitalMotion 20s linear infinite;
     will-change: transform, opacity;
   }
   
   .animate-breathe {
     animation: breathe 6s ease-in-out infinite;
     will-change: transform, filter;
   }
   
   .animate-shimmer-wave {
     animation: shimmerWave 3s ease-in-out infinite;
     will-change: transform, opacity;
   }
   
   .animate-fade-in-up {
     animation: fadeInUp 0.6s ease-out forwards;
     will-change: opacity, transform;
   }
   
   /* Optimized utility classes */
   .gpu-layer {
     transform: translateZ(0);
     backface-visibility: hidden;
     perspective: 1000px;
   }
   
   .reduced-motion {
     animation: none !important;
     transition: none !important;
   }
   
   /* Professional color scheme */
   .theme-cream { color: #EEE8D6; }
   .theme-navy { color: #252862; }
   .theme-mint { color: #F1F5F1; }
   .bg-theme-cream { background-color: #EEE8D6; }
   .bg-theme-navy { background-color: #252862; }
   .bg-theme-mint { background-color: #F1F5F1; }
   .border-theme-cream { border-color: #EEE8D6; }
   .border-theme-navy { border-color: #252862; }
   .border-theme-mint { border-color: #F1F5F1; }
   
   /* Consistent professional gradients */
   .gradient-primary {
     background: linear-gradient(135deg, #252862 0%, #EEE8D6 50%, #F1F5F1 100%);
   }
   
   .gradient-subtle {
     background: linear-gradient(135deg, rgba(37, 40, 98, 0.1) 0%, rgba(238, 232, 214, 0.05) 100%);
   }
   
  .shadow-professional {
    box-shadow: 0 10px 25px rgba(37, 40, 98, 0.15), 0 5px 10px rgba(37, 40, 98, 0.1);
  }
  
  /* Scroll Stack Animation Styles */
  .scroll-stack-container {
    position: relative;
    z-index: 10;
  }
  
  .scroll-stack-section {
    transition: transform 0.1s ease-out, box-shadow 0.1s ease-out, border-radius 0.1s ease-out;
    transform-origin: center top;
  }
  
  .scroll-stack-section.stacking {
    transform: translateY(-50px) scale(0.98);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    z-index: 30;
  }
  
  .scroll-stack-section.stacked {
    transform: translateY(-100px) scale(0.95);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    z-index: 30;
  }
 `;

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  year: string;
  scope: string[];
  // Additional details for modal
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  testimonial?: {
    text: string;
    author: string;
    position: string;
  };
}

const projectsData: Project[] = [
  {
    id: "PRJ001",
    title: "Akhand Bharat",
    category: "Cultural Event",
    description:
      "A grand cultural celebration showcasing India's rich heritage through immersive experiences, traditional performances, and contemporary art installations.",
    images: [
      // "/websitehosttemp/images/akhand/akhandone.jpg",
      "/images/akhand/akhandone.jpg",
      // "/websitehosttemp/images/akhand/akhand2.jpg",
      "/images/akhand/akhand2.jpg",
      // "/websitehosttemp/images/akhand/akhand3.jpg",
      "/images/akhand/akhand3.jpg",
    ],
    client: "Cultural Foundation",
    year: "2024",
    scope: ["Event Design", "Production", "Cultural Programming"],
    fullDescription:
      "Akhand Bharat was a monumental cultural celebration that brought together India's diverse heritage under one spectacular event. This grand celebration featured traditional performances, contemporary art installations, and immersive cultural experiences that transported visitors through India's rich history and vibrant present.",
    challenges: [
      "Coordinating diverse cultural performances from multiple states",
      "Creating authentic experiences while maintaining modern appeal",
      "Managing large crowds while preserving intimate cultural moments",
    ],
    solutions: [
      "Developed modular event design allowing seamless transitions",
      "Implemented advanced crowd management with digital wayfinding",
      "Created hybrid performance spaces honoring tradition and innovation",
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
    description:
      "Premium property launch event featuring luxury brand positioning, exclusive presentations, and sophisticated networking experiences.",
    images: [
      "/websitehosttemp/images/purvankara/img.jpg",
      // "/images/purvankara/img.jpg",
      "/websitehosttemp/images/purvankara/img2.jpg",
      // "/images/purvankara/img2.jpg",
      "/websitehosttemp/images/purvankara/IMG_5187.jpg",
      // "/images/purvankara/IMG_5187.jpg",
      "/websitehosttemp/images/purvankara/IMG_5215.jpg",
      // "/images/purvankara/IMG_5215.jpg",
    ],
    client: "Purvankara Limited",
    year: "2024",
    scope: ["Brand Launch", "Luxury Events", "Corporate Hospitality"],
    fullDescription:
      "The Purvankara Launch was a sophisticated real estate event that redefined luxury property presentations. We created an immersive experience that showcased the premium lifestyle and architectural excellence of Purvankara's latest development, combining elegant design with cutting-edge technology to create memorable brand interactions.",
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
  {
    id: "PRJ003",
    title: "Tulah Fashion Show",
    category: "Fashion & Lifestyle",
    description:
      "High-end fashion runway show featuring cutting-edge designs, dramatic lighting, and immersive brand storytelling experiences.",
    images: [
      "/websitehosttemp/images/tulah/tulah.JPG",
      // "/images/tulah/tulah.JPG",
      "/websitehosttemp/images/tulah/tulahtwo.jpg",
      // "/images/tulah/tulahtwo.jpg",
      "/websitehosttemp/images/tulah/tulahthree.jpg",
      // "/images/tulah/tulahthree.jpg",
      "/websitehosttemp/images/tulah/tulah4.jpg",
      // "/images/tulah/tulah4.jpg",
    ],
    client: "Tulah Fashion House",
    year: "2024",
    scope: ["Fashion Shows", "Brand Experience", "Creative Direction"],
  },
  {
    id: "PRJ004",
    title: "YouGov Research Summit",
    category: "Corporate Conference",
    description:
      "International research conference featuring thought leadership sessions, interactive workshops, and networking experiences for industry leaders.",
    images: [
      "/websitehosttemp/images/yougov/IMG_4429.jpg",
      // "/images/yougov/IMG_4429.jpg",
      "/websitehosttemp/images/yougov/IMG_4432.jpg",
      // "/images/yougov/IMG_4432.jpg",
      "/websitehosttemp/images/yougov/IMG_4449.jpg",
      // "/images/yougov/IMG_4449.jpg",
    ],
    client: "YouGov",
    year: "2024",
    scope: ["Conference Management", "Corporate Events", "Thought Leadership"],
  },
  {
    id: "PRJ005",
    title: "Baker's Dozen Activation",
    category: "Brand Activation",
    description:
      "Interactive culinary brand experience featuring live cooking demonstrations, tasting sessions, and community engagement programs.",
    images: [
      "/websitehosttemp/images/bakerdozen/img1.jpg",
      // "/images/bakerdozen/img1.jpg",
      "/websitehosttemp/images/bakerdozen/img2.jpg",
      // "/images/bakerdozen/img2.jpg",
    ],
    client: "Baker's Dozen",
    year: "2024",
    scope: ["Brand Activation", "Culinary Events", "Community Engagement"],
  },
  {
    id: "PRJ006",
    title: "Sleep Zone Showcase",
    category: "Product Launch",
    description:
      "Innovative product launch event featuring immersive sleep experiences, wellness workshops, and interactive brand demonstrations.",
    images: [
      "/websitehosttemp/images/sleepzone/sz1.JPG",
      // "/images/sleepzone/sz1.JPG",
      "/websitehosttemp/images/sleepzone/sz2.JPG",
      // "/images/sleepzone/sz2.JPG",
    ],
    client: "Sleep Zone",
    year: "2024",
    scope: ["Product Launch", "Wellness Events", "Experiential Marketing"],
  },
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Performance detection
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isLowEndDevice =
      navigator.hardwareConcurrency <= 4 ||
      ((navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4);
    const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice;

    // Apply reduced motion class if needed
    if (shouldReduceAnimations && sectionRef.current) {
      sectionRef.current.classList.add("reduced-motion");
    }

    // Optimized title animation
    if (titleRef.current) {
      if (shouldReduceAnimations) {
        // Simple fade-in for low-end devices
        gsap.set(titleRef.current, { opacity: 0 });
        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              duration: 0.3,
              ease: "none",
            });
          },
        });
      } else {
        // Enhanced animation for capable devices
        gsap.set(titleRef.current, {
          opacity: 0,
          y: 20,
          willChange: "transform, opacity",
        });

        ScrollTrigger.create({
          trigger: titleRef.current,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              onComplete: () =>
                gsap.set(titleRef.current, { clearProps: "willChange" }),
            });
          },
        });
      }
    }

    // Optimized project cards animation
    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;

      if (shouldReduceAnimations) {
        // Simple fade-in for low-end devices
        gsap.set(ref, { opacity: 0 });
        ScrollTrigger.create({
          trigger: ref,
          start: "top 90%",
          once: true,
          onEnter: () => {
            gsap.to(ref, {
              opacity: 1,
              duration: 0.3,
              delay: index * 0.05,
              ease: "none",
            });
          },
        });
      } else {
        // Enhanced animation for capable devices
        const isEven = index % 2 === 0;
        gsap.set(ref, {
          opacity: 0,
          x: isEven ? -30 : 30,
          y: 20,
          willChange: "transform, opacity",
        });

        ScrollTrigger.create({
          trigger: ref,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(ref, {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.6,
              delay: index * 0.08,
              ease: "power2.out",
              onComplete: () => gsap.set(ref, { clearProps: "willChange" }),
            });
          },
        });
      }
    });

    // Services section stacking animation
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      ScrollTrigger.create({
        trigger: servicesSection,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(servicesSection, {
            y: -progress * 100,
            scale: 1 - progress * 0.05,
            borderRadius: progress * 20,
            boxShadow: `0 ${progress * 20}px ${progress * 40}px rgba(0,0,0,${
              progress * 0.3
            })`,
            zIndex: 30,
          });
        },
        onLeave: () => {
          gsap.set(servicesSection, {
            y: -100,
            scale: 0.95,
            borderRadius: 20,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            zIndex: 30,
          });
        },
      });

      // Projects section scaling when Services stacks
      ScrollTrigger.create({
        trigger: servicesSection,
        start: "bottom bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(sectionRef.current, {
            scale: 1 - progress * 0.05,
            opacity: 1 - progress * 0.2,
            filter: `blur(${progress * 2}px)`,
          });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Inject premium styles */}
      <style dangerouslySetInnerHTML={{ __html: premiumStyles }} />

      <section
        ref={sectionRef}
        id="projects"
        className="relative w-full min-h-screen overflow-hidden sticky top-0 z-20"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 50% 10%, rgba(236, 72, 153, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 10% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 55%),
            radial-gradient(circle at 90% 90%, rgba(245, 158, 11, 0.04) 0%, transparent 45%),
            linear-gradient(135deg, 
              rgba(241, 245, 241, 0.95) 0%, 
              rgba(248, 250, 252, 0.9) 25%,
              rgba(238, 232, 214, 0.85) 50%,
              rgba(241, 245, 241, 0.9) 75%,
              rgba(238, 232, 214, 0.95) 100%
            )
          `,
        }}
      >
        {/* INSANELY GOOD Background Effects System */}
        <div className="absolute inset-0 gpu-layer overflow-hidden">
          {/* Liquid Morphing Orbs with Dynamic Colors */}
          <div
            className="absolute top-1/6 left-1/6 w-96 h-96 animate-liquid-morph animate-ethereal-float opacity-30"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(59, 130, 246, 0.3) 0%, 
                  rgba(139, 92, 246, 0.2) 25%,
                  rgba(236, 72, 153, 0.25) 50%,
                  rgba(245, 158, 11, 0.15) 75%,
                  transparent 100%
                )
              `,
              filter: "blur(40px)",
            }}
          />

          <div
            className="absolute bottom-1/5 right-1/5 w-80 h-80 animate-liquid-morph animate-ethereal-float opacity-25"
            style={{
              background: `
                radial-gradient(ellipse at 70% 70%, 
                  rgba(16, 185, 129, 0.25) 0%, 
                  rgba(59, 130, 246, 0.2) 30%,
                  rgba(139, 92, 246, 0.15) 60%,
                  transparent 100%
                )
              `,
              filter: "blur(35px)",
              animationDelay: "4s",
              animationDirection: "reverse",
            }}
          />

          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] animate-liquid-morph opacity-20"
            style={{
              background: `
                radial-gradient(ellipse at center, 
                  rgba(236, 72, 153, 0.2) 0%, 
                  rgba(245, 158, 11, 0.15) 40%,
                  rgba(16, 185, 129, 0.1) 70%,
                  transparent 100%
                )
              `,
              filter: "blur(50px)",
              animationDelay: "8s",
            }}
          />

          {/* Floating Particle Stream System */}
          <div
            className="absolute top-0 left-1/6 w-3 h-3 rounded-full animate-particle-stream opacity-60"
            style={{
              background: "linear-gradient(45deg, #3B82F6, #8B5CF6)",
              animationDelay: "0s",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          />
          <div
            className="absolute top-0 left-1/3 w-2 h-2 rounded-full animate-particle-stream opacity-70"
            style={{
              background: "linear-gradient(45deg, #EC4899, #F59E0B)",
              animationDelay: "2s",
              boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
            }}
          />
          <div
            className="absolute top-0 left-1/2 w-2.5 h-2.5 rounded-full animate-particle-stream opacity-50"
            style={{
              background: "linear-gradient(45deg, #10B981, #3B82F6)",
              animationDelay: "4s",
              boxShadow: "0 0 18px rgba(16, 185, 129, 0.5)",
            }}
          />
          <div
            className="absolute top-0 left-2/3 w-1.5 h-1.5 rounded-full animate-particle-stream opacity-80"
            style={{
              background: "linear-gradient(45deg, #8B5CF6, #EC4899)",
              animationDelay: "6s",
              boxShadow: "0 0 12px rgba(139, 92, 246, 0.5)",
            }}
          />
          <div
            className="absolute top-0 left-5/6 w-2 h-2 rounded-full animate-particle-stream opacity-65"
            style={{
              background: "linear-gradient(45deg, #F59E0B, #10B981)",
              animationDelay: "1s",
              boxShadow: "0 0 16px rgba(245, 158, 11, 0.5)",
            }}
          />

          {/* Orbital Motion Elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 animate-orbital-motion opacity-40">
            <div
              className="w-full h-full rounded-full animate-breathe"
              style={{
                background: "radial-gradient(circle, #3B82F6, #8B5CF6)",
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
              }}
            />
          </div>
          <div
            className="absolute bottom-1/3 right-1/3 w-3 h-3 animate-orbital-motion opacity-50"
            style={{ animationDelay: "10s", animationDirection: "reverse" }}
          >
            <div
              className="w-full h-full rounded-full animate-breathe"
              style={{
                background: "radial-gradient(circle, #EC4899, #F59E0B)",
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.6)",
              }}
            />
          </div>

          {/* Shimmer Wave Overlays */}
          <div
            className="absolute inset-0 animate-shimmer-wave opacity-8"
            style={{
              background:
                "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)",
              animationDelay: "2s",
            }}
          />

          {/* Advanced Grid Pattern with Depth */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                linear-gradient(45deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px, 60px 60px, 120px 120px, 120px 120px",
            }}
          />

          {/* Premium Border Effects */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 via-purple-400 via-pink-400 to-transparent opacity-30 animate-shimmer-wave" />
          <div
            className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 via-blue-400 via-purple-400 to-transparent opacity-25 animate-shimmer-wave"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
          {/* Premium Section Title */}
          <div className="text-center mb-32">
            <div className="inline-block mb-8">
              <span className="text-sm font-medium tracking-[0.3em] theme-navy uppercase mb-4 block">
                Portfolio Excellence
              </span>
              <h2
                ref={titleRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.85]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#252862",
                  textShadow: "0 0 40px rgba(37, 40, 98, 0.2)",
                }}
              >
                OUR{" "}
                <span className="relative inline-block">
                  <span
                    className="text-transparent bg-clip-text bg-300% animate-gradient"
                    style={{
                      background:
                        "linear-gradient(135deg, #252862 0%, #252862 50%, #F1F5F1 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    <ShinyText text={"PROJECTS"} disabled={false} speed={3} />
                  </span>
                  <div
                    className="absolute -inset-1 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-professional-glow"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37, 40, 98, 0.3) 0%, rgba(238, 232, 214, 0.2) 100%)",
                    }}
                  />
                </span>
              </h2>
            </div>
            {/* <div className="max-w-3xl mx-auto"> */}
            {/* <p className="theme-navy text-xl leading-relaxed mb-6 opacity-80">
                Crafting extraordinary experiences that transcend expectations
                and redefine industry standards through innovative design and
                meticulous execution.
              </p> */}
            <div
              className="w-24 h-px mx-auto"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.5), transparent)",
              }}
            />
          </div>
          {/* </div> */}

          {/* Projects Alternating Layout */}
          <div className="space-y-16 lg:space-y-24">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-8 lg:gap-16`}
                >
                  {/* Professional Project Image Section */}
                  <div className="w-full lg:w-1/2 relative">
                    {/* Elegant floating elements */}
                    <div
                      className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg"
                      style={{ borderColor: "rgba(37, 40, 98, 0.4)" }}
                    />
                    <div
                      className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg"
                      style={{ borderColor: "rgba(238, 232, 214, 0.4)" }}
                    />

                    <div
                      className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-professional gpu-layer"
                      style={{
                        background: `
                        linear-gradient(135deg, 
                          rgba(241, 245, 241, 0.8) 0%, 
                          rgba(238, 232, 214, 0.6) 100%
                        )
                      `,
                        border: "1px solid rgba(37, 40, 98, 0.15)",
                      }}
                    >
                      {/* Premium Project Image Gallery */}
                      <div
                        className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl"
                        style={{
                          contentVisibility: "auto",
                          containIntrinsicSize: "512px",
                        }}
                      >
                        {/* Premium image grid with enhanced effects */}
                        <div className="grid grid-cols-2 gap-2 h-full">
                          {project.images.slice(0, 4).map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`relative overflow-hidden rounded-xl ${
                                imgIndex === 0 && project.images.length === 1
                                  ? "col-span-2"
                                  : imgIndex === 0 && project.images.length > 2
                                  ? "col-span-2"
                                  : ""
                              }`}
                              style={{
                                boxShadow:
                                  "inset 0 0 0 1px rgba(255,255,255,0.1)",
                              }}
                            >
                              <img
                                src={image}
                                alt={`${project.title} ${imgIndex + 1}`}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110"
                                loading="lazy"
                                decoding="async"
                                fetchPriority={imgIndex === 0 ? "high" : "auto"}
                                style={{
                                  filter: "contrast(1.05) saturate(1.1)",
                                }}
                              />
                              {/* Premium image overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                              {imgIndex === 3 && project.images.length > 4 && (
                                <div
                                  className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(147,51,234,0.3) 100%)",
                                    backdropFilter: "blur(10px)",
                                  }}
                                >
                                  <span className="text-white text-xl font-bold tracking-wider">
                                    +{project.images.length - 4}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Professional Category Badge */}
                        <div
                          className="absolute top-4 left-4 rounded-lg px-4 py-2 shadow-professional"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <span
                            className="text-sm font-semibold tracking-wide"
                            style={{
                              color: "#F8FAFC",
                              textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
                            }}
                          >
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Project Content Section */}
                  <div className="w-full lg:w-1/2 relative">
                    <div
                      className={`${isEven ? "lg:pl-12" : "lg:pr-12"} relative`}
                    >
                      {/* Elegant accent line */}
                      <div
                        className={`absolute top-0 ${
                          isEven ? "left-0" : "right-0"
                        } w-1 h-24 rounded-full opacity-60`}
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(37, 40, 98, 0.8), rgba(238, 232, 214, 0.6), transparent)",
                        }}
                      />

                      {/* Premium Project Header */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="flex-1">
                          <div className="mb-4">
                            <span className="text-xs font-medium tracking-[0.2em] theme-navy opacity-70 uppercase mb-2 block">
                              Featured Work
                            </span>
                            <h3
                              className="text-4xl lg:text-5xl xl:text-6xl font-bold theme-navy mb-4 leading-tight transition-all duration-500"
                              style={{
                                color: "#252862",
                                fontFamily: "Inter, sans-serif",
                                letterSpacing: "-0.02em",
                                textShadow: "0 0 30px rgba(37, 40, 98, 0.2)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background =
                                  "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%)";
                                e.currentTarget.style.webkitBackgroundClip =
                                  "text";
                                e.currentTarget.style.webkitTextFillColor =
                                  "transparent";
                                e.currentTarget.style.backgroundSize =
                                  "200% 200%";
                                e.currentTarget.style.animation =
                                  "gradient 3s ease infinite";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = "none";
                                e.currentTarget.style.webkitBackgroundClip =
                                  "unset";
                                e.currentTarget.style.webkitTextFillColor =
                                  "unset";
                                e.currentTarget.style.backgroundSize =
                                  "100% 100%";
                                e.currentTarget.style.animation = "none";
                                e.currentTarget.style.color = "#252862";
                              }}
                            >
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-6 text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full" />
                              <span className="font-medium text-white">
                                {project.client}
                              </span>
                            </div>
                            <div className="w-px h-4 bg-gray-600" />
                            <span className="text-sm tracking-wide">
                              {project.year}
                            </span>
                          </div>
                        </div>
                        <div
                          className="text-xs text-gray-500 opacity-60 font-mono tracking-wider"
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                          }}
                        >
                          {project.id}
                        </div>
                      </div>

                      {/* Professional Project Description */}
                      <div className="mb-10">
                        <p className="text-xl leading-relaxed mb-6 font-light theme-navy opacity-80">
                          {project.description}
                        </p>
                        <div
                          className="w-16 h-px"
                          style={{
                            background:
                              "linear-gradient(to right, rgba(37, 40, 98, 0.6), transparent)",
                          }}
                        />
                      </div>

                      {/* Professional Scope Tags */}
                      <div className="flex flex-wrap gap-3 mb-12">
                        {project.scope.map((item, scopeIndex) => (
                          <span
                            key={scopeIndex}
                            className="px-4 py-2 rounded-lg text-sm font-medium theme-navy gradient-subtle border border-theme-navy border-opacity-20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Professional CTA Button */}
                      <div className="relative">
                        <button
                          onClick={() =>
                            console.log("Explore project:", project.title)
                          }
                          className="px-8 py-3 rounded-lg font-medium text-base bg-theme-navy theme-mint shadow-professional transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] group"
                        >
                          <span className="flex items-center gap-2">
                            Explore Project
                            <svg
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Bottom CTA */}
          <div className="text-center mt-32 relative">
            {/* Professional separator */}
            <div className="flex items-center justify-center mb-16">
              <div
                className="w-32 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.6), transparent)",
                }}
              />
              <div
                className="mx-8 w-3 h-3 rounded-full animate-elegant-pulse"
                style={{
                  background:
                    "linear-gradient(135deg, #252862 0%, #EEE8D6 100%)",
                }}
              />
              <div
                className="w-32 h-px"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(37, 40, 98, 0.6), transparent)",
                }}
              />
            </div>

            <div className="relative inline-block">
              <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg bg-theme-navy theme-mint shadow-professional transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Show More Projects
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
