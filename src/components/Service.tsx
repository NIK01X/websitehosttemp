import React, { useRef, useEffect } from "react";
import { CometCard } from "../shared/animations/effects/comet-card";
import ShinyText from "../shared/animations/ui/ShinyText";
import { Spotlight } from "../shared/animations/effects/spotlight-new";
import { cn } from "../shared/utils/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// 3D Flip Animation Styles
const flipAnimationStyles = `
  .flip-container {
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .flip-card {
    position: relative;
    width: 100%;
    height: 150vh;
    transform-style: preserve-3d;
    transition: transform 0.1s ease-out;
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  
  .flip-card-back {
    transform: rotateX(180deg);
  }
  
  /* White section animations */
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-scale {
    animation: fadeInScale 0.8s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideInFromBottom 0.6s ease-out forwards;
  }
  
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
`;
interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const serviceData: ServiceCardData[] = [
  {
    id: "SRV1",
    title: "Live Experiences",
    description: "Concert, Ips, Festivals, Brand Launches",
    image:
      "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Planning",
  },
  {
    id: "SRV2",
    title: "Production",
    description: "Set Design, AV, Staging, Logistics",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1289&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Corporate",
  },
  {
    id: "SRV3",
    title: "Activations",
    description: "On ground brand activations, Sampling, Pops Up",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Wedding",
  },
  {
    id: "SRV4",
    title: "MICE",
    description: "Meetings, Incentives, Conference, Exhibitions-globally",
    image:
      "https://images.unsplash.com/photo-1554048612-b6ebae896fb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Media",
  },
  {
    id: "SRV5",
    title: "Mall Decor",
    description: "Themed Installations, Festive Decor, Visual Merchandising",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Venue",
  },
  {
    id: "SRV6",
    title: "Branding",
    description: "Concept-led Branding, Space Design, Campaign, Web-App Design",
    image:
      "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0",
    category: "Catering",
  },
];

