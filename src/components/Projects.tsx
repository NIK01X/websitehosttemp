import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "../Animations/ReactBits/ShinyText";
gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  year: string;
  scope: string[];
}

const projectsData: Project[] = [
  {
    id: "PRJ001",
    title: "Akhand Bharat",
    category: "Cultural Event",
    description:
      "A grand cultural celebration showcasing India's rich heritage through immersive experiences, traditional performances, and contemporary art installations.",
    images: [
      "/websitehosttemp/images/akhand/akhandone.jpg",
      "/websitehosttemp/images/akhand/akhand2.jpg",
      "/websitehosttemp/images/akhand/akhand3.jpg",
    ],
    client: "Cultural Foundation",
    year: "2024",
    scope: ["Event Design", "Production", "Cultural Programming"],
  },
  {
    id: "PRJ002",
    title: "Purvankara Launch",
    category: "Real Estate",
    description:
      "Premium property launch event featuring luxury brand positioning, exclusive presentations, and sophisticated networking experiences.",
    images: [
      "/websitehosttemp/images/purvankara/img.jpg",
      "/websitehosttemp/images/purvankara/img2.jpg",
      "/websitehosttemp/images/purvankara/IMG_5187.jpg",
      "/websitehosttemp/images/purvankara/IMG_5215.jpg",
    ],
    client: "Purvankara Limited",
    year: "2024",
    scope: ["Brand Launch", "Luxury Events", "Corporate Hospitality"],
  },
  {
    id: "PRJ003",
    title: "Tulah Fashion Show",
    category: "Fashion & Lifestyle",
    description:
      "High-end fashion runway show featuring cutting-edge designs, dramatic lighting, and immersive brand storytelling experiences.",
    images: [
      "/websitehosttemp/images/tulah/tulah.JPG",
      "/websitehosttemp/images/tulah/tulahtwo.jpg",
      "/websitehosttemp/images/tulah/tulahthree.jpg",
      "/websitehosttemp/images/tulah/tulah4.jpg",
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
      "/websitehosttemp/images/yougov/IMG_4432.jpg",
      "/websitehosttemp/images/yougov/IMG_4449.jpg",
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
      "/websitehosttemp/images/bakerdozen/img2.jpg",
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
      "/websitehosttemp/images/sleepzone/sz2.JPG",
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

    // Title animation
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 50 });

      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        },
      });
    }

    // Projects stagger animation
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, { opacity: 0, y: 80, scale: 0.9 });

        ScrollTrigger.create({
          trigger: ref,
          start: "top 85%",
          onEnter: () => {
            gsap.to(ref, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.1,
              ease: "power3.out",
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full min-h-screen bg-black py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              letterSpacing: "0.02em",
              lineHeight: "0.9",
            }}
          >
            OUR{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              <ShinyText text={"PROJECTS"} disabled={false} speed={3} />
              {/* PROJECTS */}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting memorable experiences across diverse industries with
            creativity, precision, and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="group relative bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/70 transition-all duration-500"
            >
              {/* Project Image Gallery */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <div className="grid grid-cols-2 gap-1 h-full">
                  {project.images.slice(0, 4).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`relative overflow-hidden ${
                        imgIndex === 0 && project.images.length === 1
                          ? "col-span-2"
                          : imgIndex === 0 && project.images.length > 2
                          ? "col-span-2"
                          : ""
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {imgIndex === 3 && project.images.length > 4 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                          <span className="text-white text-xl font-semibold">
                            +{project.images.length - 4}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <span className="text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 opacity-75">
                    #{project.id}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Scope Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.scope.map((item, scopeIndex) => (
                    <span
                      key={scopeIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="w-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                  View Project Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Ready to create something extraordinary together?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
    </section>
  );
};

export default Projects;
