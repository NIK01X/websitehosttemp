import React from "react";
import { CometCard } from "../Animations/Aceternity/comet-card";
import ShinyText from "../Animations/ReactBits/ShinyText";
import { Spotlight } from "../Animations/Aceternity/spotlight-new";
import { cn } from "../lib/utils";
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
  return (
    <section
      id="service"
      className="relative  w-full min-h-screen bg-black py-20 px-4"
    >
      <div className="relative  h-full w-full items-center justify-center bg-black dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#222222_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#222222_1px,transparent_1px)]"
          )}
        />
        <div className="relative z-10 max-w-7xl mx-auto  flex-col items-center justify-center min-h-screen py-20">
          {/* First Row of Cards - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {serviceData.slice(0, 3).map((service, index) => (
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

          {/* Center Title - Desktop Only */}
          <div className="hidden lg:block relative mb-16 w-full flex justify-center">
            {/* Background "Our Services" Text */}
            <div className="relative flex items-center justify-center w-full">
              <Spotlight />
              <h2
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
                }}
              >
                <ShinyText text="OUR SERVICES" disabled={false} speed={3} />
              </h2>
            </div>
          </div>

          {/* Second Row of Cards - Desktop Only */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
            {serviceData.slice(3, 6).map((service, index) => (
              <div key={service.id} className="flex justify-center">
                <CometCard floatDelay={(index + 3) * 0.2}>
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

          {/* Mobile/Tablet Layout - Original Grid */}
          <div className="lg:hidden w-full flex flex-col items-center justify-center">
            {/* Section Header for Mobile/Tablet */}
            <div className="relative mb-16 w-full flex justify-center">
              <div className="relative flex items-center justify-center w-full">
                <Spotlight />
                <h2
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
                  <ShinyText text="OUR SERVICES" disabled={false} speed={3} />
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