function Service() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const flipCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !contentRef.current)
      return;

    // Create scroll-triggered fisheye reduction animation
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 60%",
      end: "bottom 40%",
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress; // 0 to 1 as user scrolls through section

        // Reduce container fisheye effect
        if (containerRef.current) {
          const containerScale = 1.1 - progress * 0.12; // 1.1 to 0.98 (slightly faster)
          const containerRotation = 5 - progress * 5.5; // 5deg to -0.5deg (subtle overcorrect)
          gsap.set(containerRef.current, {
            transform: `perspective(800px) rotateX(${containerRotation}deg) scale3d(${containerScale}, ${containerScale}, 1)`,
          });
        }

        // Reduce content fisheye effect
        if (contentRef.current) {
          const contentScaleX = 1.15 - progress * 0.18; // 1.15 to 0.97 (slightly faster)
          const contentScaleY = 1.2 - progress * 0.23; // 1.2 to 0.97 (slightly faster)
          const contentRotation = -3 + progress * 3.5; // -3deg to 0.5deg (slight overcorrect)
          gsap.set(contentRef.current, {
            transform: `perspective(1200px) scale3d(${contentScaleX}, ${contentScaleY}, 1) rotateX(${contentRotation}deg)`,
            borderRadius: `${60 - progress * 60}px`, // 60px to 0px
            filter: `blur(0px) contrast(${1.08 - progress * 0.08}) brightness(${
              1.05 - progress * 0.05
            })`,
          });
        }

        // Reduce title fisheye effects
        titleRefs.current.forEach((titleRef) => {
          if (titleRef) {
            const titleScaleX = 1.1 - progress * 0.13; // 1.1 to 0.97 (slightly faster)
            const titleScaleY = 1.15 - progress * 0.18; // 1.15 to 0.97 (slightly faster)
            const titleRotation = -1 + progress * 1.2; // -1deg to 0.2deg (subtle overcorrect)
            gsap.set(titleRef, {
              transform: `perspective(800px) scale3d(${titleScaleX}, ${titleScaleY}, 1) rotateX(${titleRotation}deg)`,
              filter: `drop-shadow(0 ${20 - progress * 20}px ${
                40 - progress * 40
              }px rgba(0,0,0,${0.5 - progress * 0.3})) contrast(${
                1.05 - progress * 0.05
              })`,
              textShadow: `0 0 ${30 - progress * 30}px rgba(238, 232, 214, ${
                0.3 - progress * 0.3
              })`,
            });
          }
        });
      },
    });

    // Also animate cards to reduce their individual fisheye on scroll
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 0.8,
        onUpdate: (self) => {
          const progress = self.progress;
          const cardScaleX = 1.05 - progress * 0.07; // 1.05 to 0.98 (slightly faster)
          const cardScaleY = 1.08 - progress * 0.1; // 1.08 to 0.98 (slightly faster)

          if (card instanceof HTMLElement) {
            card.style.transform = `perspective(600px) scale3d(${cardScaleX}, ${cardScaleY}, 1) rotateX(0deg)`;
            card.style.filter = `drop-shadow(0 ${15 - progress * 15}px ${
              35 - progress * 35
            }px rgba(0,0,0,${0.4 - progress * 0.2})) contrast(${
              1.02 - progress * 0.02
            })`;
          }
        },
      });
    });

    // 3D Flip Animation on Scroll with Pin
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "bottom bottom", // Start flip when bottom of section reaches bottom of viewport
      end: "+=1000vh", // Pin for very slow, visible flip
      pin: true, // Pin the section during animation
      scrub: 2, // Slower scrub for smoother animation
      onUpdate: (self) => {
        const progress = self.progress;
        const rotationX = progress * 180; // 0 to 180 degrees

        if (flipCardRef.current) {
          flipCardRef.current.style.transform = `rotateX(${rotationX}deg)`;
        }

        // Trigger white section animations when flip is halfway
        if (progress > 0.5) {
          const whiteElements = document.querySelectorAll(
            ".flip-card-back .animate-fade-scale, .flip-card-back .animate-slide-up"
          );
          whiteElements.forEach((element) => {
            if (element instanceof HTMLElement) {
              element.style.opacity = "1";
            }
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: flipAnimationStyles }} />

      <section
        ref={sectionRef}
        id="service"
        className="relative w-full min-h-[150vh] bg-black overflow-hidden flip-container"
        style={{
          perspective: "1000px",
          perspectiveOrigin: "center center",
        }}
      >
        <div ref={flipCardRef} className="flip-card">
          {/* Front Side - Original Services Section */}
          <div className="flip-card-front bg-black py-20 px-4">
            <div
              ref={containerRef}
              className="relative h-full w-full items-center justify-center bg-black dark:bg-black"
              style={{
                transform:
                  "perspective(800px) rotateX(5deg) scale3d(1.1, 1.1, 1)",
                transformStyle: "preserve-3d",
                borderRadius: "50px",
                filter: "contrast(1.05) brightness(1.02)",
              }}
            >
              {/* Top fade overlay */}
              {/* <div
          className="absolute top-0 left-0 w-full h-32 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0,0,0,0.8) 30%, rgba(0, 0, 0, 0.53) 60%, rgba(0,0,0,0) 100%)",
          }}
        /> */}

              {/* Bottom fade overlay */}
              {/* <div
          className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
          }}
        /> */}

              <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:20px_20px]",
                  "[background-image:radial-gradient(#252525_1px,transparent_1px)]",
                  "dark:[background-image:radial-gradient(#222222_1px,transparent_1px)]"
                )}
              />
              <div
                ref={contentRef}
                className="relative z-10 max-w-7xl mx-auto flex-col items-center justify-start min-h-full py-10"
                style={{
                  transform:
                    "perspective(1200px) scale3d(1.15, 1.2, 1) rotateX(-3deg)",
                  transformStyle: "preserve-3d",
                  borderRadius: "60px",
                  background:
                    "radial-gradient(ellipse 120% 100% at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)",
                  filter: "blur(0px) contrast(1.08) brightness(1.05)",
                  boxShadow:
                    "inset 0 0 80px rgba(255, 255, 255, 0), 0 30px 60px rgba(0,0,0,0.5)",
                  clipPath: "ellipse(95% 90% at 50% 50%)",
                }}
              >
                {/* First Row of Cards - Desktop Only */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                  {serviceData.slice(0, 3).map((service, index) => (
                    <div key={service.id} className="flex justify-center">
                      <CometCard floatDelay={index * 0.2}>
                        <div
                          className="service-card w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)",
                            opacity: 1,
                            filter:
                              "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "perspective(600px) scale3d(1.15, 1.2, 1.1) rotateX(-2deg) rotateY(0deg)";
                            e.currentTarget.style.filter =
                              "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) contrast(1.05) brightness(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)";
                            e.currentTarget.style.filter =
                              "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)";
                          }}
                        >
                          <div className="mx-2 flex-1">
                            <div className="relative mt-2 aspect-[4/3] w-full">
                              <img
                                loading="lazy"
                                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                                alt={service.title}
                                src={service.image}
                                style={{
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                  opacity: 1,
                                }}
                              />
                              {/* Category Badge */}
                              {/* <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-medium text-white">
                            {service.category}
                          </span>
                        </div> */}
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="mt-4 flex flex-col space-y-2 p-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">
                                {service.title}
                              </h3>
                              {/* <div className="text-xs text-gray-400 opacity-75">
                          #{service.id}
                        </div> */}
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Call to Action */}
                            <div className="pt-2">
                              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      </CometCard>
                    </div>
                  ))}
                </div>

                {/* Center Title - Desktop Only */}
                <div className="hidden lg:block relative mb-8 w-full flex justify-center">
                  {/* Background "Our Services" Text */}
                  <div className="relative flex items-center justify-center w-full">
                    {/* <Spotlight /> */}

                    <h2
                      ref={(el) => {
                        titleRefs.current[0] = el;
                      }}
                      className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold opacity-90 text-center"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        color: "transparent",
                        letterSpacing: "0.02em",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        // WebkitTextStroke: "1px #EEE8D6",
                        lineHeight: "0.9",
                        padding: "0 1rem",
                        transform:
                          "perspective(800px) scale3d(1.1, 1.15, 1) rotateX(-1deg)",
                        transformStyle: "preserve-3d",
                        filter:
                          "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) contrast(1.05)",
                        textShadow: "0 0 30px rgba(238, 232, 214, 0.0)",
                      }}
                    >
                      <ShinyText
                        text={"OUR SERVICES"}
                        disabled={false}
                        speed={3}
                      />
                    </h2>
                  </div>
                </div>

                {/* Second Row of Cards - Desktop Only */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
                  {serviceData.slice(3, 6).map((service, index) => (
                    <div key={service.id} className="flex justify-center">
                      <CometCard floatDelay={(index + 3) * 0.2}>
                        <div
                          className="service-card w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4"
                          style={{
                            transformStyle: "preserve-3d",
                            transform:
                              "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)",
                            opacity: 1,
                            filter:
                              "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "perspective(600px) scale3d(1.15, 1.2, 1.1) rotateX(-2deg) rotateY(0deg)";
                            e.currentTarget.style.filter =
                              "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) contrast(1.05) brightness(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              "perspective(600px) scale3d(1.05, 1.08, 1) rotateX(0deg)";
                            e.currentTarget.style.filter =
                              "drop-shadow(0 15px 35px rgba(0,0,0,0.4)) contrast(1.02)";
                          }}
                        >
                          <div className="mx-2 flex-1">
                            <div className="relative mt-2 aspect-[4/3] w-full">
                              <img
                                loading="lazy"
                                className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                                alt={service.title}
                                src={service.image}
                                style={{
                                  boxShadow:
                                    "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                  opacity: 1,
                                }}
                              />
                              {/* Category Badge */}
                              {/* <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-xs font-medium text-white">
                            {service.category}
                          </span>
                        </div> */}
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="mt-4 flex flex-col space-y-2 p-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white">
                                {service.title}
                              </h3>
                              {/* <div className="text-xs text-gray-400 opacity-75">
                          #{service.id}
                        </div> */}
                            </div>
                            <p className="text-sm text-gray-300 leading-relaxed">
                              {service.description}
                            </p>

                            {/* Call to Action */}
                            <div className="pt-2">
                              <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm">
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      </CometCard>
                    </div>
                  ))}
                </div>

                {/* Mobile/Tablet Layout - Original Grid */}
                <div className="lg:hidden w-full flex flex-col items-center justify-center">
                  {/* Section Header for Mobile/Tablet */}
                  <div className="relative mb-16 w-full flex justify-center">
                    <div className="relative flex items-center justify-center w-full">
                      {/* <Spotlight /> */}

                      <h2
                        ref={(el) => {
                          titleRefs.current[1] = el;
                        }}
                        className="text-4xl sm:text-6xl md:text-7xl font-bold opacity-90 text-center"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          color: "transparent",
                          letterSpacing: "0.02em",
                          whiteSpace: "normal",
                          wordBreak: "break-word",
                          hyphens: "auto",
                          WebkitTextStroke: "1px #EEE8D6",
                          lineHeight: "0.9",
                          padding: "0 1rem",
                        }}
                      >
                        {/* <ShinyText text="OUR SERVICES" disabled={false} speed={3} /> */}
                      </h2>
                    </div>
                  </div>

                  {/* Services Grid for Mobile/Tablet */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl justify-items-center">
                    {serviceData.map((service, index) => (
                      <div key={service.id} className="flex justify-center">
                        <CometCard floatDelay={index * 0.2}>
                          <div
                            className="w-80 cursor-pointer flex flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 transition-all duration-300 hover:bg-[#2A2A2A] md:p-4"
                            style={{
                              transformStyle: "preserve-3d",
                              transform: "none",
                              opacity: 1,
                            }}
                          >
                            <div className="mx-2 flex-1">
                              <div className="relative mt-2 aspect-[4/3] w-full">
                                <img
                                  loading="lazy"
                                  className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover"
                                  alt={service.title}
                                  src={service.image}
                                  style={{
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
                                    opacity: 1,
                                  }}
                                />
                                {/* Category Badge */}
                                <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                                  <span className="text-xs font-medium text-white">
                                    {service.category}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Card Content */}
                            <div className="mt-4 flex flex-col space-y-2 p-4">
                              <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                  {service.title}
                                </h3>
                                <div className="text-xs text-gray-400 opacity-75">
                                  #{service.id}
                                </div>
                              </div>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {service.description}
                              </p>

                              {/* Call to Action */}
                              <div className="pt-2">
                                <button className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm">
                                  Learn More
                                </button>
                              </div>
                            </div>
                          </div>
                        </CometCard>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Service Excellence & Capabilities */}
          <div className="flip-card-back bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-8 py-16">
              {/* Excellence Header */}
              <div className="text-center mb-16">
                <div className="animate-fade-scale opacity-0 stagger-1">
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    WHY CHOOSE US
                  </h2>
                </div>
                <div className="animate-slide-up opacity-0 stagger-2">
                  <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                    Our comprehensive approach and unmatched expertise ensure
                    every event exceeds expectations
                  </p>
                </div>
              </div>

              {/* Service Capabilities Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* End-to-End Planning */}
                <div className="animate-slide-up opacity-0 stagger-3">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      End-to-End Planning
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      From concept to execution, we handle every detail with
                      precision and creativity.
                    </p>
                  </div>
                </div>

                {/* Premium Vendor Network */}
                <div className="animate-slide-up opacity-0 stagger-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      Premium Vendor Network
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Exclusive partnerships with top-tier vendors ensure
                      exceptional quality and service.
                    </p>
                  </div>
                </div>

                {/* 24/7 Support */}
                <div className="animate-slide-up opacity-0 stagger-5">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      24/7 Support
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Round-the-clock assistance ensures seamless execution and
                      peace of mind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div className="animate-slide-up opacity-0 stagger-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Events Delivered</div>
                </div>
                <div className="animate-slide-up opacity-0 stagger-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div className="animate-slide-up opacity-0 stagger-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Premium Partners</div>
                </div>
                <div className="animate-slide-up opacity-0 stagger-6 text-center">
                  <div className="text-4xl font-bold text-white mb-2">10+</div>
                  <div className="text-gray-400">Years Excellence</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center animate-slide-up opacity-0 stagger-7">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start Your Event Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Service };
