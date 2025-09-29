import React, { useRef, useEffect } from "react";
import { CometCard } from "../Animations/Aceternity/comet-card";
import ShinyText from "../Animations/ReactBits/ShinyText";
import { Spotlight } from "../Animations/Aceternity/spotlight-new";
import { cn } from "../lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "../Animations/ReactBits/ScrollFloat";

gsap.registerPlugin(ScrollTrigger);
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="service"
      className="relative w-full min-h-screen bg-black py-20 px-4 overflow-hidden"
      style={{
        perspective: "1000px",
        perspectiveOrigin: "center center",
      }}
    >
      <div
        ref={containerRef}
        className="relative h-full w-full items-center justify-center bg-black dark:bg-black"
        style={{
          transform: "perspective(800px) rotateX(5deg) scale3d(1.1, 1.1, 1)",
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
          className="relative z-10 max-w-7xl mx-auto flex-col items-center justify-center min-h-screen py-20"
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
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
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
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
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
          <div className="hidden lg:block relative mb-16 w-full flex justify-center">
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
                  WebkitTextStroke: "1px #EEE8D6",
                  lineHeight: "0.9",
                  padding: "0 1rem",
                  transform:
                    "perspective(800px) scale3d(1.1, 1.15, 1) rotateX(-1deg)",
                  transformStyle: "preserve-3d",
                  filter:
                    "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) contrast(1.05)",
                  textShadow: "0 0 30px rgba(238, 232, 214, 0.3)",
                }}
              >
                <ShinyText text={"OUR SERVICES"} disabled={false} speed={3} />
              </h2>
            </div>
          </div>

          {/* Second Row of Cards - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
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
                            boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
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
                              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px 0px",
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
    </section>
  );
}

export { Service };
