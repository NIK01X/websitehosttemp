import React, { useRef, useEffect } from "react";
import { BackgroundBeams } from "../Animations/Aceternity/background-beams";
import ScrollVelocity from "../Animations/ReactBits/ScrollVelocity";
import AnimatedContent from "../Animations/ReactBits/AnimatedContent";
import Shuffle from "../Animations/ReactBits/Shuffle";
import GradientText from "../Animations/ReactBits/GradientText";
import { Timeline } from "../Animations/Aceternity/timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const About: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Optimized GSAP animation with batch processing
    const animations = gsap.timeline();

    sectionRefs.current.forEach((section, index) => {
      if (section) {
        // Determine animation direction based on index
        // 0: Who We Are (left to right) - x: -100 to 0
        // 1: What Makes Us Unique (right to left) - x: 100 to 0
        // 2: What We Deliver (left to right) - x: -100 to 0
        // 3: How We Work (right to left) - x: 100 to 0
        const isRightToLeft = index % 2 === 1; // odd indices fade from right to left
        const initialX = isRightToLeft ? 100 : -100;

        // Set initial state
        gsap.set(section, {
          opacity: 0,
          x: initialX,
          willChange: "transform, opacity",
        });

        // Create scroll trigger for each section with repeatable animations
        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // Always trigger on enter/leave
          onEnter: () => {
            // Reset to initial position first, then animate
            gsap.set(section, {
              opacity: 0,
              x: initialX,
              willChange: "transform, opacity",
            });
            gsap.to(section, {
              opacity: 1,
              x: 0,
              duration: 1.2,
              ease: "power2.out",
              delay: index * 0.1, // Stagger effect
              onComplete: () => {
                gsap.set(section, { willChange: "auto" }); // Performance optimization
              },
            });
          },
          onLeave: () => {
            gsap.to(section, {
              opacity: 0,
              x: initialX,
              duration: 0.6,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            // Reset to initial position first, then animate
            gsap.set(section, {
              opacity: 0,
              x: initialX,
              willChange: "transform, opacity",
            });
            gsap.to(section, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              onComplete: () => {
                gsap.set(section, { willChange: "auto" }); // Performance optimization
              },
            });
          },
          onLeaveBack: () => {
            gsap.to(section, {
              opacity: 0,
              x: initialX,
              duration: 0.6,
              ease: "power2.in",
            });
          },
        });
      }
    });

    // Cleanup function for optimization
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      animations.kill();
    };
  }, []);

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
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="mt-30 text-left space-y-8"
            >
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
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-5 md:mr-25">
                Founded in 2018, White Eventive has emerged as one of India’s
                leading experiential event agencies, celebrated for creating
                high-impact brand experiences.
              </p>
            </div>

            {/* What Makes Us Unique Section */}
            <div
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className="mt-20 md:mt-60 text-right space-y-8"
            >
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
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed  ml-5 md:ml-25">
                We are driven by precision, creativity, and cultural
                sensitivity, with a strong focus on luxury innovation and
                seamless execution. Our work is designed not just to impress but
                to transcend expectations.
              </p>
            </div>

            {/* What We Deliver Section */}
            <div
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className="mt-20 md:mt-60 text-left space-y-8"
            >
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
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed mr-5 md:mr-25">
                From grand-scale festivals to refined corporate summits and
                retail activations, we deliver tailor-made experiences across
                diverse spaces. Our solutions combine strategic insight, design
                excellence, and flawless operations.
              </p>
            </div>

            {/* How We Work Section */}
            <div
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className="mt-20 md:mt-60 text-right space-y-8"
            >
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
              <p className="mt-8 text-lg md:text-4xl text-gray-300 max-w-4xl mx-auto leading-relaxed ml-5 md:ml-25">
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
