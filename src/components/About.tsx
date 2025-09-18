import React from "react";
import { BackgroundBeams } from "../Animations/Aceternity/background-beams";
import ScrollVelocity from "../Animations/ReactBits/ScrollVelocity";
import AnimatedContent from "../Animations/ReactBits/AnimatedContent";
import Shuffle from "../Animations/ReactBits/Shuffle";
import GradientText from "../Animations/ReactBits/GradientText";
import { Timeline } from "../Animations/Aceternity/timeline";
const About: React.FC = () => {
  const data = [
    {
      title: "Live Experiences",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Production",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Activations",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Test text
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "MICE",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Launched our premium design system with advanced components and
            animations. Focus on user experience and modern web standards.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Implemented cutting-edge technologies including React 18,
            TypeScript, and modern CSS frameworks for optimal performance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
              alt="design system"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
              alt="analytics dashboard"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2036&q=80"
              alt="mobile design"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="data visualization"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mall Decor",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Started our journey with innovative web solutions and creative
            digital experiences. Building the foundation for next-generation web
            applications.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Modern responsive layouts
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Interactive animations
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Cross-platform compatibility
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Performance optimization
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Accessibility features
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="web development"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="coding workspace"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="creative design"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
              alt="team collaboration"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Branding",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Exciting roadmap ahead with AI integration, advanced animations, and
            next-generation user experiences. Building the future of web
            development.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Exploring new technologies like WebGL, WebAssembly, and progressive
            web apps to deliver cutting-edge solutions for our clients.
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 AI-powered design tools
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 3D web experiences
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Advanced micro-interactions
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Real-time collaboration tools
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              🚀 Voice-controlled interfaces
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80"
              alt="AI technology"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="3D visualization"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80"
              alt="future technology"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="innovation lab"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <section id="about">
      <section
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #000000)",
          width: "100%",
          position: "relative",
        }}
      >
        <div className="min-h-screen w-full relative flex flex-col items-center justify-start antialiased bg-gradient-to-b from-neutral-950 via-neutral-950/15 to-black py-20">
          <div className="max-w-6xl mx-auto px-8 space-y-12 md:space-y-20">
            {/* WHO WE ARE Section */}
            <div className="mt-30 text-left space-y-8">
              <GradientText
                colors={["#4E53C2", "#D9D9D9", "#4E53C2", "#D9D9D9", "#4E53C2"]}
                animationSpeed={8}
                showBorder={false}
                className=""
                style={{ justifyContent: "flex-start", margin: "0" }}
              >
                {/* <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4E53C2] via-[#D9D9D9] to-[#D9D9D9]  bg-clip-text text-transparent"> */}
                <h1 className="text-5xl md:text-8xl font-bold">Who We Are</h1>
              </GradientText>
              {/* <Shuffle
                text="Who We Are"
                shuffleDirection="right"
                duration={0.35}
                animationMode="evenodd"
                shuffleTimes={1}
                ease="power3.out"
                stagger={0.03}
                threshold={0.1}
                triggerOnce={true}
                triggerOnHover={true}
                respectReducedMotion={true}
                colorFrom="#4E53C2"
                colorTo="#4E53C2"
                loop={true}
                loopDelay={1.5}
              /> */}
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-25">
                Founded in 2018, White Eventive has emerged as one of India’s
                leading experiential event agencies, celebrated for creating
                high-impact brand experiences.
              </p>
            </div>

            {/* What Makes Us Unique Section */}
            <div className="mt-20 md:mt-60 text-right space-y-8">
              <GradientText
                colors={["#C24E50", "#D9D9D9", "#C24E50", "#D9D9D9", "#C24E50"]}
                animationSpeed={8}
                showBorder={false}
                className=""
                style={{
                  justifyContent: "flex-end",
                  margin: "0",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                <h2 className="text-5xl md:text-8xl font-bold">
                  What Makes Us Unique
                </h2>
              </GradientText>
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed  ml-25">
                We are driven by precision, creativity, and cultural
                sensitivity, with a strong focus on luxury innovation and
                seamless execution. Our work is designed not just to impress but
                to transcend expectations.
              </p>
            </div>

            {/* What We Deliver Section */}
            <div className="mt-20 md:mt-60 text-left space-y-8">
              <GradientText
                colors={["#C2844E", "#D9D9D9", "#C2844E", "#D9D9D9", "#C2844E"]}
                animationSpeed={8}
                showBorder={false}
                className=""
                style={{
                  justifyContent: "flex-start",
                  margin: "0",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                <h2 className="text-5xl md:text-8xl font-bold ">
                  What We Deliver
                </h2>{" "}
              </GradientText>
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-25">
                From grand-scale festivals to refined corporate summits and
                retail activations, we deliver tailor-made experiences across
                diverse spaces. Our solutions combine strategic insight, design
                excellence, and flawless operations.
              </p>
            </div>

            {/* How We Work Section */}
            <div className="mt-20 md:mt-60 text-right space-y-8">
              <GradientText
                colors={["#59C24E", "#D9D9D9", "#59C24E", "#D9D9D9", "#59C24E"]}
                animationSpeed={8}
                showBorder={false}
                className=""
                style={{
                  justifyContent: "flex-end",
                  margin: "0",
                  maxWidth: "100%",
                  width: "100%",
                }}
              >
                <h2 className="text-5xl md:text-8xl font-bold">How We Work</h2>
              </GradientText>
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed ml-25">
                We believe in emotion-led storytelling and disciplined
                execution. Every detail — from concept development and vendor
                management to on-ground delivery — is handled with passion,
                precision, and a commitment to perfection.
              </p>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <BackgroundBeams />
          </div>
        </div>
        {/* <section id="service">
          <div
            className="relative w-full overflow-hidden"
            style={{
              background: "black",
              maxWidth: "100vw",
              overflowX: "hidden",
            }}
          >
            <Timeline data={data} />
          </div>
        </section> */}
        {/* <div
          style={{
            // width: "100%",
            // height: "100%",
            position: "absolute",
            top: 2800,
            // background: "linear-gradient(to bottom, #EEE8D6,#EEE8D6)",
          }}
        >
          <ScrollVelocity
            texts={["WHITE EVENTIVE", "THE CREATIVE WAY TO PLAN"]}
            velocity={100}
            className="custom-scroll-text"
          />
        </div> */}
        {/* <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={3.5}
          ease="power2.out"
          initialOpacity={0}
          animateOpacity={true}
          scale={0.95}
          threshold={0.3}
          delay={0.2}
        >
          <div
            style={{
              position: "absolute",
              top: 1500,
              // top: 600,

              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 10,
            }}
          >
            <AnimatedContent
              distance={50}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power2.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.3}
              delay={0}
            >
              <p
                style={{
                  color: "#EEE8D6",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "clamp(1rem, 3vw, 2rem)",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  letterSpacing: "0.15em",
                  margin:
                    "clamp(2rem, 8vw, 8rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
                  pointerEvents: "none",
                }}
              >
                Professionally executed experiences for top-tier clients like
                Reliance Jio BP, Birla White, Jio World Garden, Sleepwell, and
                HDFC Life.
              </p>
            </AnimatedContent>
            <AnimatedContent
              distance={50}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power2.out"
              initialOpacity={0}
              animateOpacity={true}
              scale={0.95}
              threshold={0.3}
              delay={0}
            >
              <p
                style={{
                  color: "#EEE8D6",
                  fontFamily: "Aileron, sans-serif",
                  fontSize: "clamp(1rem, 3vw, 2rem)",
                  fontWeight: "600",
                  lineHeight: "1.5",
                  letterSpacing: "0.15em",
                  margin:
                    "clamp(1rem, 3vw, 3rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
                  pointerEvents: "none",
                }}
              >
                With a sharp focus on in-house design and production, the
                company ensures flawless execution with fast turnaround times,
                cost-effective solutions, and data-driven campaigns that
                maximize brand visibility.
              </p>
            </AnimatedContent>
 */}

        {/* </div>
        </AnimatedContent> */}
      </section>
    </section>
  );
};

export default About;

// import React from "react";
// import { BackgroundBeams } from "../Animations/Aceternity/background-beams";
// import ScrollVelocity from "../Animations/ReactBits/ScrollVelocity";
// import AnimatedContent from "../Animations/ReactBits/AnimatedContent";

// const About: React.FC = () => {
//   return (
//     <section id="about">
//       <section
//         style={{
//           height: "800vh",
//           background:
//             // "linear-gradient(to bottom, #15284B, #000000,#000000, #000000, #000000, #000000)",
//             "linear-gradient(to bottom, #000000, #000000,#000000, #000000, #000000, #000000)",

//           width: "100%",
//           position: "relative",
//         }}
//       >
//         {/* <div
//           className="eventive-text"
//           style={{
//             fontFamily: "Anvers, sans-serif",
//             color: "#EEE8D6",
//             fontSize: "clamp(2.5rem, 5vw, 5rem)",
//             fontWeight: "50",
//             lineHeight: "1",
//             margin: "0",
//             letterSpacing: "0.05em",
//             // transform: `translateY(${eventiveTranslateY}px) scale(${eventiveScale})`,
//             opacity: eventiveOpacity,
//             transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
//             // animation: "moveDown 0.8s ease-out 2.5s forwards",
//           }}
//         >
//           <h1>EVENTS</h1>
//         </div> */}

//         {/* Spacing Rectangle */}
//         {/* <div
//           style={{
//             width: "100%",
//             height: "160px",
//             backgroundColor: "black",
//             border: "2px solid black",
//           }}
//         /> */}

//         {/* <AnimatedContent
//           distance={200}
//           direction="vertical"
//           reverse={false}
//           duration={1}
//           ease="power2.out"
//           initialOpacity={0}
//           animateOpacity={true}
//           scale={0.95}
//           threshold={0.3}
//           delay={0.2}
//         > */}
//         <div className="h-[70rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//           <div className="max-w-2xl mx-auto p-4">
//             <div className="h-[15rem] w-[150rem] flex items-center justify-center px-4 text-center relative z-10">
//               {/* <TextHoverEffect text="WHO WE ARE" /> */}
//             </div>
//             {/* <div style={{ margin: "20px" }}>
//               <Masonry
//                 items={items2}
//                 ease="power3.out"
//                 duration={0.6}
//                 stagger={0.05}
//                 animateFrom="bottom"
//                 scaleOnHover={true}
//                 hoverScale={0.95}
//                 blurToFocus={true}
//                 colorShiftOnHover={true}
//               />
//             </div> */}
//           </div>

//           <div className="absolute inset-0 pointer-events-none">
//             <BackgroundBeams />
//           </div>
//         </div>

//         {/* </AnimatedContent> */}
//         {/* <div
//           style={{ position: "absolute", inset: 0, zIndex: 1, top: "300px" }}
//         >
//           <GridMotion items={items} />
//         </div> */}

//         {/* <section className="relative w-full h-screen">
//           <div className="pt-20 md:pt-32 lg:pt-40">
//             <ParallaxScroll
//               images={images}
//               // className="h-[60rem] sm:h-[70rem] md:h-[80rem] lg:h-[90rem]"
//               className="w-full h-full"
//             />
//           </div>
//         </section> */}
//         {/* <div className="pt-20 md:pt-32 lg:pt-40">
//           <section className="relative w-full h-[60rem] sm:h-[70rem] md:h-[80rem] lg:h-[90rem]">
//             <ParallaxScroll images={images} className="w-full h-full" />
//           </section>
//         </div> */}
//         {/* Fixed SparklesCore background - won't interfere with scroll */}
//         {/* <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
//           <SparklesCore
//             background="transparent"
//             minSize={0.3}
//             maxSize={0.8}
//             particleDensity={300}
//             className="w-full h-full"
//             particleColor="#FFFFFF"
//           />
//         </div> */}
//         {/* <div className="w-full flex flex-col items-center justify-center py-20 relative z-10">
//           <h1
//             style={{ color: "#EEE8D6", top: "15rem" }}
//             className="md:text-7xl text-3xl lg:text-1xl font-bold text-center text-white relative z-20 mb-8"
//           >
//             The Creative Way To Plan
//           </h1> */}
//         {/* <div */}
//         {/* className="w-[40rem] h-40 relative mx-auto" */}
//         {/* style={{ top: "15rem" }} */}
//         {/* > */}
//         {/* Gradients */}
//         {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" /> */}
//         {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" /> */}
//         {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" /> */}
//         {/* <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
//         {/* </div> */}
//         {/* </div> */}
//         <div
//           style={{
//             // width: "100%",
//             // height: "100%",
//             position: "absolute",
//             top: 1800,
//             // background: "linear-gradient(to bottom, #EEE8D6,#EEE8D6)",
//           }}
//         >
//           <ScrollVelocity
//             texts={["WHITE EVENTIVE", "THE CREATIVE WAY TO PLAN"]}
//             velocity={100}
//             className="custom-scroll-text"
//           />
//         </div>
//         <AnimatedContent
//           distance={200}
//           direction="vertical"
//           reverse={false}
//           duration={3.5}
//           ease="power2.out"
//           initialOpacity={0}
//           animateOpacity={true}
//           scale={0.95}
//           threshold={0.3}
//           delay={0.2}
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: 1500,
//               // top: 600,

//               left: 0,
//               width: "100%",
//               height: "100vh",
//               zIndex: 10,
//             }}
//           >
//             {/* Top overlapping rectangle */}

//             {/* <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,

//                 width: "100vw",
//                 height: "45vh",
//                 background:
//                   "linear-gradient(to bottom, #000000 0%, rgba(0, 0, 0, 0.8) 40%, transparent 100%)",
//                 zIndex: 15,
//                 pointerEvents: "none",
//                 // boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)",
//               }}
//             /> */}

//             {/* <DomeGallery /> */}
//             <AnimatedContent
//               distance={50}
//               direction="horizontal"
//               reverse={true}
//               duration={1.2}
//               ease="power2.out"
//               initialOpacity={0}
//               animateOpacity={true}
//               scale={0.95}
//               threshold={0.3}
//               delay={0}
//             >
//               <p
//                 style={{
//                   color: "#EEE8D6",
//                   fontFamily: "Aileron, sans-serif",
//                   fontSize: "clamp(1rem, 3vw, 2rem)",
//                   fontWeight: "600",
//                   lineHeight: "1.5",
//                   letterSpacing: "0.15em",
//                   margin:
//                     "clamp(2rem, 8vw, 8rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
//                   pointerEvents: "none",
//                 }}
//               >
//                 Professionally executed experiences for top-tier clients like
//                 Reliance Jio BP, Birla White, Jio World Garden, Sleepwell, and
//                 HDFC Life.
//               </p>
//             </AnimatedContent>
//             <AnimatedContent
//               distance={50}
//               direction="horizontal"
//               reverse={true}
//               duration={1.2}
//               ease="power2.out"
//               initialOpacity={0}
//               animateOpacity={true}
//               scale={0.95}
//               threshold={0.3}
//               delay={0}
//             >
//               <p
//                 style={{
//                   color: "#EEE8D6",
//                   fontFamily: "Aileron, sans-serif",
//                   fontSize: "clamp(1rem, 3vw, 2rem)",
//                   fontWeight: "600",
//                   lineHeight: "1.5",
//                   letterSpacing: "0.15em",
//                   margin:
//                     "clamp(1rem, 3vw, 3rem) clamp(1rem, 15vw, 15rem) 0 clamp(1rem, 8vw, 8rem)",
//                   pointerEvents: "none",
//                 }}
//               >
//                 With a sharp focus on in-house design and production, the
//                 company ensures flawless execution with fast turnaround times,
//                 cost-effective solutions, and data-driven campaigns that
//                 maximize brand visibility.
//               </p>
//             </AnimatedContent>
//             {/* Bottom overlapping rectangle */}
//             {/* <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100vw",
//                 height: "45vh",
//                 background:
//                   "linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0.8) 40%, transparent 100%)",
//                 zIndex: 15,
//                 pointerEvents: "none",
//                 // boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.8)",
//               }}
//             /> */}
//           </div>
//         </AnimatedContent>
//       </section>
//     </section>
//   );
// };

// export default About;
